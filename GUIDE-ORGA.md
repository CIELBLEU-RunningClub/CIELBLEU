# Guide de l'orga : mettre à jour le site

Le site est un ensemble de fichiers stockés sur GitHub. Dès qu'une modification est **validée**, il se met à jour tout seul en 1 à 2 minutes.

## Le principe : on propose, une personne valide

Personne ne modifie directement la version en ligne (la branche `main`). Chacun travaille sur sa propre copie, puis demande une relecture :

1. Tu fais ta modification sur une **branche** (une copie de travail).
2. Tu ouvres une **pull request** (une demande de relecture) sur GitHub.
3. La personne qui valide regarde, demande des corrections ou accepte.
4. À l'acceptation, le site se met à jour.

Si tu te trompes, rien n'est en ligne tant que ce n'est pas validé.

## Deux façons de travailler

**A. Avec Claude Code (recommandé, tout type de modification).** Tu ouvres le dossier du site dans Claude Code et tu décris ce que tu veux en français. Dis-lui de travailler sur une nouvelle branche et d'ouvrir une pull request. Il connaît les règles de ce guide.

**B. Directement sur github.com (petit changement de texte).** Ouvre le fichier, clique sur le crayon, modifie, puis choisis « Create a new branch and start a pull request ». À réserver aux fichiers de données (`events.js`, `membres.js`, `articles.js`), pas aux pages `.html`.

## Où se trouve quoi

| Je veux changer | Fichier |
|---|---|
| Un événement, une séance, une date | `events.js` (puis voir « règles d'or » ci-dessous) |
| Un article d'actualité | `articles.js` + une page `article-xxx.html` |
| Un adhérent (prénom, citation, photo) | `membres.js` |
| Un chrono du mur des fiertés | `nos-adherents.html`, tableau `recordCats` |
| Un texte, un titre, un bouton | la page `.html` concernée |
| Les partenaires | `nos-partenaires.html` |

Les dates, horaires et descriptions de chaque événement sont dans `events.js`. Le début du fichier explique comment il est organisé.

## Les règles d'or

1. **Jamais de modification directe sur `main`.** Toujours une branche, puis une pull request.
2. **Après avoir touché à `events.js`**, lance `bash outils/genere-ics.sh`, puis ajoute le dossier `agenda/` à ta proposition. Sans ça, le bouton « Ajouter à mon agenda » donne l'ancienne version.
3. **Fais avancer le numéro de version** du fichier modifié dans les pages qui le chargent, par exemple `events.js?v=32` devient `events.js?v=33`. Sinon les téléphones gardent l'ancienne version en mémoire et la correction reste invisible. Fichiers concernés : `events.js` (`index.html`, `calendrier.html`), `membres.js` (`nos-adherents.html`, `notre-equipe.html`), `articles.js` (`actualites.html`).
4. **Photos** : réduis-les avant de les ajouter (environ 1600 px de large, moins de 300 Ko). Pas de vidéo brute, pas de fichier de plusieurs Mo. Les originaux restent sur le Drive du club.
5. **Style des textes** : ton chaleureux, tutoiement, phrases courtes. **Aucun tiret cadratin** (le long « — »). Utilise « · » ou reformule.
6. **Une pastille ne répète pas le titre.** Si le titre contient « Adidas », pas de pastille « Adidas ».
7. **Teste sur téléphone** avant de demander la relecture : la plupart des visiteurs sont sur iPhone.

## Cas courants

**Ajouter un événement.** Dans `events.js`, ajoute une entrée dans le tableau `specials2027` (ou `specials` pour 2026), en copiant une entrée existante : date `m` (mois, **janvier = 0**) et `d`, `time`, `title`, `tags`, `desc`, `details`. Puis les règles 2 et 3.

**Ajouter un article.** Suis les étapes écrites en haut de `articles.js`. Pense à la règle 3 pour `articles.js`.

**Ajouter un adhérent.** Une ligne dans `membres.js` : `{nom:'Prénom', citation:'', photo:''}`. Deux personnes avec le même prénom : `Prénom n°1`, `Prénom n°2`. Photo : un fichier dans `membres/`, carré, environ 320 px.

**Ajouter un chrono.** Dans `recordCats` (`nos-adherents.html`), ajoute une ligne dans la bonne distance : `{who:'Prénom',time:"38'20",event:'',hue:200,photo:'',sex:'H'}`. `sex` vaut `H` ou `F`, `hue` est un numéro unique. Le classement se fait tout seul.

## Ce que la personne qui valide regarde

- La proposition ne touche que ce qui était annoncé.
- Les règles d'or 2 et 3 sont respectées (dossier `agenda/`, numéro de version).
- Pas de tiret cadratin, pas de faute, pas de photo énorme.
- L'affichage sur téléphone.

## Si quelque chose casse en ligne

Sur GitHub, ouvre la pull request en cause et clique **Revert**. Cela prépare une nouvelle proposition qui annule la précédente. Une fois validée, le site revient à l'état d'avant.
