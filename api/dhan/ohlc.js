let ohlcCache = {};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, client-id, access-token');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const clientId = req.headers['client-id'] || process.env.DHAN_CLIENT_ID || '1104706516';
  const accessToken = req.headers['access-token'] || process.env.DHAN_ACCESS_TOKEN || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyUmVnaW9uIjoiUjEiLCJpc3MiOiJkaGFuIiwicGFydG5lcklkIjoiIiwiZXhwIjoxNzg5NTI5MTM0LCJpYXQiOjE3ODk0NDI3MzQsInRva2VuQ29uc3VtZXJUeXBlIjoiU0VMRiIsIndlYmhvb2tVcmwiOiIiLCJkaGFuQ2xpZW50SWQiOiIxMTA0NzA2NTE2In0.NETS6Mhr7IZjqDIFpvwWttOjNAo7_Pmz4KD6kVpIIdVOQL25a593j4UTfxgUgV_YJN0oSGxXu9xLkmFvwY5oJg';

  const bodyPayload = typeof req.body === 'string' ? req.body : JSON.stringify(req.body || { IDX_I: [13, 25, 51] });
  const cacheKey = bodyPayload;
  const now = Date.now();

  if (ohlcCache[cacheKey] && (now - ohlcCache[cacheKey].timestamp < 3000)) {
    return res.status(200).json(ohlcCache[cacheKey].data);
  }

  try {
    const response = await fetch('https://api.dhan.co/v2/marketfeed/ohlc', {
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
      ohlcCache[cacheKey] = { timestamp: now, data };
    }
    return res.status(response.status).json(data);
  } catch (error) {
    if (ohlcCache[cacheKey]) {
      return res.status(200).json(ohlcCache[cacheKey].data);
    }
    return res.status(500).json({ status: 'failed', error: error.message });
  }
}
