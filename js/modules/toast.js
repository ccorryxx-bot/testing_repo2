// ============================================================
const _SUPA_URL = "https://xjqrwcsxiaybpztzestb.supabase.co";
const _SUPA_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...";

// ✅ Safe init — CDN fail ဖြစ်ရင်လည်း crash မဖြစ်
let supabase = null;
try {
  if (window.supabase) {
    supabase = window.supabase.createClient(_SUPA_URL, _SUPA_KEY);
  }
} catch(e) {
  console.error('Supabase SDK failed to load:', e);
}

// Deposit/Withdraw state
let _dMethod = null, _dAmt = 0, _dBonus = true, _cdTimer = null;
let _linked = null, _curProv = null;
window._depMethods = [];

