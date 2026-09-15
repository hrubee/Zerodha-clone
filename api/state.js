import fs from 'fs';
import path from 'path';

function loadInitialState() {
  try {
    const filePath = path.join(process.cwd(), 'app_state.json');
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const parsed = JSON.parse(content);
      if (parsed && typeof parsed === 'object') {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Error loading app_state.json in api/state.js:', e);
  }

  // Fallback defaults matching real-life Indian indices (Sensex 74k, Nifty 23.4k)
  return {
    user: {
      userId: 'ZP9413',
      email: 'surekha@zerodha.clone',
      funds: '₹14,00,000.00',
      fundsDetails: {
        availableMargin: '₹14,00,000.00',
        availableCash: '35,50,000.00',
        usedMargin: '0.00',
        openingBalance: '35,50,000.00'
      },
      fullName: 'Surekha Sandeep Gundre'
    },
    statusBar: {
      mode: 'live',
      customTime: '9:41',
      batteryLevel: 98,
      showBatteryPct: false,
      is24Hour: false
    },
    indices: {
      nifty: { val: '23,459.55', change: '+28.05 (+0.11%)', isGreen: true, prevClose: 23431.50 },
      banknifty: { val: '57,127.90', change: '+434.40 (+0.76%)', isGreen: true, prevClose: 56693.50 },
      sensex: { val: '74,855.81', change: '+91.58 (+0.12%)', isGreen: true, prevClose: 74764.23 },
      vix: { val: '13.82', change: '-0.45 (-3.15%)', isGreen: false }
    },
    totalPnl: '+3,34,563.34',
    holdingsCount: '1',
    positions: [
      {
        id: 'pos_0',
        symbol: 'SENSEX JUL 4600 CE',
        exchange: 'BFO',
        side: 'BUY',
        entryPrice: '0.00',
        qty: '0',
        avg: '0.00',
        ltp: '70,255.75',
        type: 'NRML',
        autoCalc: true,
        pnl: '+1,20,568.34',
        isGreen: true
      }
    ],
    dhan: {
      clientId: '1104706516',
      accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyUmVnaW9uIjoiUjEiLCJpc3MiOiJkaGFuIiwicGFydG5lcklkIjoiIiwiZXhwIjoxNzg5NTI5MTM0LCJpYXQiOjE3ODk0NDI3MzQsInRva2VuQ29uc3VtZXJUeXBlIjoiU0VMRiIsIndlYmhvb2tVcmwiOiIiLCJkaGFuQ2xpZW50SWQiOiIxMTA0NzA2NTE2In0.NETS6Mhr7IZjqDIFpvwWttOjNAo7_Pmz4KD6kVpIIdVOQL25a593j4UTfxgUgV_YJN0oSGxXu9xLkmFvwY5oJg',
      feedMode: 'auto',
      tickInterval: '1200',
      isTickerActive: true,
      marketHoursMode: 'auto'
    },
    verifiedPnl: {
      dateRange: "2026-07-01  —  2026-09-12",
      realisedPnl: "-1.18L",
      isRealisedGreen: false,
      unrealisedPnl: "-5.85k",
      isUnrealisedGreen: false,
      chargesTaxes: "37.66k",
      otherCreditsDebits: "-59",
      netRealisedPnl: "-1.55L",
      isNetGreen: false,
      lastUpdated: "2026-09-11",
      trades: [
        {
          id: "vtrade_0",
          symbol: "BANKNIFTY26AUG57700CE",
          qty: "120",
          realised: "+1,647.00 (+4.96%)",
          isGreen: true,
          buyAvg: "276.98",
          buyValue: "33,237.00"
        }
      ]
    }
  };
}

let inMemoryState = null;

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (!inMemoryState) {
    inMemoryState = loadInitialState();
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
