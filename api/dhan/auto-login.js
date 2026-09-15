export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
  }

  try {
    const { clientId = '1104706516', pin, totp } = req.body || {};

    if (!pin || !totp) {
      return res.status(400).json({ status: 'failed', message: 'PIN and TOTP are required' });
    }

    const url = `https://auth.dhan.co/app/generateAccessToken?dhanClientId=${encodeURIComponent(clientId)}&pin=${encodeURIComponent(pin)}&totp=${encodeURIComponent(totp)}`;
    const response = await fetch(url, {
      method: 'POST'
    });

    const data = await response.json();
    const token = data.accessToken || data.access_token || data.token || (data.data && data.data.accessToken);

    if (token) {
      return res.status(200).json({
        status: 'success',
        accessToken: token,
        message: 'Dhan token generated successfully!'
      });
    } else {
      return res.status(response.status || 400).json({
        status: 'failed',
        message: 'Failed to generate Dhan token',
        data
      });
    }
  } catch (error) {
    return res.status(500).json({ status: 'error', message: error.message });
  }
}
