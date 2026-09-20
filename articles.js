// Les actualités du club : une entrée par article, la plus récente en premier.
// Le premier article de la liste est mis en avant (grande carte) sur actualites.html.
//
// Pour ajouter un article :
//   1. créer la page article-<id>.html (partir de article-marathon-bleu.html)
//   2. ajouter une entrée ici, tout en haut du tableau
//   3. faire avancer le ?v= d'articles.js dans actualites.html
const ARTICLES=[
  {
    id:'marathon-bleu',
    url:'article-marathon-bleu.html',
    cover:'New3.jpeg',
    coverPos:'center 42%',
    alt:"Les coureurs du CIELBLEU sur la piste, de nuit",
    tag:'Événement',
    date:'2026-09-20',
    dateLabel:'20 septembre 2026',
    read:'3 min',
    title:'42,195 km à 42. En relais.',
    teaser:"La distance mythique découpée en tours de piste, quarante-deux coureurs qui se passent le relais, et un départ à 9h tapantes. Le Marathon Bleu, c'est dimanche."
  }
];

// ── Rendu des cartes (utilisé par actualites.html) ──
function articleCardHTML(a,featured){
  const meta=`<div class="actu-meta"><span class="actu-tag">${a.tag}</span><span class="actu-date">${a.dateLabel}</span><span class="actu-dot">·</span><span class="actu-read">${a.read} de lecture</span></div>`;
  if(featured){
    return `<a class="actu-feat reveal" href="${a.url}">
      <div class="actu-feat-media"><img src="${a.cover}" alt="${a.alt}" style="object-position:${a.coverPos}" fetchpriority="high" decoding="async"></div>
      <div class="actu-feat-body">
        ${meta}
        <h3 class="actu-feat-title">${a.title}</h3>
        <p class="actu-feat-teaser">${a.teaser}</p>
        <span class="actu-more">Lire l'article →</span>
      </div>
    </a>`;
  }
  return `<a class="actu-card" href="${a.url}">
    <div class="actu-card-media"><img src="${a.cover}" alt="${a.alt}" style="object-position:${a.coverPos}" loading="lazy" decoding="async"></div>
    <div class="actu-card-body">
      ${meta}
      <h3 class="actu-card-title">${a.title}</h3>
      <p class="actu-card-teaser">${a.teaser}</p>
      <span class="actu-more">Lire l'article →</span>
    </div>
  </a>`;
}
