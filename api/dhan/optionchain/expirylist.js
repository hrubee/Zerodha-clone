export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, client-id, access-token');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const clientId = req.headers['client-id'] || process.env.DHAN_CLIENT_ID || '1104706516';
  const accessToken = req.headers['access-token'] || process.env.DHAN_ACCESS_TOKEN || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyUmVnaW9uIjoiUjEiLCJpc3MiOiJkaGFuIiwicGFydG5lcklkIjoiIiwiZXhwIjoxNzg5NzAxMTE1LCJpYXQiOjE3ODk2MTQ3MTUsInRva2VuQ29uc3VtZXJUeXBlIjoiU0VMRiIsIndlYmhvb2tVcmwiOiIiLCJkaGFuQ2xpZW50SWQiOiIxMTA0NzA2NTE2In0.8Pa-4nXMn4rBu0-UhMTWQY_g2rmUhCOblnYYhnWRSmsawqxh-4TKPdFj0hWcBKWVWTj1gmD6lCxhqftJi3sgeA';

  try {
    const bodyPayload = typeof req.body === 'string' ? req.body : JSON.stringify(req.body || {});
    const response = await fetch('https://api.dhan.co/v2/optionchain/expirylist', {
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
