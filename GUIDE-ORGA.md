# Guide de l'orga : mettre à jour le site

Le site est un ensemble de fichiers stockés sur GitHub, sous le compte du club (`CIELBLEU-RunningClub`). Dès qu'une modification est enregistrée sur GitHub, le site se met à jour tout seul en 1 à 2 minutes.

2 ou 3 personnes de confiance partagent ce compte. Il n'y a **pas de relecture avant publication** : ce que tu enregistres est en ligne. Les règles ci-dessous remplacent la relecture.

## Premiers pas (une seule fois, sur ton ordinateur)

1. Récupère les identifiants du compte du club dans le gestionnaire de mots de passe du club. Ne les envoie jamais par message.
2. Installe Claude Code et connecte-toi **avec ton propre compte Claude** (l'abonnement de chacun reste personnel).
3. Demande à Claude : « Clone le dépôt `CIELBLEU-RunningClub/CIELBLEU` dans mon dossier Documents et connecte-moi à GitHub avec le compte du club. »
4. Dis-lui aussi : « Configure mon nom d'auteur git en `CIELBLEU-RunningClub (Prénom)` », pour que l'historique montre qui a fait chaque modification, même avec un compte commun.

## Chaque fois que tu modifies le site

1. **Récupère d'abord la dernière version.** Demande à Claude : « Récupère les dernières modifications avant de commencer. » C'est la règle la plus importante : sans elle, tu écrases le travail de quelqu'un d'autre.
2. **Prévenir les autres** (WhatsApp ou autre) avant un gros changement, et ne pas travailler à deux sur le même fichier en même temps.
3. Décris la modification à Claude, regarde le résultat sur téléphone, puis demande-lui d'enregistrer et de publier.
4. **Commence le message d'enregistrement par ton prénom**, par exemple « Manon : ajout du run de décembre ».
5. Vérifie en ligne 2 minutes plus tard, après avoir fermé et rouvert Safari.

## Où se trouve quoi

| Je veux changer | Fichier |
|---|---|
| Un événement, une séance, une date | `events.js` (puis voir « règles d'or ») |
| Un article d'actualité | `articles.js` + une page `article-xxx.html` |
| Un adhérent (prénom, citation, photo) | `membres.js` |
| Un chrono du mur des fiertés | `nos-adherents.html`, tableau `recordCats` |
| Un texte, un titre, un bouton | la page `.html` concernée |
| Les partenaires | `nos-partenaires.html` |

Le début de `events.js` explique comment il est organisé.

## Les règles d'or

1. **Toujours récupérer la dernière version avant de commencer** (voir plus haut).
2. **Après avoir touché à `events.js`**, lance `bash outils/genere-ics.sh`. Sans ça, le bouton « Ajouter à mon agenda » donne l'ancienne version.
3. **Fais avancer le numéro de version** du fichier modifié dans les pages qui le chargent, par exemple `events.js?v=32` devient `events.js?v=33`. Sinon les téléphones gardent l'ancienne version en mémoire. Fichiers concernés : `events.js` (`index.html`, `calendrier.html`), `membres.js` (`nos-adherents.html`, `notre-equipe.html`), `articles.js` (`actualites.html`).
4. **Photos** : réduis-les avant de les ajouter (environ 1600 px de large, moins de 300 Ko). Pas de vidéo brute. Les originaux restent sur le Drive du club, dossier « 10. SITE INTERNET ».
5. **Style des textes** : ton chaleureux, tutoiement, phrases courtes. Aucun tiret cadratin (le long tiret). Utilise « · » ou reformule.
6. **Une pastille ne répète pas le titre.** Si le titre contient « Adidas », pas de pastille « Adidas ».
7. **Teste sur téléphone** avant de publier : la plupart des visiteurs sont sur iPhone.

## Cas courants

**Ajouter un événement.** Dans `events.js`, ajoute une entrée dans le tableau `specials2027` (ou `specials` pour 2026), en copiant une entrée existante : mois `m` (**janvier = 0**) et jour `d`, `time`, `title`, `tags`, `desc`, `details`. Puis les règles 2 et 3.

**Ajouter un article.** Suis les étapes écrites en haut de `articles.js`. Pense à la règle 3 pour `articles.js`.

**Ajouter un adhérent.** Une ligne dans `membres.js` : `{nom:'Prénom', citation:'', photo:''}`. Deux personnes avec le même prénom : `Prénom n°1`, `Prénom n°2`. Photo : un fichier dans `membres/`, carré, environ 320 px.

**Ajouter un chrono.** Dans `recordCats` (`nos-adherents.html`), ajoute une ligne dans la bonne distance : `{who:'Prénom',time:"38'20",event:'',hue:200,photo:'',sex:'H'}`. `sex` vaut `H` ou `F`, `hue` est un numéro unique. Le classement se fait tout seul.

## Si quelque chose casse en ligne

Dis à Claude : « Annule ma dernière modification et publie. » Il crée une nouvelle version qui revient à l'état d'avant. Rien n'est perdu : tout l'historique reste sur GitHub.

## Sécurité du compte commun

- Le mot de passe et les codes de secours se trouvent **uniquement** dans le gestionnaire de mots de passe du club et dans le Drive, jamais dans un message.
- Si quelqu'un quitte l'orga, on change le mot de passe du compte du club et on prévient les autres.
- Ne pas se connecter au compte du club depuis un ordinateur partagé ou public.
