// Données partagées du calendrier, utilisées par index.html et calendrier.html
// ===== SAISON 3 · 2026-2027 (septembre → décembre 2026) =====
// Les événements de janvier 2027 et suivants seront ajoutés plus tard.
const MONTHS=['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
const MONTHS_SHORT=['Janv.','Févr.','Mars','Avr.','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'];
const TODAY=new Date();
const SEASON_YEAR=2026;
const YEAR=SEASON_YEAR; // la saison est câblée sur 2026 tant que 2027 n'est pas préparé

// Couleurs par type de séance
const C_TARTAN='#6d879a';   // lundi · piste
const C_MERCREDI='#8fb3a8'; // mercredi
const C_SOCIAL='#E8B06B';   // dimanche · social run

// ─────────────────────────────────────────────────────────────
// SEPTEMBRE · « Septembre Bleu » : tous les runs ouverts à tous pendant 1 mois
// Programme repris à l'identique du post Instagram de la saison 3.
// ─────────────────────────────────────────────────────────────
const septembre=[
  // Séances (ouvertes à tous en septembre)
  {m:8,d:6,session:true,wd:0,color:C_SOCIAL,time:'10h20',dur:90,title:'Run de rentrée · Social Bleu #121',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"Le run de rentrée qui lance la saison 3. Social Bleu ouvert à tous : 8 km en groupes d'allure, puis café tous ensemble.",
   details:[['Distance','8 km'],['Allures','Groupes d\'allure · tous niveaux'],['Lieu','Les Nautes · Paris 4e'],['Accès','Ouvert à tous']],location:'Les Nautes, Paris 4e'},
  {m:8,d:7,session:true,wd:1,color:C_TARTAN,time:'19h45',dur:90,title:'Tartan Bleu · Séance piste',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"La séance piste du lundi, encadrée, tous niveaux. Ouverte à tous pendant Septembre Bleu.",
   details:[['Format','Séance piste'],['Niveau','Tous niveaux'],['Lieu','Stade Jules Ladoumègue · Paris 19e'],['Accès','Ouvert à tous']],location:'Stade Jules Ladoumègue, Paris 19e'},
  {m:8,d:9,session:true,wd:3,color:C_MERCREDI,time:'19h20',dur:70,title:'Social Bleu #122',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"Le run du mercredi soir, 8 km en groupes d'allure. Ouvert à tous pendant Septembre Bleu.",
   details:[['Distance','8 km'],['Allures','Groupes d\'allure · tous niveaux'],['Lieu','Le Cavalier Bleu · Paris 4e'],['Accès','Ouvert à tous']],location:'Le Cavalier Bleu, Paris 4e'},
  {m:8,d:13,session:true,wd:0,color:C_SOCIAL,time:'10h20',dur:90,title:'Social Bleu #123',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"Social Bleu du dimanche, 8 km en groupes d'allure puis café. Ouvert à tous pendant Septembre Bleu.",
   details:[['Distance','8 km'],['Allures','Groupes d\'allure · tous niveaux'],['Lieu','Arènes de Lutèce · Paris 5e'],['Accès','Ouvert à tous']],location:'Arènes de Lutèce, Paris 5e'},
  {m:8,d:14,session:true,wd:1,color:C_TARTAN,time:'19h45',dur:90,title:'Tartan Bleu · Test VMA',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"Séance piste spéciale test VMA pour situer son niveau en début de saison. Ouverte à tous.",
   details:[['Format','Séance piste · test VMA'],['Niveau','Tous niveaux'],['Lieu','Stade Jules Ladoumègue · Paris 19e'],['Accès','Ouvert à tous']],location:'Stade Jules Ladoumègue, Paris 19e'},
  {m:8,d:16,session:true,wd:3,color:C_MERCREDI,time:'19h20',dur:70,title:'Social Bleu #124',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"Le run du mercredi soir, 8 km en groupes d'allure. Ouvert à tous pendant Septembre Bleu.",
   details:[['Distance','8 km'],['Allures','Groupes d\'allure · tous niveaux'],['Lieu','Le Cavalier Bleu · Paris 4e'],['Accès','Ouvert à tous']],location:'Le Cavalier Bleu, Paris 4e'},
  {m:8,d:20,session:true,wd:0,color:C_SOCIAL,time:'10h20',dur:90,title:'Social Bleu #125',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"Social Bleu du dimanche, 8 km en groupes d'allure puis café. Ouvert à tous pendant Septembre Bleu.",
   details:[['Distance','8 km'],['Allures','Groupes d\'allure · tous niveaux'],['Lieu','Sacré-Cœur · Paris 18e'],['Accès','Ouvert à tous']],location:'Sacré-Cœur, Paris 18e'},
  {m:8,d:21,session:true,wd:1,color:C_TARTAN,time:'19h45',dur:90,title:'Tartan Bleu · Séance piste',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"La séance piste du lundi, encadrée, tous niveaux. Ouverte à tous pendant Septembre Bleu.",
   details:[['Format','Séance piste'],['Niveau','Tous niveaux'],['Lieu','Stade Alain Mimoun · Paris 12e'],['Accès','Ouvert à tous']],location:'Stade Alain Mimoun, Paris 12e'},
  {m:8,d:23,session:true,wd:3,color:C_MERCREDI,time:'19h20',dur:70,title:'Social Bleu #126',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"Le run du mercredi soir, 8 km en groupes d'allure. Ouvert à tous pendant Septembre Bleu.",
   details:[['Distance','8 km'],['Allures','Groupes d\'allure · tous niveaux'],['Lieu','Le Cavalier Bleu · Paris 4e'],['Accès','Ouvert à tous']],location:'Le Cavalier Bleu, Paris 4e'},
  {m:8,d:28,session:true,wd:1,color:C_TARTAN,time:'19h45',dur:90,title:'Tartan Bleu · Séance piste',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"La séance piste du lundi, encadrée, tous niveaux. Ouverte à tous pendant Septembre Bleu.",
   details:[['Format','Séance piste'],['Niveau','Tous niveaux'],['Lieu','Stade Louis Lumière · Paris 20e'],['Accès','Ouvert à tous']],location:'Stade Louis Lumière, Paris 20e'},
  {m:8,d:30,session:true,wd:3,color:C_MERCREDI,time:'19h20',dur:70,title:'Social Bleu #127',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"Le run du mercredi soir, 8 km en groupes d'allure. Ouvert à tous pendant Septembre Bleu.",
   details:[['Distance','8 km'],['Allures','Groupes d\'allure · tous niveaux'],['Lieu','Le Cavalier Bleu · Paris 4e'],['Accès','Ouvert à tous']],location:'Le Cavalier Bleu, Paris 4e'},
];

// ─────────────────────────────────────────────────────────────
// OCTOBRE → DÉCEMBRE · rythme repris du calendrier partagé
// Tartan Bleu et Mercredi Bleu redeviennent réservés aux adhérents.
// Les dates sont explicites pour coller au calendrier (semaines de
// course et vacances de Noël sans séance ne sont pas générées).
// ─────────────────────────────────────────────────────────────
const tartanTpl={wd:1,color:C_TARTAN,time:'19h45',dur:90,title:'Tartan Bleu · Séance piste',
  tags:[{l:'Adhérents',c:'tag-adherent'}],
  desc:"La séance piste du lundi soir, encadrée, en fractionné. Le rendez-vous vitesse des adhérents, dans la bonne humeur.",
  details:[['Format','Séance piste'],['Niveau','Tous niveaux'],['Lieu','Piste · communiqué sur Strava'],['Accès','Réservé aux adhérents']],location:'Paris (piste)'};
const mercrediTpl={wd:3,color:C_MERCREDI,time:'19h20',dur:70,title:'Mercredi Bleu · Adhérents club',
  tags:[{l:'Adhérents',c:'tag-adherent'}],
  desc:"Le run des adhérents du mercredi soir, en groupes d'allure dans Paris. La séance plaisir du milieu de semaine.",
  details:[['Distance','~8 km'],['Allures','Groupes d\'allure'],['Lieu','Le Cavalier Bleu · Paris 4e'],['Accès','Réservé aux adhérents']],location:'Le Cavalier Bleu, Paris 4e'};
const socialTpl={wd:0,color:C_SOCIAL,time:'10h20',dur:90,title:'Social Bleu',
  tags:[{l:'Ouvert à tous',c:'tag-open'}],
  desc:"Le Social Run du dimanche, ouvert à tous et sans inscription. 8 km en groupes d'allure, puis café tous ensemble. Le point de départ est publié sur Strava chaque semaine.",
  details:[['Distance','8 km'],['Allures','Groupes d\'allure · tous niveaux'],['Lieu','Point publié sur Strava'],['Accès','Ouvert à tous · sans inscription']],location:'Paris (point Strava)'};

// {tpl, m, dates:[...]} → séances récurrentes de la saison
const recurring=[
  // Octobre (m=9)
  {tpl:tartanTpl,   m:9, dates:[5,12,19,26]},
  {tpl:mercrediTpl, m:9, dates:[7,28]},
  {tpl:socialTpl,   m:9, dates:[4,18]},
  // Novembre (m=10)
  {tpl:tartanTpl,   m:10, dates:[2,9,16,23,30]},
  {tpl:mercrediTpl, m:10, dates:[4,11,18,25]},
  {tpl:socialTpl,   m:10, dates:[29]},
  // Décembre (m=11) · pause à partir du 21 (vacances de Noël)
  {tpl:tartanTpl,   m:11, dates:[7]},
  {tpl:mercrediTpl, m:11, dates:[2,9,16]},
  {tpl:socialTpl,   m:11, dates:[20]},
];

// ─────────────────────────────────────────────────────────────
// ÉVÉNEMENTS SPÉCIAUX de la saison
// ─────────────────────────────────────────────────────────────
const specials=[
  // Septembre
  {m:8,d:3,time:'18h30',dur:90,title:'Run It Again League · VMA x Hoka',
   tags:[{l:'Adhérents',c:'tag-adherent'},{l:'Hoka',c:'tag-partner'}],
   desc:"Ligue VMA en partenariat avec Hoka pour lancer la saison. Format compétitif et convivial, réservé aux adhérents.",
   details:[['Lieu','Stade Hunebelle · Clamart'],['Horaire','18h30'],['Format','VMA · Run It Again League'],['Accès','Réservé aux adhérents']],location:'Stade Hunebelle, Clamart'},
  {m:8,d:11,time:'19h30',dur:180,title:'Soirée de rentrée',
   tags:[{l:'Adhérents',c:'tag-adherent'}],
   desc:"La soirée qui lance la saison 3 du club. On se retrouve pour fêter la rentrée tous ensemble.",
   details:[['Lieu','Paris · communiqué sur Strava'],['Horaire','19h30 · à confirmer'],['Accès','Réservé aux adhérents']],location:'Paris'},
  {m:8,d:27,time:'8h30',dur:240,title:'Marathon Bleu · En relais',
   tags:[{l:'Adhérents',c:'tag-adherent'}],
   desc:"Le Marathon Bleu en relais : 42 coureurs se partagent la distance mythique sur la piste. L'événement adhérents de septembre.",
   details:[['Lieu','Stade Jules Ladoumègue · Paris 19e'],['Horaire','8h30 – 12h30'],['Format','Relais · 42 coureurs'],['Accès','Réservé aux adhérents']],location:'Stade Jules Ladoumègue, Paris 19e'},
  // Octobre
  {m:9,d:14,time:'19h20',dur:70,title:'CIELBLEU × Fitzroy',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Partenariat',c:'tag-partner'}],
   desc:"Run découverte en partenariat avec Fitzroy, ouvert à tous.",
   details:[['Lieu','Paris · communiqué sur Strava'],['Horaire','19h20'],['Accès','Ouvert à tous']],location:'Paris'},
  {m:9,d:22,time:'19h00',dur:120,title:'Analyse de foulée × Terre de Running',
   tags:[{l:'Partenariat',c:'tag-partner'},{l:'Adhérents',c:'tag-adherent'}],
   desc:"Séance d'analyse de foulée avec Terre de Running pour affiner sa technique et son matériel.",
   details:[['Lieu','Terre de Running · Paris'],['Horaire','19h00 · à confirmer'],['Accès','Adhérents · sur inscription']],location:'Terre de Running, Paris'},
  {m:9,d:24,time:'à confirmer',dur:180,title:'Interclubs OFFTRACK',
   tags:[{l:'Adhérents',c:'tag-adherent'},{l:'Interclubs',c:'tag-partner'}],
   desc:"Rencontre interclubs avec le collectif OFFTRACK.",
   details:[['Lieu','Paris · à confirmer'],['Horaire','À confirmer'],['Accès','Réservé aux adhérents']],location:'Paris'},
  // Novembre
  {m:10,d:1,time:'9h00',dur:240,title:'EKIDEN Adidas',
   tags:[{l:'Adhérents',c:'tag-adherent'},{l:'Adidas',c:'tag-partner'}],
   desc:"Marathon en relais (ekiden) avec le partenaire Adidas. Une équipe CIELBLEU sur la ligne de départ.",
   details:[['Lieu','Paris · à confirmer'],['Horaire','9h00 · à confirmer'],['Format','Ekiden · relais'],['Accès','Réservé aux adhérents']],location:'Paris'},
  {m:10,d:15,time:'10h00',dur:120,title:'KM Bleu · 10K Hoka',
   tags:[{l:'KM Bleu',c:'tag-km'},{l:'Adhérents',c:'tag-adherent'}],
   desc:"Le KM Bleu déploie sa fan zone et une équipe du club s'aligne sur le 10K en partenariat avec Hoka.",
   details:[['Lieu','Paris · à confirmer'],['Horaire','10h00 · à confirmer'],['Accès','Réservé aux adhérents']],location:'Paris'},
  // Décembre
  {m:11,d:11,time:'19h30',dur:210,title:'Soirée de Noël',
   tags:[{l:'Adhérents',c:'tag-adherent'}],
   desc:"La soirée de Noël du club pour clôturer l'année tous ensemble.",
   details:[['Lieu','Paris · communiqué sur Strava'],['Horaire','19h30 · à confirmer'],['Accès','Réservé aux adhérents']],location:'Paris'},
];

// Séances à titre particulier (nom spécifique mais format « séance »)
const namedSessions=[
  {m:11,d:13,session:true,wd:0,color:C_SOCIAL,time:'10h20',dur:100,title:'Run Collectif de Noël',
   tags:[{l:'Ouvert à tous',c:'tag-open'}],
   desc:"Un run collectif festif avant les fêtes, ouvert à tous. On court ensemble puis on partage un moment convivial.",
   details:[['Distance','~8 km'],['Allures','Groupes d\'allure · tous niveaux'],['Lieu','Point publié sur Strava'],['Accès','Ouvert à tous']],location:'Paris (point Strava)'},
];

const WD_NAMES=['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
function pad(n){return String(n).padStart(2,'0');}
function timeToHMS(t){const mm=String(t).match(/(\d{1,2})h(\d{0,2})/);const h=mm?+mm[1]:0;const mi=mm&&mm[2]!==''?+mm[2]:0;return pad(h)+pad(mi)+'00';}
function addMinutes(t,dur){const mm=String(t).match(/(\d{1,2})h(\d{0,2})/);let h=mm?+mm[1]:0;let mi=mm&&mm[2]!==''?+mm[2]:0;let total=h*60+mi+dur;h=Math.floor(total/60)%24;mi=total%60;return pad(h)+pad(mi)+'00';}
function dtFmt(y,m,d,t){return ''+y+pad(m+1)+pad(d)+'T'+t;}

// Construction de toutes les occurrences
const EVENTS_BY_ID={};
let allEvents=[];let uid=0;

function pushEvent(o){
  const isSession=!!o.session;
  const id=(isSession?'s':'e')+(uid++);
  const ds=dtFmt(YEAR,o.m,o.d,timeToHMS(o.time));
  const de=dtFmt(YEAR,o.m,o.d,addMinutes(o.time,o.dur||90));
  const details=isSession?[['Horaire',o.time],...o.details]:o.details;
  const ev={id,y:YEAR,m:o.m,d:o.d,date:new Date(YEAR,o.m,o.d),title:o.title,color:o.color||'#E8B06B',
    tags:o.tags,desc:o.desc,details,dtStart:ds,dtEnd:de,location:o.location,
    session:isSession,wd:o.wd,dateStr:o.d+' '+MONTHS[o.m]+' '+YEAR,time:o.time};
  EVENTS_BY_ID[id]=ev;allEvents.push(ev);
}

// Séances de septembre (câblées) + séances nommées
septembre.forEach(pushEvent);
namedSessions.forEach(pushEvent);
// Séances récurrentes octobre → décembre
recurring.forEach(r=>r.dates.forEach(d=>pushEvent(Object.assign({m:r.m,d,session:true},r.tpl))));
// Événements spéciaux
specials.forEach(s=>pushEvent(Object.assign({session:false},s)));

allEvents.sort((a,b)=>a.date-b.date);

// Mois disposant d'événements
const monthsWith=[...new Set(allEvents.map(e=>e.m))].sort((a,b)=>a-b);

function isPast(ev){const end=new Date(ev.y,ev.m,ev.d,23,59);return end<TODAY;}
