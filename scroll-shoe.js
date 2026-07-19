// Barre de progression partagée : la basket 👟 avance au fil du défilement,
// la médaille 🏅 récompense l'arrivée en bas de page.
// Reproduit à l'identique l'effet de la page d'accueil, sur toutes les pages.
(function(){
  // Ne rien faire si la page a déjà sa propre barre (ex. accueil, version inline)
  if(document.getElementById('scroll-progress'))return;

  // Styles (couleurs figées pour être indépendantes des variables CSS de chaque page)
  var css=''
    +'#scroll-progress{position:fixed;top:20px;left:0;height:3px;width:0%;background:linear-gradient(90deg,#b6cde0,#E8B06B);z-index:9999;transition:width .1s linear;}'
    +"#scroll-progress::after{content:'👟';position:absolute;right:-18px;top:-14px;font-size:32px;line-height:1;filter:drop-shadow(0 0 6px rgba(232,176,107,.8)) drop-shadow(0 2px 4px rgba(0,0,0,.6));}"
    +'#scroll-medal{position:fixed;top:6px;right:10px;font-size:28px;z-index:9999;opacity:0;transform:scale(0) rotate(-20deg);transition:opacity .4s ease,transform .4s cubic-bezier(.34,1.56,.64,1);filter:drop-shadow(0 0 8px rgba(232,176,107,1));pointer-events:none;}'
    +'#scroll-medal.visible{opacity:1;transform:scale(1) rotate(0deg);}';
  var style=document.createElement('style');
  style.textContent=css;
  document.head.appendChild(style);

  // Éléments
  var progressBar=document.createElement('div');
  progressBar.id='scroll-progress';
  var medal=document.createElement('div');
  medal.id='scroll-medal';
  medal.textContent='🏅';
  document.body.appendChild(progressBar);
  document.body.appendChild(medal);

  function updateProgress(){
    // Point de départ : après la 1re section « semaine » sur l'accueil, sinon le haut de page
    var startEl=document.getElementById('semaine');
    var start=startEl?startEl.offsetTop:0;
    var maxScroll=document.documentElement.scrollHeight-window.innerHeight;
    var range=Math.max(maxScroll-start,1);
    var pct=Math.min(Math.max((window.scrollY-start)/range*100,0),100);
    progressBar.style.width=pct+'%';
    if(pct>=99||window.scrollY>=maxScroll-4)medal.classList.add('visible');
    else medal.classList.remove('visible');
  }
  window.addEventListener('scroll',updateProgress,{passive:true});
  window.addEventListener('resize',updateProgress,{passive:true});
  updateProgress();
})();
