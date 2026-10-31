# Reprendre le contrôle du site en cas de pépin

À lire si la personne qui gère le site n'est plus disponible, si son ordinateur est perdu ou en panne, si Claude ne fonctionne plus, ou si le site ne s'affiche plus.
Rédigé le 31 octobre 2026. Ce document ne contient aucun mot de passe : ils sont dans le gestionnaire de mots de passe du club.

## 1. Ce qu'il faut avoir sous la main

Tout se trouve dans le **gestionnaire de mots de passe du club** :

| Compte | Sert à | Identifiant |
|---|---|---|
| GitHub | héberger le site et son code | `CIELBLEU-RunningClub` |
| Gmail du club | recevoir les e-mails de GitHub et réinitialiser les mots de passe | `contact.cielbleurunningclub@gmail.com` |
| OVH | le nom de domaine `cielbleurunningclub.com` et les e-mails du domaine | compte OVH du club |
| Google Analytics | les statistiques de visite (propriété `G-0RG107FT7T`) | via le Gmail du club |

Pour chaque compte avec double authentification, il faut **soit le téléphone qui reçoit les codes, soit les codes de secours** rangés dans le gestionnaire. Sans l'un ou l'autre, la récupération passe par le support du service et prend plusieurs jours.

## 2. Bon à savoir : le site ne dépend d'aucun ordinateur

Le site est stocké sur GitHub et publié automatiquement par GitHub. **Si un ordinateur ou Claude tombe en panne, le site reste en ligne** et rien n'est perdu : tout le code et tout l'historique sont sur GitHub. Une copie de secours est aussi dans le Drive du club (`CIEL BLEU/Sauvegarde du site`), et les photos d'origine sont dans `CIEL BLEU/Photos`.

## 3. Les situations

### A. L'ordinateur est perdu, volé ou en panne
1. Sur un autre ordinateur, se connecter à GitHub avec le compte du club.
2. Si l'ordinateur a été **volé** : changer tout de suite le mot de passe GitHub (Settings > Password and authentication), puis dans Settings > Sessions, déconnecter toutes les sessions ouvertes. Faire de même pour le Gmail du club.
3. Installer Claude Code, se connecter avec son propre compte Claude, puis suivre « Premiers pas » dans `GUIDE-ORGA.md` : Claude récupère le site depuis GitHub en une commande.

### B. Claude n'est pas disponible (ou personne ne sait l'utiliser)
On peut modifier le site directement sur github.com, sans rien installer :
1. Se connecter à GitHub avec le compte du club et ouvrir le dépôt `CIELBLEU-RunningClub/CIELBLEU`.
2. Ouvrir le fichier à modifier (voir le tableau « Où se trouve quoi » dans `GUIDE-ORGA.md`), cliquer sur le crayon (« Edit »), faire la modification.
3. Cliquer sur « Commit changes », écrire en quelques mots ce qui a changé, valider. Le site se met à jour tout seul en 1 à 2 minutes.
Prudence : une virgule ou une apostrophe oubliée dans un fichier `.js` peut faire disparaître une page entière. En cas de doute, annuler la modification (voir D).

### C. Plus d'accès au compte GitHub
1. Essayer « Forgot password » sur github.com : le lien arrive sur le Gmail du club.
2. Si la double authentification bloque : utiliser un **code de secours** du gestionnaire de mots de passe.
3. En dernier recours : support.github.com, rubrique récupération de compte. Le domaine `cielbleurunningclub.com` est vérifié sur ce compte, ce qui aide à prouver qu'il appartient au club.

### D. Le site ne s'affiche plus ou affiche une erreur
1. Sur GitHub, ouvrir l'onglet **Actions** du dépôt : si la dernière ligne est rouge, la publication a échoué. Cliquer dessus puis « Re-run jobs » pour relancer.
2. Si une modification récente a cassé une page : onglet **Commits**, ouvrir la dernière modification et vérifier ce qui a changé. Avec Claude : « Annule la dernière modification et republie ». Sans Claude : remettre le fichier comme avant via le crayon (voir B).
3. Vérifier **Settings > Pages** du dépôt : la source doit être « GitHub Actions », le domaine `cielbleurunningclub.com`, « Enforce HTTPS » coché. Ne jamais cliquer sur « Unpublish site ».
4. Si l'adresse ne répond plus du tout, vérifier chez OVH que le domaine n'a pas expiré et que la zone DNS contient bien les entrées de la section 4.

### E. Le nom de domaine a expiré ou la zone DNS a été modifiée
Le domaine se renouvelle automatiquement chaque année (échéance actuelle : 28 août 2027), avec la carte enregistrée chez OVH. Si la carte expire, le renouvellement échoue : surveiller les e-mails d'OVH. En cas de problème, recréer les entrées de la section 4 dans OVH (Web Cloud > Zones DNS > cielbleurunningclub.com).

### F. Il faut retirer le site en urgence
Par exemple si un contenu ne doit plus être en ligne : le corriger ou le supprimer dans le dépôt (voir B) suffit dans presque tous les cas. Ne cliquer sur « Unpublish site » (Settings > Pages) qu'en tout dernier recours : le domaine resterait vérifié, mais la remise en ligne demanderait de reconfigurer Pages.

## 4. Les réglages à connaître par cœur (ou à recopier)

**Zone DNS chez OVH** (ne jamais supprimer ces entrées) :

| Type | Sous-domaine | Valeur |
|---|---|---|
| A | (vide) | `185.199.108.153` |
| A | (vide) | `185.199.109.153` |
| A | (vide) | `185.199.110.153` |
| A | (vide) | `185.199.111.153` |
| CNAME | `www` | `cielbleu-runningclub.github.io.` |
| TXT | `_github-pages-challenge-CIELBLEU-RunningClub` | code de vérification fourni par GitHub (Settings du compte > Pages) |
| CAA | (vide) | `0 issue "letsencrypt.org"` |
| TXT (DMARC) | `_dmarc` | `v=DMARC1;p=quarantine;pct=100;aspf=r;` |
| SPF + MX | (vide) | réglages d'OVH pour les e-mails du domaine, ne pas toucher |

**GitHub** : dépôt `CIELBLEU-RunningClub/CIELBLEU`, branche `main`, publication par le fichier `.github/workflows/deploy.yml`, domaine dans le fichier `CNAME`.

## 5. Les règles à ne jamais oublier
- Le dépôt est public : jamais de donnée personnelle dedans (liste des adhérents, e-mails, téléphones, noms de famille), même dans les messages d'enregistrement. Détails dans la section « Sécurité » de `GUIDE-ORGA.md`.
- Certains adhérents ont refusé d'apparaître sur le site : la liste à jour est dans l'Excel des adhérents (colonne d'accord « NON »), sur le Drive de l'orga. Avant de réimporter des adhérents, toujours vérifier cette colonne.
- Toujours récupérer la dernière version avant de modifier, et cloner à neuf sur un nouvel ordinateur (jamais à partir d'une vieille copie).
