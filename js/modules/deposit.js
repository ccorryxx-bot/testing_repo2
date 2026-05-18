// ============================================================
function switchTab(tab){
  document.getElementById('registerForm').style.display = tab==='register'?'block':'none';
  document.getElementById('loginForm').style.display    = tab==='login'?'block':'none';
  document.getElementById('tabRegister').classList.toggle('active',tab==='register');
  document.getElementById('tabLogin').classList.toggle('active',tab==='login');
}
function toggleEye(id,btn){
  const inp=document.getElementById(id);
  inp.type=inp.type==='password'?'text':'password';
  btn.style.color=inp.type==='text'?'#f5c518':'rgba(255,255,255,.5)';
}
function shareVia(platform){
  const link=document.getElementById('agentShareLinkInput')?.value;
  if(!link||link==='—')return gToast('Login ဝင်ပြီးမှ Share လုပ်ပါ');
  const text=encodeURIComponent(`Diamond-BETT မှ ဖိတ်ကြားပါသည်! ${link}`);
  const urls={
    telegram:`https://t.me/share/url?url=${encodeURIComponent(link)}&text=${text}`,
    viber:`viber://forward?text=${text}`,
    facebook:`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,
    whatsapp:`https://wa.me/?text=${text}`
  };
  if(urls[platform])window.open(urls[platform],'_blank');
}
function fmt(v,d=2){const n=parseFloat(v);return isNaN(n)?'0.00':n.toFixed(d);}
function setEl(id,val){const el=document.getElementById(id);if(el)el.textContent=val;}
function maskNum(n){if(!n||n.length<4)return n;return '****'+n.slice(-4);}

