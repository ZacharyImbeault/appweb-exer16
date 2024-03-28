---
outline: deep
---
# Revue de code de mon TP01

Ceci est une revue de code de mon TP01 du cours de Développement d'applications Web.

## Le code

### Le code est-il lisible, clair ou est-il trop complexe ?

Le code est séparé en plusieurs composantes, ce qui facilite la navigation entre les différentes parties de celle-ci, mais il est quand même **difficile de s'y repérer et de comprendre l'usage de certaines de ses parties**.

### Le code est-il conforme aux [bonnes pratiques de programmation](https://appweb.progwmj.ca/documentations/bonnes-pratiques/code) ?

Bien que le code est relativement propre, il est **incapable de signaler les erreurs**. Le code est conçu de manière à *empêcher l'utilisateur de déclencher des erreurs* et **non à gérer celles-ci**.

Voici un exemple:

```ts
function playSong(): void {
    songToPlay.play()
    timeOfSong.value = getTime(songToPlay.duration)
    emit('canReload', false)
}
```

Cette fonction fait jouer la chanson, mais il envoie aussi une valeur pour verrouiller la capacité au site à changer de chanson tant qu'elle joue. __Elle n'envoie pas de messages d'erreurs pour avertir l'utilisateur qu'il est impossible de changer de chanson tant qu'une joue__.

### Le code est-il conforme aux normes et standards de programmation ?

Le code est relativement conforme aux normes et standards de programmation.

## Autres

### Le code est-il optimisé en termes de performance et de consommation de ressources ?

Je n'ai aucun doute que le code a été optimisé en termes de performance et de consommation de ressources au meilleur de mes connaissances.

### Est-ce qu'un algorithme peut être amélioré ?

Si un algorithme présent dans mon code peut être amélioré, *je ne sais pas lequel c'est*.

## Commentaire personnel

Bien que j'ai souffert immensément lors de la réalisation de ce projet dû à ses critères qui reposaient sur des concepts que je n'étais pas familié et bien qu'il y a place à amélioration, je suis tout de même extrêmement fier du résultat et heureux d'avoir maintenant un lecteur de musique fonctionnel avec une treizaine de musiques à disposition.

## Ce qui doit être fait:

* [X] Des titres qui séparent les éléments
* [X] Des hyperliens qui pointes vers des sources
* [X] Des gras ou italique sur les éléments importants.
* [X] Des listes pour des éléments sous formats de liste
* [X] De l'affichage de code au besoin
