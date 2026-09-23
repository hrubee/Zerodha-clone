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
    const { apiKey, accessToken, instruments } = req.body || {};

    if (!apiKey || !accessToken) {
      return res.status(400).json({
        success: false,
        error: 'Missing required credentials: apiKey and accessToken are required.'
      });
    }

    const rawList = Array.isArray(instruments) ? instruments : (instruments ? [instruments] : []);
    const instrumentList = [...new Set(rawList.map(i => String(i).trim()).filter(Boolean))];
    if (instrumentList.length === 0) {
      return res.status(400).json({
        success: false,
        error: 'No instruments specified. Pass an array of instruments (e.g. ["NSE:NIFTY 50", "NFO:NIFTY24SEP23500CE"]).'
      });
    }

    const authHeader = `token ${apiKey.trim()}:${accessToken.trim()}`;

    // 1. Try batch fetch first (fastest)
    const queryParams = instrumentList.map(inst => `i=${encodeURIComponent(inst)}`).join('&');
    const kiteUrl = `https://api.kite.trade/quote?${queryParams}`;

    const kiteResp = await fetch(kiteUrl, {
      method: 'GET',
      headers: {
        'X-Kite-Version': '3',
        'Authorization': authHeader
      }
    });

    const data = await kiteResp.json();

    if (kiteResp.ok && data.status === 'success' && data.data) {
      return res.status(200).json({
        success: true,
        data: data.data
      });
    }

    // 2. If batch failed due to one invalid instrument candidate, query individual instruments in parallel
    const combinedData = {};
    const promises = instrumentList.map(async (inst) => {
      try {
        const singleUrl = `https://api.kite.trade/quote?i=${encodeURIComponent(inst)}`;
        const singleResp = await fetch(singleUrl, {
          method: 'GET',
          headers: {
            'X-Kite-Version': '3',
            'Authorization': authHeader
          }
        });
        const sData = await singleResp.json();
        if (singleResp.ok && sData.status === 'success' && sData.data) {
          Object.assign(combinedData, sData.data);
        }
      } catch (e) {
        // Ignore single symbol failure
      }
    });

    await Promise.allSettled(promises);

    if (Object.keys(combinedData).length > 0) {
      return res.status(200).json({
        success: true,
        data: combinedData
      });
    }

    // If nothing succeeded, return the original error
    return res.status(kiteResp.status >= 400 ? kiteResp.status : 400).json({
      success: false,
      error: data.message || 'Failed to fetch Kite quotes',
      errorType: data.error_type || 'GeneralException',
      details: data
    });
  } catch (error) {
    console.error('Error fetching Kite quotes:', error);
    return res.status(500).json({
      success: false,
      error: error.message || 'Internal server error while fetching Kite quotes'
    });
  }
}
