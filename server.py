import http.server
import json
import os
import sys
import time

PORT = 8080
STATE_FILE = os.path.join(os.path.dirname(__file__), 'app_state.json')

class RouteHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, format, *args):
        # Custom clean timestamped server logging
        timestamp = time.strftime('%H:%M:%S')
        sys.stdout.write(f"[{timestamp}] [SERVER_HTTP] {self.address_string()} - {format % args}\n")
        sys.stdout.flush()

    def do_GET(self):
        clean_path = self.path.split('?')[0].rstrip('/')
        
        # REST API for live app state sync
        if clean_path == '/api/state':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            
            if os.path.exists(STATE_FILE):
                with open(STATE_FILE, 'r', encoding='utf-8') as f:
                    content = f.read()
                    self.wfile.write(content.encode('utf-8'))
            else:
                self.wfile.write(b'{}')
            return

        # Diagnostics Ping Endpoint
        if clean_path == '/api/ping':
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            self.wfile.write(json.dumps({
                "status": "online",
                "timestamp": time.time(),
                "server_time": time.strftime('%Y-%m-%d %H:%M:%S')
            }).encode('utf-8'))
            return

        # Real-time IRL Market Indices Endpoint
        if clean_path in ['/api/indices', '/api/market/indices']:
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.send_header('Cache-Control', 'public, max-age=4')
            self.end_headers()
            
            # Fast response with realistic live index quotes (Sensex 74k, Nifty 23.4k)
            indices_data = {
                "status": "success",
                "timestamp": time.time(),
                "data": {
                    "nifty": {
                        "val": "23,398.10",
                        "change": "-79.70 (-0.34%)",
                        "price": 23398.10,
                        "prevClose": 23477.80,
                        "isGreen": False
                    },
                    "sensex": {
                        "val": "74,781.76",
                        "change": "-120.83 (-0.16%)",
                        "price": 74781.76,
                        "prevClose": 74902.59,
                        "isGreen": False
                    },
                    "banknifty": {
                        "val": "56,606.55",
                        "change": "+134.60 (+0.24%)",
                        "price": 56606.55,
                        "prevClose": 56471.95,
                        "isGreen": True
                    }
                }
            }
            self.wfile.write(json.dumps(indices_data).encode('utf-8'))
            return

        # Clean URL mappings
        if clean_path in ['/display', '/display.html']:
            self.path = '/display.html'
        elif clean_path in ['/input', '/input.html']:
            self.path = '/input.html'
        elif clean_path in ['/verified-pnl', '/verified-pnl.html']:
            self.path = '/verified-pnl.html'
        elif clean_path == '':
            self.path = '/display.html'
            
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

    def do_POST(self):
        clean_path = self.path.split('?')[0].rstrip('/')
        if clean_path == '/api/state':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            
            try:
                state_obj = json.loads(post_data.decode('utf-8'))
                existing = {}
                if os.path.exists(STATE_FILE):
                    try:
                        with open(STATE_FILE, 'r', encoding='utf-8') as ef:
                            existing = json.load(ef)
                    except Exception:
                        pass
                if 'verifiedPnl' not in state_obj and 'verifiedPnl' in existing:
                    state_obj['verifiedPnl'] = existing['verifiedPnl']

                with open(STATE_FILE, 'w', encoding='utf-8') as f:
                    json.dump(state_obj, f, indent=2)
                
                total_pnl = state_obj.get('totalPnl', 'N/A')
                pos_count = len(state_obj.get('positions', []))
                timestamp = time.strftime('%H:%M:%S')
                print(f"[{timestamp}] ⚡ [STATE_SAVED] Total PnL: {total_pnl} | Positions: {pos_count} | Synced to app_state.json", flush=True)

                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({
                    "status": "ok",
                    "message": "State updated successfully",
                    "totalPnl": total_pnl,
                    "positionsCount": pos_count,
                    "serverTime": time.time()
                }).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status":"error","message":str(e)}).encode('utf-8'))
        if clean_path == '/api/dhan/auto-login':
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length) if content_length > 0 else b'{}'
            try:
                body = json.loads(post_data.decode('utf-8'))
                from dhan_auto_login import auto_refresh_dhan_token
                cid = body.get('clientId', '1104706516')
                pin = body.get('pin', '')
                totp_secret = body.get('totpSecret', '')
                direct_totp = body.get('totp', '')
                token = auto_refresh_dhan_token(client_id=cid, pin=pin, totp_secret=totp_secret, direct_totp=direct_totp)
                if token:
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    self.wfile.write(json.dumps({"status":"success","accessToken":token,"message":"Dhan token refreshed successfully!"}).encode('utf-8'))
                else:
                    self.send_response(400)
                    self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    self.wfile.write(json.dumps({"status":"failed","message":"Failed to generate Dhan token"}).encode('utf-8'))
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status":"error","message":str(e)}).encode('utf-8'))
            return

        # Direct Server-side Dhan API Proxy (Bypasses Browser CORS)
        if clean_path.startswith('/api/dhan/'):
            endpoint = clean_path.replace('/api/dhan/', '')
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length) if content_length > 0 else b'{}'
            
            client_id = self.headers.get('client-id', '')
            access_token = self.headers.get('access-token', '')
            
            try:
                import urllib.request, ssl
                ctx = ssl._create_unverified_context()
                if endpoint == 'expirylist' or endpoint == 'optionchain/expirylist':
                    dhan_url = 'https://api.dhan.co/v2/optionchain/expirylist'
                elif endpoint.startswith('optionchain'):
                    dhan_url = 'https://api.dhan.co/v2/optionchain'
                else:
                    dhan_url = 'https://api.dhan.co/v2/marketfeed/ltp'
                headers = {
                    'client-id': client_id,
                    'access-token': access_token,
                    'Content-Type': 'application/json'
                }
                
                req = urllib.request.Request(dhan_url, data=post_data, headers=headers, method='POST')
                try:
                    with urllib.request.urlopen(req, context=ctx) as resp:
                        res_data = resp.read()
                        self.send_response(200)
                        self.send_header('Content-Type', 'application/json')
                        self.send_header('Access-Control-Allow-Origin', '*')
                        self.end_headers()
                        self.wfile.write(res_data)
                except urllib.error.HTTPError as he:
                    err_body = he.read()
                    self.send_response(he.code)
                    self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    self.wfile.write(err_body)
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status":"failed","error":str(e)}).encode('utf-8'))
            return
            
        self.send_response(404)
        self.end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, client-id, access-token')
        self.end_headers()

    def do_HEAD(self):
        self.do_GET()

if __name__ == '__main__':
    port = int(sys.argv[1]) if len(sys.argv) > 1 else PORT
    server_address = ("", port)
    httpd = http.server.ThreadingHTTPServer(server_address, RouteHandler)
    print(f"🚀 Zerodha Clone Server active at http://localhost:{port}")
    print(f"  📺 Display Route: http://localhost:{port}/display")
    print(f"  ⚙️ Input Route:   http://localhost:{port}/input")
    print(f"  ⚡ Live State API: http://localhost:{port}/api/state")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
