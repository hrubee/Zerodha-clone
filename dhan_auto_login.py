#!/usr/bin/env python3
"""
DhanHQ Automated Login & 24h Token Refresher
Automatically generates a fresh 24h Access Token using DhanLogin & TOTP
and syncs it directly to app_state.json
"""

import sys
import os
import json
import time

STATE_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'app_state.json')

def auto_refresh_dhan_token(client_id="1104706516", pin=None, totp_secret=None, direct_totp=None):
    try:
        from dhanhq import DhanLogin
    except ImportError:
        print("❌ Error: dhanhq package not installed. Run: pip install dhanhq pyotp")
        return None

    if not client_id:
        print("❌ Error: Dhan Client ID is required")
        return None

    if not pin:
        pin = os.environ.get("DHAN_PIN", "")
        if not pin:
            print("❌ Error: Dhan PIN is required")
            return None

    totp_code = direct_totp
    if not totp_code and totp_secret:
        try:
            import pyotp
            totp = pyotp.TOTP(totp_secret.replace(" ", "").strip())
            totp_code = totp.now()
            print(f"🔑 Generated live TOTP: {totp_code}")
        except Exception as te:
            print(f"❌ Error generating TOTP: {te}")
            return None

    if not totp_code:
        totp_code = os.environ.get("DHAN_TOTP", "")

    if not totp_code:
        print("❌ Error: TOTP code or TOTP Secret is required")
        return None

    print(f"⏳ Requesting fresh 24h token for Dhan Client ID: {client_id}...")
    try:
        dhan_login = DhanLogin(str(client_id).strip())
        res = dhan_login.generate_token(str(pin).strip(), str(totp_code).strip())

        token = None
        if isinstance(res, dict):
            token = res.get('accessToken') or res.get('access_token') or res.get('token') or res.get('data', {}).get('accessToken')
        elif isinstance(res, str) and len(res) > 30:
            token = res

        if not token:
            print(f"❌ Failed to extract token from response: {res}")
            return None

        print(f"✅ Successfully generated fresh 24h Access Token!")

        # Sync into app_state.json
        state = {}
        if os.path.exists(STATE_FILE):
            try:
                with open(STATE_FILE, 'r', encoding='utf-8') as f:
                    state = json.load(f)
            except Exception:
                pass

        if 'dhan' not in state:
            state['dhan'] = {}

        state['dhan']['clientId'] = str(client_id).strip()
        state['dhan']['accessToken'] = token
        state['dhan']['isTickerActive'] = True
        state['dhan']['lastTokenRefresh'] = time.strftime('%Y-%m-%d %H:%M:%S')

        with open(STATE_FILE, 'w', encoding='utf-8') as f:
            json.dump(state, f, indent=2)

        print(f"💾 Saved new token directly to {STATE_FILE}")
        return token

    except Exception as e:
        print(f"❌ DhanLogin Exception: {e}")
        return None

if __name__ == '__main__':
    cid = sys.argv[1] if len(sys.argv) > 1 else "1104706516"
    pin = sys.argv[2] if len(sys.argv) > 2 else os.environ.get("DHAN_PIN", "")
    secret_or_totp = sys.argv[3] if len(sys.argv) > 3 else os.environ.get("DHAN_TOTP_SECRET", "")

    if not pin or not secret_or_totp:
        print("Usage: python3 dhan_auto_login.py <CLIENT_ID> <PIN> <TOTP_SECRET_OR_CODE>")
        print("Or set environment variables: DHAN_PIN and DHAN_TOTP_SECRET")
    else:
        # Check if secret_or_totp is a 6-digit code or a base32 secret
        if len(secret_or_totp.strip()) == 6 and secret_or_totp.strip().isdigit():
            auto_refresh_dhan_token(client_id=cid, pin=pin, direct_totp=secret_or_totp.strip())
        else:
            auto_refresh_dhan_token(client_id=cid, pin=pin, totp_secret=secret_or_totp.strip())
