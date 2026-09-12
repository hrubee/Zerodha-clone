# Zerodha Kite Mobile Simulator

A high-fidelity Zerodha Kite mobile web interface simulation with dual-screen architecture, bi-directional live state broadcasting, and dynamic UI overlays.

## Features

- **Pixel-Accurate UI**: Replicating mobile Zerodha Kite interfaces for:
  - **Portfolio**: Positions, P&L, Index tickers (NIFTY 50 & SENSEX), MIS badges, day's change.
  - **Profile**: Account details, User ID, email, avatar circle initials, navigation to Funds.
  - **Funds & Margins**: Available margin, Available cash, Used margin, and Opening balance breakdown.
- **Dual Screen Architecture**:
  - `/display` &mdash; Clean, full-bleed mobile display viewport optimized for screen capture or streaming. Supports direct tab parameters (e.g. `/display?tab=portfolio`, `/display?tab=profile`, `/display?tab=funds`).
  - `/input` &mdash; Admin control panel for managing positions, live indices, user details, and funds parameters.
- **Real-Time Live Sync**:
  - Changes made on `/input` are broadcasted live via `BroadcastChannel` and `localStorage` to `/display` with zero page reload.
  - Interactive inline prompt editing directly on `/display`.

## Project Structure

```
├── display.html      # Main mobile display viewport
├── input.html        # Admin input and state management panel
├── index.html        # Interactive sandbox preview
├── app.js            # Core application state, event handlers, and broadcasting logic
├── styles.css        # Layouts, typography, and calibrated pixel positioning
├── server.py         # Local lightweight Python HTTP server with clean URL routing
└── app_state.json    # Initial state configuration
```

## Running Locally

1. Start the local server:
   ```bash
   python3 server.py
   ```
2. Open in your browser:
   - **Display Screen**: [http://localhost:8080/display](http://localhost:8080/display)
   - **Funds View**: [http://localhost:8080/display?tab=funds](http://localhost:8080/display?tab=funds)
   - **Input Admin Panel**: [http://localhost:8080/input](http://localhost:8080/input)
