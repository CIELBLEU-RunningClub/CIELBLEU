// Données partagées du calendrier, utilisées par index.html et calendrier.html
// ===== SAISON 3 · 2026-2027 (septembre → décembre 2026) =====
// Les événements de janvier 2027 et suivants seront ajoutés plus tard.
const MONTHS=['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
const MONTHS_SHORT=['Janv.','Févr.','Mars','Avr.','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'];
const TODAY=new Date();
const SEASON_YEAR=2026;
const YEAR=SEASON_YEAR; // la saison est câblée sur 2026 tant que 2027 n'est pas préparé

// Couleurs par type de séance (bien distinctes : bleu / vert / ambre)
const C_TARTAN='#3E7CB1';   // lundi · piste
const C_MERCREDI='#5FA25A'; // mercredi
const C_SOCIAL='#E8B06B';   // dimanche · social run

// Lieux : volontairement génériques. On ne publie jamais l'adresse exacte,
// elle est communiquée sur Instagram et Strava.
const STRAVA_URL='https://www.strava.com/clubs/lecielestbleu';
const L_PISTE='Piste · Paris';
const L_BAR='Bar partenaire · Paris';
// Le dimanche, le lieu renvoie directement sur le club Strava où le point
// de départ est publié chaque semaine.
const L_STRAVA='Point publié sur <a href="'+STRAVA_URL+'" target="_blank" rel="noopener">notre Strava ↗</a>';

// ─────────────────────────────────────────────────────────────
// SEPTEMBRE · « Septembre Bleu » : tous les runs ouverts à tous pendant 1 mois
// Programme repris à l'identique du post Instagram de la saison 3.
// ─────────────────────────────────────────────────────────────
const septembre=[
  // Séances (ouvertes à tous en septembre)
  {m:8,d:6,session:true,wd:0,color:C_SOCIAL,time:'10h20',dur:90,title:'Run de rentrée · Social Bleu',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"Le run de rentrée qui lance la saison 3. Social Bleu : 8 km en groupes d'allure, puis café tous ensemble.",
   details:[['Lieu',L_STRAVA]],location:'Paris'},
  {m:8,d:7,session:true,wd:1,color:C_TARTAN,time:'19h45',dur:90,title:'Tartan Bleu · Séance piste',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"La séance piste du lundi, encadrée, tous niveaux.",
   details:[['Lieu',L_PISTE]],location:'Paris'},
  {m:8,d:9,session:true,wd:3,color:C_MERCREDI,time:'19h20',dur:70,title:'Mercredi Bleu',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"Le run du mercredi soir, 8 km en groupes d'allure.",
   details:[['Lieu',L_BAR]],location:'Paris'},
  {m:8,d:13,session:true,wd:0,color:C_SOCIAL,time:'10h20',dur:90,title:'Social Bleu',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"Social Bleu du dimanche, 8 km en groupes d'allure puis café.",
   details:[['Lieu',L_STRAVA]],location:'Paris'},
  {m:8,d:14,session:true,wd:1,color:C_TARTAN,time:'19h45',dur:90,title:'Tartan Bleu · Test VMA',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"Séance piste spéciale test VMA pour situer son niveau en début de saison.",
   details:[['Lieu',L_PISTE]],location:'Paris'},
  {m:8,d:16,session:true,wd:3,color:C_MERCREDI,time:'19h20',dur:70,title:'Mercredi Bleu',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"Le run du mercredi soir, 8 km en groupes d'allure.",
   details:[['Lieu',L_BAR]],location:'Paris'},
  {m:8,d:20,session:true,wd:0,color:C_SOCIAL,time:'10h20',dur:90,title:'Social Bleu',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"Social Bleu du dimanche, 8 km en groupes d'allure puis café.",
   details:[['Lieu',L_STRAVA]],location:'Paris'},
  {m:8,d:21,session:true,wd:1,color:C_TARTAN,time:'19h45',dur:90,title:'Tartan Bleu · Séance piste',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"La séance piste du lundi, encadrée, tous niveaux.",
   details:[['Lieu',L_PISTE]],location:'Paris'},
  {m:8,d:23,session:true,wd:3,color:C_MERCREDI,time:'19h20',dur:70,title:'Mercredi Bleu',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"Le run du mercredi soir, 8 km en groupes d'allure.",
   details:[['Lieu',L_BAR]],location:'Paris'},
  {m:8,d:28,session:true,wd:1,color:C_TARTAN,time:'19h45',dur:90,title:'Tartan Bleu · Séance piste',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"La séance piste du lundi, encadrée, tous niveaux.",
   details:[['Lieu',L_PISTE]],location:'Paris'},
  {m:8,d:30,session:true,wd:3,color:C_MERCREDI,time:'19h20',dur:70,title:'Mercredi Bleu',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Septembre Bleu',c:'tag-km'}],
   desc:"Le run du mercredi soir, 8 km en groupes d'allure.",
   details:[['Lieu',L_BAR]],location:'Paris'},
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
  details:[['Lieu',L_PISTE]],location:'Paris'};
const mercrediTpl={wd:3,color:C_MERCREDI,time:'19h20',dur:70,title:'Mercredi Bleu · Adhérents club',
  tags:[{l:'Adhérents',c:'tag-adherent'}],
  desc:"Le run des adhérents du mercredi soir, en groupes d'allure dans Paris. La séance plaisir du milieu de semaine, qui se prolonge souvent autour d'un verre au bar partenaire.",
  details:[['Lieu',L_BAR]],location:'Paris'};
const socialTpl={wd:0,color:C_SOCIAL,time:'10h20',dur:90,title:'Social Bleu',
  tags:[{l:'Ouvert à tous',c:'tag-open'}],
  desc:"Le Social Run du dimanche, ouvert à tous et sans inscription. 8 km en groupes d'allure, puis café tous ensemble. Le point de départ est publié sur Strava chaque semaine.",
  details:[['Lieu',L_STRAVA]],location:'Paris'};
// La 1re séance piste de chaque mois — l'Open Track — est ouverte à tous (adhérents comme non-adhérents)
const openTrackTpl={wd:1,color:C_TARTAN,time:'19h45',dur:90,title:'Tartan Bleu · Open Track',
  tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Open Track',c:'tag-km'}],
  desc:"L'Open Track, c'est la première séance piste du mois : elle est ouverte à tous, adhérents comme non-adhérents. L'occasion de tester la piste avec le club.",
  details:[['Lieu',L_PISTE]],location:'Paris'};

// {tpl, m, dates:[...]} → séances récurrentes de la saison
const recurring=[
  // Octobre (m=9) · 1re piste du mois = Open Track (ouverte à tous)
  {tpl:openTrackTpl, m:9, dates:[5]},
  {tpl:tartanTpl,    m:9, dates:[12,19,26]},
  {tpl:mercrediTpl,  m:9, dates:[7,28]},
  {tpl:socialTpl,    m:9, dates:[4,18]},
  // Novembre (m=10)
  {tpl:openTrackTpl, m:10, dates:[2]},
  {tpl:tartanTpl,    m:10, dates:[9,16,23,30]},
  {tpl:mercrediTpl,  m:10, dates:[4,11,18,25]},
  {tpl:socialTpl,    m:10, dates:[29]},
  // Décembre (m=11) · pause à partir du 21 (vacances de Noël)
  {tpl:openTrackTpl, m:11, dates:[7]},
  {tpl:mercrediTpl,  m:11, dates:[2,9,16]},
  {tpl:socialTpl,    m:11, dates:[20]},
];

// ─────────────────────────────────────────────────────────────
// ÉVÉNEMENTS SPÉCIAUX de la saison
// ─────────────────────────────────────────────────────────────
const specials=[
  // Septembre
  {m:8,d:3,time:'18h30',dur:90,title:'Run It Again League · VMA x Hoka',
   tags:[{l:'Adhérents',c:'tag-adherent'},{l:'Hoka',c:'tag-partner'}],
   desc:"Ligue VMA en partenariat avec Hoka pour lancer la saison. Format compétitif et convivial, réservé aux adhérents.",
   details:[['Horaire','18h30'],['Lieu','Piste · Clamart']],location:'Clamart'},
  {m:8,d:11,time:'19h30',dur:180,title:'Soirée de rentrée',
   tags:[{l:'Adhérents',c:'tag-adherent'}],
   desc:"La soirée qui lance la saison 3 du club. On se retrouve pour fêter la rentrée tous ensemble.",
   details:[['Horaire','19h30'],['Lieu','Paris']],location:'Paris'},
  {m:8,d:27,time:'8h30',dur:240,title:'Marathon Bleu · En relais',
   tags:[{l:'Adhérents',c:'tag-adherent'}],
   desc:"Le Marathon Bleu en relais : 42 coureurs se partagent la distance mythique sur la piste. L'événement adhérents de septembre.",
   details:[['Horaire','8h30 – 12h30'],['Lieu',L_PISTE]],location:'Paris'},
  // Octobre
  {m:9,d:14,time:'19h20',dur:70,title:'CIELBLEU × Fitzroy',
   tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Partenariat',c:'tag-partner'}],
   desc:"Run découverte en partenariat avec Fitzroy.",
   details:[['Horaire','19h20'],['Lieu','Paris']],location:'Paris'},
  {m:9,d:22,time:'19h00',dur:120,title:'Analyse de foulée × Terre de Running',
   tags:[{l:'Partenariat',c:'tag-partner'},{l:'Adhérents',c:'tag-adherent'}],
   desc:"Séance d'analyse de foulée avec Terre de Running pour affiner sa technique et son matériel.",
   details:[['Horaire','19h00 · à confirmer'],['Lieu','Terre de Running · Paris']],location:'Paris'},
  {m:9,d:24,time:'à confirmer',dur:180,title:'Interclubs OFFTRACK',
   tags:[{l:'Adhérents',c:'tag-adherent'},{l:'Interclubs',c:'tag-partner'}],
   desc:"Rencontre interclubs avec le collectif OFFTRACK.",
   details:[['Horaire','À confirmer'],['Lieu','Paris · à confirmer']],location:'Paris'},
  // Novembre
  {m:10,d:1,time:'9h00',dur:240,title:'EKIDEN Adidas',
   tags:[{l:'Adhérents',c:'tag-adherent'},{l:'Adidas',c:'tag-partner'}],
   desc:"Marathon en relais (ekiden) avec le partenaire Adidas. Une équipe CIELBLEU sur la ligne de départ.",
   details:[['Horaire','9h00 · à confirmer'],['Lieu','Paris · à confirmer']],location:'Paris'},
  {m:10,d:15,time:'10h00',dur:120,title:'KM Bleu · 10K Hoka',
   tags:[{l:'KM Bleu',c:'tag-km'},{l:'Adhérents',c:'tag-adherent'}],
   desc:"Le KM Bleu déploie sa fan zone et une équipe du club s'aligne sur le 10K en partenariat avec Hoka.",
   details:[['Horaire','10h00 · à confirmer'],['Lieu','Paris · à confirmer']],location:'Paris'},
  // Décembre
  {m:11,d:11,time:'19h30',dur:210,title:'Soirée de Noël',
   tags:[{l:'Adhérents',c:'tag-adherent'}],
   desc:"La soirée de Noël du club pour clôturer l'année tous ensemble.",
   details:[['Horaire','19h30 · à confirmer'],['Lieu','Paris']],location:'Paris'},
];

// Séances à titre particulier (nom spécifique mais format « séance »)
const namedSessions=[
  {m:11,d:13,session:true,wd:0,color:C_SOCIAL,time:'10h20',dur:100,title:'Run Collectif de Noël',
   tags:[{l:'Ouvert à tous',c:'tag-open'}],
   desc:"Un run collectif festif avant les fêtes, ouvert à tous. On court ensemble puis on partage un moment convivial.",
   details:[['Lieu',L_STRAVA]],location:'Paris'},
];

// ─────────────────────────────────────────────────────────────
// HISTORIQUE · saisons précédentes (avant septembre 2026)
// Reprend à l'identique l'ancien calendrier : séances hebdo générées
// de janvier à juillet (pause estivale en août) + événements spéciaux.
// ─────────────────────────────────────────────────────────────
const legacySessionTpl=[
  {wd:1,biweekly:true,time:'19h30',dur:90,title:'Séance piste',color:C_TARTAN,tag:{l:'Adhérent',c:'tag-seance'},desc:"Séance de fractionné sur piste, encadrée. Le rendez-vous des adhérents qui veulent gagner en vitesse, dans la bonne humeur.",details:[['Lieu',L_PISTE]],location:'Paris'},
  {wd:3,biweekly:false,time:'19h20',dur:70,title:'Run Adhérents',color:C_MERCREDI,tag:{l:'Adhérent',c:'tag-seance'},desc:"Run Adhérents en groupes d'allure dans Paris. Le mercredi soir version CIELBLEU.",details:[['Lieu',L_BAR]],location:'Paris'},
  {wd:0,biweekly:false,time:'10h20',dur:90,title:'Social Run',color:C_SOCIAL,tag:{l:'Ouvert à tous',c:'tag-social'},desc:"Le Social Run du dimanche, ouvert à tous, sans inscription. On court en groupes d'allure puis on partage un café. Le cœur du club.",details:[['Lieu',L_STRAVA]],location:'Paris'}
];
const legacySpecials=[
  {m:5,d:5,title:'Naturalia × We Love Green',tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Partenariat',c:'tag-partner'}],time:'9h00',dur:120,desc:"Run solidaire en partenariat avec Naturalia et le festival We Love Green. Une course engagée, dans un cadre festif au Bois de Vincennes.",details:[['Horaire','9h00'],['Lieu','Bois de Vincennes · Paris']],location:'Paris'},
  {m:5,d:7,title:'KM Bleu 10K Adidas + AG',tags:[{l:'KM Bleu',c:'tag-km'},{l:'Adidas',c:'tag-partner'}],time:'10h00',dur:420,desc:"Course officielle 10K en équipe CIELBLEU avec le partenariat Adidas, suivie de l'Assemblée Générale annuelle du club.",details:[['Horaire','10h00 (course) · 14h00 (AG)'],['Lieu','Paris']],location:'Paris'},
  {m:5,d:12,title:"Soirée Fin d'année",tags:[{l:'Adhérents',c:'tag-adherent'}],time:'20h00',dur:240,desc:"La grande fête de fin de saison 2025-2026 ! Un moment pour célébrer ensemble tout ce qu'on a vécu cette année.",details:[['Horaire','20h00'],['Lieu','Paris']],location:'Paris'},
  {m:5,d:13,title:'Salomon × Gravenlenza',tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Salomon',c:'tag-partner'}],time:'8h30',dur:270,desc:"Événement running trail en partenariat avec Salomon. Testing de chaussures trail et run collectif en forêt.",details:[['Horaire','8h30'],['Lieu','Forêt de Fontainebleau']],location:'Forêt de Fontainebleau'},
  {m:5,d:28,title:"L'Or Espresso × CIELBLEU · 2ème édition",tags:[{l:'KM Bleu',c:'tag-km'},{l:'Ouvert à tous',c:'tag-open'}],time:'9h45',dur:90,desc:"Run de 8 km dans Saint-Germain-des-Prés, suivi d'une dégustation gratuite des créations de L'Or Espresso. Allure 6:15/km.",details:[['Horaire','9h45'],['Lieu',"L'Or Espresso · Paris"]],location:'Paris'},
  {m:6,d:8,title:'Run Testing ACT',tags:[{l:'Adhérents',c:'tag-adherent'},{l:'ACT',c:'tag-partner'}],time:'19h20',dur:120,desc:"Session de testing de produits ACT avec 30 membres du club. Tester du matériel en avant-première et donner son retour.",details:[['Horaire','19h20'],['Lieu','Paris']],location:'Paris'},
  {m:6,d:18,title:"Course d'orientation Bois-le-Roi",tags:[{l:'Adhérents',c:'tag-adherent'},{l:'Trail',c:'tag-trail'}],time:'10h00',dur:240,desc:"Course d'orientation en équipe dans les bois de Bois-le-Roi. Parcours de 15 à 20 km, une aventure navigante et partagée.",details:[['Horaire','10h00'],['Lieu','Bois-le-Roi']],location:'Bois-le-Roi'},
  {m:6,d:22,title:'Run découverte CIELBLEU × Fitzroy',tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Partenariat',c:'tag-partner'}],time:'19h20',dur:70,desc:"Run découverte en partenariat avec Fitzroy, ouvert à tous. Le dernier rendez-vous avant la pause estivale du club.",details:[['Horaire','19h20'],['Lieu','Paris']],location:'Paris'},
  {m:6,d:26,title:'KM Bleu TDF',tags:[{l:'KM Bleu',c:'tag-km'},{l:'Ouvert à tous',c:'tag-open'}],time:'14h00',dur:180,desc:"Pas de run cette fois : on installe le Kilomètre Bleu pour mettre l'ambiance et pousser les cyclistes du Tour de France dans la montée. Cris, drapeaux et tambours, l'équipe orga est sur place dès 10h.",details:[['Horaire','14h00 · orga sur place dès 10h'],['Lieu','Paris 18e']],location:'Paris 18e'},
  {m:7,d:27,title:'Marathon Bleu',tags:[{l:'Ouvert à tous',c:'tag-open'}],time:'10h20',dur:90,desc:"Le Social Run du dimanche, ouvert à tous, sans inscription. On court en groupes d'allure puis on partage un café. Le cœur du club.",details:[['Horaire','10h20'],['Lieu',L_STRAVA]],location:'Paris'},
  {m:7,d:30,title:'Run collectif de rentrée',tags:[{l:'Ouvert à tous',c:'tag-open'}],time:'10h20',dur:100,desc:"Reprise collective après la pause estivale ! Toutes allures, tout le monde bienvenu. La saison commence ici.",details:[['Horaire','10h20'],['Lieu',L_STRAVA]],location:'Paris'}
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
  const ev={id,y:YEAR,m:o.m,d:o.d,date:new Date(YEAR,o.m,o.d),title:o.title,color:o.color||'#DA5B47',
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

// ── Historique (avant septembre 2026) ──
legacySpecials.forEach(s=>pushEvent(Object.assign({session:false},s)));
// Séances hebdo générées de janvier à juillet (pause estivale en août ;
// septembre → décembre relève de la saison 3 câblée plus haut)
(function(){
  const legacyDays=new Set(legacySpecials.map(s=>s.m+'-'+s.d));
  ['6-19','6-20','6-27','6-28','6-29','6-30','6-31'].forEach(k=>legacyDays.add(k));
  legacySessionTpl.forEach(tpl=>{
    let occ=0;
    for(let m=0;m<8;m++){          // janvier → juillet (m<8), on saute août
      if(m===7)continue;
      const days=new Date(YEAR,m+1,0).getDate();
      for(let d=1;d<=days;d++){
        if(new Date(YEAR,m,d).getDay()!==tpl.wd)continue;
        if(legacyDays.has(m+'-'+d))continue;
        if(tpl.biweekly){occ++;if(occ%2===0)continue;}
        pushEvent({m,d,session:true,wd:tpl.wd,color:tpl.color,time:tpl.time,dur:tpl.dur,title:tpl.title,tags:[tpl.tag],desc:tpl.desc,details:tpl.details,location:tpl.location});
      }
    }
  });
})();

allEvents.sort((a,b)=>a.date-b.date);

// Mois disposant d'événements
const monthsWith=[...new Set(allEvents.map(e=>e.m))].sort((a,b)=>a-b);

function isPast(ev){const end=new Date(ev.y,ev.m,ev.d,23,59);return end<TODAY;}
