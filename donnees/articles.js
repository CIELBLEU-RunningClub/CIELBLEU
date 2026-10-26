// Les actualités du club : une entrée par article, la plus récente en premier.
// Le premier article de la liste est mis en avant (grande carte) sur actualites.html.
//
// Pour ajouter un article :
//   1. créer la page article-<id>.html (partir de article-marathon-bleu.html)
//   2. ajouter une entrée ici, tout en haut du tableau
//   3. faire avancer le ?v= d'donnees/articles.js dans actualites.html
const ARTICLES=[
  {
    id:'cielrouge',
    glow:'rouge',                   // lumière rouge au survol / au toucher
    url:'article-cielrouge.html',
    cover:'images/evenements/alerte-rouge-miniature.jpg',
    coverPos:'center 50%',
    alt:"Les coureurs du CIELBLEU sur la piste",
    tag:'Actu',
    date:'2026-10-26',
    dateLabel:'26 octobre 2026',
    read:'2 min',
    title:"Alerte rouge : le ciel change de couleur",
    teaser:"Avec Adidas et la nouvelle Adios Pro 5, CIELBLEU passe au rouge. Au programme : un challenge sur les Champs-Élysées et l'Ekiden de Paris."
  },
  {
    id:'marathon-bleu',
    url:'article-marathon-bleu.html',
    cover:'images/evenements/marathon-bleu-couverture-2.jpg',
    coverPos:'center 40%',
    alt:"Les adhérents du CIELBLEU réunis sur la piste bleue du stade",
    tag:'Retour en images',
    date:'2026-10-22',
    dateLabel:'27 septembre 2026',
    read:'2 min',
    title:"Marathon Bleu : 42,195 km bouclés en 2h15'48",
    teaser:"42 coureurs, 42,195 km en relais de 400 m, un seul chrono : 2h15'48. Retour sur la première édition du Marathon Bleu."
  }
];

// ── Rendu des cartes (utilisé par actualites.html) ──
function articleCardHTML(a,featured){
  const meta=`<div class="actu-meta"><span class="actu-tag">${a.tag}</span><span class="actu-date">${a.dateLabel}</span><span class="actu-dot">·</span><span class="actu-read">${a.read} de lecture</span></div>`;
  if(featured){
    return `<a class="actu-feat reveal${a.glow?' glow-'+a.glow:''}" href="${a.url}">
      <div class="actu-feat-media"><img src="${a.cover}" alt="${a.alt}" style="object-position:${a.coverPos}" fetchpriority="high" decoding="async"></div>
      <div class="actu-feat-body">
        ${meta}
        <h3 class="actu-feat-title">${a.title}</h3>
        <p class="actu-feat-teaser">${a.teaser}</p>
        <span class="actu-more">Lire l'article →</span>
      </div>
    </a>`;
  }
  return `<a class="actu-card${a.glow?' glow-'+a.glow:''}" href="${a.url}">
    <div class="actu-card-media"><img src="${a.cover}" alt="${a.alt}" style="object-position:${a.coverPos}" loading="lazy" decoding="async"></div>
    <div class="actu-card-body">
      ${meta}
      <h3 class="actu-card-title">${a.title}</h3>
      <p class="actu-card-teaser">${a.teaser}</p>
      <span class="actu-more">Lire l'article →</span>
    </div>
  </a>`;
}
