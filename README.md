Jeux Videops
Plateforme de jeux vidéo rétro avec pipelines CI/CD automatisées via GitHub Actions.

Présentation :

Ce projet met en place une infrastructure DevOps complète pour deux jeux JavaScript issus de la compétition js13kgames 2021 :

Two Ships Passing In The Night — jeu 3D de vaisseaux
Space Word — jeu de mots dans l'espace

Un launcher React permet d'accéder aux deux jeux depuis une interface web unifiée.

Accès en ligne :

Le projet est déployé sur GitHub Pages :
https://ysrbi.github.io/jeux-videops/

Lancer le projet en local

Prérequis : Docker et Docker Compose installés.

bash git clone https://github.com/ysrbi/jeux-videops.git

cd jeux-videops

docker compose up --build

Le launcher est ensuite accessible sur http://localhost:3000.