# Cours sur le Javascript session 201 - Worketyamo

### 1. les boucles en Javascript

Les boucles permettent d'exécuter un bloc de code à plusieurs reprises, en fonction d'une condition. Elles sont très utiles pour automatiser des tâches répétitives et parcourir des collections de données.

##### 1. Les Boucles while (tant que)

Les boucles whiles sont des boucles qui s'executent tant qu'une condition n'est pas atteinte
Syntaxe :

```js
while (<conditions>) {
    fonctions
}
```

#### 2. Les boucles for

Utilisée pour répéter un bloc de code un nombre déterminé de fois.

Syntaxe :

```js
for (initialisation; condition; incrémentation) {
  instructions;
}
```

Exemples :

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// ou encore
```

##### Boucle do...while

Exécute le bloc de code au moins une fois, puis tant que la condition est vraie.

Syntaxe:

```js
do {
  instructions;
} while (condition);
```

Exemples:

```js
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

##### Boucle for...of

Utilisée pour parcourir une collection d'éléments (tableau, chaîne de caractères, etc.).

Syntaxe:

```js
for (const element of iterable) {
  instructions;
}
```

Exemple:

```js
const fruits = ["pomme", "banane", "orange"];
for (const fruit of fruits) {
  console.log(fruit);
}
```
