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

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const now = Date.now() / 1000;
  const lock = getSessionLock();
  const isActive = Boolean(lock.activeSessionId && (now - lock.lastHeartbeat < 10.0));

  return res.status(200).json({
    hasActiveSession: isActive,
    activeSessionId: isActive ? lock.activeSessionId : null,
    lastHeartbeat: lock.lastHeartbeat
  });
}
