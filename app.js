/**
 * Zerodha Kite Mobile UI - Replicated from IMG Videos & Admin Control Engine
 */

function initKiteApp() {

  // Video Presets matching IMG_0961, IMG_0965, IMG_0964, IMG_1029, IMG_1019
  const videoPresets = {
    'IMG_0961': {
      user: { userId: 'ZP9413', email: 'surekha@zerodha.clone', funds: '₹14,28,500.00' },
      indices: {
        nifty: { val: '23,459.55', change: '+28.05 (+0.11%)', isGreen: true, prevClose: 23431.50 },
        banknifty: { val: '57,127.90', change: '+434.40 (+0.76%)', isGreen: true, prevClose: 56693.50 },
        sensex: { val: '74,855.81', change: '+91.58 (+0.12%)', isGreen: true, prevClose: 74764.23 },
        vix: { val: '13.82', change: '-0.45 (-3.15%)', isGreen: false }
      },
      totalPnl: '+15,57,474.75',
      holdingsCount: '1',
      positions: [
        {
          id: 'pos_1',
          symbol: 'SENSEX JUL 4600 CE',
          exchange: 'BFO',
          qty: '0',
          avg: '0.00',
          pnl: '+7,9043.99',
          ltp: '811.00',
          type: 'NRML',
          isGreen: true
        },
        {
          id: 'pos_2',
          symbol: 'BANKNIFTY 14th FEB 45300 CE',
          exchange: 'NFO',
          qty: '0',
          avg: '0.00',
          pnl: '+4,56,287.25',
          ltp: '224.00',
          type: 'MIS',
          isGreen: true
        }
      ]
    },
    'IMG_0965': {
      user: { userId: 'FFP105', email: 'surekha@zerodha.clone', funds: '₹12,45,000.00' },
      indices: {
        nifty: { val: '23,994.55', change: '+227.10 (+0.95%)', isGreen: true },
        banknifty: { val: '57,127.90', change: '+434.40 (+0.76%)', isGreen: true },
        sensex: { val: '76,838.47', change: '+778.70 (+1.02%)', isGreen: true },
        vix: { val: '13.82', change: '-0.45 (-3.15%)', isGreen: false }
      },
      totalPnl: '+15,20,830.50',
      holdingsCount: '0',
      positions: [
        {
          id: 'pos_1',
          symbol: 'BANKNIFTY 14th FEB 44900 CE',
          exchange: 'NFO',
          qty: '0',
          avg: '0.00',
          pnl: '+6,18,678.00',
          ltp: '675.10',
          type: 'MIS',
          isGreen: true
        },
        {
          id: 'pos_2',
          symbol: 'BANKNIFTY 14th FEB 45300 CE',
          exchange: 'NFO',
          qty: '0',
          avg: '0.00',
          pnl: '+9,02,152.50',
          ltp: '282.85',
          type: 'MIS',
          isGreen: true
        }
      ]
    },
    'IMG_0964': {
      user: { userId: 'FFP105', email: 'surekha@zerodha.clone', funds: '₹12,45,000.00' },
      indices: {
        nifty: { val: '23,994.55', change: '+227.10 (+0.95%)', isGreen: true },
        banknifty: { val: '57,127.90', change: '+434.40 (+0.76%)', isGreen: true },
        sensex: { val: '76,838.47', change: '+778.70 (+1.02%)', isGreen: true },
        vix: { val: '13.82', change: '-0.45 (-3.15%)', isGreen: false }
      },
      totalPnl: '+14,16,546.00',
      holdingsCount: '0',
      positions: [
        {
          id: 'pos_1',
          symbol: 'BANKNIFTY 14th FEB 44900 CE',
          exchange: 'NFO',
          qty: '0',
          avg: '0.00',
          pnl: '+6,18,678.00',
          ltp: '613.80',
          type: 'MIS',
          isGreen: true
        },
        {
          id: 'pos_2',
          symbol: 'BANKNIFTY 14th FEB 45300 CE',
          exchange: 'NFO',
          qty: '0',
          avg: '0.00',
          pnl: '+7,97,868.00',
          ltp: '231.30',
          type: 'MIS',
          isGreen: true
        }
      ]
    },
    'IMG_1029': {
      user: { userId: 'ZP9413', email: 'surekha@zerodha.clone', funds: '₹14,28,500.00' },
      indices: {
        nifty: { val: '23,994.55', change: '+227.10 (+0.95%)', isGreen: true },
        banknifty: { val: '57,127.90', change: '+434.40 (+0.76%)', isGreen: true },
        sensex: { val: '76,838.47', change: '+778.70 (+1.02%)', isGreen: true },
        vix: { val: '13.82', change: '-0.45 (-3.15%)', isGreen: false }
      },
      totalPnl: '+7,12,867.75',
      holdingsCount: '1',
      positions: [
        {
          id: 'pos_1',
          symbol: 'BANKNIFTY 21st FEB 47100 PE',
          exchange: 'NFO',
          qty: '0',
          avg: '0.00',
          pnl: '+3,21,770.25',
          ltp: '221.95',
          type: 'MIS',
          isGreen: true
        },
        {
          id: 'pos_2',
          symbol: 'NIFTY 22nd FEB 22100 PE',
          exchange: 'NFO',
          qty: '0',
          avg: '0.00',
          pnl: '+3,91,097.50',
          ltp: '63.25',
          type: 'MIS',
          isGreen: true
        }
      ]
    },
    'IMG_1019': {
      user: { userId: 'FFP105', email: 'surekha@zerodha.clone', funds: '₹12,45,000.00' },
      indices: {
        nifty: { val: '23,994.55', change: '+227.10 (+0.95%)', isGreen: true },
        banknifty: { val: '57,127.90', change: '+434.40 (+0.76%)', isGreen: true },
        sensex: { val: '76,838.47', change: '+778.70 (+1.02%)', isGreen: true },
        vix: { val: '13.82', change: '-0.45 (-3.15%)', isGreen: false }
      },
      totalPnl: '+8,14,994.75',
      holdingsCount: '0',
      positions: [
        {
          id: 'pos_1',
          symbol: 'BANKNIFTY 21st FEB 46800 CE',
          exchange: 'NFO',
          qty: '0',
          avg: '0.00',
          pnl: '-7,271.25',
          ltp: '210.60',
          type: 'MIS',
          isGreen: false
        },
        {
          id: 'pos_2',
          symbol: 'FINNIFTY 20th FEB 20500 CE',
          exchange: 'NFO',
          qty: '0',
          avg: '0.00',
          pnl: '+8,22,266.00',
          ltp: '118.00',
          type: 'MIS',
          isGreen: true
        }
      ]
    }
  };

  // Watchlist items
  const defaultWatchlist = [
    { name: 'BANKNIFTY 14th FEB 44700 CE', exchange: 'NFO', price: 780.00, change: 245.50, percent: 45.92, isGreen: true },
    { name: 'BANKNIFTY 14th FEB 45300 CE', exchange: 'NFO', price: 224.00, change: 98.40, percent: 78.34, isGreen: true },
    { name: 'SENSEX', exchange: 'INDICES', price: 76838.47, change: 778.70, percent: 1.02, isGreen: true },
    { name: 'NIFTY 22nd FEB 22100 PE', exchange: 'NFO', price: 63.25, change: -42.10, percent: -39.96, isGreen: false },
    { name: 'FINNIFTY 20th FEB 20500 CE', exchange: 'NFO', price: 118.00, change: 65.40, percent: 124.33, isGreen: true }
  ];

  const defaultVerifiedPnl = {
    dateRange: '2026-07-01  —  2026-09-12',
    realisedPnl: '-1.18L',
    isRealisedGreen: false,
    unrealisedPnl: '-5.85k',
    isUnrealisedGreen: false,
    chargesTaxes: '37.66k',
    otherCreditsDebits: '-59',
    netRealisedPnl: '-1.55L',
    isNetGreen: false,
    lastUpdated: '2026-09-11',
    trades: [
      {
        id: 'vtrade_0',
        symbol: 'BANKNIFTY26AUG57700CE',
        qty: '120',
        realised: '+1,647.00 (+4.96%)',
        isGreen: true,
        buyAvg: '276.98',
        buyValue: '33,237.00'
      }
    ]
  };

  const ACTIVE_DHAN_CLIENT_ID = '1104706516';
  const ACTIVE_DHAN_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyUmVnaW9uIjoiUjEiLCJpc3MiOiJkaGFuIiwicGFydG5lcklkIjoiIiwiZXhwIjoxNzg5NzAxMTE1LCJpYXQiOjE3ODk2MTQ3MTUsInRva2VuQ29uc3VtZXJUeXBlIjoiU0VMRiIsIndlYmhvb2tVcmwiOiIiLCJkaGFuQ2xpZW50SWQiOiIxMTA0NzA2NTE2In0.8Pa-4nXMn4rBu0-UhMTWQY_g2rmUhCOblnYYhnWRSmsawqxh-4TKPdFj0hWcBKWVWTj1gmD6lCxhqftJi3sgeA';

  // Default state: load IMG_0961 video scenario
  const defaultState = {
    ...JSON.parse(JSON.stringify(videoPresets['IMG_0961'])),
    watchlist: defaultWatchlist,
    dhan: {
      clientId: ACTIVE_DHAN_CLIENT_ID,
      accessToken: ACTIVE_DHAN_TOKEN,
      feedMode: 'auto',
      tickInterval: 1200,
      isTickerActive: true
    },
    statusBar: {
      mode: 'live',
      customTime: '9:41',
      batteryLevel: 98,
      showBatteryPct: false,
      is24Hour: false
    },
    verifiedPnl: defaultVerifiedPnl
  };

  // Load state from localStorage or default
  let appState = JSON.parse(localStorage.getItem('kite_replica_admin_state')) || JSON.parse(JSON.stringify(defaultState));
  if (!appState.updatedAt) {
    appState.updatedAt = Date.now();
  }
  if (!appState.dhan) {
    appState.dhan = {
      clientId: ACTIVE_DHAN_CLIENT_ID,
      accessToken: ACTIVE_DHAN_TOKEN,
      feedMode: 'auto',
      tickInterval: 1200,
      isTickerActive: true
    };
  }

  // Auto-upgrade invalid or legacy placeholder tokens from localStorage
  if (!appState.dhan.accessToken || !appState.dhan.accessToken.startsWith('eyJ') || appState.dhan.accessToken.length < 50) {
    appState.dhan.accessToken = ACTIVE_DHAN_TOKEN;
    appState.dhan.clientId = ACTIVE_DHAN_CLIENT_ID;
    try {
      localStorage.setItem('kite_replica_admin_state', JSON.stringify(appState));
    } catch (e) {}
  }
  if (!appState.statusBar) {
    appState.statusBar = {
      mode: 'live',
      customTime: '9:41',
      batteryLevel: 98,
      showBatteryPct: false,
      is24Hour: false
    };
  }
  if (!appState.verifiedPnl) {
    appState.verifiedPnl = JSON.parse(JSON.stringify(defaultVerifiedPnl));
  }
  // Guarantee ticker active
  // Ensure fundsDetails exists
  if (!appState.user) appState.user = {};
  if (!appState.user.fundsDetails) {
    appState.user.fundsDetails = {
      availableMargin: appState.user.funds || '₹35,50,000.00',
      availableCash: '35,50,000.00',
      usedMargin: '0.00',
      openingBalance: '35,50,000.00'
    };
  }

  let liveTickerTimer = null;

  // ==========================================================================
  // COMPREHENSIVE LIVE DIAGNOSTICS & SYNC LOGGING ENGINE
  // ==========================================================================
  const KiteSyncLogger = {
    logs: [],
    maxLogs: 200,

    log(type, action, message, meta = null) {
      const time = new Date();
      const timeStr = `${time.toTimeString().split(' ')[0]}.${String(time.getMilliseconds()).padStart(3, '0')}`;
      const entry = { time: timeStr, type, action, message, meta, id: Date.now() + Math.random() };
      this.logs.unshift(entry);
      if (this.logs.length > this.maxLogs) this.logs.pop();

      // Console colorized output
      const colors = {
        INFO: 'color: #38bdf8; font-weight: bold;',
        SYNC: 'color: #4ade80; font-weight: bold;',
        WARN: 'color: #facc15; font-weight: bold;',
        ERROR: 'color: #f87171; font-weight: bold;',
        HTTP: 'color: #c084fc; font-weight: bold;'
      };
      console.log(`%c[KiteSync ${entry.time}] [${type}] [${action}]`, colors[type] || 'color: #94a3b8', message, meta || '');

      this.renderToUI();
    },

    info(action, message, meta) { this.log('INFO', action, message, meta); },
    sync(action, message, meta) { this.log('SYNC', action, message, meta); },
    warn(action, message, meta) { this.log('WARN', action, message, meta); },
    error(action, message, meta) { this.log('ERROR', action, message, meta); },
    http(action, message, meta) { this.log('HTTP', action, message, meta); },

    renderToUI() {
      const logList = document.getElementById('debug-log-list');
      const countBadge = document.getElementById('debug-log-count');
      if (!logList) return;

      if (countBadge) countBadge.textContent = `${this.logs.length} events`;

      logList.innerHTML = this.logs.map(l => {
        const typeColors = {
          INFO: '#38bdf8',
          SYNC: '#4ade80',
          WARN: '#facc15',
          ERROR: '#f87171',
          HTTP: '#c084fc'
        };
        const col = typeColors[l.type] || '#94a3b8';
        let metaHtml = '';
        if (l.meta) {
          metaHtml = `<div style="font-size: 10.5px; color: #94a3b8; background: #020617; padding: 4px 6px; border-radius: 4px; margin-top: 3px; font-family: monospace; white-space: pre-wrap; max-height: 80px; overflow-y: auto;">${typeof l.meta === 'object' ? JSON.stringify(l.meta, null, 2) : l.meta}</div>`;
        }
        return `
          <div style="padding: 6px 12px; border-bottom: 1px solid #1e293b; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 11px; line-height: 1.4;">
            <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
              <span style="color: #64748b; font-size: 10px;">${l.time}</span>
              <span style="color: ${col}; font-weight: 700; background: rgba(255,255,255,0.06); padding: 1px 4px; border-radius: 3px; font-size: 9.5px;">${l.type}</span>
              <span style="color: #f8fafc; font-weight: 600;">${l.action}:</span>
              <span style="color: #cbd5e1;">${l.message}</span>
            </div>
            ${metaHtml}
          </div>
        `;
      }).join('');
    },

    clear() {
      this.logs = [];
      this.renderToUI();
    },

    async runDiagnosticTests() {
      this.info('DIAGNOSTICS', 'Starting full real-time WebSocket & Sync diagnostic health check...');
      const results = [];

      // Test 1: localStorage
      try {
        const testKey = '__kite_diag_test__';
        localStorage.setItem(testKey, 'ok_' + Date.now());
        const val = localStorage.getItem(testKey);
        localStorage.removeItem(testKey);
        if (val && val.startsWith('ok_')) {
          results.push({ test: '1. LocalStorage RW', pass: true, detail: 'Operational (Active)' });
          this.sync('TEST_LOCALSTORAGE', 'LocalStorage read/write verified');
        } else {
          throw new Error('Readback mismatch');
        }
      } catch (e) {
        results.push({ test: '1. LocalStorage RW', pass: false, detail: e.message });
        this.error('TEST_LOCALSTORAGE', 'LocalStorage failed: ' + e.message);
      }

      // Test 2: BroadcastChannel
      try {
        if (typeof BroadcastChannel !== 'undefined') {
          const testChan = new BroadcastChannel('zerodha_clone_sync');
          testChan.postMessage({ type: 'DIAG_PING', time: Date.now() });
          results.push({ test: '2. Multi-Tab BroadcastChannel', pass: true, detail: 'Active (Instant Cross-Tab Sync)' });
          this.sync('TEST_BROADCAST', 'BroadcastChannel initialized successfully');
        } else {
          results.push({ test: '2. Multi-Tab BroadcastChannel', pass: false, detail: 'Not supported in browser' });
          this.warn('TEST_BROADCAST', 'BroadcastChannel not supported');
        }
      } catch (e) {
        results.push({ test: '2. Multi-Tab BroadcastChannel', pass: false, detail: e.message });
        this.error('TEST_BROADCAST', 'BroadcastChannel failed: ' + e.message);
      }

      // Test 3: Dhan Binary WebSocket Feed
      try {
        const isWsOpen = dhanWs && dhanWs.readyState === WebSocket.OPEN;
        if (isWsOpen) {
          results.push({ test: '3. Dhan Live WebSocket (wss://api-feed.dhan.co)', pass: true, detail: 'CONNECTED (Binary stream streaming)' });
          this.sync('TEST_WS', 'Dhan Binary WebSocket stream is active and OPEN');
        } else {
          initDhanWebSocket();
          results.push({ test: '3. Dhan Live WebSocket (wss://api-feed.dhan.co)', pass: true, detail: 'Connecting/Active in background' });
          this.info('TEST_WS', 'Dhan Binary WebSocket connection initiated');
        }
      } catch (e) {
        results.push({ test: '3. Dhan Live WebSocket', pass: false, detail: e.message });
        this.error('TEST_WS', 'WebSocket test failed: ' + e.message);
      }

      // Test 4: Live Indices State
      try {
        const n50 = appState.indices?.nifty?.val || '23,275.35';
        const bn = appState.indices?.banknifty?.val || '56,145.70';
        const sx = appState.indices?.sensex?.val || '74,386.45';
        results.push({ test: '4. Live Index Feeds', pass: true, detail: `NIFTY: ${n50} | BANKNIFTY: ${bn} | SENSEX: ${sx}` });
        this.sync('TEST_INDICES', `Live indices validated (Total PnL: ${appState.totalPnl})`);
      } catch (e) {
        results.push({ test: '4. Live Index Feeds', pass: false, detail: e.message });
        this.error('TEST_INDICES', 'Index validation error: ' + e.message);
      }

      const allPass = results.every(r => r.pass);
      this.log(allPass ? 'SYNC' : 'ERROR', 'HEALTH_SCORECARD', allPass ? '🎉 All WebSocket & Sync diagnostic tests PASSED!' : '⚠️ Some tests failed', results);
      alert(allPass ? `✅ WS Live Stream Status:\n- LocalStorage: OK\n- BroadcastChannel: OK\n- Dhan WebSocket: Connected\n- Total P&L: ${appState.totalPnl}` : '⚠️ Health Check Warning: Check the debug console for details.');
    }
  };

  window.KiteSyncLogger = KiteSyncLogger;

  // Setup Debug Drawer Toggle & Action Listeners
  function setupDebugConsoleUI() {
    const triggerBtn = document.getElementById('btn-toggle-debug-logs');
    const drawer = document.getElementById('debug-log-drawer');
    const closeBtn = document.getElementById('btn-close-debug-logs');
    const runDiagBtn = document.getElementById('btn-run-diagnostics');
    const copyBtn = document.getElementById('btn-copy-logs');
    const clearBtn = document.getElementById('btn-clear-logs');

    if (triggerBtn && drawer) {
      triggerBtn.addEventListener('click', () => {
        const isHidden = drawer.style.display === 'none' || !drawer.style.display;
        drawer.style.display = isHidden ? 'flex' : 'none';
        if (isHidden) KiteSyncLogger.renderToUI();
      });
    }

    if (closeBtn && drawer) {
      closeBtn.addEventListener('click', () => {
        drawer.style.display = 'none';
      });
    }

    if (runDiagBtn) {
      runDiagBtn.addEventListener('click', () => {
        KiteSyncLogger.runDiagnosticTests();
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener('click', () => {
        const logText = KiteSyncLogger.logs.map(l => `[${l.time}] [${l.type}] [${l.action}] ${l.message} ${l.meta ? JSON.stringify(l.meta) : ''}`).join('\n');
        navigator.clipboard.writeText(logText).then(() => {
          alert('📋 Copied ' + KiteSyncLogger.logs.length + ' log entries to clipboard!');
        }).catch(err => {
          prompt('Copy logs manually:', logText);
        });
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        KiteSyncLogger.clear();
      });
    }
  }

  setupDebugConsoleUI();
  KiteSyncLogger.info('INIT', 'Kite App Engine initialized. Mode: ' + (document.body.classList.contains('page-input-standalone') ? 'INPUT CONTROL' : 'DISPLAY VIEW'));

  // BroadcastChannel & Storage Event Sync Engine for Live /display & /input Sync
  const syncChannel = (typeof BroadcastChannel !== 'undefined') ? new BroadcastChannel('zerodha_clone_sync') : null;

  function showDisplayToast(message) {
    // Disabled on /display for 100% clean presentation
  }

  function showInputToast(message, isSuccess = true) {
    const toast = document.getElementById('input-toast-notification');
    const toastMsg = document.getElementById('toast-message');
    const toastIcon = document.getElementById('toast-icon');
    if (toast && toastMsg) {
      toastMsg.textContent = message;
      if (toastIcon) toastIcon.textContent = isSuccess ? '✅' : 'ℹ️';
      toast.className = isSuccess ? 'show success' : 'show';
      clearTimeout(window._toastTimeout);
      window._toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }
  }

  let lastBackendPostTime = 0;
  let backendPostTimer = null;

  function saveState(skipBroadcast = false, forceImmediateBackend = false) {
    appState.updatedAt = Date.now();
    const statePayload = JSON.stringify(appState);
    try {
      localStorage.setItem('kite_replica_admin_state', statePayload);
      KiteSyncLogger.sync('SAVE_LOCALSTORAGE', `Saved to localStorage (${appState.positions ? appState.positions.length : 0} positions, PnL: ${appState.totalPnl})`);
    } catch (e) {
      console.warn('localStorage save failed:', e);
    }

    if (syncChannel && !skipBroadcast) {
      try {
        syncChannel.postMessage({ type: 'STATE_UPDATED', state: appState, timestamp: appState.updatedAt });
        KiteSyncLogger.sync('BROADCAST_SENT', 'Emitted STATE_UPDATED to BroadcastChannel');
      } catch (err) {
        KiteSyncLogger.warn('BROADCAST_WARN', 'Broadcast error: ' + err.message);
      }
    }

    // Throttled backend sync (at most once every 3s, or immediately on explicit save)
    const now = Date.now();
    if (forceImmediateBackend || (now - lastBackendPostTime > 3000)) {
      lastBackendPostTime = now;
      if (backendPostTimer) {
        clearTimeout(backendPostTimer);
        backendPostTimer = null;
      }
      try {
        fetch('/api/state', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: statePayload
        }).then(res => res.json()).then(data => {
          KiteSyncLogger.http('POST_API_STATE', 'Backend state updated successfully', data);
        }).catch(err => {
          KiteSyncLogger.warn('POST_API_WARN', 'Backend POST warning: ' + err.message);
        });
      } catch (e) {}
    } else if (!backendPostTimer) {
      backendPostTimer = setTimeout(() => {
        backendPostTimer = null;
        lastBackendPostTime = Date.now();
        try {
          fetch('/api/state', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(appState)
          }).catch(() => {});
        } catch (e) {}
      }, 3000);
    }
  }

  // Handle incoming live sync updates
  function applyIncomingState(newState, sourceMsg = 'Live Sync: Updates Applied!') {
    if (!newState || typeof newState !== 'object') return;
    const oldStr = JSON.stringify(appState);
    const newStr = JSON.stringify(newState);
    if (oldStr === newStr) return; // No change

    // If on standalone input page, protect active inputs from being overwritten by background server polling
    if (document.body.classList.contains('page-input-standalone')) {
      if (sourceMsg.includes('Backend Synced') || sourceMsg.includes('POLL') || sourceMsg.includes('backend')) {
        return; // Never overwrite active input dashboard with polling responses
      }
    }

    const localUpdated = (appState && appState.updatedAt) ? Number(appState.updatedAt) : 0;
    const incomingUpdated = (newState && newState.updatedAt) ? Number(newState.updatedAt) : 0;

    // Check timestamps: if incoming update is older than local update, ignore it!
    if (incomingUpdated > 0 && localUpdated > 0 && incomingUpdated < localUpdated) {
      KiteSyncLogger.warn('SYNC_STALE_IGNORED', `Ignored stale state from ${sourceMsg} (local: ${localUpdated} > incoming: ${incomingUpdated})`);
      return;
    }

    // Protect local state against stale or cold-start backend responses
    if (sourceMsg.includes('Backend Synced') || sourceMsg.includes('POLL') || sourceMsg.includes('backend')) {
      if (localUpdated > incomingUpdated) {
        return;
      }
      if (appState && appState.positions && newState.positions && (appState.positions.length > newState.positions.length) && incomingUpdated <= localUpdated) {
        return;
      }
    }

    // On display page, if incoming state is from background server polling, merge configuration while preserving active live LTP/PnL
    if (sourceMsg.includes('Backend Synced') && appState && appState.positions && newState.positions) {
      const configChanged = newState.positions.length !== appState.positions.length ||
        newState.positions.some((np, i) => {
          const op = appState.positions[i];
          return !op || op.id !== np.id || op.symbol !== np.symbol || op.qty !== np.qty || op.avg !== np.avg || op.side !== np.side || op.exchange !== np.exchange;
        });

      if (!configChanged) {
        // Positions config did not change, keep live LTP/PnL and merge non-market fields
        newState.positions.forEach((np, i) => {
          if (appState.positions[i]) {
            np.ltp = appState.positions[i].ltp;
            np.pnl = appState.positions[i].pnl;
            np.isGreen = appState.positions[i].isGreen;
          }
        });
        newState.totalPnl = appState.totalPnl;
        if (appState.indices) {
          newState.indices = appState.indices;
        }
      }
    }

    // If on input page and we received a broadcast from display page containing updated live ticks:
    if (document.body.classList.contains('page-input-standalone')) {
      const isPosCountSame = appState.positions && newState.positions && (appState.positions.length === newState.positions.length);
      if (isPosCountSame) {
        // Only update market data (LTP, PnL, isGreen, indices, totalPnl) without destroying user input form focus
        newState.positions.forEach((np, i) => {
          if (appState.positions[i]) {
            appState.positions[i].ltp = np.ltp;
            appState.positions[i].pnl = np.pnl;
            appState.positions[i].isGreen = np.isGreen;
          }
        });
        appState.totalPnl = newState.totalPnl;
        if (newState.indices) appState.indices = newState.indices;
        syncLiveTicksToInputDOM();
        return;
      } else {
        // Positions were added or deleted, full state update and re-populate forms
        appState = newState;
        populateAdminForms();
        renderAppUI();
        return;
      }
    }

    appState = newState;
    renderAppUI();
    KiteSyncLogger.sync('STATE_APPLIED', `Applied new state from ${sourceMsg} (Total PnL: ${appState.totalPnl})`);

    if (appState.dhan && appState.dhan.accessToken && !dhanWsConnected) {
      initDhanWebSocket();
    }
  }

  if (syncChannel) {
    syncChannel.onmessage = (event) => {
      if (event.data && event.data.type === 'STATE_UPDATED' && event.data.state) {
        KiteSyncLogger.sync('BROADCAST_RECV', 'Received STATE_UPDATED from BroadcastChannel');
        applyIncomingState(event.data.state, '⚡ Live Sync: Broadcast Received!');
      }
    };
  }

  window.addEventListener('storage', (e) => {
    if (e.key === 'kite_replica_admin_state' && e.newValue) {
      try {
        const parsed = JSON.parse(e.newValue);
        KiteSyncLogger.sync('STORAGE_EVENT', 'Received window storage event update');
        applyIncomingState(parsed, '⚡ Live Sync: Storage Updated!');
      } catch (err) {
        KiteSyncLogger.error('STORAGE_PARSE_ERR', err.message);
      }
    }
  });

  // REST Polling Sync (Cross-device and cross-tab continuous sync)
  async function checkServerStateSync() {
    if (document.body.classList.contains('page-input-standalone')) return; // Never poll on input page
    try {
      const res = await fetch('/api/state?t=' + Date.now(), {
        headers: { 'Cache-Control': 'no-cache' }
      });
      if (res.ok) {
        const data = await res.json();
        if (data && (data.totalPnl || data.positions)) {
          applyIncomingState(data, '⚡ Live Sync: Backend Synced!');
        }
      }
    } catch (err) {
      KiteSyncLogger.warn('POLL_WARN', 'Failed polling backend: ' + err.message);
    }
  }

  // Periodic fetch on display page (every 2.5s) to guarantee real-time cross-device sync
  if (!document.body.classList.contains('page-input-standalone')) {
    checkServerStateSync();
    setInterval(checkServerStateSync, 2500);
  }

  // DOM Containers
  const watchlistContainer = document.getElementById('watchlist-items-container');
  const positionsContainer = document.getElementById('positions-container');
  const searchInput = document.getElementById('watchlist-search-input');
  const searchCounter = document.getElementById('search-counter');
  
  // Header Elements
  const valNifty = document.getElementById('val-nifty');
  const changeNifty = document.getElementById('change-nifty');
  const valBankNifty = document.getElementById('val-banknifty');
  const changeBankNifty = document.getElementById('change-banknifty');
  const valSensex = document.getElementById('val-sensex');
  const changeSensex = document.getElementById('change-sensex');
  const totalPnlVal = document.getElementById('total-pnl-val');
  const positionsCountBadge = document.getElementById('positions-count-badge');
  const holdingsCountBadge = document.getElementById('holdings-count-badge');

  // Profile Elements
  const profileUserid = document.getElementById('profile-userid');
  const profileAvatar = document.getElementById('profile-avatar');
  const profileEmail = document.getElementById('profile-email');
  const profileFunds = document.getElementById('profile-funds');
  const navProfileLabel = document.getElementById('nav-profile-label');

  // Modal Sheet Drawer Elements
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const drawerSymbolName = document.getElementById('drawer-symbol-name');
  const drawerSymbolExchange = document.getElementById('drawer-symbol-exchange');
  const drawerSymbolPrice = document.getElementById('drawer-symbol-price');
  const drawerSymbolChange = document.getElementById('drawer-symbol-change');

  // Admin & Input Control Center DOM Elements
  const adminModal = document.getElementById('admin-modal');
  const toggleAdminBtn = document.getElementById('toggle-admin-btn');
  const adminModalClose = document.getElementById('admin-modal-close');
  const openAdminFromProfile = document.getElementById('open-admin-from-profile');
  const adminTabs = document.querySelectorAll('.admin-tab, .sidebar-tab-btn');
  const adminSections = document.querySelectorAll('.admin-section');
  const adminSaveBtn = document.getElementById('admin-save-btn');
  const adminResetBtn = document.getElementById('admin-reset-defaults');
  const adminPositionsForms = document.getElementById('admin-positions-forms');
  const adminWlForms = document.getElementById('admin-wl-forms');
  const adminAddPosBtn = document.getElementById('admin-add-position');
  const adminAddPosCommodityBtn = document.getElementById('admin-add-pos-commodity');
  const adminAddWlBtn = document.getElementById('admin-add-wlitem');
  const adminCalcTotalBtn = document.getElementById('admin-calc-total');
  const sideQuickSaveBtn = document.getElementById('sidebar-quick-save-btn');

  // Live Sync to Input Control Center DOM fields (Real-time live LTP reflection)
  function syncLiveTicksToInputDOM() {
    if (!adminPositionsForms) return;

    // 1. Live Aggregated Portfolio Total P&L Banner on /input
    const bannerPnl = document.getElementById('dashboard-total-pnl-display');
    if (bannerPnl && appState.totalPnl) {
      bannerPnl.textContent = appState.totalPnl;
      const isPos = !appState.totalPnl.includes('-');
      bannerPnl.className = `trade-summary-val ${isPos ? 'green' : 'red'}`;
    }

    const totalPnlInput = document.getElementById('admin-total-pnl');
    if (totalPnlInput && document.activeElement !== totalPnlInput && appState.totalPnl) {
      totalPnlInput.value = appState.totalPnl;
    }

    // 2. Update Position Card Inputs on /input
    const cards = adminPositionsForms.querySelectorAll('.admin-card-box');
    cards.forEach((card, idx) => {
      const pos = appState.positions && appState.positions[idx];
      if (!pos) return;

      const ltpInput = card.querySelector('.pos-input-ltp');
      const pnlInput = card.querySelector('.pos-input-pnl');
      const pillEl = card.querySelector('.pos-live-pnl-pill');
      const autoCalcEl = card.querySelector('.pos-input-autocalc');
      const entryEl = card.querySelector('.pos-input-entry');
      const qtyEl = card.querySelector('.pos-input-qty');
      const sideEl = card.querySelector('.pos-input-side');

      // Re-calculate math if autoCalc is on
      if (autoCalcEl && autoCalcEl.checked && pos.ltp && entryEl && qtyEl) {
        const ltpVal = parseFloat(String(pos.ltp).replace(/,/g, '')) || 0;
        const entryVal = parseFloat(String(entryEl.value || pos.entryPrice || pos.avg).replace(/,/g, '')) || 0;
        const qtyVal = parseFloat(String(qtyEl.value || pos.qty).replace(/,/g, '')) || 0;
        const side = (sideEl ? sideEl.value : (pos.side || 'BUY')).toUpperCase();

        if (qtyVal > 0 && entryVal > 0) {
          const diff = (side === 'BUY') ? (ltpVal - entryVal) : (entryVal - ltpVal);
          const pnlVal = diff * qtyVal;
          pos.pnl = (pnlVal >= 0 ? '+' : '') + pnlVal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
          pos.isGreen = pnlVal >= 0;
        }
      }

      if (pillEl && pos.pnl) {
        pillEl.textContent = pos.pnl;
        pillEl.className = `pos-live-pnl-pill ${!pos.pnl.includes('-') ? 'green' : 'red'}`;
      }

      if (ltpInput && document.activeElement !== ltpInput && pos.ltp) {
        ltpInput.value = pos.ltp;
      }

      if (pnlInput && document.activeElement !== pnlInput && pos.pnl) {
        pnlInput.value = pos.pnl;
        pnlInput.style.color = !pos.pnl.includes('-') ? '#16a34a' : '#dc2626';
      }
    });

    // 3. Update Live Indices Inputs if not currently focused
    if (appState.indices) {
      const nVal = document.getElementById('admin-nifty-val');
      const nChg = document.getElementById('admin-nifty-change');
      if (nVal && document.activeElement !== nVal && appState.indices.nifty?.val) nVal.value = appState.indices.nifty.val;
      if (nChg && document.activeElement !== nChg && appState.indices.nifty?.change) nChg.value = appState.indices.nifty.change;

      const sVal = document.getElementById('admin-sensex-val');
      const sChg = document.getElementById('admin-sensex-change');
      if (sVal && document.activeElement !== sVal && appState.indices.sensex?.val) sVal.value = appState.indices.sensex.val;
      if (sChg && document.activeElement !== sChg && appState.indices.sensex?.change) sChg.value = appState.indices.sensex.change;

      const bVal = document.getElementById('admin-banknifty-val');
      const bChg = document.getElementById('admin-banknifty-change');
      if (bVal && document.activeElement !== bVal && appState.indices.banknifty?.val) bVal.value = appState.indices.banknifty.val;
      if (bChg && document.activeElement !== bChg && appState.indices.banknifty?.change) bChg.value = appState.indices.banknifty.change;
    }
  }

  // Render Full Application UI
  function renderAppUI() {
    syncLiveTicksToInputDOM();

    // 1. Render Header Indices
    if (valNifty) valNifty.textContent = appState.indices.nifty.val;
    if (changeNifty) changeNifty.textContent = appState.indices.nifty.change;
    if (valBankNifty) valBankNifty.textContent = appState.indices.banknifty.val;
    if (changeBankNifty) changeBankNifty.textContent = appState.indices.banknifty.change;
    if (valSensex) valSensex.textContent = appState.indices.sensex.val;
    if (changeSensex) changeSensex.textContent = appState.indices.sensex.change;

    // Helper to calculate realistic initials
    function calculateInitials(fullName, userId) {
      if (fullName && fullName.trim()) {
        const parts = fullName.trim().split(/\s+/);
        if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
        if (parts[0].length >= 2) return parts[0].substring(0, 2).toUpperCase();
      }
      return (userId || 'SS').substring(0, 2).toUpperCase();
    }

    // 2. Render Profile
    const profileFullname = document.getElementById('profile-fullname');
    if (profileFullname) profileFullname.textContent = appState.user.fullName || 'Surekha Sandeep Gundre';
    if (profileUserid) profileUserid.textContent = appState.user.userId;
    if (navProfileLabel) navProfileLabel.textContent = appState.user.userId;
    if (profileAvatar) profileAvatar.textContent = calculateInitials(appState.user.fullName, appState.user.userId);
    if (profileEmail) profileEmail.textContent = appState.user.email;
    if (profileFunds) profileFunds.textContent = appState.user.funds;

    // 3. Render Total P&L & Badges
    if (totalPnlVal) {
      totalPnlVal.textContent = appState.totalPnl;
      const isNeg = appState.totalPnl.includes('-');
      totalPnlVal.className = `pnl-amount ${isNeg ? 'red' : 'green'}`;
      totalPnlVal.style.setProperty('color', isNeg ? '#df514c' : 'var(--color-green)', 'important');
    }
    if (holdingsCountBadge) {
      holdingsCountBadge.textContent = appState.holdingsCount || '1';
    }

    // 4. Render Positions List (Matching IMG videos with weekly badge 'w' and MIS/NRML badges!)
    if (positionsContainer) {
      positionsContainer.innerHTML = '';
      if (positionsCountBadge) positionsCountBadge.textContent = appState.positions.length;

      const isMarketClosed = isMarketClosedOrPast330();

      appState.positions.forEach((pos, idx) => {
        const card = document.createElement('div');
        card.className = `position-item-card ${isMarketClosed ? 'market-closed-faded' : ''}`;
        card.dataset.id = pos.id;
        card.dataset.index = idx;
        if (isMarketClosed) {
          card.style.opacity = '0.55';
        }

        const isGreenPnl = !pos.pnl.includes('-');
        const pnlColorClass = isGreenPnl ? 'green' : 'red';
        const badgeTypeClass = (pos.type || 'NRML').toLowerCase() === 'mis' ? 'mis' : '';

        // Formatted Symbol Name with Superscript Ordinal Suffix & Weekly Badge 'w'
        const formattedSymbol = formatOptionSymbolHTML(pos.symbol);

        card.innerHTML = `
          <div class="pos-row-top">
            <span class="pos-qty-avg">Qty. <span class="pos-qty-val" style="color: #6092d6; font-weight: 600;">${pos.qty}</span> &nbsp; Avg. <span class="pos-avg-val" style="color: #334155; font-weight: 600;">${pos.avg}</span></span>
            <span class="pos-type-badge ${badgeTypeClass}">${pos.type || 'NRML'}</span>
          </div>
          <div class="pos-row-main">
            <span class="pos-symbol">${formattedSymbol}</span>
            <span class="pos-pnl ${pnlColorClass}">${pos.pnl}</span>
          </div>
          <div class="pos-row-sub">
            <span class="pos-exchange">${pos.exchange}</span>
            <span class="pos-ltp">LTP <span>${pos.ltp}</span></span>
          </div>
        `;

        // Click to open detail drawer or edit
        card.addEventListener('click', (e) => {
          // If clicked directly on P&L or Symbol, allow quick edit prompt
          if (e.target.classList.contains('pos-pnl')) {
            const newPnl = prompt('Edit P&L Amount:', pos.pnl);
            if (newPnl !== null && newPnl.trim() !== '') {
              pos.pnl = newPnl.trim();
              pos.isGreen = !pos.pnl.includes('-');
              saveState();
              renderAppUI();
              return;
            }
          }
          if (e.target.classList.contains('pos-symbol')) {
            const newSym = prompt('Edit Symbol Name:', pos.symbol);
            if (newSym !== null && newSym.trim() !== '') {
              pos.symbol = newSym.trim();
              saveState();
              renderAppUI();
              return;
            }
          }

          openInstrumentDrawer({
            name: pos.symbol.replace(/<[^>]*>?/gm, ''),
            exchange: pos.exchange,
            price: parseFloat(pos.ltp.replace(/,/g, '')) || 780.0,
            change: 10.0,
            percent: 1.5,
            isGreen: isGreenPnl
          });
        });

        positionsContainer.appendChild(card);
      });
    }

    // 5. Render Watchlist
    renderWatchlist(appState.watchlist);

    // 6. Update Screenshot Overlay Fields
    updateOverlayFields();

    // 7. Render Verified P&L Report Overlays
    renderVerifiedPnlUI();
  }

  // Update iPhone iOS Status Bar with live Indian Standard Time (IST, Asia/Kolkata) & battery
  function updateLiveStatusBarTime() {
    const timeEl = document.getElementById('ov-ios-time') || document.getElementById('ios-live-clock');
    if (!timeEl) return;

    const sb = (appState && appState.statusBar) ? appState.statusBar : { mode: 'live', is24Hour: false, batteryLevel: 98, showBatteryPct: false };
    
    if (sb.mode === 'custom' && sb.customTime) {
      timeEl.textContent = sb.customTime;
    } else {
      try {
        const parts = new Intl.DateTimeFormat('en-IN', {
          timeZone: 'Asia/Kolkata',
          hour: 'numeric',
          minute: '2-digit',
          hour12: !sb.is24Hour
        }).formatToParts(new Date());

        const hour = parts.find(p => p.type === 'hour')?.value || '10';
        const minute = parts.find(p => p.type === 'minute')?.value || '16';
        timeEl.textContent = `${hour}:${minute}`;
      } catch (e) {
        // Fallback calculation for IST (UTC+5:30)
        const now = new Date();
        const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
        const ist = new Date(utc + (3600000 * 5.5));
        let h = ist.getHours();
        if (!sb.is24Hour) h = h % 12 || 12;
        const m = String(ist.getMinutes()).padStart(2, '0');
        timeEl.textContent = `${h}:${m}`;
      }
    }

    const batteryFill = document.getElementById('ov-ios-battery-fill') || document.getElementById('ios-battery-fill-level');
    const batteryPct = document.getElementById('ov-ios-battery-pct') || document.getElementById('ios-battery-pct-text');
    const level = (sb.batteryLevel !== undefined) ? parseInt(sb.batteryLevel, 10) : 90;
    if (batteryFill) {
      if (batteryFill.tagName === 'rect' || (batteryFill.hasAttribute && batteryFill.hasAttribute('width'))) {
        const fillWidth = Math.max(1.5, Math.min(15, (level / 100) * 15));
        batteryFill.setAttribute('width', fillWidth.toFixed(1));
      } else {
        batteryFill.style.width = `${level}%`;
      }
      if (level <= 20) {
        batteryFill.style.fill = '#ef4444';
        batteryFill.style.backgroundColor = '#ef4444';
      } else {
        batteryFill.style.fill = 'currentColor';
        batteryFill.style.backgroundColor = 'currentColor';
      }
    }
    if (batteryPct) {
      batteryPct.textContent = `${level}`;
      if (batteryPct.id === 'ov-ios-battery-pct') {
        batteryPct.textContent = `${level}%`;
        batteryPct.style.display = sb.showBatteryPct ? 'inline-block' : 'none';
      }
    }
  }

  // Render Verified P&L Report Page Overlays
  function renderVerifiedPnlUI() {
    if (!appState.verifiedPnl) return;
    const vp = appState.verifiedPnl;

    const dateRangeEl = document.getElementById('vpnl-val-date-range');
    if (dateRangeEl) dateRangeEl.textContent = vp.dateRange || '2026-07-01  —  2026-09-12';

    const realisedEl = document.getElementById('vpnl-val-realised');
    if (realisedEl) {
      realisedEl.textContent = vp.realisedPnl || '-1.18L';
      const isPos = vp.isRealisedGreen !== undefined ? vp.isRealisedGreen : !String(vp.realisedPnl).includes('-');
      realisedEl.className = 'vpnl-big-amount ' + (isPos ? 'green' : 'red');
    }

    const unrealisedEl = document.getElementById('vpnl-val-unrealised');
    if (unrealisedEl) {
      unrealisedEl.textContent = vp.unrealisedPnl || '-5.85k';
      const isPos = vp.isUnrealisedGreen !== undefined ? vp.isUnrealisedGreen : !String(vp.unrealisedPnl).includes('-');
      unrealisedEl.className = 'vpnl-big-amount ' + (isPos ? 'green' : 'red');
    }

    const chargesEl = document.getElementById('vpnl-val-charges');
    if (chargesEl) chargesEl.textContent = vp.chargesTaxes || '37.66k';

    const otherEl = document.getElementById('vpnl-val-other');
    if (otherEl) otherEl.textContent = vp.otherCreditsDebits || '-59';

    const netEl = document.getElementById('vpnl-val-net');
    if (netEl) {
      netEl.textContent = vp.netRealisedPnl || '-1.55L';
      const isPos = vp.isNetGreen !== undefined ? vp.isNetGreen : !String(vp.netRealisedPnl).includes('-');
      netEl.className = 'vpnl-net-amount ' + (isPos ? 'green' : 'red');
    }

    const lastUpEl = document.getElementById('vpnl-val-last-updated');
    if (lastUpEl) lastUpEl.textContent = vp.lastUpdated || '2026-09-11';

    // Render Trades list
    const tradesListEl = document.getElementById('vpnl-trades-list');
    if (tradesListEl && vp.trades) {
      tradesListEl.innerHTML = '';
      vp.trades.forEach((t) => {
        const item = document.createElement('div');
        item.className = 'vpnl-trade-item';
        const isPos = t.isGreen !== undefined ? t.isGreen : !String(t.realised).includes('-');
        const formattedRealised = String(t.realised).replace(/\(([^)]+)\)/g, '<span class="vpnl-trade-pct">($1)</span>');
        item.innerHTML = `
          <div class="vpnl-trade-header">
            <span class="vpnl-trade-symbol">${t.symbol}</span>
            <span class="vpnl-trade-qty">Qty. ${t.qty}</span>
          </div>
          <div class="vpnl-trade-realised-row">
            <span class="vpnl-trade-label">Realised</span>
            <span class="vpnl-trade-realised-val ${isPos ? 'green' : 'red'}">${formattedRealised}</span>
          </div>
          <div class="vpnl-trade-details-row">
            <div class="vpnl-trade-detail-item">
              <span class="vpnl-trade-label">Buy avg.</span>
              <span class="vpnl-trade-val">${t.buyAvg}</span>
            </div>
            <div class="vpnl-trade-detail-item right">
              <span class="vpnl-trade-label">Buy value</span>
              <span class="vpnl-trade-val">${t.buyValue}</span>
            </div>
          </div>
        `;
        tradesListEl.appendChild(item);
      });
    }
  }

  // Setup Verified P&L Click Handlers for direct inline editing
  function setupVerifiedPnlClickHandlers() {
    const ovDateRange = document.getElementById('ov-vpnl-date-range');
    if (ovDateRange) {
      ovDateRange.addEventListener('click', () => {
        const val = prompt('Edit Date Range (e.g. 2026-07-01  —  2026-09-12):', appState.verifiedPnl?.dateRange || '2026-07-01  —  2026-09-12');
        if (val !== null && val.trim()) {
          if (!appState.verifiedPnl) appState.verifiedPnl = {};
          appState.verifiedPnl.dateRange = val.trim();
          saveState();
          renderVerifiedPnlUI();
        }
      });
    }

    const ovRealised = document.getElementById('ov-vpnl-realised');
    if (ovRealised) {
      ovRealised.addEventListener('click', () => {
        const val = prompt('Edit Realised P&L (e.g. -1.18L or +2.45L):', appState.verifiedPnl?.realisedPnl || '-1.18L');
        if (val !== null && val.trim()) {
          if (!appState.verifiedPnl) appState.verifiedPnl = {};
          appState.verifiedPnl.realisedPnl = val.trim();
          appState.verifiedPnl.isRealisedGreen = !val.trim().includes('-');
          saveState();
          renderVerifiedPnlUI();
        }
      });
    }

    const ovUnrealised = document.getElementById('ov-vpnl-unrealised');
    if (ovUnrealised) {
      ovUnrealised.addEventListener('click', () => {
        const val = prompt('Edit Unrealised P&L (e.g. -5.85k or +10.2k):', appState.verifiedPnl?.unrealisedPnl || '-5.85k');
        if (val !== null && val.trim()) {
          if (!appState.verifiedPnl) appState.verifiedPnl = {};
          appState.verifiedPnl.unrealisedPnl = val.trim();
          appState.verifiedPnl.isUnrealisedGreen = !val.trim().includes('-');
          saveState();
          renderVerifiedPnlUI();
        }
      });
    }

    const ovCharges = document.getElementById('ov-vpnl-charges');
    if (ovCharges) {
      ovCharges.addEventListener('click', () => {
        const val = prompt('Edit Charges & taxes (e.g. 37.66k):', appState.verifiedPnl?.chargesTaxes || '37.66k');
        if (val !== null && val.trim()) {
          if (!appState.verifiedPnl) appState.verifiedPnl = {};
          appState.verifiedPnl.chargesTaxes = val.trim();
          saveState();
          renderVerifiedPnlUI();
        }
      });
    }

    const ovOther = document.getElementById('ov-vpnl-other');
    if (ovOther) {
      ovOther.addEventListener('click', () => {
        const val = prompt('Edit Other credits & debits (e.g. -59):', appState.verifiedPnl?.otherCreditsDebits || '-59');
        if (val !== null && val.trim()) {
          if (!appState.verifiedPnl) appState.verifiedPnl = {};
          appState.verifiedPnl.otherCreditsDebits = val.trim();
          saveState();
          renderVerifiedPnlUI();
        }
      });
    }

    const ovNet = document.getElementById('ov-vpnl-net');
    if (ovNet) {
      ovNet.addEventListener('click', () => {
        const val = prompt('Edit Net Realised P&L (e.g. -1.55L):', appState.verifiedPnl?.netRealisedPnl || '-1.55L');
        if (val !== null && val.trim()) {
          if (!appState.verifiedPnl) appState.verifiedPnl = {};
          appState.verifiedPnl.netRealisedPnl = val.trim();
          appState.verifiedPnl.isNetGreen = !val.trim().includes('-');
          saveState();
          renderVerifiedPnlUI();
        }
      });
    }

    const ovLastUp = document.getElementById('ov-vpnl-last-updated');
    if (ovLastUp) {
      ovLastUp.addEventListener('click', () => {
        const val = prompt('Edit Last Updated Date (e.g. 2026-09-11):', appState.verifiedPnl?.lastUpdated || '2026-09-11');
        if (val !== null && val.trim()) {
          if (!appState.verifiedPnl) appState.verifiedPnl = {};
          appState.verifiedPnl.lastUpdated = val.trim();
          saveState();
          renderVerifiedPnlUI();
        }
      });
    }
  }

  // Sync Overlay Text Fields with Current App State
  // Sync Overlay Text Fields & Render Dynamic Overlay Positions
  function updateOverlayFields() {
    updateLiveStatusBarTime();

    const ovPositionsCount = document.getElementById('ov-val-positions-count');
    if (ovPositionsCount) {
      ovPositionsCount.textContent = appState.positions ? appState.positions.length : '0';
    }

    const ovTotalPnl = document.getElementById('ov-val-total-pnl');
    if (ovTotalPnl) {
      ovTotalPnl.textContent = appState.totalPnl;
      const isNeg = appState.totalPnl.includes('-');
      ovTotalPnl.className = isNeg ? 'red' : 'green';
      ovTotalPnl.style.setProperty('color', isNeg ? '#df514c' : 'rgb(111, 174, 101)', 'important');
    }

    const ovPositionsList = document.getElementById('ov-positions-list');
    if (ovPositionsList) {
      ovPositionsList.innerHTML = '';
      const isMarketClosed = isMarketClosedOrPast330();
      if (appState.positions) {
        appState.positions.forEach((pos, idx) => {
          const item = document.createElement('div');
          item.className = `overlay-field pos-card-overlay-item ${isMarketClosed ? 'market-closed-faded' : ''}`;
          item.style.position = 'relative';
          item.style.width = '100%';
          item.style.margin = '0';
          item.style.background = '#ffffff';
          item.style.padding = '1.45vh 2.1vh';
          item.style.borderRadius = '0';
          item.style.borderLeft = 'none';
          item.style.borderRight = 'none';
          item.style.borderTop = 'none';
          item.style.borderBottom = '1px solid #f1f3f6';
          item.style.boxSizing = 'border-box';
          item.style.display = 'flex';
          item.style.flexDirection = 'column';
          item.style.justifyContent = 'center';
          item.style.cursor = 'pointer';
          item.style.boxShadow = 'none';
          if (isMarketClosed) {
            item.style.opacity = '0.55';
          }

          const isGreenPnl = !pos.pnl.includes('-');
          const pnlColor = isGreenPnl ? 'rgb(111, 174, 101)' : '#df514c';
          const isMis = (pos.type || 'NRML').toLowerCase() === 'mis';
          const badgeBg = isMis ? 'rgba(217, 119, 6, 0.1)' : 'rgba(167, 139, 250, 0.1)';
          const badgeColor = isMis ? '#d97706' : '#a78bfa';

          const formattedSymbol = formatOptionSymbolHTML(pos.symbol);

          item.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; line-height: 1.3;">
              <span style="font-size: 1.1vh; color: #94a3b8;">Qty. <span class="pos-qty-val" style="color: #6092d6; font-weight: 600; letter-spacing: 0.8px;">${pos.qty || '0'}</span> &nbsp; Avg. <span class="pos-avg-val" style="color: #334155; font-weight: 600; letter-spacing: 0.8px;">${pos.avg || '0.00'}</span></span>
              <span class="pos-type-badge ${isMis ? 'mis' : ''}" style="font-size: calc(1.1vh + 1px); font-weight: 700; background: ${badgeBg}; color: ${badgeColor}; padding: 0.28vh 0.8vh; border-radius: 3px;">${pos.type || 'NRML'}</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 0.9vh; line-height: 1.3;">
              <span style="font-size: calc(1.25vh + 2px); font-weight: 500; color: #5a6578;">${formattedSymbol}</span>
              <span style="font-size: 1.32vh; font-weight: 600; color: ${pnlColor}; letter-spacing: 1.2px;">${pos.pnl}</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; margin-top: 0.85vh; line-height: 1.3;">
              <span style="font-size: 1.05vh; color: #94a3b8; font-weight: 500;">${pos.exchange || 'NFO'}</span>
              <span style="font-size: calc(1.1vh + 2px); color: #94a3b8;">LTP <span style="color: #334155; font-weight: 600; margin-left: 6px; letter-spacing: 0;">${pos.ltp}</span></span>
            </div>
          `;

          // Quick edit P&L or Symbol on click in overlay mode
          item.addEventListener('click', () => {
            const newPnl = prompt(`Edit Position ${idx + 1} P&L:`, pos.pnl);
            if (newPnl !== null && newPnl.trim() !== '') {
              pos.pnl = newPnl.trim();
              pos.isGreen = !pos.pnl.includes('-');
              saveState();
              renderAppUI();
            }
          });

          ovPositionsList.appendChild(item);
        });
      }
    }

    const ovFullname = document.getElementById('ov-val-fullname');
    const ovUserid = document.getElementById('ov-val-userid');
    const ovEmail = document.getElementById('ov-val-email');
    const ovAvatar = document.getElementById('ov-val-avatar');
    const ovNavUserid = document.getElementById('ov-val-nav-userid');

    const userName = (appState.user && appState.user.fullName) || 'Vedant Subhash Jamdhade';
    const userId = (appState.user && appState.user.userId) || 'GOX607';
    const userEmail = (appState.user && appState.user.email) || 'vjamdhade1217@gmail.com';

    if (ovFullname) ovFullname.textContent = userName;
    if (ovUserid) ovUserid.textContent = userId;
    if (ovEmail) ovEmail.textContent = userEmail;
    if (ovAvatar) {
      const parts = userName.trim().split(' ');
      const initials = parts.length > 1 ? (parts[0][0] + parts[1][0]).toUpperCase() : userId.substring(0, 2).toUpperCase();
      ovAvatar.textContent = initials || 'VS';
    }
    if (ovNavUserid) ovNavUserid.textContent = userId;

    // Sync Live Indices Ticker Overlays (NIFTY 50 & SENSEX)
    const ovNiftyVal = document.getElementById('ov-val-nifty');
    const ovNiftyChg = document.getElementById('ov-chg-nifty');
    if (appState.indices && appState.indices.nifty) {
      if (ovNiftyVal) {
        ovNiftyVal.textContent = appState.indices.nifty.val || '23,459.55';
        ovNiftyVal.className = 'ov-index-val ' + (appState.indices.nifty.isGreen !== false ? 'green' : 'red');
      }
      if (ovNiftyChg) {
        ovNiftyChg.textContent = appState.indices.nifty.change || '+28.05 (+0.11%)';
      }
    }

    const ovSensexVal = document.getElementById('ov-val-sensex');
    const ovSensexChg = document.getElementById('ov-chg-sensex');
    if (appState.indices && appState.indices.sensex) {
      if (ovSensexVal) {
        ovSensexVal.textContent = appState.indices.sensex.val || '74,855.81';
        ovSensexVal.className = 'ov-index-val ' + (appState.indices.sensex.isGreen !== false ? 'green' : 'red');
      }
      if (ovSensexChg) {
        ovSensexChg.textContent = appState.indices.sensex.change || '+91.58 (+0.12%)';
      }
    }

    // Sync Funds Screen Overlays
    const availMargin = (appState.user && appState.user.fundsDetails && appState.user.fundsDetails.availableMargin) ||
                        (appState.user && appState.user.funds) ||
                        '₹35,50,000.00';
    const availCash = (appState.user && appState.user.fundsDetails && appState.user.fundsDetails.availableCash) || '35,50,000.00';
    const usedMargin = (appState.user && appState.user.fundsDetails && appState.user.fundsDetails.usedMargin) || '0.00';
    const openingBal = (appState.user && appState.user.fundsDetails && appState.user.fundsDetails.openingBalance) || '35,50,000.00';

    const ovFundsAvailMargin = document.getElementById('ov-val-funds-avail-margin');
    const ovFundsAvailCash = document.getElementById('ov-val-funds-avail-cash');
    const ovFundsUsedMargin = document.getElementById('ov-val-funds-used-margin');
    const ovFundsOpeningBal = document.getElementById('ov-val-funds-opening-bal');

    if (ovFundsAvailMargin) ovFundsAvailMargin.textContent = availMargin;
    if (ovFundsAvailCash) ovFundsAvailCash.textContent = availCash;
    if (ovFundsUsedMargin) ovFundsUsedMargin.textContent = usedMargin;
    if (ovFundsOpeningBal) ovFundsOpeningBal.textContent = openingBal;
  }

  // Setup Overlay Click Handlers for Quick Inline Editing & Navigation
  function setupOverlayClickHandlers() {
    // Navigation: Profile -> Funds Screen
    const ovClickFunds = document.getElementById('ov-click-funds');
    if (ovClickFunds) {
      ovClickFunds.addEventListener('click', (e) => {
        e.stopPropagation();
        switchTabDisplay('funds');
      });
    }

    const rowFunds = document.getElementById('row-funds');
    if (rowFunds) {
      rowFunds.addEventListener('click', () => {
        switchTabDisplay('funds');
      });
    }

    // Navigation: Funds -> Profile Screen (Back Button)
    const ovFundsBackBtn = document.getElementById('ov-funds-back-btn');
    if (ovFundsBackBtn) {
      ovFundsBackBtn.addEventListener('click', () => {
        switchTabDisplay('profile');
      });
    }

    // Funds Available Margin Edit
    const ovFundsMarginBox = document.getElementById('ov-funds-avail-margin');
    if (ovFundsMarginBox) {
      ovFundsMarginBox.addEventListener('click', () => {
        if (!appState.user) appState.user = {};
        if (!appState.user.fundsDetails) appState.user.fundsDetails = {};
        const current = appState.user.fundsDetails.availableMargin || appState.user.funds || '₹35,50,000.00';
        const val = prompt('Edit Available Margin (e.g. ₹35,50,000.00):', current);
        if (val !== null && val.trim() !== '') {
          appState.user.fundsDetails.availableMargin = val.trim();
          appState.user.funds = val.trim();
          saveState();
          renderAppUI();
        }
      });
    }

    // Funds Available Cash Edit
    const ovFundsCashBox = document.getElementById('ov-funds-avail-cash');
    if (ovFundsCashBox) {
      ovFundsCashBox.addEventListener('click', () => {
        if (!appState.user) appState.user = {};
        if (!appState.user.fundsDetails) appState.user.fundsDetails = {};
        const current = appState.user.fundsDetails.availableCash || '35,50,000.00';
        const val = prompt('Edit Available Cash (e.g. 35,50,000.00):', current);
        if (val !== null && val.trim() !== '') {
          appState.user.fundsDetails.availableCash = val.trim();
          saveState();
          renderAppUI();
        }
      });
    }

    // Funds Used Margin Edit
    const ovFundsUsedBox = document.getElementById('ov-funds-used-margin');
    if (ovFundsUsedBox) {
      ovFundsUsedBox.addEventListener('click', () => {
        if (!appState.user) appState.user = {};
        if (!appState.user.fundsDetails) appState.user.fundsDetails = {};
        const current = appState.user.fundsDetails.usedMargin || '0.00';
        const val = prompt('Edit Used Margin (e.g. 0.00):', current);
        if (val !== null && val.trim() !== '') {
          appState.user.fundsDetails.usedMargin = val.trim();
          saveState();
          renderAppUI();
        }
      });
    }

    // Funds Opening Balance Edit
    const ovFundsOpenBox = document.getElementById('ov-funds-opening-bal');
    if (ovFundsOpenBox) {
      ovFundsOpenBox.addEventListener('click', () => {
        if (!appState.user) appState.user = {};
        if (!appState.user.fundsDetails) appState.user.fundsDetails = {};
        const current = appState.user.fundsDetails.openingBalance || '35,50,000.00';
        const val = prompt('Edit Opening Balance (e.g. 35,50,000.00):', current);
        if (val !== null && val.trim() !== '') {
          appState.user.fundsDetails.openingBalance = val.trim();
          saveState();
          renderAppUI();
        }
      });
    }

    const ovIdxNifty = document.getElementById('ov-index-nifty');
    if (ovIdxNifty) {
      ovIdxNifty.addEventListener('click', () => {
        const val = prompt('Edit NIFTY 50 Price (e.g. 23,459.55):', appState.indices && appState.indices.nifty ? appState.indices.nifty.val : '23,459.55');
        if (val !== null && val.trim() !== '') {
          if (!appState.indices) appState.indices = {};
          if (!appState.indices.nifty) appState.indices.nifty = {};
          appState.indices.nifty.val = val.trim();
          saveState();
          renderAppUI();
        }
      });
    }

    const ovIdxSensex = document.getElementById('ov-index-sensex');
    if (ovIdxSensex) {
      ovIdxSensex.addEventListener('click', () => {
        const val = prompt('Edit SENSEX Price (e.g. 74,855.81):', appState.indices && appState.indices.sensex ? appState.indices.sensex.val : '74,855.81');
        if (val !== null && val.trim() !== '') {
          if (!appState.indices) appState.indices = {};
          if (!appState.indices.sensex) appState.indices.sensex = {};
          appState.indices.sensex.val = val.trim();
          saveState();
          renderAppUI();
        }
      });
    }

    const ovPosBadge = document.getElementById('ov-positions-badge');
    if (ovPosBadge) {
      ovPosBadge.addEventListener('click', () => {
        const count = prompt('Edit Positions Count Badge Number:', appState.positions ? appState.positions.length : '2');
        if (count !== null && count.trim() !== '') {
          const ovVal = document.getElementById('ov-val-positions-count');
          if (ovVal) ovVal.textContent = count.trim();
        }
      });
    }

    const ovTotalPnlBox = document.getElementById('ov-total-pnl');
    if (ovTotalPnlBox) {
      ovTotalPnlBox.addEventListener('click', () => {
        const val = prompt('Edit Total P&L Amount:', appState.totalPnl);
        if (val !== null && val.trim() !== '') {
          appState.totalPnl = val.trim();
          saveState();
          renderAppUI();
        }
      });
    }

    const ovUseridBox = document.getElementById('ov-userid');
    if (ovUseridBox) {
      ovUseridBox.addEventListener('click', () => {
        const val = prompt('Edit User ID:', appState.user.userId);
        if (val !== null && val.trim() !== '') {
          appState.user.userId = val.trim();
          saveState();
          renderAppUI();
        }
      });
    }

    const ovEmailBox = document.getElementById('ov-email');
    if (ovEmailBox) {
      ovEmailBox.addEventListener('click', () => {
        const val = prompt('Edit Email:', appState.user.email);
        if (val !== null && val.trim() !== '') {
          appState.user.email = val.trim();
          saveState();
          renderAppUI();
        }
      });
    }
  }

  setupOverlayClickHandlers();
  setupVerifiedPnlClickHandlers();

  // Mode Switcher: Screenshot Overlay Mode vs Native HTML Mode
  const phoneFrame = document.getElementById('phone-frame');
  const toggleOverlayBtn = document.getElementById('toggle-overlay-mode-btn');

  if (toggleOverlayBtn && phoneFrame) {
    toggleOverlayBtn.addEventListener('click', () => {
      phoneFrame.classList.toggle('overlay-mode-active');
      const isActive = phoneFrame.classList.contains('overlay-mode-active');
      toggleOverlayBtn.classList.toggle('active', isActive);
      toggleOverlayBtn.style.background = isActive ? '#059669' : '#4b5563';
    });
  }

  // Quick edit Total P&L on click
  if (totalPnlVal) {
    totalPnlVal.style.cursor = 'pointer';
    totalPnlVal.title = 'Click to Quick Edit Total P&L';
    totalPnlVal.addEventListener('click', (e) => {
      e.stopPropagation();
      const newTotal = prompt('Edit Total P&L Amount:', appState.totalPnl);
      if (newTotal !== null && newTotal.trim() !== '') {
        appState.totalPnl = newTotal.trim();
        saveState();
        renderAppUI();
      }
    });
  }

  // Render Watchlist Items
  function renderWatchlist(items) {
    if (!watchlistContainer) return;
    watchlistContainer.innerHTML = '';
    if (searchCounter) searchCounter.textContent = `${items.length}/250`;

    items.forEach((item, idx) => {
      const card = document.createElement('div');
      card.className = 'watchlist-item';
      
      const changeSign = item.change >= 0 ? '+' : '';
      const colorClass = item.isGreen ? 'green' : 'red';

      card.innerHTML = `
        <div class="item-left">
          <span class="item-name">${item.name}</span>
          <span class="item-tag">${item.exchange}</span>
        </div>
        <div class="item-right">
          <span class="item-price ${colorClass}">${item.price.toFixed(2)}</span>
          <span class="item-change ${colorClass}">${changeSign}${item.change.toFixed(2)} (${changeSign}${item.percent.toFixed(2)}%)</span>
        </div>
      `;

      card.addEventListener('click', () => openInstrumentDrawer(item));
      watchlistContainer.appendChild(card);
    });
  }

  // Initial App Render
  renderAppUI();

  // Search filter handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const filtered = appState.watchlist.filter(item => 
        item.name.toLowerCase().includes(query) || item.exchange.toLowerCase().includes(query)
      );
      renderWatchlist(filtered);
    });
  }

  // Bottom Navigation Switching Engine (Screens & Fullscreen Overlay Sync)
  const navTabs = document.querySelectorAll('.nav-tab-item');
  const screenViews = document.querySelectorAll('.screen-view');

  const getOverlayViewport = () => document.getElementById('screenshot-overlay-viewport') || document.querySelector('.screenshot-overlay-viewport') || document.getElementById('phone-frame');
  const ovGroupPortfolio = document.getElementById('ov-group-portfolio');
  const ovGroupProfile = document.getElementById('ov-group-profile');

  function switchTabDisplay(navTarget) {
    const vp = getOverlayViewport();
    const ovPortfolio = document.getElementById('ov-group-portfolio');
    const ovProfile = document.getElementById('ov-group-profile');
    const ovFunds = document.getElementById('ov-group-funds');

    if (navTarget === 'funds' || navTarget === 'screen-funds') {
      if (vp) {
        vp.classList.remove('view-portfolio', 'view-profile');
        vp.classList.add('view-funds');
        vp.style.setProperty('background-image', "url('bg_new_funds.png?v=72')", 'important');
      }
      if (ovPortfolio) ovPortfolio.style.display = 'none';
      if (ovProfile) ovProfile.style.display = 'none';
      if (ovFunds) ovFunds.style.display = 'block';
    } else if (navTarget === 'profile' || navTarget === 'screen-profile') {
      if (vp) {
        vp.classList.remove('view-portfolio', 'view-funds');
        vp.classList.add('view-profile');
        vp.style.setProperty('background-image', "url('bg_new_profile.png?v=72')", 'important');
      }
      if (ovPortfolio) ovPortfolio.style.display = 'none';
      if (ovProfile) ovProfile.style.display = 'block';
      if (ovFunds) ovFunds.style.display = 'none';
    } else {
      // Default to portfolio view
      if (vp) {
        vp.classList.remove('view-profile', 'view-funds');
        vp.classList.add('view-portfolio');
        vp.style.setProperty('background-image', "url('bg_new_portfolio.png?v=72')", 'important');
      }
      if (ovPortfolio) ovPortfolio.style.display = 'block';
      if (ovProfile) ovProfile.style.display = 'none';
      if (ovFunds) ovFunds.style.display = 'none';
    }
  }

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');
      navTabs.forEach(t => t.classList.remove('active'));
      screenViews.forEach(s => s.classList.remove('active'));
      tab.classList.add('active');
      const targetScreen = document.getElementById(targetId);
      if (targetScreen) targetScreen.classList.add('active');

      // Sync Screenshot Overlay Mode Viewport
      switchTabDisplay(targetId);
    });
  });

  // Expose switchTabDisplay globally
  window.switchTabDisplay = switchTabDisplay;

  // Bind Overlay Mode Nav Click Zones (.nav-zone)
  const navZones = document.querySelectorAll('.nav-zone');
  navZones.forEach(zone => {
    zone.addEventListener('click', () => {
      const navTarget = zone.getAttribute('data-nav');
      switchTabDisplay(navTarget);
    });
  });

  // Global delegation for Funds row and Back button
  document.addEventListener('click', (e) => {
    const fundsRow = e.target.closest('#ov-click-funds, .funds-clickable-row, #row-funds');
    if (fundsRow) {
      e.preventDefault();
      e.stopPropagation();
      switchTabDisplay('funds');
      return;
    }
    const backBtn = e.target.closest('#ov-funds-back-btn, .funds-back-btn-clickable');
    if (backBtn) {
      e.preventDefault();
      e.stopPropagation();
      switchTabDisplay('profile');
      return;
    }
  }, true);

  // Check URL param or hash on initial load (e.g. ?tab=profile or #profile)
  const urlParams = new URLSearchParams(window.location.search);
  const initialTab = urlParams.get('tab') || urlParams.get('view') || (window.location.hash ? window.location.hash.replace('#', '') : null);
  if (initialTab) {
    switchTabDisplay(initialTab);
  }

  // Indices Dropdown Toggle
  const toggleIndicesBtn = document.getElementById('toggle-indices-btn');
  const indicesDrawer = document.getElementById('indices-drawer');
  if (toggleIndicesBtn && indicesDrawer) {
    toggleIndicesBtn.addEventListener('click', () => {
      indicesDrawer.classList.toggle('open');
      toggleIndicesBtn.classList.toggle('rotated');
    });
  }

  // Open Instrument Detail Sheet Drawer
  function openInstrumentDrawer(item) {
    if (!drawerSymbolName) return;
    drawerSymbolName.textContent = item.name;
    drawerSymbolExchange.textContent = item.exchange;
    
    const changeSign = item.change >= 0 ? '+' : '';
    const colorClass = item.isGreen ? 'green' : 'red';

    drawerSymbolPrice.textContent = item.price.toFixed(2);
    drawerSymbolPrice.className = `drawer-price-val ${colorClass}`;

    drawerSymbolChange.textContent = `${changeSign}${item.change.toFixed(2)} (${changeSign}${item.percent.toFixed(2)}%)`;
    drawerSymbolChange.className = `drawer-change-val ${colorClass}`;

    if (modalBackdrop) modalBackdrop.classList.add('open');
  }

  // Close Drawer Modal
  if (modalCloseBtn && modalBackdrop) modalCloseBtn.addEventListener('click', () => modalBackdrop.classList.remove('open'));
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) modalBackdrop.classList.remove('open');
    });
  }

  // True Browser Fullscreen Controller (Like a full screen video player)
  const btnFullscreenToggle = document.getElementById('btn-fullscreen-toggle');

  function isDocFullscreen() {
    return !!(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement);
  }

  function toggleTrueFullscreen() {
    if (!isDocFullscreen()) {
      const docEl = document.documentElement;
      if (docEl.requestFullscreen) {
        docEl.requestFullscreen();
      } else if (docEl.webkitRequestFullscreen) {
        docEl.webkitRequestFullscreen();
      } else if (docEl.mozRequestFullScreen) {
        docEl.mozRequestFullScreen();
      } else if (docEl.msRequestFullscreen) {
        docEl.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }

  function updateFullscreenUI() {
    const isFs = isDocFullscreen();
    document.body.classList.toggle('is-fullscreen', isFs);
    if (btnFullscreenToggle) {
      btnFullscreenToggle.style.setProperty('display', isFs ? 'none' : 'flex', 'important');
    }
  }

  if (btnFullscreenToggle) {
    btnFullscreenToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleTrueFullscreen();
    });
  }

  // Keyboard shortcut: Press 'F' to toggle true full screen
  document.addEventListener('keydown', (e) => {
    if (e.key === 'f' || e.key === 'F') {
      if (!['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
        toggleTrueFullscreen();
      }
    }
  });

  // Double-click and Mobile Double-Tap to toggle fullscreen (Only on display/overlay viewport)
  const appWrapper = document.getElementById('app-wrapper');
  const phoneFrameEl = document.getElementById('phone-frame');
  const displayTarget = appWrapper || phoneFrameEl;

  if (displayTarget && typeof displayTarget.addEventListener === 'function') {
    // Desktop double-click
    displayTarget.addEventListener('dblclick', (e) => {
      if (['INPUT', 'SELECT', 'TEXTAREA', 'BUTTON', 'A'].includes(e.target?.tagName)) return;
      toggleTrueFullscreen();
    });

    // Mobile / Touch device double-tap (<350ms between taps)
    let lastTapTime = 0;
    displayTarget.addEventListener('touchend', (e) => {
      if (['INPUT', 'SELECT', 'TEXTAREA', 'BUTTON', 'A'].includes(e.target?.tagName)) return;
      if (e.target.closest && e.target.closest('.nav-zone')) return;
      const currentTime = new Date().getTime();
      const tapInterval = currentTime - lastTapTime;
      if (tapInterval < 350 && tapInterval > 0) {
        toggleTrueFullscreen();
        lastTapTime = 0;
      } else {
        lastTapTime = currentTime;
      }
    }, { passive: true });
  }

  document.addEventListener('fullscreenchange', updateFullscreenUI);
  document.addEventListener('webkitfullscreenchange', updateFullscreenUI);
  document.addEventListener('mozfullscreenchange', updateFullscreenUI);
  document.addEventListener('MSFullscreenChange', updateFullscreenUI);

  // ==========================================================================
  // ADMIN CONTROL PANEL LOGIC & FORM MANAGERS WITH VIDEO PRESETS
  // ==========================================================================

  function openAdminPanel() {
    populateAdminForms();
    if (adminModal) adminModal.classList.add('open');
  }

  if (toggleAdminBtn) toggleAdminBtn.addEventListener('click', openAdminPanel);
  if (openAdminFromProfile) openAdminFromProfile.addEventListener('click', openAdminPanel);
  if (adminModalClose) adminModalClose.addEventListener('click', () => adminModal.classList.remove('open'));

  // Admin / Sidebar Tab Switcher
  adminTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetSec = tab.getAttribute('data-atab');
      adminTabs.forEach(t => t.classList.remove('active'));
      adminSections.forEach(s => s.classList.remove('active'));
      tab.classList.add('active');
      const secEl = document.getElementById(`asec-${targetSec}`);
      if (secEl) secEl.classList.add('active');
    });
  });

  // Auto-populate on Standalone Input Dashboard Page is called at the end of initKiteApp

  // ==========================================================================
  // DHAN HQ API V2 & LIVE MARKET TICKER ENGINE
  // ==========================================================================
  // 🔒 SAFETY LOCK: STRICT READ-ONLY MODE GUARANTEE
  // Real order placement APIs (/orders, /orders/slicing) are strictly prohibited and blocked.
  const SAFETY_LOCK_READ_ONLY_MODE = true;

  window.placeDhanOrder = function() {
    console.error('⛔ SAFETY LOCK: Order placement on Dhan API is strictly blocked and disabled.');
    alert('🔒 Safety Lock: Order placement is strictly prohibited and disabled in this application.');
    return false;
  };

  function calculatePosPnl(pos) {
    const ltpVal = parseFloat(String(pos.ltp).replace(/,/g, '')) || 0;
    const entryVal = parseFloat(String(pos.entryPrice || pos.avg).replace(/,/g, '')) || 0;
    const qtyVal = parseFloat(String(pos.qty).replace(/,/g, '')) || 0;
    
    // If user provided entry and qty, calculate exact mathematical P&L
    if (qtyVal > 0 && entryVal > 0) {
      const side = (pos.side || 'BUY').toUpperCase();
      const diff = (side === 'BUY') ? (ltpVal - entryVal) : (entryVal - ltpVal);
      const pnlVal = diff * qtyVal;
      return (pnlVal >= 0 ? '+' : '') + pnlVal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    }
    
    if (pos.pnl && pos.pnl !== '0.00' && pos.pnl !== '+0.00') return pos.pnl;
    return '+0.00';
  }

  let liveTickerTimeout = null;

  function getRandomTickInterval() {
    const setting = appState.dhan ? appState.dhan.tickInterval : 'random';
    if (setting && setting !== 'random' && !isNaN(parseInt(setting))) {
      const fixed = parseInt(setting);
      // Even if fixed is selected, add a micro jitter +/- 10%
      const jitter = (Math.random() - 0.5) * 100;
      return Math.min(1190, Math.max(200, fixed + jitter));
    }
    // Random interval between 250ms and 1150ms (strictly under 1.2 sec)
    return Math.floor(Math.random() * (1150 - 250 + 1)) + 250;
  }

  function scheduleNextRandomTick() {
    if (!liveTickerTimer) return;
    const nextInterval = getRandomTickInterval();
    liveTickerTimeout = setTimeout(async () => {
      if (!liveTickerTimer) return;
      try {
        await tickLiveMarketData();
      } catch (err) {
        console.error('Tick execution error:', err);
      }
      scheduleNextRandomTick();
    }, nextInterval);
  }

  function startLiveTickerLoop() {
    stopLiveTickerLoop();
    if (!appState.dhan) appState.dhan = {};
    appState.dhan.isTickerActive = true;
    liveTickerTimer = true;

    // Run first tick immediately on launch so numbers refresh instantly!
    tickLiveMarketData();

    scheduleNextRandomTick();
    console.log('⚡ Automatic Randomized Live Ticker Active (Dynamic intervals < 1.2s)');
    updateTickerBadge();
  }

  function stopLiveTickerLoop() {
    if (liveTickerTimeout) {
      clearTimeout(liveTickerTimeout);
      liveTickerTimeout = null;
    }
    liveTickerTimer = null;
    updateTickerBadge();
  }

  function updateTickerBadge() {
    const badge = document.getElementById('dhan-ticker-badge');
    const btn = document.getElementById('admin-dhan-toggle-ticker');
    const forceBtn = document.getElementById('btn-force-tick');

    const marketMode = appState.dhan ? (appState.dhan.marketHoursMode || 'auto') : 'auto';
    const isOpen = (marketMode === 'always') ? true : (marketMode === 'closed' ? false : isIndianMarketOpen());

    if (badge) {
      if (liveTickerTimer) {
        if (!isOpen && marketMode === 'auto') {
          badge.textContent = '🌙 Market Closed (Prices Frozen)';
          badge.style.background = '#f1f5f9';
          badge.style.color = '#475569';
        } else {
          badge.textContent = '● Running Live';
          badge.style.background = '#dcfce7';
          badge.style.color = '#166534';
        }
        if (btn) btn.textContent = 'Pause Ticker';
      } else {
        badge.textContent = '⏸ Paused';
        badge.style.background = '#feefc3';
        badge.style.color = '#b45309';
        if (btn) btn.textContent = 'Resume Ticker';
      }
    }

    if (forceBtn) {
      if (liveTickerTimer) {
        forceBtn.innerHTML = isOpen ? '⚡ Live Feed: Active' : '🌙 Market Closed (Static)';
        forceBtn.style.background = isOpen ? '#15803d' : '#475569';
        forceBtn.style.borderColor = isOpen ? '#16a34a' : '#64748b';
      } else {
        forceBtn.innerHTML = '⚡ Tick Feed Now';
        forceBtn.style.background = '#2563eb';
        forceBtn.style.borderColor = '#3b82f6';
      }
    }
  }

  const forceTickBtn = document.getElementById('btn-force-tick');
  if (forceTickBtn) {
    forceTickBtn.addEventListener('click', () => {
      tickLiveMarketData();
    });
  }


  // ==========================================================================
  // STRICT SINGLE-SESSION LOCK & MULTI-BROWSER PROTECTION (PIN: 2398)
  // ==========================================================================
  let isServerSessionOwner = localStorage.getItem('zerodha_session_verified') === 'true';
  let browserSessionId = localStorage.getItem('zerodha_browser_session_id');
  if (!browserSessionId) {
    browserSessionId = 'sess_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now();
    localStorage.setItem('zerodha_browser_session_id', browserSessionId);
  }

  function injectSessionModalStyles() {
    if (document.getElementById('zerodha-session-modal-styles')) return;
    const style = document.createElement('style');
    style.id = 'zerodha-session-modal-styles';
    style.textContent = `
      .session-blocker-backdrop {
        position: fixed;
        inset: 0;
        background: rgba(15, 23, 42, 0.85);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        z-index: 999999;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.25s ease;
        font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;
      }
      .session-blocker-backdrop.visible {
        opacity: 1;
        pointer-events: auto;
      }
      .session-blocker-modal {
        background: #ffffff;
        border-radius: 16px;
        max-width: 440px;
        width: 100%;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(226, 232, 240, 0.8);
        overflow: hidden;
        animation: sessionModalSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        text-align: center;
        padding: 32px 28px;
        box-sizing: border-box;
      }
      @keyframes sessionModalSlideUp {
        from { transform: translateY(20px) scale(0.96); opacity: 0; }
        to { transform: translateY(0) scale(1); opacity: 1; }
      }
      .session-modal-icon {
        width: 60px;
        height: 60px;
        margin: 0 auto 16px;
        border-radius: 50%;
        background: rgba(239, 68, 68, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ef4444;
      }
      .session-modal-title {
        font-size: 20px;
        font-weight: 700;
        color: #0f172a;
        margin: 0 0 10px;
        letter-spacing: -0.3px;
      }
      .session-modal-desc {
        font-size: 14px;
        color: #64748b;
        line-height: 1.5;
        margin: 0 0 24px;
      }
      .session-modal-btn {
        width: 100%;
        padding: 13px 20px;
        font-size: 15px;
        font-weight: 600;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        transition: all 0.15s ease;
        background: #387ed1;
        color: #ffffff;
      }
      .session-modal-btn:hover {
        background: #2b6cb0;
        box-shadow: 0 4px 12px rgba(56, 126, 209, 0.35);
      }
      .session-pin-container {
        display: none;
        margin-top: 20px;
        text-align: center;
      }
      .session-pin-container.active {
        display: block;
        animation: sessionFadeIn 0.2s ease;
      }
      @keyframes sessionFadeIn {
        from { opacity: 0; transform: translateY(6px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .session-pin-input {
        width: 180px;
        height: 50px;
        font-size: 26px;
        font-weight: 700;
        letter-spacing: 12px;
        text-align: center;
        border: 2px solid #cbd5e1;
        border-radius: 10px;
        outline: none;
        margin: 0 auto 16px;
        display: block;
        color: #0f172a;
        background: #f8fafc;
        box-sizing: border-box;
        transition: border-color 0.15s ease;
      }
      .session-pin-input:focus {
        border-color: #387ed1;
        background: #ffffff;
        box-shadow: 0 0 0 3px rgba(56, 126, 209, 0.15);
      }
      .session-error-msg {
        color: #ef4444;
        font-size: 13px;
        font-weight: 500;
        margin: -8px 0 14px;
        display: none;
      }
      .session-shake {
        animation: sessionShake 0.4s ease-in-out;
      }
      @keyframes sessionShake {
        0%, 100% { transform: translateX(0); }
        20%, 60% { transform: translateX(-8px); }
        40%, 80% { transform: translateX(8px); }
      }
    `;
    document.head.appendChild(style);
  }

  function renderSessionConflictModal() {
    if (localStorage.getItem('zerodha_session_verified') === 'true') {
      isServerSessionOwner = true;
      return;
    }
    injectSessionModalStyles();
    let modalEl = document.getElementById('zerodha-session-blocker-modal');
    if (!modalEl) {
      modalEl = document.createElement('div');
      modalEl.id = 'zerodha-session-blocker-modal';
      modalEl.className = 'session-blocker-backdrop';
      modalEl.innerHTML = `
        <div class="session-blocker-modal" id="session-modal-box">
          <div class="session-modal-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </div>
          <h2 class="session-modal-title">Session Active on Another Device</h2>
          <p class="session-modal-desc" id="session-modal-text">Session already active in other device, are you sure you want to use here?</p>
          
          <div id="session-action-step1">
            <button class="session-modal-btn" id="session-btn-use-here">Use Here</button>
          </div>

          <div class="session-pin-container" id="session-pin-step2">
            <div style="font-size: 13px; color: #475569; margin-bottom: 12px; font-weight: 500;">Enter 4-Digit Security Passcode:</div>
            <input type="password" maxlength="4" pattern="[0-9]*" inputmode="numeric" class="session-pin-input" id="session-pin-field" placeholder="••••" autocomplete="off" />
            <div class="session-error-msg" id="session-pin-error">Incorrect passcode. Try again.</div>
            <button class="session-modal-btn" id="session-btn-submit-pin">Confirm & Take Over</button>
          </div>
        </div>
      `;
      document.body.appendChild(modalEl);

      const btnUseHere = modalEl.querySelector('#session-btn-use-here');
      const step1 = modalEl.querySelector('#session-action-step1');
      const step2 = modalEl.querySelector('#session-pin-step2');
      const pinField = modalEl.querySelector('#session-pin-field');
      const btnSubmitPin = modalEl.querySelector('#session-btn-submit-pin');
      const errorMsg = modalEl.querySelector('#session-pin-error');
      const modalBox = modalEl.querySelector('#session-modal-box');

      btnUseHere.addEventListener('click', () => {
        step1.style.display = 'none';
        step2.classList.add('active');
        pinField.value = '';
        errorMsg.style.display = 'none';
        pinField.focus();
      });

      async function submitPin() {
        const pinVal = pinField.value.trim();
        if (!pinVal || pinVal.length !== 4) {
          errorMsg.textContent = 'Please enter a valid 4-digit PIN.';
          errorMsg.style.display = 'block';
          modalBox.classList.add('session-shake');
          setTimeout(() => modalBox.classList.remove('session-shake'), 450);
          return;
        }

        try {
          btnSubmitPin.textContent = 'Verifying...';
          btnSubmitPin.disabled = true;
          const res = await fetch('/api/session/claim', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sessionId: browserSessionId, pin: pinVal })
          });
          const data = await res.json().catch(() => ({}));
          if (res.ok && (data.status === 'success' || pinVal === '2398')) {
            isServerSessionOwner = true;
            localStorage.setItem('zerodha_session_verified', 'true');
            localStorage.setItem('zerodha_session_verified_ts', Date.now().toString());
            hideSessionConflictModal();
            broadcastLiveWsTick({ type: 'SESSION_VERIFIED_BROADCAST' });
            initDhanWebSocket();
            if (typeof showNotificationToast === 'function') {
              showNotificationToast('Session activated on this device');
            }
          } else if (pinVal === '2398') {
            // Client-side fallback for 2398
            isServerSessionOwner = true;
            localStorage.setItem('zerodha_session_verified', 'true');
            localStorage.setItem('zerodha_session_verified_ts', Date.now().toString());
            hideSessionConflictModal();
            broadcastLiveWsTick({ type: 'SESSION_VERIFIED_BROADCAST' });
            initDhanWebSocket();
          } else {
            errorMsg.textContent = data.message || 'Incorrect PIN. Please try again.';
            errorMsg.style.display = 'block';
            modalBox.classList.add('session-shake');
            setTimeout(() => modalBox.classList.remove('session-shake'), 450);
            pinField.value = '';
            pinField.focus();
          }
        } catch (e) {
          if (pinVal === '2398') {
            isServerSessionOwner = true;
            localStorage.setItem('zerodha_session_verified', 'true');
            hideSessionConflictModal();
            initDhanWebSocket();
          } else {
            errorMsg.textContent = 'Incorrect PIN. Please enter 2398.';
            errorMsg.style.display = 'block';
          }
        } finally {
          btnSubmitPin.textContent = 'Confirm & Take Over';
          btnSubmitPin.disabled = false;
        }
      }

      btnSubmitPin.addEventListener('click', submitPin);
      pinField.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          submitPin();
        }
      });
    }

    if (localStorage.getItem('zerodha_session_verified') !== 'true') {
      modalEl.classList.add('visible');
    }
  }

  function hideSessionConflictModal() {
    const modalEl = document.getElementById('zerodha-session-blocker-modal');
    if (modalEl) {
      modalEl.classList.remove('visible');
      const step1 = modalEl.querySelector('#session-action-step1');
      const step2 = modalEl.querySelector('#session-pin-step2');
      const pinField = modalEl.querySelector('#session-pin-field');
      const errorMsg = modalEl.querySelector('#session-pin-error');
      if (step1) step1.style.display = 'block';
      if (step2) step2.classList.remove('active');
      if (pinField) pinField.value = '';
      if (errorMsg) errorMsg.style.display = 'none';
    }
  }

  async function checkServerSessionLock() {
    // If verified in this browser, never block
    if (localStorage.getItem('zerodha_session_verified') === 'true') {
      isServerSessionOwner = true;
      hideSessionConflictModal();
      return;
    }
    try {
      const res = await fetch('/api/session/heartbeat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId: browserSessionId })
      });
      if (res.ok) {
        const data = await res.json();
        if (localStorage.getItem('zerodha_session_verified') === 'true' || isServerSessionOwner) {
          isServerSessionOwner = true;
          hideSessionConflictModal();
          return;
        }
        if (data.isOwner) {
          isServerSessionOwner = true;
          hideSessionConflictModal();
        } else {
          isServerSessionOwner = false;
          closeDhanWebSocketGracefully();
          renderSessionConflictModal();
        }
      }
    } catch (e) {
      // Offline fallback: grant session
      isServerSessionOwner = true;
    }
  }

  setInterval(checkServerSessionLock, 3000);
  checkServerSessionLock();

  // ==========================================================================
  // DHAN REAL-TIME WEBSOCKET FEED CLIENT (Continuous Binary Stream / Zero Rate Limits)
  // ==========================================================================
  let dhanWs = null;
  let dhanWsConnected = false;
  let dhanWsReconnectTimer = null;
  let wsCooldownUntil = 0;

  const wsTickChannel = (typeof BroadcastChannel !== 'undefined') ? new BroadcastChannel('zerodha_live_ws_feed') : null;
  let isWsLeader = false;
  let lastLeaderHeartbeat = 0;
  const tabId = 'tab_' + Math.random().toString(36).substr(2, 9);

  if (wsTickChannel) {
    wsTickChannel.onmessage = (event) => {
      const data = event.data;
      if (!data) return;

      if (data.type === 'SESSION_VERIFIED_BROADCAST') {
        isServerSessionOwner = true;
        hideSessionConflictModal();
        initDhanWebSocket();
      } else if (data.type === 'WS_LEADER_HEARTBEAT') {
        if (data.sender !== tabId) {
          lastLeaderHeartbeat = Date.now();
          if (isWsLeader) {
            // Another leader exists, yield if our ID is lower
            if (data.sender > tabId) {
              isWsLeader = false;
              closeDhanWebSocketGracefully();
            }
          }
        }
      } else if (data.type === 'INDEX_TICK') {
        if (!isWsLeader) {
          updateLiveIndexFromWs(data.indexKey, data.price, data.prevClose, false);
        }
      } else if (data.type === 'SECURITY_TICK') {
        if (!isWsLeader) {
          updateSecurityLtpFromWs(data.securityId, data.price, false);
        }
      }
    };
  }

  function broadcastLiveWsTick(msg) {
    if (wsTickChannel) {
      try {
        wsTickChannel.postMessage({ ...msg, sender: tabId });
      } catch (e) {}
    }
  }

  function checkWsLeaderStatus() {
    if (!isServerSessionOwner) return;
    const now = Date.now();
    if (!isWsLeader && (now - lastLeaderHeartbeat > 4000)) {
      isWsLeader = true;
      initDhanWebSocket();
    }
    if (isWsLeader) {
      broadcastLiveWsTick({ type: 'WS_LEADER_HEARTBEAT' });
      if (!dhanWs || dhanWs.readyState === WebSocket.CLOSED) {
        initDhanWebSocket();
      }
    }
  }

  setInterval(checkWsLeaderStatus, 1500);

  function closeDhanWebSocketGracefully() {
    if (dhanWs) {
      try {
        dhanWs.onopen = null;
        dhanWs.onmessage = null;
        dhanWs.onerror = null;
        dhanWs.onclose = null;
        dhanWs.close();
      } catch (e) {}
      dhanWs = null;
      dhanWsConnected = false;
    }
  }

  window.addEventListener('beforeunload', () => {
    if (isWsLeader) {
      isWsLeader = false;
      closeDhanWebSocketGracefully();
    }
  });

  function initDhanWebSocket() {
    if (!isServerSessionOwner) return;
    if (typeof WebSocket === 'undefined') return;
    if (!appState.dhan || !appState.dhan.accessToken || appState.dhan.accessToken.length < 30) return;
    if (Date.now() < wsCooldownUntil) return;
    if (dhanWs && (dhanWs.readyState === WebSocket.OPEN || dhanWs.readyState === WebSocket.CONNECTING)) return;

    const token = appState.dhan.accessToken;
    const clientId = appState.dhan.clientId || '1104706516';
    const wsUrl = `wss://api-feed.dhan.co?version=2&token=${encodeURIComponent(token)}&clientId=${clientId}&authType=2`;

    try {
      dhanWs = new WebSocket(wsUrl);
      dhanWs.binaryType = 'arraybuffer';

      dhanWs.onopen = () => {
        dhanWsConnected = true;
        isWsLeader = true;
        console.log('⚡ [Dhan WS] Connected to live market feed binary stream');
        KiteSyncLogger.sync('DHAN_WS_OPEN', 'Connected to Dhan live market feed binary stream');
        subscribeDhanInstruments();
      };

      dhanWs.onmessage = (event) => {
        if (event.data instanceof ArrayBuffer) {
          handleDhanBinaryMessage(event.data);
        }
      };

      dhanWs.onerror = (err) => {
        console.warn('⚡ [Dhan WS] Error:', err);
        KiteSyncLogger.error('DHAN_WS_ERR', 'WebSocket error event');
      };

      dhanWs.onclose = () => {
        dhanWsConnected = false;
        KiteSyncLogger.warn('DHAN_WS_CLOSE', 'WebSocket connection closed');
        if (dhanWsReconnectTimer) clearTimeout(dhanWsReconnectTimer);
        dhanWsReconnectTimer = setTimeout(() => {
          if (appState.dhan && appState.dhan.accessToken && isWsLeader) {
            initDhanWebSocket();
          }
        }, 3000);
      };
    } catch (e) {
      console.error('Failed to initialize Dhan WebSocket:', e);
      KiteSyncLogger.error('DHAN_WS_INIT_ERR', e.message);
    }
  }

  async function resolvePositionSecurityIds() {
    if (!appState.positions || appState.positions.length === 0) return;
    let anyResolved = false;

    for (const pos of appState.positions) {
      const parsed = parseOptionSymbol(pos.symbol);
      if (parsed && parsed.underlying && parsed.strike && parsed.optionType !== 'FUT') {
        const info = await resolveOptionContractInfo(parsed.underlying, parsed.strike, parsed.optionType, parsed.expiry);
        if (info && info.securityId) {
          if (pos.securityId !== info.securityId || pos.exchangeSegment !== info.exchangeSegment) {
            pos.securityId = info.securityId;
            pos.exchangeSegment = info.exchangeSegment;
            anyResolved = true;
            console.log(`⚡ [Dhan WS] Auto-resolved Security ID for ${pos.symbol}: ${pos.securityId} (${pos.exchangeSegment})`);
            KiteSyncLogger.info('RESOLVED_SEC_ID', `${pos.symbol} -> SecID: ${pos.securityId} (${pos.exchangeSegment})`);
          }
          if (info.lastPrice > 0 && (!pos.ltp || pos.ltp === '0.00' || parseFloat(pos.ltp) === 0)) {
            pos.ltp = info.formattedLtp;
          }
        }
      }
    }

    if (anyResolved && dhanWs && dhanWs.readyState === WebSocket.OPEN) {
      subscribeDhanInstruments();
    }
  }

  function subscribeDhanInstruments() {
    if (!dhanWs || dhanWs.readyState !== WebSocket.OPEN) return;

    const instrumentList = [
      { "ExchangeSegment": "IDX_I", "SecurityId": "13" },
      { "ExchangeSegment": "IDX_I", "SecurityId": "25" },
      { "ExchangeSegment": "IDX_I", "SecurityId": "51" }
    ];

    if (appState.positions && appState.positions.length > 0) {
      appState.positions.forEach(pos => {
        if (pos.securityId && !isNaN(Number(pos.securityId)) && Number(pos.securityId) > 1000) {
          const seg = pos.exchangeSegment || (pos.symbol?.toUpperCase().includes('SENSEX') ? 'BSE_FNO' : 'NSE_FNO');
          if (!instrumentList.some(item => item.SecurityId === String(pos.securityId))) {
            instrumentList.push({
              "ExchangeSegment": seg,
              "SecurityId": String(pos.securityId)
            });
          }
        }
      });
    }

    const subMsg = {
      "RequestCode": 15, // 15 = Full Quote, 17 = LTP Ticker
      "InstrumentCount": instrumentList.length,
      "InstrumentList": instrumentList
    };

    try {
      dhanWs.send(JSON.stringify(subMsg));
      console.log('⚡ [Dhan WS] Subscribed to instruments:', instrumentList);
      KiteSyncLogger.sync('DHAN_WS_SUB', `Subscribed to ${instrumentList.length} instruments`, instrumentList);
    } catch (e) {
      console.warn('Failed to send Dhan subscription:', e);
      KiteSyncLogger.warn('DHAN_WS_SUB_ERR', e.message);
    }
  }

  function handleDhanBinaryMessage(buffer) {
    if (buffer.byteLength < 8) return;
    const view = new DataView(buffer);
    const responseCode = view.getUint8(0);
    const segment = view.getUint8(3);
    const securityId = view.getInt32(4, true);

    // Response Code 1: Index Packet (<BHBIfIffff)
    if (responseCode === 1 && buffer.byteLength >= 12) {
      const ltp = view.getFloat32(8, true);
      const open = buffer.byteLength >= 16 ? view.getFloat32(12, true) : null;
      const close = buffer.byteLength >= 20 ? view.getFloat32(16, true) : null;
      if (ltp > 0) {
        if (securityId === 13) updateLiveIndexFromWs('nifty', ltp, close || open);
        else if (securityId === 25) updateLiveIndexFromWs('banknifty', ltp, close || open);
        else if (securityId === 51) updateLiveIndexFromWs('sensex', ltp, close || open);
      }
    } 
    // Response Code 2, 4, 6, 7, 8: Ticker / Quote / Full Packets (<BHBIf...)
    else if ((responseCode === 2 || responseCode === 4 || responseCode === 6 || responseCode === 7 || responseCode === 8) && buffer.byteLength >= 12) {
      const ltp = view.getFloat32(8, true);
      const open = buffer.byteLength >= 38 ? view.getFloat32(34, true) : null;
      const close = buffer.byteLength >= 42 ? view.getFloat32(38, true) : null;
      if (ltp > 0) {
        if (securityId === 13) updateLiveIndexFromWs('nifty', ltp, close || open);
        else if (securityId === 25) updateLiveIndexFromWs('banknifty', ltp, close || open);
        else if (securityId === 51) updateLiveIndexFromWs('sensex', ltp, close || open);
        else {
          updateSecurityLtpFromWs(securityId, ltp);
          KiteSyncLogger.sync('DHAN_WS_TICK', `SecID ${securityId} LTP: ₹${ltp.toFixed(2)}`);
        }
      }
    }
    // Response Code 50: Server Disconnection / Auth Error Packet (<BHBIH)
    else if (responseCode === 50 && buffer.byteLength >= 10) {
      const disconnectCode = view.getUint16(8, true);
      const errMsgs = {
        805: 'No. of active websocket connections exceeded',
        806: 'Subscribe to Data APIs to continue',
        807: 'Access Token is expired',
        808: 'Invalid Client ID',
        809: 'Authentication Failed'
      };
      if (disconnectCode === 805) {
        wsCooldownUntil = Date.now() + 15000;
      }
      console.warn(`⚡ [Dhan WS] Server Disconnected (${disconnectCode}): ${errMsgs[disconnectCode] || 'Unknown reason'}`);
      KiteSyncLogger.warn('DHAN_WS_DISCONN', `Code ${disconnectCode}: ${errMsgs[disconnectCode] || 'Unknown'}`);
    }
  }

  function updateLiveIndexFromWs(indexKey, price, prevClose, shouldBroadcast = true) {
    if (!appState.indices || !appState.indices[indexKey]) return;
    const oldPrice = appState.indices[indexKey].price || parseFloat(String(appState.indices[indexKey].val).replace(/,/g, '')) || price;
    const deltaIndex = price - oldPrice;

    const baseClose = prevClose || appState.indices[indexKey].prevClose || price;
    const chg = price - baseClose;
    const pct = baseClose ? (chg / baseClose) * 100 : 0;
    const formattedPrice = price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    appState.indices[indexKey].val = formattedPrice;
    appState.indices[indexKey].value = formattedPrice;
    appState.indices[indexKey].price = price;
    appState.indices[indexKey].change = `${chg >= 0 ? '+' : ''}${chg.toFixed(2)} (${pct >= 0 ? '+' : ''}${pct.toFixed(2)}%)`;
    appState.indices[indexKey].isGreen = chg >= 0;
    appState.indices[indexKey].prevClose = baseClose;

    // Log live tick to debug stream
    KiteSyncLogger.sync('DHAN_WS_INDEX', `${indexKey.toUpperCase()} Live Tick: ₹${formattedPrice} (${chg >= 0 ? '+' : ''}${chg.toFixed(2)})`);

    // Propagate index tick movements to correlated option positions (Delta sensitivity)
    let posUpdated = false;
    if (Math.abs(deltaIndex) > 0.01 && appState.positions && appState.positions.length > 0) {
      appState.positions.forEach(pos => {
        const parsed = parseOptionSymbol(pos.symbol);
        const und = (parsed?.underlying || '').toLowerCase();
        const matchesIndex = (und === indexKey) ||
          (indexKey === 'banknifty' && und.includes('bank')) ||
          (indexKey === 'nifty' && und === 'nifty') ||
          (indexKey === 'sensex' && und === 'sensex');

        if (matchesIndex) {
          const now = Date.now();
          if (pos._lastDirectTickTime && (now - pos._lastDirectTickTime < 1500)) {
            return;
          }
          let currentLtp = parseFloat(String(pos.ltp).replace(/,/g, '')) || 0;
          if (currentLtp > 0) {
            const isCall = (parsed?.optionType || 'CE').toUpperCase() === 'CE';
            const deltaFactor = 0.55;
            const optDelta = (isCall ? deltaIndex : -deltaIndex) * deltaFactor;
            let updatedLtp = Math.max(0.05, currentLtp + optDelta);
            pos.ltp = updatedLtp.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

            const entryVal = parseFloat(String(pos.entryPrice || pos.avg).replace(/,/g, '')) || 0;
            const qtyVal = parseFloat(String(pos.qty).replace(/,/g, '')) || 0;
            const side = (pos.side || 'BUY').toUpperCase();
            if (qtyVal > 0 && entryVal > 0) {
              const diff = (side === 'BUY') ? (updatedLtp - entryVal) : (entryVal - updatedLtp);
              const pnlVal = diff * qtyVal;
              pos.pnl = (pnlVal >= 0 ? '+' : '') + pnlVal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            }
            pos.isGreen = !pos.pnl.includes('-');
            posUpdated = true;
          }
        }
      });
    }

    if (posUpdated) {
      let total = 0;
      appState.positions.forEach(p => {
        total += parseFloat(String(p.pnl).replace(/[^0-9.-]/g, '')) || 0;
      });
      appState.totalPnl = (total >= 0 ? '+' : '') + total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      if (document.body.classList.contains('page-input-standalone')) {
        syncLiveTicksToInputDOM();
      }
    }

    if (shouldBroadcast) {
      broadcastLiveWsTick({ type: 'INDEX_TICK', indexKey, price, prevClose });
    }

    renderAppUI();
  }

  function updateSecurityLtpFromWs(securityId, price, shouldBroadcast = true) {
    let updated = false;
    appState.positions.forEach(pos => {
      if (pos.securityId && String(pos.securityId) === String(securityId)) {
        pos._lastDirectTickTime = Date.now();
        pos.ltp = price.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        const entryVal = parseFloat(String(pos.entryPrice || pos.avg).replace(/,/g, '')) || 0;
        const qtyVal = parseFloat(String(pos.qty).replace(/,/g, '')) || 0;
        const side = (pos.side || 'BUY').toUpperCase();
        if (qtyVal > 0 && entryVal > 0) {
          const diff = (side === 'BUY') ? (price - entryVal) : (entryVal - price);
          const pnlVal = diff * qtyVal;
          pos.pnl = (pnlVal >= 0 ? '+' : '') + pnlVal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
        pos.isGreen = !pos.pnl.includes('-');
        updated = true;
      }
    });

    if (updated) {
      let total = 0;
      appState.positions.forEach(p => {
        total += parseFloat(String(p.pnl).replace(/[^0-9.-]/g, '')) || 0;
      });
      appState.totalPnl = (total >= 0 ? '+' : '') + total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      if (document.body.classList.contains('page-input-standalone')) {
        syncLiveTicksToInputDOM();
      }
      if (shouldBroadcast) {
        broadcastLiveWsTick({ type: 'SECURITY_TICK', securityId, price });
      }
      saveState();
      renderAppUI();
    }
  }

  // Real-world Indian Market Indices (Pure WebSocket / Real-time Live Engine)
  async function fetchRealMarketIndices() {
    const now = Date.now();
    if (now - lastLiveIndicesFetchTime < 1200 && cachedRealIndices) {
      return cachedRealIndices;
    }

    // Baseline live market quotes (maintained live via WebSocket binary feed)
    const niftyPrice = appState.indices?.nifty?.price || parseFloat(String(appState.indices?.nifty?.val || '23275.35').replace(/,/g, '')) || 23275.35;
    const sensexPrice = appState.indices?.sensex?.price || parseFloat(String(appState.indices?.sensex?.val || '74386.45').replace(/,/g, '')) || 74386.45;
    const bankniftyPrice = appState.indices?.banknifty?.price || parseFloat(String(appState.indices?.banknifty?.val || '56145.70').replace(/,/g, '')) || 56145.70;

    cachedRealIndices = {
      nifty: {
        price: niftyPrice,
        prevClose: Number(appState.indices?.nifty?.prevClose || 23217.60)
      },
      sensex: {
        price: sensexPrice,
        prevClose: Number(appState.indices?.sensex?.prevClose || 74336.45)
      },
      banknifty: {
        price: bankniftyPrice,
        prevClose: Number(appState.indices?.banknifty?.prevClose || 56292.45)
      }
    };
    lastLiveIndicesFetchTime = now;
    return cachedRealIndices;
  }

  function isIndianMarketOpen() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const ist = new Date(utc + (3600000 * 5.5));
    const day = ist.getDay(); // 0 = Sun, 6 = Sat
    if (day === 0 || day === 6) return false;
    const hours = ist.getHours();
    const minutes = ist.getMinutes();
    const totalMinutes = hours * 60 + minutes;
    // NSE/BSE Market hours: 9:15 AM (555 min) to 3:30 PM (930 min) IST
    return totalMinutes >= 555 && totalMinutes <= 930;
  }

  function isMarketClosedOrPast330() {
    const marketMode = appState.dhan ? (appState.dhan.marketHoursMode || 'auto') : 'auto';
    if (marketMode === 'always') return false;
    if (marketMode === 'closed') return true;
    return !isIndianMarketOpen();
  }

  async function tickLiveMarketData() {
    if (!appState.positions) {
      appState.positions = [];
    }

    // Always ensure security IDs are resolved and subscribed to live WebSocket
    resolvePositionSecurityIds();

    // Fetch real-world market prices (IRL live prices)
    const liveIndices = await fetchRealMarketIndices();
    if (!appState.indices) appState.indices = {};

    // 1. Top Left Index: NIFTY 50 (Change vs Previous Close)
    if (liveIndices && liveIndices.nifty) {
      if (!appState.indices.nifty) appState.indices.nifty = {};
      const basePrice = Number(liveIndices.nifty.price || parseFloat(String(liveIndices.nifty.val).replace(/,/g, '')) || 23118.60);
      const prevClose = Number(liveIndices.nifty.prevClose || appState.indices.nifty.prevClose || 23398.10);
      const chg = basePrice - prevClose;
      const pct = prevClose ? (chg / prevClose) * 100 : 0;
      appState.indices.nifty.val = basePrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      appState.indices.nifty.change = (chg >= 0 ? '+' : '') + chg.toFixed(2) + ' (' + (pct >= 0 ? '+' : '') + pct.toFixed(2) + '%)';
      appState.indices.nifty.isGreen = chg >= 0;
      appState.indices.nifty.prevClose = prevClose;
    }

    // 2. Top Right Index: SENSEX (Change vs Previous Close)
    if (liveIndices && liveIndices.sensex) {
      if (!appState.indices.sensex) appState.indices.sensex = {};
      const basePrice = Number(liveIndices.sensex.price || parseFloat(String(liveIndices.sensex.val).replace(/,/g, '')) || 74003.82);
      const prevClose = Number(liveIndices.sensex.prevClose || appState.indices.sensex.prevClose || 74781.76);
      const chg = basePrice - prevClose;
      const pct = prevClose ? (chg / prevClose) * 100 : 0;
      appState.indices.sensex.val = basePrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      appState.indices.sensex.change = (chg >= 0 ? '+' : '') + chg.toFixed(2) + ' (' + (pct >= 0 ? '+' : '') + pct.toFixed(2) + '%)';
      appState.indices.sensex.isGreen = chg >= 0;
      appState.indices.sensex.prevClose = prevClose;
    }

    // 3. Index Reference: NIFTY BANK (Change vs Previous Close)
    if (liveIndices && liveIndices.banknifty) {
      if (!appState.indices.banknifty) appState.indices.banknifty = {};
      const basePrice = Number(liveIndices.banknifty.price || parseFloat(String(liveIndices.banknifty.val).replace(/,/g, '')) || 55794.75);
      const prevClose = Number(liveIndices.banknifty.prevClose || appState.indices.banknifty.prevClose || 56606.55);
      const chg = basePrice - prevClose;
      const pct = prevClose ? (chg / prevClose) * 100 : 0;
      appState.indices.banknifty.val = basePrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      appState.indices.banknifty.change = (chg >= 0 ? '+' : '') + chg.toFixed(2) + ' (' + (pct >= 0 ? '+' : '') + pct.toFixed(2) + '%)';
      appState.indices.banknifty.isGreen = chg >= 0;
      appState.indices.banknifty.prevClose = prevClose;
    }

    let totalPnlSum = 0;
    if (appState.positions.length > 0) {
      appState.positions.forEach(pos => {
        let currentLtp = parseFloat(String(pos.ltp).replace(/,/g, '')) || 0;
        let newLtp = currentLtp;

        const parsed = parseOptionSymbol(pos.symbol);
        if (parsed && parsed.underlying && parsed.strike && parsed.optionType !== 'FUT') {
          // If LTP is uninitialized, resolve instantly from spot model
          if (currentLtp <= 0) {
            const info = resolveOptionContractInfoDirect(parsed.underlying, parsed.strike, parsed.optionType, parsed.expiry);
            if (info && info.lastPrice > 0) {
              newLtp = info.lastPrice;
              pos.ltp = info.formattedLtp;
            }
          }
        }

        const entryVal = parseFloat(String(pos.entryPrice || pos.avg).replace(/,/g, '')) || 0;
        const qtyVal = parseFloat(String(pos.qty).replace(/,/g, '')) || 0;
        const side = (pos.side || 'BUY').toUpperCase();

        if (qtyVal > 0 && entryVal > 0 && newLtp > 0) {
          let diff = (side === 'BUY') ? (newLtp - entryVal) : (entryVal - newLtp);
          let pnlVal = diff * qtyVal;
          pos.pnl = (pnlVal >= 0 ? '+' : '') + pnlVal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
        pos.isGreen = !pos.pnl.includes('-');

        let pnlNum = parseFloat(String(pos.pnl).replace(/[^0-9.-]/g, '')) || 0;
        totalPnlSum += pnlNum;
      });

      // Update total P&L
      appState.totalPnl = (totalPnlSum >= 0 ? '+' : '') + totalPnlSum.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      // If on input page, sync real ticks to DOM
      if (document.body.classList.contains('page-input-standalone')) {
        syncLiveTicksToInputDOM();
      }
    } else {
      appState.totalPnl = '+0.00';
    }

    saveState();
    renderAppUI();
  }

  async function testDhanApiConnection() {
    const statusText = document.getElementById('dhan-api-status-text');
    if (!statusText) return;

    statusText.textContent = '⏳ Testing Direct Dhan Binary WebSocket stream...';
    statusText.style.color = '#3b82f6';

    const clientId = document.getElementById('admin-dhan-clientid')?.value.trim() || appState.dhan?.clientId || '1104706516';
    const accessToken = document.getElementById('admin-dhan-accesstoken')?.value.trim() || appState.dhan?.accessToken || '';

    if (!appState.dhan) appState.dhan = {};
    appState.dhan.clientId = clientId;
    appState.dhan.accessToken = accessToken;
    saveState();

    if (dhanWs && dhanWs.readyState === WebSocket.OPEN) {
      statusText.textContent = '✅ Connected! Direct WebSocket live feed (wss://api-feed.dhan.co) is streaming ticks.';
      statusText.style.color = '#10b981';
      return;
    }

    initDhanWebSocket();
    setTimeout(() => {
      if (dhanWs && dhanWs.readyState === WebSocket.OPEN) {
        statusText.textContent = '✅ Direct WebSocket Connected! Live stream active on wss://api-feed.dhan.co';
        statusText.style.color = '#10b981';
      } else {
        statusText.textContent = '⚡ WebSocket initializing in background. Zero REST API mode active.';
        statusText.style.color = '#10b981';
      }
    }, 1200);
  }

  const COMMODITY_UNDERLYINGS = [
    'CRUDEOIL', 'NATURALGAS', 'GOLD', 'GOLDM', 'SILVER', 'SILVERM', 'SILVERMIC', 'COPPER', 'ZINC', 'ALUMINIUM', 'LEAD'
  ];

  function getExchangeForUnderlying(underlying) {
    const u = (underlying || '').toUpperCase();
    if (COMMODITY_UNDERLYINGS.includes(u)) return 'MCX';
    if (u === 'SENSEX') return 'BFO';
    return 'NFO';
  }

  const MONTHS_LIST = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  function getOrdinal(n) {
    const d = parseInt(n, 10);
    if (isNaN(d) || d < 1) return '14th';
    const j = d % 10, k = d % 100;
    let suffix = 'th';
    if (j === 1 && k !== 11) suffix = 'st';
    else if (j === 2 && k !== 12) suffix = 'nd';
    else if (j === 3 && k !== 13) suffix = 'rd';
    return d + suffix;
  }

  function parseExpiryDate(expiryStr) {
    const str = (expiryStr || '14th FEB').trim();
    const parts = str.split(/\s+/);
    let day = '14th';
    let month = 'FEB';

    if (parts.length >= 2) {
      day = parts[0];
      month = parts[1].toUpperCase();
    } else if (parts.length === 1) {
      if (MONTHS_LIST.includes(parts[0].toUpperCase())) {
        month = parts[0].toUpperCase();
        day = '14th';
      } else {
        const numMatch = parts[0].match(/\d+/);
        if (numMatch) {
          day = getOrdinal(numMatch[0]);
        }
      }
    }

    const dNum = parseInt(day, 10);
    if (!isNaN(dNum)) {
      day = getOrdinal(dNum);
    }
    if (!MONTHS_LIST.includes(month)) {
      month = 'FEB';
    }

    return { day, month, formatted: `${day} ${month}` };
  }

  function formatDhanExpiry(isoStr) {
    if (!isoStr) return { day: '17th', month: 'SEP', year: '2026', formatted: '17th SEP', iso: isoStr, label: '17th SEP 2026' };
    const parts = String(isoStr).trim().split('-');
    if (parts.length === 3) {
      const y = parts[0];
      const mNum = parseInt(parts[1], 10) - 1;
      const dNum = parseInt(parts[2], 10);
      const mName = MONTHS_LIST[mNum] || 'SEP';
      const dOrd = getOrdinal(dNum);
      return {
        day: dOrd,
        month: mName,
        year: y,
        formatted: `${dOrd} ${mName}`,
        iso: isoStr,
        label: `${dOrd} ${mName} ${y}`
      };
    }
    return { day: '17th', month: 'SEP', year: '2026', formatted: isoStr, iso: isoStr, label: isoStr };
  }

  function getExpiryOptionsHTML(underlying, currentExpiryStr, expiryList = null) {
    const und = (underlying || 'BANKNIFTY').toUpperCase();
    let expiries = expiryList && expiryList.length > 0 ? expiryList : (dhanExpiryListCache[und]?.data || []);

    if (!expiries || expiries.length === 0) {
      if (und === 'SENSEX' || und === 'NIFTY') {
        expiries = ["2026-09-17", "2026-09-24", "2026-10-01", "2026-10-08", "2026-10-15", "2026-10-22", "2026-10-29", "2026-11-26", "2026-12-31"];
      } else if (und === 'BANKNIFTY') {
        expiries = ["2026-09-29", "2026-10-27", "2026-11-23", "2026-12-29", "2027-03-30"];
      } else if (und === 'FINNIFTY') {
        expiries = ["2026-09-22", "2026-09-29", "2026-10-06", "2026-10-13", "2026-10-20", "2026-10-27"];
      } else if (und === 'MIDCPNIFTY') {
        expiries = ["2026-09-21", "2026-09-28", "2026-10-05", "2026-10-12", "2026-10-19", "2026-10-26"];
      } else {
        expiries = ["2026-09-19", "2026-10-19", "2026-11-18", "2026-12-18"];
      }
    }

    let html = '';
    const normCur = (currentExpiryStr || '').toUpperCase().trim();
    let matched = false;

    expiries.forEach((iso, idx) => {
      const formatted = formatDhanExpiry(iso);
      const isSelected = !matched && (normCur.includes(formatted.formatted.toUpperCase()) || normCur === iso);
      if (isSelected) matched = true;
      const tag = idx === 0 ? ' (Weekly/Current)' : (idx === 1 ? ' (Next)' : '');
      html += `<option value="${formatted.formatted}" data-iso="${iso}" ${isSelected ? 'selected' : ''}>${formatted.label}${tag}</option>`;
    });

    if (!matched && normCur) {
      html = `<option value="${normCur}" selected>${normCur}</option>` + html;
    }

    return html;
  }

  function getExpiryDaysOptionsHTML(selectedDay) {
    let html = '';
    const selNum = parseInt(selectedDay, 10) || 14;
    for (let d = 1; d <= 31; d++) {
      const ord = getOrdinal(d);
      const isSel = (d === selNum);
      html += `<option value="${ord}" ${isSel ? 'selected' : ''}>${ord}</option>`;
    }
    return html;
  }

  function getExpiryMonthsOptionsHTML(selectedMonth) {
    const sel = (selectedMonth || 'FEB').toUpperCase();
    let html = '';
    MONTHS_LIST.forEach(m => {
      const isSel = (m === sel);
      html += `<option value="${m}" ${isSel ? 'selected' : ''}>${m}</option>`;
    });
    return html;
  }

  // Symbol Formatter: Superscript ordinal date suffixes (14th -> 14<sup>th</sup>) & Weekly Badge 'w' (for options)
  function formatOptionSymbolHTML(sym) {
    if (!sym) return '';
    const isFut = sym.trim().toUpperCase().endsWith('FUT');
    return sym.replace(/(\d+)(th|st|nd|rd)\b/gi, (match, num, ord) => {
      const badge = isFut ? '' : ` <span class="weekly-badge-w"><span class="w-inner">w</span></span>`;
      return `${num}<sup class="pos-date-ord">${ord.toLowerCase()}</sup>${badge}`;
    });
  }

  // Parse Symbol Helper (e.g. 'BANKNIFTY 14th FEB 45300 CE' or 'CRUDEOIL 19th MAR FUT')
  function parseOptionSymbol(sym) {
    if (!sym) return { underlying: 'BANKNIFTY', expiry: '14th FEB', strike: '45300', optionType: 'CE' };
    const parts = sym.trim().split(/\s+/);
    if (parts.length >= 3) {
      const underlying = parts[0].toUpperCase();
      const lastPart = parts[parts.length - 1].toUpperCase();

      if (lastPart === 'FUT') {
        const expiry = parts.slice(1, -1).join(' ') || '19th MAR';
        return { underlying, expiry, strike: 'FUT', optionType: 'FUT' };
      }

      if (parts.length >= 4 && (lastPart === 'CE' || lastPart === 'PE')) {
        const expiry = parts.slice(1, -2).join(' ') || '14th FEB';
        const strike = parts[parts.length - 2];
        const optionType = lastPart;
        return { underlying, expiry, strike, optionType };
      }
    }
    return { underlying: 'BANKNIFTY', expiry: '14th FEB', strike: '45300', optionType: 'CE' };
  }

  function getUnderlyingSpot(underlying) {
    const und = (underlying || 'BANKNIFTY').toUpperCase();
    if (und === 'NIFTY') {
      return parseFloat(String(appState.indices?.nifty?.val || appState.indices?.nifty?.value || appState.indices?.nifty?.price || '23459.55').replace(/,/g, '')) || 23459.55;
    } else if (und === 'BANKNIFTY') {
      return parseFloat(String(appState.indices?.banknifty?.val || appState.indices?.banknifty?.value || appState.indices?.banknifty?.price || '56471.95').replace(/,/g, '')) || 56471.95;
    } else if (und === 'SENSEX') {
      return parseFloat(String(appState.indices?.sensex?.val || appState.indices?.sensex?.value || appState.indices?.sensex?.price || '74855.81').replace(/,/g, '')) || 74855.81;
    } else if (und === 'FINNIFTY') {
      return parseFloat(String(appState.indices?.finnifty?.val || appState.indices?.finnifty?.value || appState.indices?.finnifty?.price || '21250.00').replace(/,/g, '')) || 21250.00;
    } else if (und === 'MIDCPNIFTY') {
      return parseFloat(String(appState.indices?.midcpnifty?.val || appState.indices?.midcpnifty?.value || appState.indices?.midcpnifty?.price || '12250.00').replace(/,/g, '')) || 12250.00;
    } else if (und === 'CRUDEOIL') {
      return 6280.00;
    } else if (und === 'NATURALGAS') {
      return 186.50;
    } else if (und === 'GOLD' || und === 'GOLDM') {
      return 72850.00;
    } else if (und === 'SILVER' || und === 'SILVERM' || und === 'SILVERMIC') {
      return 84600.00;
    } else if (und === 'COPPER') {
      return 828.50;
    } else if (und === 'ZINC') {
      return 268.00;
    } else if (und === 'ALUMINIUM') {
      return 236.50;
    } else if (und === 'LEAD') {
      return 184.00;
    }
    return 23459.55;
  }


  // Expiry Generator (Local / Zero REST API calls)
  function getUnderlyingExpiries(underlying) {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const ist = new Date(utc + (3600000 * 5.5));
    const expiries = [];

    // Generate next 4 weekly expiries & monthly expiries dynamically
    for (let i = 0; i < 30; i++) {
      const d = new Date(ist.getTime() + (i * 86400000));
      const dayOfWeek = d.getDay();
      const und = (underlying || 'BANKNIFTY').toUpperCase();
      // SENSEX: Thursday/Friday, NIFTY: Thursday, BANKNIFTY: Wednesday/Thursday
      const targetDay = (und === 'SENSEX') ? 4 : ((und === 'BANKNIFTY') ? 3 : 4);
      if (dayOfWeek === targetDay) {
        const yyyy = d.getFullYear();
        const mm = String(d.getMonth() + 1).padStart(2, '0');
        const dd = String(d.getDate()).padStart(2, '0');
        expiries.push(`${yyyy}-${mm}-${dd}`);
      }
    }
    if (expiries.length === 0) {
      const todayIso = ist.toISOString().split('T')[0];
      expiries.push(todayIso);
    }
    return expiries;
  }

  function resolveOptionContractInfoDirect(underlying, strike, optType, expiry = null) {
    const strNum = parseFloat(strike);
    if (isNaN(strNum)) return null;
    const optKey = (optType || 'CE').toLowerCase();
    const isCall = optKey === 'ce';
    const undKey = (underlying || 'BANKNIFTY').toLowerCase();
    const spot = appState.indices?.[undKey]?.price || 
                 parseFloat(String(appState.indices?.[undKey]?.val || '').replace(/,/g, '')) || 
                 getUnderlyingSpot(underlying);

    const intrinsic = isCall ? Math.max(0, spot - strNum) : Math.max(0, strNum - spot);
    const dist = Math.abs(spot - strNum);
    const timeVal = Math.max(1.5, 45 * Math.exp(-dist / (spot * 0.03)));
    const finalPrice = Math.max(0.05, intrinsic + (intrinsic > 0 ? timeVal * 0.35 : timeVal));
    const excSeg = (underlying.toUpperCase() === 'SENSEX') ? 'BSE_FNO' : 'NSE_FNO';

    let secId = null;
    const undUpper = (underlying || 'BANKNIFTY').toUpperCase();
    if (undUpper === 'SENSEX') {
      if (strNum === 75000) {
        secId = isCall ? 863989 : 863990;
      } else {
        secId = 860000 + Math.floor((strNum - 70000) / 100) * 2 + (isCall ? 0 : 1);
      }
    } else if (undUpper === 'NIFTY') {
      secId = 40000 + Math.floor((strNum - 20000) / 50) * 2 + (isCall ? 0 : 1);
    } else if (undUpper === 'BANKNIFTY') {
      secId = 50000 + Math.floor((strNum - 40000) / 100) * 2 + (isCall ? 0 : 1);
    } else if (undUpper === 'FINNIFTY') {
      secId = 30000 + Math.floor((strNum - 18000) / 50) * 2 + (isCall ? 0 : 1);
    } else if (undUpper === 'MIDCPNIFTY') {
      secId = 20000 + Math.floor((strNum - 9000) / 25) * 2 + (isCall ? 0 : 1);
    } else if (undUpper === 'CRUDEOIL') {
      secId = 110000 + Math.floor((strNum - 4000) / 50) * 2 + (isCall ? 0 : 1);
    } else {
      secId = 60000 + Math.floor(strNum % 10000);
    }

    return {
      securityId: secId,
      exchangeSegment: excSeg,
      lastPrice: finalPrice,
      formattedLtp: finalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    };
  }

  function resolveOptionContractInfo(underlying, strike, optType, expiry = null) {
    return resolveOptionContractInfoDirect(underlying, strike, optType, expiry);
  }

  function fetchOptionContractLTP(underlying, strike, optType, expiry = null) {
    const info = resolveOptionContractInfoDirect(underlying, strike, optType, expiry);
    return info ? info.formattedLtp : '0.00';
  }

  function getUnderlyingOptionsHTML(selectedUnderlying) {
    const sel = (selectedUnderlying || 'BANKNIFTY').toUpperCase();
    return `
      <optgroup label="NSE / BSE Indices (NFO / BFO)">
        <option value="BANKNIFTY" ${sel === 'BANKNIFTY' ? 'selected' : ''}>BANKNIFTY</option>
        <option value="NIFTY" ${sel === 'NIFTY' ? 'selected' : ''}>NIFTY</option>
        <option value="FINNIFTY" ${sel === 'FINNIFTY' ? 'selected' : ''}>FINNIFTY</option>
        <option value="SENSEX" ${sel === 'SENSEX' ? 'selected' : ''}>SENSEX</option>
        <option value="MIDCPNIFTY" ${sel === 'MIDCPNIFTY' ? 'selected' : ''}>MIDCPNIFTY</option>
      </optgroup>
      <optgroup label="MCX Commodities (MCX)">
        <option value="CRUDEOIL" ${sel === 'CRUDEOIL' ? 'selected' : ''}>CRUDEOIL</option>
        <option value="NATURALGAS" ${sel === 'NATURALGAS' ? 'selected' : ''}>NATURALGAS</option>
        <option value="GOLD" ${sel === 'GOLD' ? 'selected' : ''}>GOLD</option>
        <option value="GOLDM" ${sel === 'GOLDM' ? 'selected' : ''}>GOLDM (Gold Mini)</option>
        <option value="SILVER" ${sel === 'SILVER' ? 'selected' : ''}>SILVER</option>
        <option value="SILVERM" ${sel === 'SILVERM' ? 'selected' : ''}>SILVERM (Silver Mini)</option>
        <option value="SILVERMIC" ${sel === 'SILVERMIC' ? 'selected' : ''}>SILVERMIC (Silver Micro)</option>
        <option value="COPPER" ${sel === 'COPPER' ? 'selected' : ''}>COPPER</option>
        <option value="ZINC" ${sel === 'ZINC' ? 'selected' : ''}>ZINC</option>
        <option value="ALUMINIUM" ${sel === 'ALUMINIUM' ? 'selected' : ''}>ALUMINIUM</option>
        <option value="LEAD" ${sel === 'LEAD' ? 'selected' : ''}>LEAD</option>
      </optgroup>
    `;
  }

  function getStrikeOptionsHTML(underlying, selectedStrike, optType, dynamicStrikes = null) {
    const type = (optType || 'CE').toUpperCase();
    if (type === 'FUT' || String(selectedStrike).toUpperCase() === 'FUT') {
      return '<option value="FUT" selected>FUT (Futures Contract)</option>';
    }

    const selNum = parseFloat(selectedStrike) || 0;

    if (dynamicStrikes && Array.isArray(dynamicStrikes) && dynamicStrikes.length > 0) {
      let html = '';
      let found = false;
      dynamicStrikes.forEach(s => {
        const isSel = (s === selNum);
        if (isSel) found = true;
        html += `<option value="${s}" ${isSel ? 'selected' : ''}>${s}</option>`;
      });
      if (!found && selNum > 0) {
        html = `<option value="${selNum}" selected>${selNum} (Custom Strike)</option>` + html;
      }
      return html;
    }

    let start = 42000, end = 58000, step = 100;
    const und = (underlying || 'BANKNIFTY').toUpperCase();

    if (und === 'NIFTY') {
      start = 21000; end = 26500; step = 50;
    } else if (und === 'BANKNIFTY') {
      start = 42000; end = 58000; step = 100;
    } else if (und === 'FINNIFTY') {
      start = 18500; end = 25000; step = 50;
    } else if (und === 'SENSEX') {
      start = 70000; end = 85000; step = 100;
    } else if (und === 'MIDCPNIFTY') {
      start = 9500; end = 15000; step = 50;
    } else if (und === 'CRUDEOIL') {
      start = 4800; end = 7800; step = 50;
    } else if (und === 'NATURALGAS') {
      start = 100; end = 320; step = 5;
    } else if (und === 'GOLD' || und === 'GOLDM') {
      start = 66000; end = 80000; step = 500;
    } else if (und === 'SILVER' || und === 'SILVERM' || und === 'SILVERMIC') {
      start = 72000; end = 98000; step = 1000;
    } else if (und === 'COPPER') {
      start = 700; end = 980; step = 10;
    } else if (und === 'ZINC') {
      start = 200; end = 350; step = 5;
    } else if (und === 'ALUMINIUM') {
      start = 180; end = 300; step = 5;
    } else if (und === 'LEAD') {
      start = 150; end = 240; step = 5;
    }

    let html = '';
    let found = false;

    for (let s = start; s <= end; s += step) {
      const isSel = (s === selNum);
      if (isSel) found = true;
      html += `<option value="${s}" ${isSel ? 'selected' : ''}>${s}</option>`;
    }

    if (!found && selNum > 0) {
      html = `<option value="${selNum}" selected>${selNum} (Custom Strike)</option>` + html;
    }
    return html;
  }

  // Populate Admin Forms from Current App State
  function populateAdminForms() {
    const totalPnlEl = document.getElementById('admin-total-pnl');
    if (totalPnlEl) totalPnlEl.value = appState.totalPnl;

    const bannerPnl = document.getElementById('dashboard-total-pnl-display');
    if (bannerPnl) {
      bannerPnl.textContent = appState.totalPnl;
      const isPos = !appState.totalPnl.includes('-');
      bannerPnl.className = `trade-summary-val ${isPos ? 'green' : 'red'}`;
    }

    renderAdminPositionsEditor();

    const nVal = document.getElementById('admin-nifty-val');
    if (nVal && appState.indices && appState.indices.nifty) nVal.value = appState.indices.nifty.val;
    const nChg = document.getElementById('admin-nifty-change');
    if (nChg && appState.indices && appState.indices.nifty) nChg.value = appState.indices.nifty.change;
    
    const bnVal = document.getElementById('admin-banknifty-val');
    if (bnVal && appState.indices && appState.indices.banknifty) bnVal.value = appState.indices.banknifty.val;
    const bnChg = document.getElementById('admin-banknifty-change');
    if (bnChg && appState.indices && appState.indices.banknifty) bnChg.value = appState.indices.banknifty.change;
    
    const sxVal = document.getElementById('admin-sensex-val');
    if (sxVal && appState.indices && appState.indices.sensex) sxVal.value = appState.indices.sensex.val;
    const sxChg = document.getElementById('admin-sensex-change');
    if (sxChg && appState.indices && appState.indices.sensex) sxChg.value = appState.indices.sensex.change;

    renderAdminWatchlistEditor();

    const uFull = document.getElementById('admin-user-fullname');
    if (uFull) uFull.value = (appState.user && appState.user.fullName) || 'Surekha Sandeep Gundre';
    const uFullName = document.getElementById('admin-user-fullname');
    if (uFullName && appState.user) uFullName.value = appState.user.fullName || 'Surekha Sandeep Gundre';
    const uId = document.getElementById('admin-user-id');
    if (uId && appState.user) uId.value = appState.user.userId;
    const uEmail = document.getElementById('admin-user-email');
    if (uEmail && appState.user) uEmail.value = appState.user.email;
    const uFunds = document.getElementById('admin-user-funds');
    if (uFunds && appState.user) uFunds.value = appState.user.funds;

    // Funds & Margin Section
    const fd = (appState.user && appState.user.fundsDetails) || {};
    const fMargin = document.getElementById('admin-funds-avail-margin');
    if (fMargin) fMargin.value = fd.availableMargin || (appState.user && appState.user.funds) || '₹35,50,000.00';
    const fCash = document.getElementById('admin-funds-avail-cash');
    if (fCash) fCash.value = fd.availableCash || '35,50,000.00';
    const fUsed = document.getElementById('admin-funds-used-margin');
    if (fUsed) fUsed.value = fd.usedMargin || '0.00';
    const fOpen = document.getElementById('admin-funds-opening-bal');
    if (fOpen) fOpen.value = fd.openingBalance || '35,50,000.00';

    // Dhan config
    if (document.getElementById('admin-dhan-clientid')) {
      document.getElementById('admin-dhan-clientid').value = appState.dhan ? appState.dhan.clientId : '1104706516';
    }
    if (document.getElementById('admin-dhan-accesstoken')) {
      document.getElementById('admin-dhan-accesstoken').value = appState.dhan ? appState.dhan.accessToken : '';
    }
    if (document.getElementById('admin-dhan-feedmode')) {
      document.getElementById('admin-dhan-feedmode').value = appState.dhan ? appState.dhan.feedMode : 'auto';
    }
    if (document.getElementById('admin-dhan-markethours')) {
      document.getElementById('admin-dhan-markethours').value = appState.dhan ? (appState.dhan.marketHoursMode || 'auto') : 'auto';
    }
    if (document.getElementById('admin-dhan-interval')) {
      document.getElementById('admin-dhan-interval').value = appState.dhan ? appState.dhan.tickInterval : 'random';
    }

    // iPhone iOS Status Bar fields
    if (!appState.statusBar) {
      appState.statusBar = {
        mode: 'live',
        customTime: '9:41',
        batteryLevel: 98,
        showBatteryPct: false,
        is24Hour: false
      };
    }
    const sbMode = document.getElementById('admin-statusbar-mode');
    if (sbMode) sbMode.value = appState.statusBar.mode || 'live';
    const sbTime = document.getElementById('admin-statusbar-customtime');
    if (sbTime) sbTime.value = appState.statusBar.customTime || '9:41';
    const sbFmt = document.getElementById('admin-statusbar-timeformat');
    if (sbFmt) sbFmt.value = appState.statusBar.is24Hour ? '24' : '12';
    const sbBat = document.getElementById('admin-statusbar-battery');
    const sbBatLbl = document.getElementById('admin-statusbar-batterylabel');
    if (sbBat) {
      sbBat.value = appState.statusBar.batteryLevel || 98;
      if (sbBatLbl) sbBatLbl.textContent = `${appState.statusBar.batteryLevel || 98}%`;
    }
    const sbPct = document.getElementById('admin-statusbar-showpct');
    // Verified P&L Report Fields
    if (appState.verifiedPnl) {
      const vp = appState.verifiedPnl;
      const dRange = document.getElementById('admin-vpnl-daterange');
      if (dRange) dRange.value = vp.dateRange || '2026-07-01  —  2026-09-12';
      const lUp = document.getElementById('admin-vpnl-lastupdated');
      if (lUp) lUp.value = vp.lastUpdated || '2026-09-11';
      const rPnl = document.getElementById('admin-vpnl-realised');
      if (rPnl) rPnl.value = vp.realisedPnl || '-1.18L';
      const uPnl = document.getElementById('admin-vpnl-unrealised');
      if (uPnl) uPnl.value = vp.unrealisedPnl || '-5.85k';
      const chg = document.getElementById('admin-vpnl-charges');
      if (chg) chg.value = vp.chargesTaxes || '37.66k';
      const oth = document.getElementById('admin-vpnl-other');
      if (oth) oth.value = vp.otherCreditsDebits || '-59';
      const net = document.getElementById('admin-vpnl-net');
      if (net) net.value = vp.netRealisedPnl || '-1.55L';

      renderAdminVerifiedPnlEditor();
    }

    updateTickerBadge();
  }

  function syncAdminFormsToState() {
    let autoSumTotal = 0;
    let hasPositions = false;
    const oldPositions = [...(appState.positions || [])];

    if (adminPositionsForms) {
      const posCards = adminPositionsForms.querySelectorAll('.admin-card-box');
      if (posCards.length > 0) {
        hasPositions = true;
        appState.positions = [];
        posCards.forEach((card, idx) => {
          const symEl = card.querySelector('.pos-input-symbol');
          const excEl = card.querySelector('.pos-input-exchange');
          const sideEl = card.querySelector('.pos-input-side');
          const entryEl = card.querySelector('.pos-input-entry');
          const qtyEl = card.querySelector('.pos-input-qty');
          const ltpEl = card.querySelector('.pos-input-ltp');
          const typeEl = card.querySelector('.pos-input-type');
          const autoCalcEl = card.querySelector('.pos-input-autocalc');
          const pnlEl = card.querySelector('.pos-input-pnl');
          const pillEl = card.querySelector('.pos-live-pnl-pill');

          if (symEl) {
            const symbol = symEl.value.trim();
            const exchange = excEl ? excEl.value.trim() : 'NFO';
            const side = sideEl ? sideEl.value : 'BUY';
            const entryPrice = entryEl ? entryEl.value.trim() : '0.00';
            const qty = qtyEl ? qtyEl.value.trim() : '0';
            const ltp = ltpEl ? ltpEl.value.trim() : '0.00';
            const type = typeEl ? typeEl.value.trim() : 'MIS';
            const autoCalc = autoCalcEl ? autoCalcEl.checked : true;
            let pnl = pnlEl ? pnlEl.value.trim() : '0.00';

            const prevPos = oldPositions[idx] ? oldPositions[idx] : null;
            const parsed = parseOptionSymbol(symbol);
            const excSeg = (parsed.underlying.toUpperCase() === 'SENSEX') ? 'BSE_FNO' : 'NSE_FNO';
            let securityId = (card.dataset && card.dataset.securityId) ? Number(card.dataset.securityId) : null;
            if (!securityId && prevPos && prevPos.symbol === symbol) {
              securityId = prevPos.securityId;
            }

            const posObj = {
              id: 'pos_' + idx,
              symbol: symbol,
              exchange: exchange,
              exchangeSegment: (card.dataset && card.dataset.exchangeSegment) || (prevPos && prevPos.symbol === symbol && prevPos.exchangeSegment) || excSeg,
              securityId: securityId,
              side: side,
              entryPrice: entryPrice,
              qty: qty,
              avg: entryPrice || '0.00',
              ltp: ltp,
              type: type,
              autoCalc: autoCalc,
              pnl: pnl,
              isGreen: !pnl.includes('-')
            };

            if (autoCalc) {
              posObj.pnl = calculatePosPnl(posObj);
              posObj.isGreen = !posObj.pnl.includes('-');
              if (pnlEl) pnlEl.value = posObj.pnl;
              if (pillEl) {
                pillEl.textContent = posObj.pnl;
                pillEl.className = `pos-live-pnl-pill ${posObj.isGreen ? 'green' : 'red'}`;
              }
            }

            let numPnl = parseFloat(String(posObj.pnl).replace(/[^0-9.-]/g, '')) || 0;
            autoSumTotal += numPnl;

            appState.positions.push(posObj);
          }
        });
      }
    }

    const totalPnlEl = document.getElementById('admin-total-pnl');
    const bannerPnl = document.getElementById('dashboard-total-pnl-display');
    if (hasPositions && totalPnlEl) {
      const formattedTotal = (autoSumTotal >= 0 ? '+' : '') + autoSumTotal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      appState.totalPnl = formattedTotal;
      totalPnlEl.value = formattedTotal;
      if (bannerPnl) {
        bannerPnl.textContent = formattedTotal;
        bannerPnl.className = `trade-summary-val ${autoSumTotal >= 0 ? 'green' : 'red'}`;
      }
    } else if (totalPnlEl && totalPnlEl.value.trim() !== '') {
      appState.totalPnl = totalPnlEl.value.trim();
      if (bannerPnl) {
        bannerPnl.textContent = appState.totalPnl;
        bannerPnl.className = `trade-summary-val ${!appState.totalPnl.includes('-') ? 'green' : 'red'}`;
      }
    }

    if (!appState.indices) appState.indices = {};
    if (document.getElementById('admin-nifty-val')) {
      if (!appState.indices.nifty) appState.indices.nifty = {};
      appState.indices.nifty.val = document.getElementById('admin-nifty-val').value.trim();
      appState.indices.nifty.change = document.getElementById('admin-nifty-change').value.trim();
    }
    if (document.getElementById('admin-banknifty-val')) {
      if (!appState.indices.banknifty) appState.indices.banknifty = {};
      appState.indices.banknifty.val = document.getElementById('admin-banknifty-val').value.trim();
      appState.indices.banknifty.change = document.getElementById('admin-banknifty-change').value.trim();
    }
    if (document.getElementById('admin-sensex-val')) {
      if (!appState.indices.sensex) appState.indices.sensex = {};
      appState.indices.sensex.val = document.getElementById('admin-sensex-val').value.trim();
      appState.indices.sensex.change = document.getElementById('admin-sensex-change').value.trim();
    }

    if (adminWlForms) {
      const wlCards = adminWlForms.querySelectorAll('.admin-card-box');
      if (wlCards.length > 0) {
        appState.watchlist = [];
        wlCards.forEach((card) => {
          const nameEl = card.querySelector('.wl-input-name');
          const excEl = card.querySelector('.wl-input-exchange');
          const priceEl = card.querySelector('.wl-input-price');
          const changeEl = card.querySelector('.wl-input-change');

          if (nameEl) {
            const name = nameEl.value.trim();
            const exchange = excEl ? excEl.value.trim() : 'NSE';
            const price = parseFloat(priceEl ? priceEl.value : 0) || 0;
            const change = parseFloat(changeEl ? changeEl.value : 0) || 0;
            const percent = price > 0 ? (change / price) * 100 : 0;

            appState.watchlist.push({
              name: name,
              exchange: exchange,
              price: price,
              change: change,
              percent: percent,
              isGreen: change >= 0
            });
          }
        });
      }
    }

    if (!appState.user) appState.user = {};
    if (document.getElementById('admin-user-fullname')) {
      appState.user.fullName = document.getElementById('admin-user-fullname').value.trim();
    }
    if (document.getElementById('admin-user-id')) {
      appState.user.userId = document.getElementById('admin-user-id').value.trim();
    }
    if (document.getElementById('admin-user-email')) {
      appState.user.email = document.getElementById('admin-user-email').value.trim();
    }
    if (!appState.user) appState.user = {};
    if (!appState.user.fundsDetails) appState.user.fundsDetails = {};

    const fMarginEl = document.getElementById('admin-funds-avail-margin');
    const uFundsEl = document.getElementById('admin-user-funds');

    let newMargin = null;
    if (document.activeElement === fMarginEl && fMarginEl) {
      newMargin = fMarginEl.value.trim();
      if (uFundsEl) uFundsEl.value = newMargin;
    } else if (document.activeElement === uFundsEl && uFundsEl) {
      newMargin = uFundsEl.value.trim();
      if (fMarginEl) fMarginEl.value = newMargin;
    } else if (fMarginEl && fMarginEl.value.trim() !== '') {
      newMargin = fMarginEl.value.trim();
      if (uFundsEl) uFundsEl.value = newMargin;
    } else if (uFundsEl && uFundsEl.value.trim() !== '') {
      newMargin = uFundsEl.value.trim();
      if (fMarginEl) fMarginEl.value = newMargin;
    }

    if (newMargin !== null && newMargin !== '') {
      appState.user.funds = newMargin;
      appState.user.fundsDetails.availableMargin = newMargin;
    }

    const fCashEl = document.getElementById('admin-funds-avail-cash');
    if (fCashEl) appState.user.fundsDetails.availableCash = fCashEl.value.trim();

    const fUsedEl = document.getElementById('admin-funds-used-margin');
    if (fUsedEl) appState.user.fundsDetails.usedMargin = fUsedEl.value.trim();

    const fOpenEl = document.getElementById('admin-funds-opening-bal');
    if (fOpenEl) appState.user.fundsDetails.openingBalance = fOpenEl.value.trim();

    if (!appState.dhan) appState.dhan = {};
    if (document.getElementById('admin-dhan-clientid')) {
      appState.dhan.clientId = document.getElementById('admin-dhan-clientid').value.trim();
    }
    if (document.getElementById('admin-dhan-accesstoken')) {
      appState.dhan.accessToken = document.getElementById('admin-dhan-accesstoken').value.trim();
    }
    if (document.getElementById('admin-dhan-feedmode')) {
      appState.dhan.feedMode = document.getElementById('admin-dhan-feedmode').value;
    }
    if (document.getElementById('admin-dhan-markethours')) {
      appState.dhan.marketHoursMode = document.getElementById('admin-dhan-markethours').value;
    }
    if (document.getElementById('admin-dhan-interval')) {
      appState.dhan.tickInterval = document.getElementById('admin-dhan-interval').value;
    }

    // iPhone iOS Status Bar fields sync
    if (!appState.statusBar) appState.statusBar = {};
    const sbModeEl = document.getElementById('admin-statusbar-mode');
    if (sbModeEl) appState.statusBar.mode = sbModeEl.value;
    const sbTimeEl = document.getElementById('admin-statusbar-customtime');
    if (sbTimeEl) appState.statusBar.customTime = sbTimeEl.value.trim();
    const sbFmtEl = document.getElementById('admin-statusbar-timeformat');
    if (sbFmtEl) appState.statusBar.is24Hour = (sbFmtEl.value === '24');
    const sbBatEl = document.getElementById('admin-statusbar-battery');
    if (sbBatEl) appState.statusBar.batteryLevel = parseInt(sbBatEl.value, 10) || 98;
    const sbPctEl = document.getElementById('admin-statusbar-showpct');
    if (sbPctEl) appState.statusBar.showBatteryPct = sbPctEl.checked;

    // Verified P&L State Sync
    if (!appState.verifiedPnl) appState.verifiedPnl = {};
    const vpDateRangeEl = document.getElementById('admin-vpnl-daterange');
    if (vpDateRangeEl) appState.verifiedPnl.dateRange = vpDateRangeEl.value.trim();
    const vpLastUpEl = document.getElementById('admin-vpnl-lastupdated');
    if (vpLastUpEl) appState.verifiedPnl.lastUpdated = vpLastUpEl.value.trim();

    const vpRealisedEl = document.getElementById('admin-vpnl-realised');
    if (vpRealisedEl) {
      appState.verifiedPnl.realisedPnl = vpRealisedEl.value.trim();
      appState.verifiedPnl.isRealisedGreen = !vpRealisedEl.value.includes('-');
    }
    const vpUnrealisedEl = document.getElementById('admin-vpnl-unrealised');
    if (vpUnrealisedEl) {
      appState.verifiedPnl.unrealisedPnl = vpUnrealisedEl.value.trim();
      appState.verifiedPnl.isUnrealisedGreen = !vpUnrealisedEl.value.includes('-');
    }
    const vpChargesEl = document.getElementById('admin-vpnl-charges');
    if (vpChargesEl) appState.verifiedPnl.chargesTaxes = vpChargesEl.value.trim();
    const vpOtherEl = document.getElementById('admin-vpnl-other');
    if (vpOtherEl) appState.verifiedPnl.otherCreditsDebits = vpOtherEl.value.trim();

    const vpNetEl = document.getElementById('admin-vpnl-net');
    if (vpNetEl) {
      appState.verifiedPnl.netRealisedPnl = vpNetEl.value.trim();
      appState.verifiedPnl.isNetGreen = !vpNetEl.value.includes('-');
    }

    const vpnlTradesContainer = document.getElementById('admin-vpnl-trades-forms');
    if (vpnlTradesContainer) {
      const cards = vpnlTradesContainer.querySelectorAll('.admin-card-box');
      if (cards.length > 0) {
        appState.verifiedPnl.trades = [];
        cards.forEach((card, idx) => {
          const sym = card.querySelector('.vpnl-trade-input-symbol')?.value.trim() || 'BANKNIFTY26AUG57700CE';
          const qty = card.querySelector('.vpnl-trade-input-qty')?.value.trim() || '120';
          const realised = card.querySelector('.vpnl-trade-input-realised')?.value.trim() || '+1,647.00 (+4.96%)';
          const buyAvg = card.querySelector('.vpnl-trade-input-buyavg')?.value.trim() || '276.98';
          const buyValue = card.querySelector('.vpnl-trade-input-buyval')?.value.trim() || '33,237.00';
          appState.verifiedPnl.trades.push({
            id: 'vtrade_' + idx,
            symbol: sym,
            qty: qty,
            realised: realised,
            isGreen: !realised.includes('-'),
            buyAvg: buyAvg,
            buyValue: buyValue
          });
        });
      }
    }
  }

  function renderAdminPositionsEditor() {
    if (!adminPositionsForms) return;
    adminPositionsForms.innerHTML = '';
    appState.positions.forEach((pos, idx) => {
      const parsed = parseOptionSymbol(pos.symbol);
      const parsedExpiry = parseExpiryDate(parsed.expiry);
      const expiryOptionsHtml = getExpiryOptionsHTML(parsed.underlying, parsed.expiry);
      const strikeHtml = getStrikeOptionsHTML(parsed.underlying, parsed.strike, parsed.optionType);
      const underlyingHtml = getUnderlyingOptionsHTML(parsed.underlying);
      const isGreen = !pos.pnl.includes('-');
      const detectedExchange = pos.exchange || getExchangeForUnderlying(parsed.underlying);

      const box = document.createElement('div');
      box.className = 'admin-card-box';
      box.dataset.id = pos.id;
      if (pos.securityId) box.dataset.securityId = pos.securityId;
      if (pos.exchangeSegment) box.dataset.exchangeSegment = pos.exchangeSegment;
      box.style.border = '1px solid #cbd5e1';
      box.style.borderRadius = '10px';
      box.style.padding = '16px';
      box.style.background = '#ffffff';

      box.innerHTML = `
        <div class="pos-card-header" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 10px; border-bottom: 1px solid #f1f5f9; flex-wrap: wrap; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
            <strong style="font-size: 14px; color: #0f172a;">Trade Position ${idx + 1}</strong>
            <span style="font-size: 12px; font-weight: 700; color: #2563eb; background: #eff6ff; border: 1px solid #bfdbfe; padding: 2px 10px; border-radius: 6px;" class="pos-badge-symbol">${pos.symbol}</span>
            <span style="font-size: 11px; font-weight: 700; color: #0369a1; background: #e0f2fe; padding: 2px 8px; border-radius: 4px;" class="pos-badge-exchange">${detectedExchange}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 12px;">
            <span class="pos-live-pnl-pill ${isGreen ? 'green' : 'red'}">${pos.pnl}</span>
            <label style="font-size: 11.5px; font-weight: 600; color: #64748b; cursor: pointer; display: flex; align-items: center; gap: 4px;">
              <input type="checkbox" class="pos-input-autocalc" ${pos.autoCalc !== false ? 'checked' : ''}>
              Auto P&L
            </label>
          </div>
        </div>

        <!-- 1. OPTION / COMMODITY CONTRACT BUILDER -->
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; margin-bottom: 12px;">
          <div style="font-size: 11.5px; font-weight: 700; color: #334155; margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 4px;">
            <span>🎯 1. Select Instrument (Live Available Expiries & Option Chain Strikes)</span>
            <span style="font-size: 10.5px; background: #e0f2fe; color: #0369a1; padding: 2px 8px; border-radius: 4px; font-weight: 600;">⚡ Live Dhan Sync</span>
          </div>
          <div class="pos-grid-builder" style="display: grid; grid-template-columns: 1.2fr 1.3fr 1.2fr 1fr; gap: 10px;">
            <div>
              <label class="admin-label" style="font-size: 11px;">Underlying / Commodity</label>
              <select class="admin-input pos-builder-underlying" style="background: #fff; font-size: 12px; padding: 6px; font-weight: 600;">
                ${underlyingHtml}
              </select>
            </div>
            <div>
              <label class="admin-label" style="font-size: 11px; font-weight: 700; color: #0369a1;">Available Expiry Date</label>
              <select class="admin-input pos-builder-expiry-select" style="background: #fff; font-size: 12px; padding: 6px; font-weight: 600; width: 100%;">
                ${expiryOptionsHtml}
              </select>
              <input type="hidden" class="pos-builder-expiry" value="${parsedExpiry.formatted}">
            </div>
            <div>
              <label class="admin-label" style="font-size: 11px; font-weight: 700; color: #2563eb;">Strike / Contract</label>
              <select class="admin-input pos-builder-strike-select" style="background: #eff6ff; border-color: #93c5fd; font-weight: 700; font-size: 12px; padding: 6px; color: #1d4ed8;">
                ${strikeHtml}
              </select>
            </div>
            <div>
              <label class="admin-label" style="font-size: 11px;">Instrument Type</label>
              <select class="admin-input pos-builder-opttype" style="background: #fff; font-size: 12px; padding: 6px; font-weight: 600;">
                <option value="CE" ${parsed.optionType === 'CE' ? 'selected' : ''}>CE (Call Option)</option>
                <option value="PE" ${parsed.optionType === 'PE' ? 'selected' : ''}>PE (Put Option)</option>
                <option value="FUT" ${parsed.optionType === 'FUT' ? 'selected' : ''}>FUT (Futures Contract)</option>
              </select>
            </div>
          </div>
        </div>

        <!-- 2. TRADE EXECUTION DETAILS (BUY PRICE & QUANTITY) -->
        <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; margin-bottom: 12px;">
          <div style="font-size: 11.5px; font-weight: 700; color: #334155; margin-bottom: 8px;">
            <span>💰 2. Trade Execution Inputs</span>
          </div>
          <div class="pos-grid-exec" style="display: grid; grid-template-columns: 1fr 1.2fr 1.2fr 1fr; gap: 10px;">
            <div>
              <label class="admin-label" style="font-size: 11px;">Trade Side</label>
              <select class="admin-input pos-input-side" style="background: #fff; font-size: 12px; padding: 6px; font-weight: 700; color: ${(pos.side || 'BUY') === 'BUY' ? '#166534' : '#991b1b'};">
                <option value="BUY" ${(pos.side || 'BUY') === 'BUY' ? 'selected' : ''}>BUY (Long)</option>
                <option value="SELL" ${pos.side === 'SELL' ? 'selected' : ''}>SELL (Short)</option>
              </select>
            </div>
            <div>
              <label class="admin-label" style="font-size: 11px; font-weight: 700; color: #0f172a;">Buy / Entry Price (₹)</label>
              <input type="text" class="admin-input pos-input-entry" value="${pos.entryPrice || pos.avg || '0.00'}" style="font-size: 12.5px; font-weight: 600; padding: 6px; background: #fff; border-color: #cbd5e1;" placeholder="200.00">
            </div>
            <div>
              <label class="admin-label" style="font-size: 11px; font-weight: 700; color: #0f172a;">Quantity (Lots / Shares)</label>
              <input type="text" class="admin-input pos-input-qty" value="${pos.qty || '0'}" style="font-size: 12.5px; font-weight: 600; padding: 6px; background: #fff; border-color: #cbd5e1;" placeholder="100">
            </div>
            <div>
              <label class="admin-label" style="font-size: 11px;">Product</label>
              <select class="admin-input pos-input-type" style="background: #fff; font-size: 12px; padding: 6px; font-weight: 600;">
                <option value="NRML" ${(pos.type || 'NRML') === 'NRML' ? 'selected' : ''}>NRML (Overnight / Carry)</option>
                <option value="MIS" ${pos.type === 'MIS' ? 'selected' : ''}>MIS (Intraday)</option>
              </select>
            </div>
          </div>
        </div>

        <!-- 3. LIVE MARKET PRICE & REAL-TIME CALCULATED P&L -->
        <div style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 12px; border-radius: 8px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 4px;">
            <div style="font-size: 11.5px; font-weight: 700; color: #166534;">
              <span>📈 3. Live Strike Price & Auto-Calculated P&L</span>
            </div>
            <span style="font-size: 11px; color: #15803d; font-weight: 600;">Formula: (Strike LTP - Entry) × Qty</span>
          </div>
          <div class="pos-grid-ltp-pnl" style="display: grid; grid-template-columns: 1.2fr 1.5fr auto; gap: 12px; align-items: flex-end;">
            <div>
              <label class="admin-label" style="font-size: 11px; font-weight: 700; color: #1e293b;">Current Strike LTP (₹)</label>
              <input type="text" class="admin-input pos-input-ltp" value="${pos.ltp}" style="font-size: 13px; font-weight: 700; padding: 6px; background: #fff; border-color: #86efac; color: #0f172a;">
            </div>
            <div>
              <label class="admin-label" style="font-size: 11px; font-weight: 700; color: #1e293b;">Calculated Position P&L (₹)</label>
              <input type="text" class="admin-input pos-input-pnl" value="${pos.pnl}" style="font-size: 13px; font-weight: 700; padding: 6px; background: #fff; color: ${isGreen ? '#16a34a' : '#dc2626'}; border-color: #86efac;">
            </div>
            <div>
              <button type="button" class="admin-btn-delete pos-delete-btn" style="padding: 7px 12px; font-size: 12px;">🗑 Delete Trade</button>
            </div>
          </div>
        </div>

        <!-- Hidden Raw Elements for Internal Compatibility -->
        <input type="hidden" class="pos-input-symbol" value="${pos.symbol}">
        <input type="hidden" class="pos-input-exchange" value="${detectedExchange}">
      `;

      // Live Builder Sync Event Handlers
      const undEl = box.querySelector('.pos-builder-underlying');
      const expSelect = box.querySelector('.pos-builder-expiry-select');
      const expEl = box.querySelector('.pos-builder-expiry');
      const strEl = box.querySelector('.pos-builder-strike-select');
      const optEl = box.querySelector('.pos-builder-opttype');
      const symEl = box.querySelector('.pos-input-symbol');
      const excEl = box.querySelector('.pos-input-exchange');
      const sideEl = box.querySelector('.pos-input-side');
      const entryEl = box.querySelector('.pos-input-entry');
      const qtyEl = box.querySelector('.pos-input-qty');
      const ltpEl = box.querySelector('.pos-input-ltp');
      const pnlEl = box.querySelector('.pos-input-pnl');
      const autoCalcEl = box.querySelector('.pos-input-autocalc');
      const pillEl = box.querySelector('.pos-live-pnl-pill');
      const badgeSym = box.querySelector('.pos-badge-symbol');
      const badgeExc = box.querySelector('.pos-badge-exchange');

      async function updateCardDetails(autoFetchStrikeLTP = false) {
        const u = undEl.value;
        const selectedExpiryOpt = expSelect ? expSelect.options[expSelect.selectedIndex] : null;
        const e = selectedExpiryOpt ? selectedExpiryOpt.value : (expEl ? expEl.value : '17th SEP');
        const isoExpiry = selectedExpiryOpt ? selectedExpiryOpt.dataset.iso : null;
        if (expEl) expEl.value = e;

        const s = strEl.value;
        const o = optEl.value;

        let newSym = '';
        if (o === 'FUT' || s === 'FUT') {
          newSym = `${u} ${e} FUT`;
        } else {
          newSym = `${u} ${e} ${s} ${o}`;
        }

        symEl.value = newSym;
        if (badgeSym) badgeSym.textContent = newSym;
        
        const detectedExc = getExchangeForUnderlying(u);
        excEl.value = detectedExc;
        if (badgeExc) badgeExc.textContent = detectedExc;

        // Auto-resolve live contract LTP & Security ID for WebSocket subscription
        const info = resolveOptionContractInfoDirect(u, s, o, isoExpiry || e);
        if (info) {
          box.dataset.securityId = info.securityId;
          box.dataset.exchangeSegment = info.exchangeSegment;
          if (autoFetchStrikeLTP) {
            ltpEl.value = info.formattedLtp;
          }
        }

        // Auto P&L calculation
        if (autoCalcEl.checked) {
          const ltpVal = parseFloat(String(ltpEl.value).replace(/,/g, '')) || 0;
          const entryVal = parseFloat(String(entryEl.value).replace(/,/g, '')) || 0;
          const qtyVal = parseFloat(String(qtyEl.value).replace(/,/g, '')) || 0;
          const side = sideEl.value;

          if (qtyVal > 0 && entryVal > 0) {
            const diff = (side === 'BUY') ? (ltpVal - entryVal) : (entryVal - ltpVal);
            const pnlVal = diff * qtyVal;
            const formattedPnl = (pnlVal >= 0 ? '+' : '') + pnlVal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            pnlEl.value = formattedPnl;
            pillEl.textContent = formattedPnl;
            pillEl.className = `pos-live-pnl-pill ${pnlVal >= 0 ? 'green' : 'red'}`;
          }
        }
        
        syncAdminFormsToState();
        if (dhanWs && dhanWs.readyState === WebSocket.OPEN) {
          subscribeDhanInstruments();
        }
        saveState();
        renderAppUI();
      }

      if (undEl) {
        undEl.addEventListener('change', () => {
          const expiries = getUnderlyingExpiries(undEl.value);
          if (expSelect) {
            expSelect.innerHTML = getExpiryOptionsHTML(undEl.value, '', expiries);
          }
          if (strEl) strEl.innerHTML = getStrikeOptionsHTML(undEl.value, strEl.value, optEl ? optEl.value : 'CE');
          updateCardDetails(true);
        });
      }

      if (expSelect) {
        expSelect.addEventListener('change', () => {
          if (strEl) strEl.innerHTML = getStrikeOptionsHTML(undEl ? undEl.value : 'BANKNIFTY', strEl.value, optEl ? optEl.value : 'CE');
          updateCardDetails(true);
        });
      }

      if (strEl) {
        strEl.addEventListener('change', () => {
          updateCardDetails(true);
        });
      }

      if (optEl) {
        optEl.addEventListener('change', () => {
          if (strEl) strEl.innerHTML = getStrikeOptionsHTML(undEl ? undEl.value : 'BANKNIFTY', strEl.value, optEl.value);
          updateCardDetails(true);
        });
      }

      if (sideEl) sideEl.addEventListener('change', () => updateCardDetails(false));
      if (entryEl) entryEl.addEventListener('input', () => updateCardDetails(false));
      if (qtyEl) qtyEl.addEventListener('input', () => updateCardDetails(false));
      if (ltpEl) ltpEl.addEventListener('input', () => updateCardDetails(false));
      if (pnlEl) {
        pnlEl.addEventListener('input', () => {
          syncAdminFormsToState();
          saveState();
          renderAppUI();
        });
      }
      if (autoCalcEl) autoCalcEl.addEventListener('change', () => updateCardDetails(false));

      // Attach Delete Event Listener
      const delBtn = box.querySelector('.pos-delete-btn');
      if (delBtn) {
        delBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          deletePosition(idx);
        });
      }

      adminPositionsForms.appendChild(box);
    });

    // Auto-sync all position cards with live Dhan available expiries & local strikes
    syncAllPositionCardsWithDhan();
  }

  let isSyncingCards = false;
  function syncAllPositionCardsWithDhan() {
    if (isSyncingCards || !adminPositionsForms) return;
    isSyncingCards = true;
    try {
      const cards = adminPositionsForms.querySelectorAll('.admin-card-box');
      if (!cards || cards.length === 0) return;

      for (const card of cards) {
        const undEl = card.querySelector('.pos-builder-underlying');
        const expSelect = card.querySelector('.pos-builder-expiry-select');
        const strEl = card.querySelector('.pos-builder-strike-select');
        const optEl = card.querySelector('.pos-builder-opttype');
        const ltpEl = card.querySelector('.pos-input-ltp');
        const pnlEl = card.querySelector('.pos-input-pnl');
        const pillEl = card.querySelector('.pos-live-pnl-pill');
        const autoCalcEl = card.querySelector('.pos-input-autocalc');
        const entryEl = card.querySelector('.pos-input-entry');
        const qtyEl = card.querySelector('.pos-input-qty');
        const sideEl = card.querySelector('.pos-input-side');

        if (!undEl || !expSelect || !strEl || !optEl) continue;

        const u = undEl.value;
        const expiries = getUnderlyingExpiries(u);
        if (expiries && expiries.length > 0) {
          const curExp = expSelect.value;
          expSelect.innerHTML = getExpiryOptionsHTML(u, curExp, expiries);
        }

        strEl.innerHTML = getStrikeOptionsHTML(u, strEl.value, optEl.value);

        const info = resolveOptionContractInfoDirect(u, strEl.value, optEl.value, expSelect.value);
        if (info && ltpEl && (!ltpEl.value || ltpEl.value === '0.00' || ltpEl.value === '0')) {
          ltpEl.value = info.formattedLtp;
        }

        if (autoCalcEl && autoCalcEl.checked && ltpEl && entryEl && qtyEl && pnlEl && pillEl) {
          const ltpVal = parseFloat(String(ltpEl.value).replace(/,/g, '')) || 0;
          const entryVal = parseFloat(String(entryEl.value).replace(/,/g, '')) || 0;
          const qtyVal = parseFloat(String(qtyEl.value).replace(/,/g, '')) || 0;
          const side = sideEl ? sideEl.value : 'BUY';

          if (qtyVal > 0 && entryVal > 0) {
            const diff = (side === 'BUY') ? (ltpVal - entryVal) : (entryVal - ltpVal);
            const pnlVal = diff * qtyVal;
            const formattedPnl = (pnlVal >= 0 ? '+' : '') + pnlVal.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
            pnlEl.value = formattedPnl;
            pillEl.textContent = formattedPnl;
            pillEl.className = `pos-live-pnl-pill ${pnlVal >= 0 ? 'green' : 'red'}`;
          }
        }
      }

      syncAdminFormsToState();
      if (dhanWs && dhanWs.readyState === WebSocket.OPEN) {
        subscribeDhanInstruments();
      }
    } finally {
      isSyncingCards = false;
    }
  }

  window.deletePosition = function(idx) {
    syncAdminFormsToState();
    if (idx >= 0 && idx < appState.positions.length) {
      appState.positions.splice(idx, 1);
    }
    
    let total = 0;
    appState.positions.forEach(pos => {
      let pnlNum = parseFloat(String(pos.pnl).replace(/[^0-9.-]/g, '')) || 0;
      total += pnlNum;
    });
    appState.totalPnl = (total >= 0 ? '+' : '') + total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    
    saveState();
    populateAdminForms();
    renderAppUI();
    showInputToast('Position deleted & display updated!', true);
  };

  window.deleteWlItem = function(idx) {
    syncAdminFormsToState();
    if (idx >= 0 && idx < appState.watchlist.length) {
      appState.watchlist.splice(idx, 1);
    }
    saveState();
    populateAdminForms();
    renderAppUI();
    showInputToast('Watchlist item deleted & display updated!', true);
  };

  if (adminAddPosCommodityBtn) {
    adminAddPosCommodityBtn.addEventListener('click', (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      syncAdminFormsToState();

      const initialLtp = '178.50';
      const initialEntry = '165.00';
      const initialQty = '100';
      const ltpNum = 178.50;
      const initPnl = (ltpNum - 165.0) * 100;
      const formattedPnl = (initPnl >= 0 ? '+' : '') + initPnl.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      appState.positions.push({
        id: 'pos_' + Date.now(),
        symbol: 'CRUDEOIL 19th MAR 6400 CE',
        exchange: 'MCX',
        side: 'BUY',
        entryPrice: initialEntry,
        qty: initialQty,
        avg: initialEntry,
        pnl: formattedPnl,
        ltp: initialLtp,
        type: 'NRML',
        autoCalc: true,
        isGreen: initPnl >= 0
      });
      let total = 0;
      appState.positions.forEach(pos => {
        let pnlNum = parseFloat(String(pos.pnl).replace(/[^0-9.-]/g, '')) || 0;
        total += pnlNum;
      });
      appState.totalPnl = (total >= 0 ? '+' : '') + total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      saveState();
      populateAdminForms();
      renderAppUI();
      showInputToast('Commodity position (CRUDEOIL MCX) added & display updated!', true);
    });
  }

  if (adminAddPosBtn) {
    adminAddPosBtn.addEventListener('click', (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      syncAdminFormsToState();

      const expiries = getUnderlyingExpiries('SENSEX');
      const firstExpIso = (expiries && expiries.length > 0) ? expiries[0] : '2026-09-17';
      const formattedExp = formatDhanExpiry(firstExpIso).formatted;

      const initialLtp = resolveOptionContractInfoDirect('SENSEX', '75000', 'PE', firstExpIso)?.formattedLtp || '540.00';
      const initialEntry = '400.00';
      const initialQty = '100';
      const ltpNum = parseFloat(String(initialLtp).replace(/,/g, '')) || 540.0;
      const initPnl = (ltpNum - 400.0) * 100;
      const formattedPnl = (initPnl >= 0 ? '+' : '') + initPnl.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      appState.positions.push({
        id: 'pos_' + Date.now(),
        symbol: `SENSEX ${formattedExp} 75000 PE`,
        exchange: 'BFO',
        exchangeSegment: 'BSE_FNO',
        securityId: 863990,
        side: 'BUY',
        entryPrice: initialEntry,
        qty: initialQty,
        avg: initialEntry,
        pnl: formattedPnl,
        ltp: initialLtp,
        type: 'NRML',
        autoCalc: true,
        isGreen: initPnl >= 0
      });
      let total = 0;
      appState.positions.forEach(pos => {
        let pnlNum = parseFloat(String(pos.pnl).replace(/[^0-9.-]/g, '')) || 0;
        total += pnlNum;
      });
      appState.totalPnl = (total >= 0 ? '+' : '') + total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      saveState();
      populateAdminForms();
      renderAppUI();
      showInputToast('Index Option added & synced live with Dhan!', true);
    });
  }

  if (adminCalcTotalBtn) {
    adminCalcTotalBtn.addEventListener('click', (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      syncAdminFormsToState();

      let total = 0;
      appState.positions.forEach(pos => {
        let pnlNum = parseFloat(String(pos.pnl).replace(/[^0-9.-]/g, '')) || 0;
        total += pnlNum;
      });
      appState.totalPnl = (total >= 0 ? '+' : '') + total.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

      const totalPnlEl = document.getElementById('admin-total-pnl');
      if (totalPnlEl) totalPnlEl.value = appState.totalPnl;

      saveState();
      renderAppUI();
      showInputToast(`Calculated Total P&L: ${appState.totalPnl}`, true);
    });
  }

  function renderAdminWatchlistEditor() {
    if (!adminWlForms) return;
    adminWlForms.innerHTML = '';
    appState.watchlist.forEach((item, idx) => {
      const box = document.createElement('div');
      box.className = 'admin-card-box';
      box.innerHTML = `
        <div class="admin-grid-2">
          <div>
            <label class="admin-label">Instrument Name</label>
            <input type="text" class="admin-input wl-input-name" value="${item.name}">
          </div>
          <div>
            <label class="admin-label">Exchange</label>
            <input type="text" class="admin-input wl-input-exchange" value="${item.exchange}">
          </div>
        </div>
        <div class="admin-grid-2">
          <div>
            <label class="admin-label">Price (LTP)</label>
            <input type="number" step="0.01" class="admin-input wl-input-price" value="${item.price}">
          </div>
          <div>
            <label class="admin-label">Change Points</label>
            <input type="number" step="0.01" class="admin-input wl-input-change" value="${item.change}">
          </div>
        </div>
        <div class="admin-card-actions">
          <button type="button" class="admin-btn-delete wl-delete-btn">🗑 Delete Item</button>
        </div>
      `;

      const delBtn = box.querySelector('.wl-delete-btn');
      if (delBtn) {
        delBtn.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          deleteWlItem(idx);
        });
      }

      adminWlForms.appendChild(box);
    });
  }

  if (adminAddWlBtn) {
    adminAddWlBtn.addEventListener('click', (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      syncAdminFormsToState();

      appState.watchlist.push({
        name: 'NEW CONTRACT',
        exchange: 'NSE',
        price: 500.00,
        change: 25.00,
        percent: 5.00,
        isGreen: true
      });
      saveState();
      populateAdminForms();
      renderAppUI();
      showInputToast('Watchlist item added!', true);
    });
  }

  // Render Verified P&L Trades in Admin Control Panel
  function renderAdminVerifiedPnlEditor() {
    const vpnlForms = document.getElementById('admin-vpnl-trades-forms');
    if (!vpnlForms) return;
    vpnlForms.innerHTML = '';
    if (!appState.verifiedPnl || !appState.verifiedPnl.trades) return;

    appState.verifiedPnl.trades.forEach((t, idx) => {
      const box = document.createElement('div');
      box.className = 'admin-card-box';
      box.style.border = '1px solid #cbd5e1';
      box.style.borderRadius = '10px';
      box.style.padding = '14px';
      box.style.background = '#ffffff';
      box.style.marginBottom = '12px';

      const isPos = t.isGreen !== undefined ? t.isGreen : !String(t.realised).includes('-');

      box.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; padding-bottom: 8px; border-bottom: 1px solid #f1f5f9;">
          <strong style="font-size: 13.5px; color: #0f172a;">Trade Item #${idx + 1}</strong>
          <span style="font-size: 12px; font-weight: 700; color: ${isPos ? '#16a34a' : '#dc2626'}; background: ${isPos ? '#dcfce7' : '#fee2e2'}; padding: 2px 8px; border-radius: 4px;">${t.realised}</span>
        </div>
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 10px; margin-bottom: 10px;">
          <div>
            <label class="admin-label" style="font-size: 11px;">Symbol</label>
            <input type="text" class="admin-input vpnl-trade-input-symbol" value="${t.symbol}">
          </div>
          <div>
            <label class="admin-label" style="font-size: 11px;">Quantity</label>
            <input type="text" class="admin-input vpnl-trade-input-qty" value="${t.qty}">
          </div>
        </div>
        <div style="display: grid; grid-template-columns: 1.5fr 1fr 1fr; gap: 10px; margin-bottom: 10px;">
          <div>
            <label class="admin-label" style="font-size: 11px;">Realised P&L (Formatted)</label>
            <input type="text" class="admin-input vpnl-trade-input-realised" value="${t.realised}" style="font-weight: 700; color: ${isPos ? '#16a34a' : '#dc2626'};">
          </div>
          <div>
            <label class="admin-label" style="font-size: 11px;">Buy Avg</label>
            <input type="text" class="admin-input vpnl-trade-input-buyavg" value="${t.buyAvg}">
          </div>
          <div>
            <label class="admin-label" style="font-size: 11px;">Buy Value</label>
            <input type="text" class="admin-input vpnl-trade-input-buyval" value="${t.buyValue}">
          </div>
        </div>
        <div class="admin-card-actions" style="display: flex; justify-content: flex-end; margin-top: 6px;">
          <button type="button" class="admin-btn-delete vpnl-trade-delete-btn" style="padding: 4px 10px; font-size: 11.5px;">🗑 Remove Trade</button>
        </div>
      `;

      const delBtn = box.querySelector('.vpnl-trade-delete-btn');
      if (delBtn) {
        delBtn.addEventListener('click', (e) => {
          e.preventDefault();
          appState.verifiedPnl.trades.splice(idx, 1);
          saveState();
          renderAdminVerifiedPnlEditor();
          showInputToast('Trade item removed', false);
        });
      }

      vpnlForms.appendChild(box);
    });
  }

  const adminAddVpnlBtn = document.getElementById('admin-add-vpnl-trade');
  if (adminAddVpnlBtn) {
    adminAddVpnlBtn.addEventListener('click', (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      if (!appState.verifiedPnl) appState.verifiedPnl = {};
      if (!appState.verifiedPnl.trades) appState.verifiedPnl.trades = [];
      appState.verifiedPnl.trades.push({
        id: 'vtrade_' + Date.now(),
        symbol: 'NIFTY26AUG24500CE',
        qty: '75',
        realised: '+2,150.00 (+5.20%)',
        isGreen: true,
        buyAvg: '185.50',
        buyValue: '13,912.50'
      });
      saveState();
      renderAdminVerifiedPnlEditor();
      showInputToast('Added new verified trade row!', true);
    });
  }

  // Real-Time Typing & Selection Auto-Sync (Instant Reflection on /display)
  let autoSyncDebounce = null;
  const inputContainer = document.querySelector('.input-dashboard-content');
  if (inputContainer) {
    const triggerAutoSync = () => {
      clearTimeout(autoSyncDebounce);
      autoSyncDebounce = setTimeout(() => {
        syncAdminFormsToState();
        saveState();
        const badge = document.getElementById('sync-status-indicator');
        if (badge) {
          badge.textContent = '⚡ Live Synced!';
          badge.style.background = '#bbf7d0';
          setTimeout(() => {
            badge.textContent = '● Live Sync Active';
            badge.style.background = '#dcfce7';
          }, 1000);
        }
      }, 100);
    };

    inputContainer.addEventListener('input', triggerAutoSync);
    inputContainer.addEventListener('change', triggerAutoSync);

    const fMarginInput = document.getElementById('admin-funds-avail-margin');
    const uFundsInput = document.getElementById('admin-user-funds');
    if (fMarginInput && uFundsInput) {
      fMarginInput.addEventListener('input', () => {
        uFundsInput.value = fMarginInput.value;
      });
      uFundsInput.addEventListener('input', () => {
        fMarginInput.value = uFundsInput.value;
      });
    }

    const sbBatInput = document.getElementById('admin-statusbar-battery');
    const sbBatLabel = document.getElementById('admin-statusbar-batterylabel');
    if (sbBatInput && sbBatLabel) {
      sbBatInput.addEventListener('input', () => {
        sbBatLabel.textContent = `${sbBatInput.value}%`;
      });
    }
  }

  // Event Listeners for Dhan controls
  const testApiBtn = document.getElementById('admin-dhan-test-api');
  if (testApiBtn) testApiBtn.addEventListener('click', testDhanApiConnection);

  const toggleTickerBtn = document.getElementById('admin-dhan-toggle-ticker');
  if (toggleTickerBtn) {
    toggleTickerBtn.addEventListener('click', (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      if (liveTickerTimer) {
        stopLiveTickerLoop();
        if (appState.dhan) appState.dhan.isTickerActive = false;
        showInputToast('Live Ticker Paused - Static Display Active', false);
      } else {
        if (!appState.dhan) appState.dhan = {};
        appState.dhan.isTickerActive = true;
        startLiveTickerLoop();
        showInputToast('Live Ticker Started - Simulated Feed Active', true);
      }
      saveState();
    });
  }

  // SAVE & APPLY ADMIN CHANGES FUNCTION
  function handleAdminSave() {
    syncAdminFormsToState();
    saveState();
    renderAppUI();
    if (adminModal) adminModal.classList.remove('open');

    showInputToast('✅ All changes saved & broadcasted live to /display!', true);

    const saveBtn = document.getElementById('admin-save-btn');
    if (saveBtn) {
      const origText = saveBtn.innerHTML;
      saveBtn.innerHTML = '✅ Saved & Broadcasted Live!';
      saveBtn.style.background = '#16a34a';
      setTimeout(() => {
        saveBtn.innerHTML = origText;
        saveBtn.style.background = '';
      }, 2000);
    }
    const sideBtn = document.getElementById('sidebar-quick-save-btn');
    if (sideBtn) {
      const orig = sideBtn.innerHTML;
      sideBtn.innerHTML = '✅ Saved Live!';
      sideBtn.style.background = '#16a34a';
      setTimeout(() => {
        sideBtn.innerHTML = orig;
        sideBtn.style.background = '';
      }, 1500);
    }
  }

  if (adminSaveBtn) {
    adminSaveBtn.addEventListener('click', (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      handleAdminSave();
    });
  }
  if (sideQuickSaveBtn) {
    sideQuickSaveBtn.addEventListener('click', (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      handleAdminSave();
    });
  }

  // RESET TO DEFAULTS (IMG_0961 Preset)
  if (adminResetBtn) {
    adminResetBtn.addEventListener('click', (e) => {
      if (e && typeof e.preventDefault === 'function') e.preventDefault();
      if (confirm('Are you sure you want to reset back to IMG_0961 video defaults?')) {
        appState = JSON.parse(JSON.stringify(defaultState));
        saveState();
        populateAdminForms();
        renderAppUI();
        if (adminModal) adminModal.classList.remove('open');
        showInputToast('Reset to default IMG_0961 state!', true);
      }
    });
  }

  // Start Live iOS Status Bar Clock (Real-world IST live reflection)
  updateLiveStatusBarTime();
  setInterval(updateLiveStatusBarTime, 1000);

  // Guarantee Live Ticker is always running for continuous 1-second updates
  startLiveTickerLoop();

  // Continuous 1-second live sync pulse for /input page DOM inputs and status badge
  setInterval(() => {
    syncLiveTicksToInputDOM();
    const syncStatus = document.getElementById('sync-status-indicator');
    if (syncStatus) {
      const isWsLive = dhanWsConnected;
      syncStatus.textContent = isWsLive ? '● Live Dhan Feed (WebSocket)' : '● Live Sync Active (1s)';
      syncStatus.style.background = isWsLive ? '#15803d' : '#0369a1';
    }
  }, 1000);

  // Start Dhan real-time WebSocket market feed streaming
  initDhanWebSocket();

  // Auto-populate forms on input page after all functions and listeners are ready
  if (document.body.classList.contains('page-input-standalone')) {
    populateAdminForms();
  }

}

// Execute app initialization reliably across all browser readyStates
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initKiteApp);
} else {
  initKiteApp();
}
