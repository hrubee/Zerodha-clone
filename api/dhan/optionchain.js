export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, client-id, access-token');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const clientId = req.headers['client-id'] || '';
  const accessToken = req.headers['access-token'] || '';

  if (!accessToken) {
    return res.status(401).json({ status: 'error', message: 'Missing Dhan access token' });
  }

  try {
    const bodyPayload = typeof req.body === 'string' ? req.body : JSON.stringify(req.body || {});
    const response = await fetch('https://api.dhan.co/v2/optionchain', {
      method: 'POST',
      headers: {
        'client-id': clientId,
        'access-token': accessToken,
        'Content-Type': 'application/json'
      },
      body: bodyPayload
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (error) {
    return res.status(500).json({ status: 'failed', error: error.message });
  }
}
