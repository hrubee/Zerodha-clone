let inMemoryState = {
  activeTab: 'portfolio',
  totalPnl: '+15,57,474.75',
  positions: [
    {
      id: 'pos_0',
      symbol: 'NIFTY 24000 CE',
      exchange: 'NFO',
      side: 'BUY',
      entryPrice: '124.50',
      qty: '1500',
      avg: '124.50',
      ltp: '210.80',
      type: 'MIS',
      autoCalc: true,
      pnl: '+1,29,450.00',
      isGreen: true
    }
  ],
  indices: {
    nifty: { val: '24,852.15', change: '+142.30 (+0.58%)' },
    banknifty: { val: '51,320.40', change: '+320.10 (+0.63%)' },
    sensex: { val: '81,224.75', change: '+415.60 (+0.52%)' }
  },
  user: {
    fullName: 'Vedant Subhash Jamdhade',
    userId: 'GOX607',
    email: 'vjamdhade1217@gmail.com',
    funds: '₹35,50,000.00',
    fundsDetails: {
      availableMargin: '₹35,50,000.00',
      availableCash: '35,50,000.00',
      usedMargin: '0.00',
      openingBalance: '35,50,000.00'
    }
  }
};

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      if (body && typeof body === 'object') {
        inMemoryState = {
          ...inMemoryState,
          ...body,
          user: {
            ...inMemoryState.user,
            ...(body.user || {}),
            fundsDetails: {
              ...(inMemoryState.user ? inMemoryState.user.fundsDetails : {}),
              ...((body.user && body.user.fundsDetails) || {})
            }
          }
        };
      }
      return res.status(200).json({ success: true, updated: Date.now() });
    } catch (e) {
      return res.status(400).json({ error: 'Invalid JSON body' });
    }
  }

  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.status(200).json(inMemoryState);
}
