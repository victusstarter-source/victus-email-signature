/* Victus Global — editable 500px email signature */
const ASSETS = {
  "victus-logo": "assets/victus-logo.png",
  "phone": "assets/phone.png",
  "email": "assets/email.png",
  "website": "assets/website.png",
  "linkedin": "assets/linkedin.png",
  "facebook": "assets/facebook.png",
  "play": "assets/play.png"
};
const TEMPLATE = "<table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" width=\"500\" style=\"width:500px;max-width:100%;border-collapse:collapse;background-color:#ffffff;font-family:'Century Gothic','Trebuchet MS',Arial,sans-serif;color:#18191c;mso-table-lspace:0pt;mso-table-rspace:0pt;\">\n  <tr>\n    <td style=\"padding:0;background-color:#ffffff;\">\n      <table role=\"presentation\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;width:100%;\">\n        <tr>\n          <td width=\"47%\" valign=\"middle\" style=\"width:47%;padding:10.33px 13.59px 11.41px 15.76px;vertical-align:middle;\">\n            <a href=\"https://victusglobal.co.uk/\" target=\"_blank\" style=\"text-decoration:none;border:0;\"><img src=\"{{asset_victus-logo}}\" width=\"204\" alt=\"Victus Global\" style=\"display:block;width:100%;max-width:203.8px;height:auto;border:0;outline:0;text-decoration:none;\"></a>\n          </td>\n          <td width=\"2\" valign=\"middle\" style=\"width:2.17px;padding:9.24px 0;vertical-align:middle;\">\n            <table role=\"presentation\" width=\"2\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:1.63px;border-collapse:collapse;\"><tr><td width=\"2\" height=\"54\" bgcolor=\"#00866e\" style=\"width:1.63px;height:54.35px;font-size:0;line-height:0;background-color:#00866e;\">&nbsp;</td></tr></table>\n          </td>\n          <td width=\"53%\" valign=\"middle\" style=\"width:53%;padding:10.87px 8.15px 10.87px 21.74px;vertical-align:middle;\">\n            <div style=\"font-family:'Century Gothic','Trebuchet MS',Arial,sans-serif;font-size:22.28px;font-weight:700;line-height:1.13;letter-spacing:-1.09px;color:#15161a;\">{{name}}</div>\n            <div style=\"font-family:'Century Gothic','Trebuchet MS',Arial,sans-serif;font-size:12.5px;font-weight:400;line-height:1.25;color:#17191c;padding-top:0.54px;\">{{title}}</div>\n          </td>\n        </tr>\n      </table>\n    </td>\n  </tr>\n  <tr>\n    <td bgcolor=\"#cce9e7\" style=\"padding:0;background-color:#cce9e7;background-image:linear-gradient(100deg,#cce9e7 0%,#c6e7e5 53%,#d4eeee 100%);\">\n      <table role=\"presentation\" width=\"100%\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;width:100%;\">\n        <tr>\n          <td width=\"47%\" valign=\"top\" style=\"width:47%;padding:7.61px 6.52px 6.52px 46.74px;vertical-align:top;\">\n            <div style=\"font-family:'Century Gothic','Trebuchet MS',Arial,sans-serif;font-size:15.76px;font-weight:700;line-height:1.08;letter-spacing:-0.38px;color:#007f7a;\">{{tagline1}}</div>\n            <div style=\"font-family:'Century Gothic','Trebuchet MS',Arial,sans-serif;font-size:15.76px;font-weight:700;line-height:1.08;letter-spacing:-0.38px;color:#070c0e;\">{{tagline2}}</div>\n            <table role=\"presentation\" cellpadding=\"0\" cellspacing=\"0\" border=\"0\" style=\"margin-top:5.43px;margin-left:15.76px;border-collapse:collapse;\">{{servicesHtml}}</table>\n          </td>\n          <td width=\"2\" valign=\"middle\" style=\"width:2.17px;padding:7.07px 0;vertical-align:middle;\">\n            <table role=\"presentation\" width=\"2\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"width:1.63px;border-collapse:collapse;\"><tr><td width=\"2\" height=\"93\" bgcolor=\"#00866e\" style=\"width:1.63px;height:93.48px;font-size:0;line-height:0;background-color:#00866e;\">&nbsp;</td></tr></table>\n          </td>\n          <td width=\"53%\" valign=\"top\" style=\"width:53%;padding:8.7px 7.61px 7.07px 21.74px;vertical-align:top;\">\n            <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;\">\n              <tr>\n                <td width=\"21\" style=\"padding:0 7.07px 3.26px 0;vertical-align:middle;\"><a href=\"tel:\" style=\"text-decoration:none;\"><img src=\"{{asset_phone}}\" width=\"18\" height=\"18\" alt=\"Phone\" style=\"display:block;width:17.93px;height:17.93px;border:0;\"></a></td>\n                <td style=\"padding:0 0 3.26px 0;vertical-align:middle;font-family:'Century Gothic','Trebuchet MS',Arial,sans-serif;font-size:10.33px;line-height:1.1;\"><a href=\"tel:\" style=\"color:#1b2124;text-decoration:none;\">{{phone}}</a></td>\n              </tr>\n              <tr>\n                <td style=\"padding:0 7.07px 3.26px 0;vertical-align:middle;\"><a href=\"mailto:{{email}}\" style=\"text-decoration:none;\"><img src=\"{{asset_email}}\" width=\"18\" height=\"18\" alt=\"Email\" style=\"display:block;width:17.93px;height:17.93px;border:0;\"></a></td>\n                <td style=\"padding:0 0 3.26px 0;vertical-align:middle;font-family:'Century Gothic','Trebuchet MS',Arial,sans-serif;font-size:10.33px;line-height:1.1;\"><a href=\"mailto:{{email}}\" style=\"color:#1b2124;text-decoration:none;\">{{email}}</a></td>\n              </tr>\n              <tr>\n                <td style=\"padding:0 7.07px 3.26px 0;vertical-align:middle;\"><a href=\"{{website}}\" target=\"_blank\" style=\"text-decoration:none;\"><img src=\"{{asset_website}}\" width=\"18\" height=\"18\" alt=\"Website\" style=\"display:block;width:17.93px;height:17.93px;border:0;\"></a></td>\n                <td style=\"padding:0 0 3.26px 0;vertical-align:middle;font-family:'Century Gothic','Trebuchet MS',Arial,sans-serif;font-size:10.33px;line-height:1.1;\"><a href=\"{{website}}\" target=\"_blank\" style=\"color:#1b2124;text-decoration:none;\">{{websiteDisplay}}</a></td>\n              </tr>\n            </table>\n            <table role=\"presentation\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" style=\"border-collapse:collapse;margin-top:4.89px;\">\n              <tr>\n                <td style=\"padding:0 7.07px 0 0;vertical-align:middle;\"><a href=\"{{linkedinUrl}}\" title=\"Victus Global on LinkedIn\" target=\"_blank\" style=\"text-decoration:none;\"><img src=\"{{asset_linkedin}}\" alt=\"LinkedIn\" width=\"19\" height=\"19\" style=\"display:block;width:19.02px;height:19.02px;border:0;\"></a></td>\n                <td style=\"padding:0 9.78px 0 0;vertical-align:middle;\"><a href=\"{{facebookUrl}}\" title=\"Victus Global on Facebook\" target=\"_blank\" style=\"text-decoration:none;\"><img src=\"{{asset_facebook}}\" alt=\"Facebook\" width=\"19\" height=\"19\" style=\"display:block;width:19.02px;height:19.02px;border:0;\"></a></td>\n                <td valign=\"middle\" bgcolor=\"#008150\" style=\"vertical-align:middle;background-color:#008150;border-radius:4.35px;padding:0;\">\n                  <a href=\"{{videoUrl}}\" target=\"_blank\" title=\"Watch Our Story\" style=\"display:block;color:#ffffff;text-decoration:none;background-color:#008150;border-radius:4.35px;padding:3.8px 7.61px 3.8px 5.43px;white-space:nowrap;\">\n                    <img src=\"{{asset_play}}\" width=\"16\" height=\"16\" alt=\"Play\" style=\"display:inline-block;vertical-align:middle;width:15.76px;height:15.76px;border:0;outline:none;text-decoration:none;\"><span style=\"display:inline-block;vertical-align:middle;padding-left:6.52px;font-family:'Century Gothic','Trebuchet MS',Arial,sans-serif;font-size:9.78px;font-weight:700;line-height:15.76px;\">Watch Our Story</span>\n                  </a>\n                </td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n      </table>\n    </td>\n  </tr>\n  <tr>\n    <td style=\"padding:3.8px 14.67px 3.8px 21.74px;background-color:#ffffff;font-family:'Century Gothic','Trebuchet MS',Arial,sans-serif;color:#26272a;font-size:6.25px;line-height:1.32;\">\n      {{disclaimer}}\n    </td>\n  </tr>\n</table>";
const IMGFILES = ['victus-logo','phone','email','website','linkedin','facebook','play'];
const keys=['name','title','phone','email','website','websiteDisplay','tagline1','tagline2','services','disclaimer','assetBase'];
function getPublicAssetBase(d) {
  const custom = String(d.assetBase || '').trim();
  if (custom) {
    try { const url = new URL(custom); if(url.protocol !== 'https:') return null;
      return url.href.replace(/\/+$/, '') + '/';
    } catch { return null; }
  }
  // A published Pages site has a real HTTPS URL. This works for both
  // https://org.github.io/ and https://org.github.io/repository/ and custom domains.
  if (location.protocol === 'https:' && !['github.com','raw.githubusercontent.com'].includes(location.hostname)) {
    return new URL('assets/', document.baseURI).href;
  }
  return null;
}
function htmlEscape(value){return String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function current(){const d={};keys.forEach(k => d[k]=document.getElementById(k).value);return d;}
function images(d, forPreview=false) {
  const base = forPreview ? null : getPublicAssetBase(d);
  const out = {};
  for (const k of IMGFILES) out[k] = base ? base + k + '.png' : ASSETS[k];
  return out;
}
function build(d, forPreview=false){
 const ims=images(d, forPreview);
 const serviceLines=d.services.split(/\r?\n/).map(s=>s.trim()).filter(Boolean).slice(0,8);
 const serviceHtml=serviceLines.map(s=>`<tr><td style="padding:0 0 2.72px 0;font-family:Century Gothic,Trebuchet MS,Arial,sans-serif;color:#1d2325;font-size:9.24px;line-height:12.5px;">${htmlEscape(s)}</td></tr>`).join('');
 let sig=TEMPLATE;
 const replacements={};
 for(const [k,v] of Object.entries(d))if(k!=='services' && k!=='assetBase')replacements[k]=htmlEscape(v);
 replacements.servicesHtml=serviceHtml;
 replacements.videoUrl=LINKS.video;
 replacements.facebookUrl=LINKS.facebook;
 replacements.linkedinUrl=LINKS.linkedin;
 for(const [k,v] of Object.entries(ims))replacements['asset_'+k]=htmlEscape(v);
 // The telephone link needs digits only. All display values are escaped.
 const tel=String(d.phone).replace(/[^+0-9]/g,'');
 sig=sig.replace(/href="tel:[^"]*"/g,`href="tel:${htmlEscape(tel)}"`);
 for(const [k,v] of Object.entries(replacements))sig=sig.split('{{'+k+'}}').join(v);
 return sig;
}
function preview(){document.getElementById('preview').innerHTML=build(current(),true);}
function status(msg){document.getElementById('status').textContent=msg;}
async function copySignature(){
 if (!getPublicAssetBase(current())) {
   status('To copy a usable email signature with working images, open this editor on your HTTPS GitHub Pages site or enter a public HTTPS image folder URL in Company settings.'); return;
 }
 const markup=build(current()); const previewNode=document.getElementById('preview');
 // Preview uses locally hosted image paths; exported markup always uses full HTTPS URLs.
 try{
  if(navigator.clipboard && window.ClipboardItem){
   const blob=new Blob([markup],{type:'text/html'});
   await navigator.clipboard.write([new ClipboardItem({'text/html':blob,'text/plain':new Blob([previewNode.innerText],{type:'text/plain'})})]);
   status('Formatted signature copied. Paste into your email signature settings.'); return;
  }
 }catch(e){ /* use selection fallback */ }
 const selection=window.getSelection();const range=document.createRange();
 const holder=document.createElement('div');holder.style.cssText='position:fixed;left:-9999px;top:0;';holder.innerHTML=markup;document.body.appendChild(holder);
 range.selectNodeContents(holder);selection.removeAllRanges();selection.addRange(range);
 let ok=false;try{ok=document.execCommand('copy');}catch(e){}selection.removeAllRanges();holder.remove();
 status(ok ? 'Formatted signature copied. Paste into your email signature settings.' : 'Copy was blocked by the browser. Download the HTML and open it in a browser, then select the signature and copy it.');
}
function downloadSignature(){
 const d=current();
 if (!getPublicAssetBase(d)) {
   status('A hosted HTTPS image URL is needed before downloading an email-ready signature. Open this editor on GitHub Pages or enter a public HTTPS image folder URL.'); return;
 }const doc='<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Victus Global email signature - '+htmlEscape(d.name)+'</title></head><body style="margin:0;padding:16px;background:#fff;">'+build(d)+'</body></html>';
 const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([doc],{type:'text/html;charset=utf-8'}));a.download='Victus_Global_Signature_'+(d.name.trim().replace(/[^a-z0-9]+/gi,'_')||'Employee')+'.html';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),3000);status('Employee HTML downloaded.');
}
function reset(){for(const k of keys){const el=document.getElementById(k);el.value=DEFAULTS[k] ?? '';}preview();status('Sample information restored.');}
keys.forEach(k=>document.getElementById(k).addEventListener('input',()=>{preview();status('');}));
document.getElementById('copyBtn').addEventListener('click',copySignature);
document.getElementById('downloadBtn').addEventListener('click',downloadSignature);
document.getElementById('resetBtn').addEventListener('click',reset);
preview();
