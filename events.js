// Données partagées du calendrier — utilisées par index.html et calendrier.html
// ===== CALENDRIER DYNAMIQUE =====
const MONTHS=['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
const MONTHS_SHORT=['Janv.','Févr.','Mars','Avr.','Mai','Juin','Juil.','Août','Sept.','Oct.','Nov.','Déc.'];
const TODAY=new Date();
const YEAR=TODAY.getFullYear(); // séances générées automatiquement pour l'année en cours

// Modèles de séances hebdomadaires
const sessionTpl=[
  {wd:1,biweekly:true,time:'19h30',dur:90,title:'Séance piste',color:'#6d879a',tag:{l:'Adhérent',c:'tag-seance'},desc:"Séance de fractionné sur piste, encadrée. Le rendez-vous des adhérents qui veulent gagner en vitesse, dans la bonne humeur.",details:[['Format','Fractionné piste'],['Fréquence','1 lundi sur 2'],['Lieu','Stade · Paris 19e'],['Accès','Réservé aux adhérents']],location:'Stade, Paris 19e'},
  {wd:3,biweekly:false,time:'19h20',dur:70,title:'Run Adhérents',color:'#8fb3a8',tag:{l:'Adhérent',c:'tag-seance'},desc:"Run Adhérents le long des quais de Seine, en groupes d'allure. Le mercredi soir version Ciel Bleu.",details:[['Format','Run Adhérents'],['Allures','5’30 · 6’00 · 6’30'],['Lieu','Quais de Seine · Paris'],['Accès','Réservé aux adhérents']],location:'Quais de Seine, Paris'},
  {wd:0,biweekly:false,time:'10h20',dur:90,title:'Social Run',color:'#E8B06B',tag:{l:'Ouvert à tous',c:'tag-social'},desc:"Le Social Run du dimanche, ouvert à tous, sans inscription. On court en groupes d'allure puis on partage un café. Le cœur du club.",details:[['Format','Social Run'],['Allures','5’30 · 6’00 · 6’30'],['Lieu','Point publié sur Strava'],['Accès','Ouvert à tous · sans inscription']],location:'Paris (point Strava)'}
];

// Événements spéciaux
const specials=[
  {y:2026,m:5,d:5,title:'Naturalia × We Love Green',color:'#b6cde0',tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Partenariat',c:'tag-partner'}],time:'9h00',dur:120,desc:"Run solidaire en partenariat avec Naturalia et le festival We Love Green. Une course engagée, dans un cadre festif au Bois de Vincennes.",details:[['Lieu','Bois de Vincennes, Paris'],['Horaire','9h00'],['Accès','Ouvert à tous']],location:'Bois de Vincennes, Paris'},
  {y:2026,m:5,d:7,title:'KM Bleu 10K Adidas + AG',color:'#122b44',tags:[{l:'KM Bleu',c:'tag-km'},{l:'Adidas',c:'tag-partner'}],time:'10h00',dur:420,desc:"Course officielle 10K en équipe LCEB avec le partenariat Adidas, suivie de l'Assemblée Générale annuelle du club.",details:[['Lieu','Paris — départ Champs-Élysées'],['Horaire','10h00 (course) · 14h00 (AG)'],['Accès','Réservé aux adhérents']],location:'Champs-Élysées, Paris'},
  {y:2026,m:5,d:12,title:"Soirée Fin d'année",color:'#b6cde0',tags:[{l:'Adhérent',c:'tag-adherent'}],time:'20h00',dur:240,desc:"La grande fête de fin de saison 2025–2026 ! Un moment pour célébrer ensemble tout ce qu'on a vécu cette année.",details:[['Lieu','Lieu à confirmer · Paris'],['Horaire','20h00'],['Accès','Réservé aux adhérents']],location:'Paris'},
  {y:2026,m:5,d:13,title:'Salomon × Gravenlenza',color:'#b6cde0',tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Salomon',c:'tag-partner'}],time:'8h30',dur:270,desc:"Événement running trail en partenariat avec Salomon. Testing de chaussures trail et run collectif en forêt.",details:[['Lieu','Forêt de Fontainebleau'],['Horaire','8h30'],['Accès','Ouvert à tous']],location:'Forêt de Fontainebleau'},
  {y:2026,m:6,d:8,title:'Run Testing ACT',color:'#b6cde0',tags:[{l:'Adhérent',c:'tag-adherent'},{l:'ACT',c:'tag-partner'}],time:'19h20',dur:120,desc:"Session de testing de produits ACT avec 30 membres du club. Tester du matériel en avant-première et donner son retour.",details:[['Lieu','Paris'],['Horaire','19h20'],['Accès','Réservé aux adhérents — 30 places']],location:'Paris'},
  {y:2026,m:6,d:18,title:'Course d\'orientation Bois-le-Roi',color:'#6d879a',tags:[{l:'Adhérent',c:'tag-adherent'},{l:'Trail',c:'tag-trail'}],time:'10h00',dur:240,desc:"Course d'orientation en équipe dans les bois de Bois-le-Roi. Parcours de 15 à 20 km, une aventure navigante et partagée.",details:[['Lieu','Bois-le-Roi'],['Distance','15-20 km'],['Format','Course d\'orientation en équipe'],['Accès','Réservé aux adhérents']],location:'Bois-le-Roi'},
  {y:2026,m:6,d:26,title:'KM Bleu TDF',color:'#122b44',tags:[{l:'KM Bleu',c:'tag-km'},{l:'Adhérent',c:'tag-adherent'}],time:'14h00',dur:180,desc:"Run spécial Tour de France. On court dans Paris dans l'ambiance de la grande boucle, sur les routes encore fraîches du passage du peloton. L'équipe orga sera sur place dès 10h.",details:[['Lieu','Rue Lepic, Paris 18e'],['Horaire','14h00 (run) · orga dès 10h'],['Accès','Réservé aux adhérents']],location:'Rue Lepic, Paris 18e'},
  {y:2026,m:5,d:28,title:"L'Or Espresso x CIEL BLEU - 2ème édition",color:'#c4956a',tags:[{l:'KM Bleu',c:'tag-km'},{l:'Ouvert à tous',c:'tag-open'}],time:'9h45',dur:90,desc:"Run de 8 km dans Saint-Germain-des-Prés, suivi d'une dégustation gratuite des créations de L'Or Espresso. Allure 6:15/km pour s'adapter aux conditions météo. Limité à 35 places sur inscription.",details:[['Lieu',"L'Or Espresso · 77 bd Saint-Germain, 75006"],['Horaire','9h45'],['Distance','8 km · allure 6:15/km'],['Accès','35 places — inscription obligatoire'],['Métro','Odéon M4 / M10']],location:'75006 Paris'},
  {y:2026,m:6,d:22,title:'Run découverte CIEL BLEU × Fitzroy',color:'#b6cde0',tags:[{l:'Ouvert à tous',c:'tag-open'},{l:'Partenariat',c:'tag-partner'}],time:'19h20',dur:70,desc:"Run découverte en partenariat avec Fitzroy, ouvert à tous. Le dernier rendez-vous avant la pause estivale du club.",details:[['Lieu','Quais de Seine · Paris'],['Horaire','19h20'],['Accès','Ouvert à tous']],location:'Quais de Seine, Paris'},
  {y:2026,m:8,d:27,title:'Marathon Bleu',color:'#E8B06B',tags:[{l:'Ouvert à tous',c:'tag-open'}],time:'10h20',dur:90,desc:"Le Social Run du dimanche, ouvert à tous, sans inscription. On court en groupes d'allure puis on partage un café. Le cœur du club.",details:[['Format','Social Run'],['Allures','5’30 · 6’00 · 6’30'],['Lieu','Point publié sur Strava'],['Accès','Ouvert à tous · sans inscription']],location:'Paris (point Strava)'},
  {y:2026,m:7,d:30,title:'Run collectif de rentrée',color:'#8fb3a8',tags:[{l:'Ouvert à tous',c:'tag-open'}],time:'10h20',dur:100,desc:"Reprise collective après la pause estivale ! Toutes allures, tout le monde bienvenu. La saison 2026–2027 commence ici.",details:[['Lieu','Point publié sur Strava'],['Horaire','10h20'],['Accès','Ouvert à tous — sans inscription']],location:'Paris'}
];

const WD_NAMES=['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
function pad(n){return String(n).padStart(2,'0');}
function timeToHMS(t){const mm=t.match(/(\d{1,2})h(\d{0,2})/);const h=mm?+mm[1]:0;const mi=mm&&mm[2]!==''?+mm[2]:0;return pad(h)+pad(mi)+'00';}
function addMinutes(t,dur){const mm=t.match(/(\d{1,2})h(\d{0,2})/);let h=mm?+mm[1]:0;let mi=mm&&mm[2]!==''?+mm[2]:0;let total=h*60+mi+dur;h=Math.floor(total/60)%24;mi=total%60;return pad(h)+pad(mi)+'00';}
function dtFmt(y,m,d,t){return ''+y+pad(m+1)+pad(d)+'T'+t;}

// Construction de toutes les occurrences
const EVENTS_BY_ID={};
let allEvents=[];let uid=0;
// Dates occupées par un événement spécial (pour éviter les doublons avec les séances)
const specialDays=new Set(specials.map(s=>s.m+'-'+s.d));
specialDays.add('6-29'); // Pas de run le 29 juillet
// séances
sessionTpl.forEach(tpl=>{
  let occ=0;
  for(let m=0;m<12;m++){
    if(m===7)continue; // pause estivale : aucune séance hebdomadaire en août
    const days=new Date(YEAR,m+1,0).getDate();
    for(let d=1;d<=days;d++){
      const date=new Date(YEAR,m,d);
      if(date.getDay()!==tpl.wd)continue;
      if(specialDays.has(m+'-'+d))continue;
      if(tpl.biweekly){occ++;if(occ%2===0)continue;}
      const id='s'+(uid++);
      const ds=dtFmt(YEAR,m,d,timeToHMS(tpl.time));
      const de=dtFmt(YEAR,m,d,addMinutes(tpl.time,tpl.dur));
      const ev={id,y:YEAR,m,d,date,title:tpl.title,color:tpl.color,tags:[tpl.tag],desc:tpl.desc,details:[['Horaire',tpl.time],...tpl.details],dtStart:ds,dtEnd:de,location:tpl.location,session:true,wd:tpl.wd,dateStr:d+' '+MONTHS[m]+' '+YEAR,time:tpl.time};
      EVENTS_BY_ID[id]=ev;allEvents.push(ev);
    }
  }
});
// spéciaux
specials.forEach(s=>{
  if(s.y!==YEAR)return; // les événements d'une autre année ne s'affichent pas
  const id='e'+(uid++);
  const ds=dtFmt(s.y,s.m,s.d,timeToHMS(s.time));
  const de=dtFmt(s.y,s.m,s.d,addMinutes(s.time,s.dur));
  const ev={id,y:s.y,m:s.m,d:s.d,date:new Date(s.y,s.m,s.d),title:s.title,color:'#E8B06B',tags:s.tags,desc:s.desc,details:s.details,dtStart:ds,dtEnd:de,location:s.location,session:false,dateStr:s.d+' '+MONTHS[s.m]+' '+s.y,time:s.time};
  EVENTS_BY_ID[id]=ev;allEvents.push(ev);
});
allEvents.sort((a,b)=>a.date-b.date);

// Mois disposant d'événements
const monthsWith=[...new Set(allEvents.map(e=>e.m))].sort((a,b)=>a-b);

function isPast(ev){const end=new Date(ev.y,ev.m,ev.d,23,59);return end<TODAY;}
