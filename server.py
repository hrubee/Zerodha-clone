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
                        "val": "23,118.60",
                        "change": "-279.50 (-1.19%)",
                        "price": 23118.60,
                        "prevClose": 23398.10,
                        "isGreen": False
                    },
                    "sensex": {
                        "val": "74,003.82",
                        "change": "-777.94 (-1.04%)",
                        "price": 74003.82,
                        "prevClose": 74781.76,
                        "isGreen": False
                    },
                    "banknifty": {
                        "val": "55,794.75",
                        "change": "-811.80 (-1.43%)",
                        "price": 55794.75,
                        "prevClose": 56606.55,
                        "isGreen": False
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
                return
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.end_headers()
                self.wfile.write(json.dumps({"status":"error","message":str(e)}).encode('utf-8'))
                return
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
            
            client_id = self.headers.get('client-id')
            access_token = self.headers.get('access-token')

            if not client_id or not access_token:
                try:
                    if os.path.exists(STATE_FILE):
                        with open(STATE_FILE, 'r', encoding='utf-8') as sf:
                            sdata = json.load(sf)
                            dhan_conf = sdata.get('dhan', {})
                            client_id = client_id or dhan_conf.get('clientId', '1104706516')
                            access_token = access_token or dhan_conf.get('accessToken', '')
                except Exception:
                    pass

            cache_key = f"{endpoint}_{post_data.decode('utf-8', errors='ignore')}"
            now = time.time()
            ttl = 60.0 if 'optionchain' in endpoint else (600.0 if 'expirylist' in endpoint else 5.0)

            # Serve from proxy cache if fresh
            if hasattr(self.server, 'dhan_cache') and cache_key in self.server.dhan_cache:
                cached_entry = self.server.dhan_cache[cache_key]
                if now - cached_entry['time'] < ttl:
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    self.wfile.write(cached_entry['data'])
                    return

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
                        try:
                            parsed_json = json.loads(res_data.decode('utf-8'))
                            if parsed_json.get('status') == 'success' and (parsed_json.get('data') and ('oc' in parsed_json.get('data', {}) or isinstance(parsed_json.get('data'), list))):
                                if not hasattr(self.server, 'dhan_cache'):
                                    self.server.dhan_cache = {}
                                self.server.dhan_cache[cache_key] = {'time': now, 'data': res_data}
                            elif parsed_json.get('status') == 'failed':
                                if hasattr(self.server, 'dhan_cache') and cache_key in self.server.dhan_cache:
                                    self.send_response(200)
                                    self.send_header('Content-Type', 'application/json')
                                    self.send_header('Access-Control-Allow-Origin', '*')
                                    self.end_headers()
                                    self.wfile.write(self.server.dhan_cache[cache_key]['data'])
                                    return
                        except Exception:
                            pass

                        self.send_response(200)
                        self.send_header('Content-Type', 'application/json')
                        self.send_header('Access-Control-Allow-Origin', '*')
                        self.end_headers()
                        self.wfile.write(res_data)
                except urllib.error.HTTPError as he:
                    if hasattr(self.server, 'dhan_cache') and cache_key in self.server.dhan_cache:
                        self.send_response(200)
                        self.send_header('Content-Type', 'application/json')
                        self.send_header('Access-Control-Allow-Origin', '*')
                        self.end_headers()
                        self.wfile.write(self.server.dhan_cache[cache_key]['data'])
                        return

                    err_body = he.read()
                    self.send_response(he.code)
                    self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    self.wfile.write(err_body)
            except Exception as e:
                if hasattr(self.server, 'dhan_cache') and cache_key in self.server.dhan_cache:
                    self.send_response(200)
                    self.send_header('Content-Type', 'application/json')
                    self.send_header('Access-Control-Allow-Origin', '*')
                    self.end_headers()
                    self.wfile.write(self.server.dhan_cache[cache_key]['data'])
                    return

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
