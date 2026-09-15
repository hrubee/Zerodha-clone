let ltpCache = {};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, client-id, access-token');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const clientId = req.headers['client-id'] || '1104706516';
  const accessToken = req.headers['access-token'] || '';

  if (!accessToken) {
    return res.status(401).json({ status: 'error', message: 'Missing Dhan access token' });
  }

  const bodyPayload = typeof req.body === 'string' ? req.body : JSON.stringify(req.body || {});
  const cacheKey = bodyPayload;
  const now = Date.now();

  if (ltpCache[cacheKey] && (now - ltpCache[cacheKey].timestamp < 4000)) {
    return res.status(200).json(ltpCache[cacheKey].data);
  }

  try {
    const response = await fetch('https://api.dhan.co/v2/marketfeed/ltp', {
      method: 'POST',
      headers: {
        'client-id': clientId,
        'access-token': accessToken,
        'Content-Type': 'application/json'
      },
      body: bodyPayload
    });

    const data = await response.json();
    if (response.ok && data.status === 'success') {
      ltpCache[cacheKey] = { timestamp: now, data };
    }
    return res.status(response.status).json(data);
  } catch (error) {
    if (ltpCache[cacheKey]) {
      return res.status(200).json(ltpCache[cacheKey].data);
    }
    return res.status(500).json({ status: 'failed', error: error.message });
  }
}
