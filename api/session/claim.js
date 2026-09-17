import fs from 'fs';

const SESSION_TMP_FILE = '/tmp/zerodha_session_lock.json';
const SESSION_PASS = '2398';

function getSessionLock() {
  try {
    if (fs.existsSync(SESSION_TMP_FILE)) {
      const data = JSON.parse(fs.readFileSync(SESSION_TMP_FILE, 'utf8'));
      if (data && typeof data === 'object') return data;
    }
  } catch (e) {}
  return { activeSessionId: null, lastHeartbeat: 0, ip: null, claimedAt: 0 };
}

function saveSessionLock(lock) {
  try {
    fs.writeFileSync(SESSION_TMP_FILE, JSON.stringify(lock), 'utf8');
  } catch (e) {}
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method not allowed' });
  }

  const { sessionId, pin, passcode } = req.body || {};
  const enteredPass = String(pin || passcode || '').trim();

  if (!sessionId) {
    return res.status(400).json({ status: 'error', message: 'Missing sessionId' });
  }

  const now = Date.now() / 1000;
  const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';

  if (enteredPass === SESSION_PASS) {
    const lock = {
      activeSessionId: sessionId,
      lastHeartbeat: now,
      ip: clientIp,
      claimedAt: now
    };
    saveSessionLock(lock);

    return res.status(200).json({
      status: 'success',
      isOwner: true,
      sessionId: sessionId,
      message: 'Session claimed successfully on this device'
    });
  } else {
    return res.status(401).json({
      status: 'failed',
      isOwner: false,
      message: 'Invalid 4-digit PIN'
    });
  }
}
