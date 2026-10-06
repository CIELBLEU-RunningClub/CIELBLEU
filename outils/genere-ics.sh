#!/bin/bash
# Régénère les fichiers agenda/*.ics (bouton « Ajouter à mon agenda ») à partir d'donnees/events.js.
# À lancer après TOUTE modification d'un événement (date, titre, horaire, lieu, description).
#
#   bash outils/genere-ics.sh
#
# Fonctionne sur Mac (utilise osascript, rien à installer). Ne réécrit que les fichiers
# dont le contenu a changé, donc le résultat dans git reste lisible. Les fichiers
# d'événements supprimés ou renommés ne sont PAS effacés : le script les liste, à toi de
# les supprimer avec `git rm`.
set -e
cd "$(dirname "$0")/.."
export STAMP="$(date -u +%Y%m%dT%H%M%SZ)"
osascript -l JavaScript <<'JXA'
ObjC.import('Foundation');
function lire(p){return $.NSString.stringWithContentsOfFileEncodingError(p,$.NSUTF8StringEncoding,null).js;}
var stamp=$.NSProcessInfo.processInfo.environment.objectForKey('STAMP').js;
var suite=`
function escICS(v){return String(v==null?'':v).replace(/\\\\/g,'\\\\\\\\').replace(/;/g,'\\\;').replace(/,/g,'\\\\,').replace(/\\r?\\n/g,'\\\\n');}
function longueur(s){return unescape(encodeURIComponent(s)).length;}
function replier(l){if(longueur(l)<=75)return l;var m=[],cur='';for(var c of l){var max=m.length===0?75:74;if(longueur(cur+c)>max){m.push(cur);cur=c;}else cur+=c;}m.push(cur);return m.map(function(x,i){return i===0?x:' '+x;}).join('\\r\\n');}
function nom(ev){return (ev.title+'-'+ev.d+'-'+(ev.m+1)+'-'+ev.y).normalize('NFD').replace(/[\\u0300-\\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');}
var res=[];
allEvents.forEach(function(ev){
  var L=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//CIELBLEU Running//FR','CALSCALE:GREGORIAN','METHOD:PUBLISH','BEGIN:VEVENT','UID:'+ev.id+'@cielbleu.run','DTSTAMP:__STAMP__','DTSTART:'+ev.dtStart,'DTEND:'+ev.dtEnd,'SUMMARY:'+escICS(ev.title+' · CIELBLEU Running'),'DESCRIPTION:'+escICS(ev.desc),'LOCATION:'+escICS(ev.location||'Paris'),'END:VEVENT','END:VCALENDAR'];
  res.push([nom(ev),L.map(replier).join('\\r\\n')+'\\r\\n']);
});
return JSON.stringify(res);
`.split('__STAMP__').join(stamp);
var fichiers=JSON.parse((new Function(lire('donnees/events.js')+'\n'+suite))());
var fm=$.NSFileManager.defaultManager;
var attendus={};var ecrits=0,crees=0;
fichiers.forEach(function(f){
  var chemin='agenda/'+f[0]+'.ics';attendus[f[0]+'.ics']=1;
  var existe=fm.fileExistsAtPath(chemin);
  var sans=function(t){return t.replace(/DTSTAMP:[^\r\n]*/,'');};
  if(existe&&sans(lire(chemin))===sans(f[1]))return;
  $(f[1]).writeToFileAtomicallyEncodingError(chemin,true,$.NSUTF8StringEncoding,null);
  if(existe)ecrits++;else crees++;
});
var presents=ObjC.deepUnwrap(fm.contentsOfDirectoryAtPathError('agenda',null));
var orphelins=presents.filter(function(n){return /\.ics$/.test(n)&&!attendus[n];});
var sortie=crees+' fichier(s) créé(s), '+ecrits+' mis à jour, '+(fichiers.length-crees-ecrits)+' inchangé(s).';
if(orphelins.length)sortie+='\nÀ supprimer (plus aucun événement ne les utilise) :\n  '+orphelins.map(function(n){return 'agenda/'+n;}).join('\n  ');
sortie;
JXA
