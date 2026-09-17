import fs from 'fs';

const SESSION_TMP_FILE = '/tmp/zerodha_session_lock.json';

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

  const { sessionId } = req.body || {};
  if (!sessionId) {
    return res.status(400).json({ status: 'error', message: 'Missing sessionId' });
  }

  const now = Date.now() / 1000;
  const lock = getSessionLock();
  const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';

  // If no active session or existing session timed out (>10s idle)
  if (!lock.activeSessionId || (now - lock.lastHeartbeat > 10.0)) {
    lock.activeSessionId = sessionId;
    lock.lastHeartbeat = now;
    lock.ip = clientIp;
    saveSessionLock(lock);
    return res.status(200).json({
      status: 'active',
      isOwner: true,
      sessionId: sessionId,
      message: 'Session lock acquired'
    });
  }

  // If matching active session ID
  if (lock.activeSessionId === sessionId) {
    lock.lastHeartbeat = now;
    lock.ip = clientIp;
    saveSessionLock(lock);
    return res.status(200).json({
      status: 'active',
      isOwner: true,
      sessionId: sessionId
    });
  }

  // Conflict: Another session is currently active
  return res.status(200).json({
    status: 'conflict',
    isOwner: false,
    activeSessionId: lock.activeSessionId,
    message: 'session already active in other device, are you sure you want to use here'
  });
}
