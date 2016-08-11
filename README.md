# Conway's Game of Life

Implémentation en JavaScript du jeu de la vie de __John Conway__ dont le but est la survie et la croissance d'une population représentée par des jetons sur un quadrillage dont les cases sont des cellules.

![Conway's Game of Life](/res/bg.png "Conway's Game of Life")

## Règles

- une naissance a lieu lorsque l'environnement est favorable (exactement 3 voisins sont vivants)
- la mort intervient par isolement avec moins de 2 voisins vivants ou par surpopulation avec plus de 3 voisins vivants

## Remarque

D'autres patterns sont présents dans le fichier texte __entities__.