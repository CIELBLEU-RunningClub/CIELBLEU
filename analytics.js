// Mesure d'audience Google Analytics 4 + consentement (conforme CNIL)
// GA ne se charge QU'APRÈS un « Accepter ». Aucun cookie tant que le visiteur
// n'a pas donné son accord ; choix mémorisé et modifiable via « Gérer les cookies ».
(function(){
  var GA_ID='G-0RG107FT7T';
  var KEY='cielbleu-consent-v1';
  var disableKey='ga-disable-'+GA_ID;
  function getConsent(){try{return localStorage.getItem(KEY);}catch(e){return null;}}
  function setConsent(v){try{localStorage.setItem(KEY,v);}catch(e){}}

  function loadGA(){
    if(window.__gaLoaded)return;window.__gaLoaded=true;
    var s=document.createElement('script');s.async=true;
    s.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID;
    document.head.appendChild(s);
    window.dataLayer=window.dataLayer||[];
    window.gtag=function(){dataLayer.push(arguments);};
    gtag('js',new Date());
    gtag('config',GA_ID);
  }
  function deleteGACookies(){
    document.cookie.split(';').forEach(function(c){
      var n=c.split('=')[0].trim();
      if(n.indexOf('_ga')===0){
        var host=location.hostname;
        document.cookie=n+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
        document.cookie=n+'=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;domain='+host;
      }
    });
  }
  function grant(){window[disableKey]=false;setConsent('granted');loadGA();}
  function deny(){window[disableKey]=true;setConsent('denied');deleteGACookies();}

  // Suivi des clics (uniquement si consentement accordé)
  document.addEventListener('click',function(e){
    if(getConsent()!=='granted'||!window.gtag)return;
    var a=e.target.closest&&e.target.closest('a');
    var card=e.target.closest&&e.target.closest('.ev-card');
    if(a){
      var h=a.href||'';
      if(/helloasso\.com/.test(h))gtag('event','click_helloasso',{lien:h});
      else if(/strava\.com/.test(h))gtag('event','click_strava');
      else if(/instagram\.com/.test(h))gtag('event','click_instagram');
      else if(/tiktok\.com/.test(h))gtag('event','click_tiktok');
      else if(/linkedin\.com/.test(h))gtag('event','click_linkedin');
      else if(/calendrier\.html/.test(h))gtag('event','click_calendrier');
    }
    if(card){
      var t=card.querySelector('.ev-card-title');
      gtag('event','ouvrir_evenement',{evenement:t?t.textContent.trim().slice(0,90):''});
    }
  },true);

  // ── Bannière de consentement ──
  function injectStyles(){
    if(document.getElementById('cc-style'))return;
    var css='#cc-banner{position:fixed;left:0;right:0;bottom:0;z-index:100000;background:#0b1d30;color:#fff;padding:18px 22px calc(18px + env(safe-area-inset-bottom));display:flex;align-items:center;gap:18px;flex-wrap:wrap;justify-content:center;box-shadow:0 -4px 24px rgba(0,0,0,.35);border-top:1px solid rgba(182,205,224,.15);font-family:\'Open Sans\',sans-serif;}'
      +'#cc-banner p{font-size:13.5px;line-height:1.55;color:rgba(255,255,255,.8);max-width:640px;margin:0;}'
      +'#cc-banner a{color:#b6cde0;}'
      +'#cc-actions{display:flex;gap:12px;flex-shrink:0;}'
      +'.cc-btn{font-family:\'Bebas Neue\',sans-serif;font-size:15px;letter-spacing:1.5px;padding:11px 24px;border-radius:6px;cursor:pointer;border:1.5px solid transparent;text-transform:uppercase;}'
      +'.cc-accept{background:#E8B06B;color:#0b1d30;}.cc-accept:hover{background:#fff;}'
      +'.cc-refuse{background:transparent;color:#fff;border-color:rgba(182,205,224,.5);}.cc-refuse:hover{border-color:#fff;}'
      +'#cc-manage{background:none;border:none;color:inherit;cursor:pointer;font:inherit;text-decoration:underline;padding:0;}'
      +'@media(max-width:768px){#cc-banner{padding:14px 16px calc(14px + env(safe-area-inset-bottom));gap:12px;}#cc-actions{width:100%;}.cc-btn{flex:1;}}';
    var st=document.createElement('style');st.id='cc-style';st.textContent=css;document.head.appendChild(st);
  }
  function showBanner(){
    injectStyles();
    if(document.getElementById('cc-banner'))return;
    var b=document.createElement('div');b.id='cc-banner';b.setAttribute('role','dialog');b.setAttribute('aria-label','Consentement aux cookies');
    b.innerHTML='<p>Nous utilisons <strong>Google Analytics</strong> pour mesurer l\'audience du site et l\'améliorer. Ces cookies ne sont déposés qu\'avec votre accord. <a href="mentions-legales.html">En savoir plus</a>.</p>'
      +'<div id="cc-actions"><button class="cc-btn cc-refuse" id="cc-refuse">Refuser</button><button class="cc-btn cc-accept" id="cc-accept">Accepter</button></div>';
    document.body.appendChild(b);
    document.getElementById('cc-accept').onclick=function(){grant();b.remove();};
    document.getElementById('cc-refuse').onclick=function(){deny();b.remove();};
  }

  // Lien « Gérer les cookies » ajouté au pied de page
  function addManageLink(){
    var fc=document.querySelector('.footer-copy');
    if(!fc||document.getElementById('cc-manage'))return;
    var sep=document.createTextNode(' · ');
    var btn=document.createElement('button');btn.id='cc-manage';btn.textContent='Gérer les cookies';
    btn.onclick=showBanner;
    fc.appendChild(sep);fc.appendChild(btn);
  }

  function init(){
    var c=getConsent();
    if(c==='granted'){window[disableKey]=false;loadGA();}
    else if(c==='denied'){window[disableKey]=true;}
    else{showBanner();}
    addManageLink();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);
  else init();
})();
