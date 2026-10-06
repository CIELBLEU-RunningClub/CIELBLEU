# CIELBLEU · site du running club

Site statique (HTML, CSS et JavaScript, sans outil de construction), publié automatiquement par GitHub Pages à chaque enregistrement sur la branche `main`.
En ligne : https://cielbleu-runningclub.github.io/CIELBLEU/

Pour le mettre à jour, voir **[GUIDE-ORGA.md](GUIDE-ORGA.md)**.

## Comment le site est rangé

```
index.html                  Accueil
calendrier.html             Calendrier de la saison
actualites.html             Liste des actualités
article-marathon-bleu.html  Un article (un fichier par article)
notre-equipe.html           L'équipe
nos-adherents.html          Adhérents, mur des fiertés, adhésion
nos-partenaires.html        Partenaires
mentions-legales.html       Mentions légales et cookies

donnees/                    Les contenus qu'on met à jour
  events.js                   événements et séances du calendrier
  articles.js                 actualités
  membres.js                  trombinoscope des adhérents
js/                         Scripts du site (mesure d'audience, animation du menu)
agenda/                     Un fichier .ics par événement (« Ajouter à mon agenda »), généré
images/
  marque/                     logo, favicon, icônes de l'application
  partage/                    images d'aperçu quand on partage un lien
  couvertures/                grandes images d'en-tête de chaque page
  equipe/                     portraits et photos de groupe de l'orga
  galerie/                    photos de la galerie de l'accueil
  adherents/                  photos de la page adhérents
  evenements/                 photos d'événements (KM Bleu, Marathon Bleu...)
  partenaires/                logos et photos des partenaires
  membres/                    portraits des adhérents du trombinoscope (à créer au besoin)
videos/                     Vidéos du site
  posters/                    image affichée avant la lecture, même nom que la vidéo
outils/                     Scripts utiles à l'orga (génération de l'agenda)
sw.js, manifest.webmanifest Application installable sur l'écran d'accueil
robots.txt, sitemap.xml     Référencement
```

## Règles de rangement et de nommage

- Noms de fichiers en **minuscules, sans accent ni espace**, mots séparés par des tirets : `communaute-14.jpg`, `logo-adidas.png`.
- Une photo ou une vidéo **va dans le dossier de son sujet** (liste ci-dessus), jamais à la racine.
- Une vidéo `videos/nom.mp4` a son image d'aperçu `videos/posters/nom.jpg`.
- Pas de photo brute : on réduit avant d'ajouter (environ 1600 px, moins de 300 Ko). Les originaux restent sur le Drive du club.
- Un fichier qui n'est plus utilisé par aucune page se supprime : l'historique git le garde.
