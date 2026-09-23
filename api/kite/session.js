import crypto from 'crypto';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed. Use POST.' });
  }

  try {
    const { apiKey, apiSecret, requestToken } = req.body || {};

    if (!apiKey || !apiSecret || !requestToken) {
      return res.status(400).json({
        success: false,
        error: 'Missing required parameters. apiKey, apiSecret, and requestToken are required.'
      });
    }

    const cleanApiKey = apiKey.trim();
    const cleanApiSecret = apiSecret.trim();
    const cleanRequestToken = requestToken.trim();

    // Kite Connect v3 checksum: SHA-256(api_key + request_token + api_secret)
    const rawData = cleanApiKey + cleanRequestToken + cleanApiSecret;
    const checksum = crypto.createHash('sha256').update(rawData).digest('hex');

    const params = new URLSearchParams();
    params.append('api_key', cleanApiKey);
    params.append('request_token', cleanRequestToken);
    params.append('checksum', checksum);

    const kiteResponse = await fetch('https://api.kite.trade/session/token', {
      method: 'POST',
      headers: {
        'X-Kite-Version': '3',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: params.toString()
    });

    const data = await kiteResponse.json();

    if (!kiteResponse.ok || data.status === 'error') {
      return res.status(kiteResponse.status >= 400 ? kiteResponse.status : 400).json({
        success: false,
        error: data.message || 'Failed to exchange Kite token',
        errorType: data.error_type || 'TokenException',
        details: data
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        accessToken: data.data.access_token,
        publicToken: data.data.public_token,
        refreshToken: data.data.refresh_token,
        userId: data.data.user_id,
        userName: data.data.user_name,
        email: data.data.email,
        loginTime: data.data.login_time,
        apiKey: cleanApiKey
      }
    });
  } catch (error) {
    console.error('Error exchanging Kite session token:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error while exchanging Kite session token'
    });
  }
}
