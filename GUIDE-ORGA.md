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
| Un événement, une séance, une date | `donnees/events.js` (puis voir « règles d'or ») |
| Un article d'actualité | `donnees/articles.js` + une page `article-xxx.html` |
| Un adhérent (prénom, citation, photo) | `donnees/membres.js` |
| Un chrono du mur des fiertés | `nos-adherents.html`, tableau `recordCats` |
| Un texte, un titre, un bouton | la page `.html` concernée |
| Les partenaires | `nos-partenaires.html` |

Le début de `donnees/events.js` explique comment il est organisé.

Pour savoir où ranger une photo ou une vidéo, et comment la nommer, voir [README.md](README.md) (section « Comment le site est rangé »).

## Les règles d'or

1. **Toujours récupérer la dernière version avant de commencer** (voir plus haut).
2. **Après avoir touché à `donnees/events.js`**, lance `bash outils/genere-ics.sh`. Sans ça, le bouton « Ajouter à mon agenda » donne l'ancienne version.
3. **Fais avancer le numéro de version** du fichier modifié dans les pages qui le chargent, par exemple `donnees/events.js?v=32` devient `donnees/events.js?v=33`. Sinon les téléphones gardent l'ancienne version en mémoire. Fichiers concernés : `donnees/events.js` (`index.html`, `calendrier.html`), `donnees/membres.js` (`nos-adherents.html`, `notre-equipe.html`), `donnees/articles.js` (`actualites.html`).
4. **Photos** : réduis-les avant de les ajouter (environ 1600 px de large, moins de 300 Ko). Pas de vidéo brute. Les originaux restent sur le Drive du club, dossier « 10. SITE INTERNET ». Range la version réduite dans le bon sous-dossier de `images/` ou `videos/`.
5. **Style des textes** : ton chaleureux, tutoiement, phrases courtes. Aucun tiret cadratin (le long tiret). Utilise « · » ou reformule.
6. **Une pastille ne répète pas le titre.** Si le titre contient « Adidas », pas de pastille « Adidas ».
7. **Rien venant d'un autre site** : pas de script, de police ou d'image hébergés ailleurs. La politique de sécurité du site les bloque. Héberge le fichier dans le site, ou demande avant.
8. **Teste sur téléphone** avant de publier : la plupart des visiteurs sont sur iPhone.

## Cas courants

**Ajouter un événement.** Dans `donnees/events.js`, ajoute une entrée dans le tableau `specials2027` (ou `specials` pour 2026), en copiant une entrée existante : mois `m` (**janvier = 0**) et jour `d`, `time`, `title`, `tags`, `desc`, `details`. Puis les règles 2 et 3.

**Ajouter un article.** Suis les étapes écrites en haut de `donnees/articles.js`. Pense à la règle 3 pour `donnees/articles.js`.

**Ajouter un adhérent.** Une ligne dans `donnees/membres.js` : `{nom:'Prénom', citation:'', photo:''}`. Deux personnes avec le même prénom : `Prénom n°1`, `Prénom n°2`. Photo : un fichier dans `images/membres/` (créer le dossier si besoin), carré, environ 320 px, nommé `prenom.jpg`.

**Ajouter un chrono.** Dans `recordCats` (`nos-adherents.html`), ajoute une ligne dans la bonne distance : `{who:'Prénom',time:"38'20",event:'',hue:200,photo:'',sex:'H'}`. `sex` vaut `H` ou `F`, `hue` est un numéro unique. Le classement se fait tout seul.

## Si quelque chose casse en ligne

Dis à Claude : « Annule ma dernière modification et publie. » Il crée une nouvelle version qui revient à l'état d'avant. Rien n'est perdu : tout l'historique reste sur GitHub.

## Sécurité du compte commun

- Le mot de passe et les codes de secours se trouvent **uniquement** dans le gestionnaire de mots de passe du club et dans le Drive, jamais dans un message.
- Si quelqu'un quitte l'orga, on change le mot de passe du compte du club et on prévient les autres.
- Ne pas se connecter au compte du club depuis un ordinateur partagé ou public.

## Sécurité

Bilan complet fait le 31 octobre 2026. Cette section est la référence : la mettre à jour à chaque changement.

### Le site (en place, rien à faire au quotidien)
- HTTPS obligatoire, avec ou sans www.
- Une politique de sécurité (CSP) sur chaque page : seuls les fichiers du site et Google Analytics (après accord du visiteur) sont autorisés. Pas de script, de police ni d'image venant d'un autre site.
- Le site ne peut pas être affiché à l'intérieur d'un autre site (protection contre le « clickjacking »).
- Liens externes sécurisés (`rel="noopener"`), aucun lien en `http://`.
- La recherche de la page adhérents affiche ce qui est tapé comme du simple texte : impossible d'y injecter du code.
- Seuls les fichiers du site sont publiés : ce guide, le README, `outils/` et `.github/` restent dans le dépôt (le déploiement les exclut).
- Les outils de déploiement sont figés sur une version précise (empreinte), avec des droits minimaux. Dependabot propose les mises à jour sur GitHub.
- `robots.txt` refuse les robots qui aspirent les contenus pour entraîner des IA ; les moteurs de recherche restent acceptés.
- `.well-known/security.txt` indique où signaler une faille. **Il expire le 31 octobre 2027 : changer la date avant.**

### Les données personnelles
- Le dépôt est **public** : tout ce qui y entre reste visible dans l'historique, même supprimé ensuite. Jamais de liste d'adhérents, d'adresse, d'e-mail, de téléphone, ni de nom de famille d'adhérent, ni le prénom d'un adhérent qui a refusé d'apparaître, **y compris dans les messages d'enregistrement** (écrire « un adhérent retiré », sans prénom).
- Les adhérents qui ont refusé d'apparaître ne figurent ni sur les cartes, ni sur le mur des fiertés, ni dans le quiz, mais restent comptés dans le total (`NB_ADHERENTS`).
- L'historique a été nettoyé le 31 oct. 2026 : les cartes et chronos d'adhérents qui avaient refusé, et les métadonnées de toutes les photos, en ont été retirés. Un ancien clone du dépôt réintroduirait ces données : toujours **cloner à neuf** depuis GitHub.
- **Photos** : avant d'ajouter une photo au site, retirer ses métadonnées (auteur, appareil, position GPS). Demander à Claude de le faire au moment du recadrage.
- La liste des adhérents reste **uniquement sur le Drive de l'orga**, en accès restreint. Quand on la télécharge pour une mise à jour, on la met à la corbeille juste après.
- Les portraits originaux sont nommés prénom + initiale (`Yoann F.png`), jamais avec le nom de famille.

### Le nom de domaine (OVH)
En place depuis le 31 oct. 2026 :
- Verrou de transfert et de suppression, renouvellement automatique (échéance actuelle : 28 août 2027).
- DNSSEC : les réponses DNS du domaine ne peuvent pas être falsifiées.
- SPF + DMARC (`quarantine`) : les faux e-mails envoyés au nom du domaine vont en spam.
- CAA (`0 issue "letsencrypt.org"`) : seul Let's Encrypt, utilisé par GitHub, peut délivrer le certificat HTTPS.
- Domaine vérifié sur GitHub : aucun autre compte ne peut l'utiliser. **Ne jamais supprimer chez OVH l'entrée TXT `_github-pages-challenge-CIELBLEU-RunningClub`.**

### Les comptes
| Compte | Double authentification |
|---|---|
| GitHub du club (`CIELBLEU-RunningClub`) | ✅ activée (codes de secours dans le gestionnaire de mots de passe) |
| Gmail du club (`contact.cielbleurunningclub@gmail.com`) | ⏳ à activer : la plus importante, elle permet de réinitialiser les autres comptes |
| OVH | ⏳ à activer |

- Mots de passe longs et uniques, rangés dans le gestionnaire de mots de passe du club ; on les change quand quelqu'un quitte l'orga.
- Sur GitHub : « Enforce HTTPS » coché (Settings > Pages du dépôt).

### En cours
- Ticket ouvert le 31 oct. 2026 auprès du support GitHub pour effacer les anciennes demandes Dependabot (#1 à #4) qui gardent l'ancien historique. **Ne pas rouvrir ces demandes**, même si un e-mail de Dependabot le propose.
