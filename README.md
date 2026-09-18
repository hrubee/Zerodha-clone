# ⚡ Zerodha Kite Clone - Milestone v2.0.0

A high-fidelity, pixel-perfect web application replicating Zerodha Kite's mobile trading interface with **live market WebSocket feed (Dhan HQ API v2)**, real-time contract strike ladders, auto-calculated P&L, multi-device sync, and verified P&L reporting.

---

## 🌟 Key Features

1. **⚡ Dhan HQ API v2 Live Binary WebSocket Feed (`wss://api-feed.dhan.co`)**
   - Real-time tick-by-tick streaming of Index and Option contract prices (LTP).
   - Real-time DataView binary packet decoding (Response codes 1, 2, 4, 6, 7, 8, 50).
   - Exponential reconnect backoff with live JWT token diagnostics.

2. **🎯 Real Exchange Option Chain & Strike Price Engine**
   - Live option chain fetch via `/api/dhan/optionchain` and dynamic strike resolution.
   - Spot-anchored Black-Scholes Greek fallback when offline or renewing tokens.
   - Support for NIFTY 50, BANKNIFTY, SENSEX, FINNIFTY, MIDCPNIFTY, and Commodities.

3. **🔄 Real-Time Multi-Device State Synchronization**
   - Single-session lock security with 4-digit PIN protection (`2398`).
   - Cross-tab `BroadcastChannel` and cross-device HTTP sync (`/api/state`).
   - Independent background state persistence (`app_state.json`).

4. **📱 Pixel-Perfect Zerodha Kite Mobile UI**
   - High-precision iOS status bar (Live battery, IST clock, network pills).
   - Positions tab with auto-summed Total P&L and dynamic green/red badges.
   - Verified P&L Report page with date ranges and interactive trade drilldowns.
   - Strict market hours schedule (Active 8:00 AM - 3:30 PM IST, faded after 3:30 PM IST).

---

## 🚀 Quick Start

### 1. Start Local Server
```bash
python3 server.py 8080
```

### 2. Access the Application
* **📺 Display Screen (Kite App):** [http://localhost:8080/display](http://localhost:8080/display)
* **⚙️ Control Dashboard (Admin Input):** [http://localhost:8080/input](http://localhost:8080/input)
* **📄 Verified P&L Page:** [http://localhost:8080/verified-pnl](http://localhost:8080/verified-pnl)

### 3. Connect Live Dhan Market Feed
1. Open `/input` and navigate to **⚡ Dhan API & Live Feed**.
2. Paste your 24-hour Access Token from [web.dhan.co](https://web.dhan.co).
3. Click **`💾 Save & Connect Token`**. The live status banner will verify validity and start streaming binary ticks immediately.

---

## 🧪 Testing Suite

Automated end-to-end tests powered by Playwright:
```bash
npx playwright test
```
