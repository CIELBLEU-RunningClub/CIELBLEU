// Barre de progression partagée : la basket 👟 avance au fil du défilement,
// la médaille 🏅 récompense l'arrivée en bas de page.
//
// Performance : les mesures de mise en page (offsetTop, scrollHeight) sont
// coûteuses et forcent un recalcul du navigateur. Les lire à chaque événement
// de défilement, puis écrire aussitôt un style, provoque des saccades très
// visibles sur mobile. On les met donc en cache et on ne les recalcule qu'au
// redimensionnement ; l'affichage est regroupé dans une frame d'animation.
(function(){
  if(document.getElementById('scroll-progress'))return;

  var css=''
    +'#scroll-progress{position:fixed;top:20px;left:0;height:3px;width:0%;background:linear-gradient(90deg,#b6cde0,#E8B06B);z-index:9999;opacity:0;transition:width .1s linear,opacity .3s ease;}'
    +'#scroll-progress.visible{opacity:1;}'
    +"#scroll-progress::after{content:'👟';position:absolute;right:-18px;top:-14px;font-size:32px;line-height:1;filter:drop-shadow(0 0 6px rgba(232,176,107,.8)) drop-shadow(0 2px 4px rgba(0,0,0,.6));}"
    +'#scroll-medal{position:fixed;top:6px;right:10px;font-size:28px;z-index:9999;opacity:0;transform:scale(0) rotate(-20deg);transition:opacity .4s ease,transform .4s cubic-bezier(.34,1.56,.64,1);filter:drop-shadow(0 0 8px rgba(232,176,107,1));pointer-events:none;}'
    +'#scroll-medal.visible{opacity:1;transform:scale(1) rotate(0deg);}';
  var style=document.createElement('style');
  style.textContent=css;
  document.head.appendChild(style);

  var progressBar=document.createElement('div');
  progressBar.id='scroll-progress';
  var medal=document.createElement('div');
  medal.id='scroll-medal';
  medal.textContent='🏅';
  document.body.appendChild(progressBar);
  document.body.appendChild(medal);

  var start=0,maxScroll=1,range=1,enAttente=false,dernierPct=-1,medailleVisible=false;

  // Mesures : uniquement au chargement et au redimensionnement
  function mesurer(){
    var startEl=document.getElementById('semaine');
    start=startEl?startEl.offsetTop:0;
    maxScroll=document.documentElement.scrollHeight-window.innerHeight;
    range=Math.max(maxScroll-start,1);
    afficher();
  }

  function afficher(){
    enAttente=false;
    var y=window.scrollY;
    var pct=Math.min(Math.max((y-start)/range*100,0),100);
    var arrondi=Math.round(pct*10)/10;
    if(arrondi!==dernierPct){                 // on n'écrit que si la valeur change
      dernierPct=arrondi;
      progressBar.style.width=arrondi+'%';
      progressBar.classList.toggle('visible',arrondi>0);
    }
    var fini=pct>=99||y>=maxScroll-4;
    if(fini!==medailleVisible){
      medailleVisible=fini;
      medal.classList.toggle('visible',fini);
    }
  }

  function auDefilement(){
    if(enAttente)return;                      // une seule mise à jour par frame
    enAttente=true;
    requestAnimationFrame(afficher);
  }

  window.addEventListener('scroll',auDefilement,{passive:true});
  window.addEventListener('resize',mesurer,{passive:true});
  // La hauteur de page change quand les images et les cartes se chargent
  window.addEventListener('load',mesurer);
  mesurer();
})();
