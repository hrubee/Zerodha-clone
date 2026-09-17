#!/usr/bin/env node

/**
 * Dhan HQ Live WebSocket Feed Streamer
 * Target Instrument: SENSEX 17th SEP 75000 PE (Security ID: 863990) & SENSEX Spot (51)
 */

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VyUmVnaW9uIjoiUjEiLCJpc3MiOiJkaGFuIiwicGFydG5lcklkIjoiIiwiZXhwIjoxNzg5NzAxMTE1LCJpYXQiOjE3ODk2MTQ3MTUsInRva2VuQ29uc3VtZXJUeXBlIjoiU0VMRiIsIndlYmhvb2tVcmwiOiIiLCJkaGFuQ2xpZW50SWQiOiIxMTA0NzA2NTE2In0.8Pa-4nXMn4rBu0-UhMTWQY_g2rmUhCOblnYYhnWRSmsawqxh-4TKPdFj0hWcBKWVWTj1gmD6lCxhqftJi3sgeA";
const clientId = "1104706516";
const wsUrl = `wss://api-feed.dhan.co?version=2&token=${token}&clientId=${clientId}&authType=2`;

console.log('⚡ Connecting to Dhan HQ Live Market Binary Stream...');
const ws = new WebSocket(wsUrl);
ws.binaryType = "arraybuffer";

ws.onopen = () => {
  console.log('✅ Connected! Subscribing to SENSEX Spot (51) & SENSEX 17th SEP 75000 PE (863990)...\n');
  const subMsg = {
    RequestCode: 15, // 15 = Full Quote Packet, 17 = LTP Ticker
    InstrumentCount: 2,
    InstrumentList: [
      { ExchangeSegment: "IDX_I", SecurityId: "51" },
      { ExchangeSegment: "BSE_FNO", SecurityId: "863990" }
    ]
  };
  ws.send(JSON.stringify(subMsg));
};

ws.onmessage = (event) => {
  const buf = Buffer.from(event.data);
  if (buf.length < 12) return;
  const responseCode = buf.readUInt8(0);
  const secId = buf.readInt32LE(4);
  const ltp = buf.readFloatLE(8);

  const timeStr = new Date().toLocaleTimeString('en-IN', { hour12: false });
  let instrumentName = `Security ID: ${secId}`;
  if (secId === 51) instrumentName = '📊 SENSEX (Spot)';
  if (secId === 863990) instrumentName = '🎯 SENSEX 17th SEP 75000 PE';

  if (ltp > 0) {
    console.log(`[${timeStr}] ${instrumentName.padEnd(30)} => LTP: ₹${ltp.toFixed(2).padStart(8)}  (Packet Code: ${responseCode})`);
  }
};

ws.onerror = (err) => {
  console.error('❌ WebSocket Error:', err.message || err);
};

ws.onclose = () => {
  console.log('\n🔌 Dhan WebSocket Disconnected.');
};

process.on('SIGINT', () => {
  console.log('\nExiting stream...');
  ws.close();
  process.exit(0);
});
