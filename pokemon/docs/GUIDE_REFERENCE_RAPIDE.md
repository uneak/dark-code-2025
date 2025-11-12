# 📚 Guide de Référence Rapide - Jeu Pokémon

## 📑 Table des Matières
1. [Vue d'ensemble](#vue-densemble)
2. [Tableau récapitulatif des fonctions](#tableau-récapitulatif)
3. [Dépendances entre fonctions](#dépendances)
4. [Points de vigilance](#points-de-vigilance)
5. [Checklist de développement](#checklist)

---

## 🎯 Vue d'ensemble

### Structure du projet
```
pokemon-battle-game.html
├── HTML Structure
│   ├── Écran de chargement
│   ├── Arène de combat (2 cartes Pokémon)
│   ├── Contrôles (boutons)
│   ├── Log de combat
│   └── Modal de victoire
│
├── CSS Styles
│   ├── Layout et positionnement
│   ├── Animations (@keyframes)
│   └── Responsive design
│
└── JavaScript Logic
    ├── Variables globales (gameState, CONFIG)
    ├── 13 fonctions principales
    └── Event listeners (3 boutons)
```

---

## 📊 Tableau Récapitulatif des Fonctions

| Fonction | Catégorie | Async? | Paramètres | Retour | Appelle | Appelée par |
|----------|-----------|--------|------------|--------|---------|-------------|
| `initGame()` | Init | ✅ Oui | Aucun | void | 6 fonctions | Event DOMContentLoaded |
| `loadRandomPokemon()` | Init | ✅ Oui | Aucun | Object (API data) | Aucune | initGame() |
| `initializePokemon()` | Init | ❌ Non | apiData | Object (Pokemon) | Aucune | initGame() |
| `displayPokemon()` | UI | ❌ Non | num, pokemon | void | updateBars() | initGame() |
| `updateBars()` | UI | ❌ Non | num | void | Aucune | displayPokemon(), basicAttack(), magicAttack() |
| `updateTurnIndicator()` | UI | ❌ Non | Aucun | void | Aucune | initGame(), nextTurn() |
| `addLog()` | UI | ❌ Non | message, type | void | Aucune | Toutes les fonctions de combat |
| `basicAttack()` | Combat | ❌ Non | Aucun | void | 6 fonctions | Event click bouton |
| `magicAttack()` | Combat | ❌ Non | Aucun | void | 6 fonctions | Event click bouton |
| `nextTurn()` | Combat | ❌ Non | Aucun | void | updateTurnIndicator() | basicAttack(), magicAttack() |
| `checkVictory()` | Combat | ❌ Non | Aucun | Boolean | endGame() | basicAttack(), magicAttack() |
| `endGame()` | Combat | ❌ Non | winner | void | addLog() | checkVictory() |
| `animateAttack()` | Anim | ❌ Non | num | void | Aucune | basicAttack(), magicAttack() |
| `animateDamage()` | Anim | ❌ Non | num | void | Aucune | basicAttack(), magicAttack() |

### Légende
- **Init** : Initialisation et chargement
- **UI** : Interface utilisateur et affichage
- **Combat** : Logique de combat
- **Anim** : Animations visuelles

---

## 🔗 Dépendances entre Fonctions

### Niveau 0 (Fonctions feuilles - n'appellent personne)
Ces fonctions peuvent être développées en premier car elles ne dépendent d'aucune autre :
- `loadRandomPokemon()` - Appel API pur
- `initializePokemon()` - Transformation de données
- `updateBars()` - Manipulation DOM
- `addLog()` - Manipulation DOM
- `animateAttack()` - Manipulation DOM
- `animateDamage()` - Manipulation DOM

### Niveau 1 (Dépendent du niveau 0)
Ces fonctions utilisent les fonctions du niveau 0 :
- `displayPokemon()` → utilise `updateBars()`
- `updateTurnIndicator()` → manipulation DOM pure
- `endGame()` → utilise `addLog()`

### Niveau 2 (Dépendent des niveaux 0 et 1)
- `nextTurn()` → utilise `updateTurnIndicator()`
- `checkVictory()` → utilise `endGame()`

### Niveau 3 (Fonctions complexes)
- `basicAttack()` → utilise 6 fonctions
- `magicAttack()` → utilise 6 fonctions

### Niveau 4 (Orchestration)
- `initGame()` → orchestre tout le démarrage

---

## ⚠️ Points de Vigilance

### 1. Gestion des erreurs
```javascript
// ❌ MAUVAIS - Pas de gestion d'erreur
async function loadRandomPokemon() {
    const response = await fetch(url);
    return await response.json();
}

// ✅ BON - Avec gestion d'erreur
async function loadRandomPokemon() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Erreur:", error);
        throw error; // Re-throw pour que initGame() puisse gérer
    }
}
```

### 2. Vérification des valeurs min/max
```javascript
// ❌ MAUVAIS - HP peut devenir négatif
defender.currentHp = defender.currentHp - damage;

// ✅ BON - HP ne descend jamais en dessous de 0
defender.currentHp = Math.max(0, defender.currentHp - damage);

// ❌ MAUVAIS - Mana peut dépasser le maximum
attacker.currentMana = attacker.currentMana + manaGain;

// ✅ BON - Mana ne dépasse pas le maximum
attacker.currentMana = Math.min(attacker.maxMana, attacker.currentMana + manaGain);
```

### 3. Vérification de l'état du jeu
```javascript
// ✅ BON - Toujours vérifier si la partie est terminée
function basicAttack() {
    if (gameState.gameOver) {
        return; // Ne rien faire si le jeu est terminé
    }
    // ... reste du code
}
```

### 4. Gestion des animations avec setTimeout
```javascript
// ❌ MAUVAIS - Pas de nettoyage
function animateAttack(num) {
    const card = document.getElementById(`pokemon${num}-card`);
    card.classList.add('attacking');
}

// ✅ BON - Retire la classe après l'animation
function animateAttack(num) {
    const card = document.getElementById(`pokemon${num}-card`);
    card.classList.add('attacking');
    
    setTimeout(() => {
        card.classList.remove('attacking');
    }, 500); // Correspond à la durée de l'animation CSS
}
```

### 5. Éviter les ID en dur
```javascript
// ❌ MAUVAIS - Code dupliqué
function updatePokemon1Bars() {
    const hpBar = document.getElementById('pokemon1-hp-bar');
    // ...
}
function updatePokemon2Bars() {
    const hpBar = document.getElementById('pokemon2-hp-bar');
    // ...
}

// ✅ BON - Code réutilisable avec paramètre
function updateBars(pokemonNumber) {
    const hpBar = document.getElementById(`pokemon${pokemonNumber}-hp-bar`);
    // ...
}
```

---

## ✅ Checklist de Développement

### Phase 1: Structure HTML ✓
- [ ] Créer le container principal
- [ ] Créer l'écran de chargement
- [ ] Créer les 2 cartes Pokémon (gauche/droite)
- [ ] Ajouter les éléments : nom, image, barres HP/Mana, stats
- [ ] Créer la zone de contrôles (indicateur de tour + boutons)
- [ ] Créer la zone de log
- [ ] Créer la modal de victoire (cachée)

### Phase 2: CSS de Base ✓
- [ ] Layout général (flexbox/grid)
- [ ] Style des cartes Pokémon
- [ ] Style des barres de vie/mana
- [ ] Style des boutons
- [ ] Style du log
- [ ] Style de la modal
- [ ] Responsive design (media queries)

### Phase 3: Animations CSS ✓
- [ ] Animation `@keyframes spin` (chargement)
- [ ] Animation `@keyframes attack-shake`
- [ ] Animation `@keyframes damage-flash`
- [ ] Animation `@keyframes heal-flash`
- [ ] Animation `@keyframes slideIn` (log)
- [ ] Animation `@keyframes modalPop`

### Phase 4: Variables Globales ✓
- [ ] Créer l'objet `gameState`
- [ ] Créer l'objet `CONFIG` avec toutes les constantes
- [ ] Vérifier que toutes les valeurs sont cohérentes

### Phase 5: Fonctions Niveau 0 (Feuilles) ✓
- [ ] `loadRandomPokemon()` - Avec gestion d'erreur
- [ ] `initializePokemon()` - Parser les données API
- [ ] `updateBars()` - Mise à jour HP/Mana + couleurs
- [ ] `addLog()` - Ajouter message + limiter à 10
- [ ] `animateAttack()` - Ajouter/retirer classe
- [ ] `animateDamage()` - Ajouter/retirer classe

### Phase 6: Fonctions Niveau 1 ✓
- [ ] `displayPokemon()` - Afficher toutes les infos
- [ ] `updateTurnIndicator()` - Texte + bordure dorée
- [ ] `endGame()` - Désactiver boutons + modal

### Phase 7: Fonctions Niveau 2 ✓
- [ ] `nextTurn()` - Alterner 1↔2
- [ ] `checkVictory()` - Vérifier HP ≤ 0

### Phase 8: Fonctions Niveau 3 (Combat) ✓
- [ ] `basicAttack()` - Dégâts + recharge mana
- [ ] `magicAttack()` - Vérifier mana + gros dégâts

### Phase 9: Fonction Niveau 4 (Orchestration) ✓
- [ ] `initGame()` - Charger + initialiser + afficher

### Phase 10: Event Listeners ✓
- [ ] Bouton Attaque Simple → `basicAttack()`
- [ ] Bouton Attaque Magique → `magicAttack()`
- [ ] Boutons Nouvelle Partie → `location.reload()`
- [ ] Window `DOMContentLoaded` → `initGame()`

### Phase 11: Tests ✓
- [ ] Tester le chargement initial
- [ ] Tester l'attaque simple
- [ ] Tester l'attaque magique sans mana
- [ ] Tester l'attaque magique avec mana
- [ ] Tester l'alternance des tours
- [ ] Tester la victoire du Pokémon 1
- [ ] Tester la victoire du Pokémon 2
- [ ] Tester les animations
- [ ] Tester le bouton nouvelle partie
- [ ] Tester sur mobile (responsive)

### Phase 12: Finitions ✓
- [ ] Vérifier tous les commentaires
- [ ] Vérifier l'indentation
- [ ] Tester sur différents navigateurs
- [ ] Vérifier les performances (pas de lag)
- [ ] Valider le code (pas d'erreurs console)

---

## 🐛 Guide de Débogage

### Problème : Les Pokémon ne se chargent pas
**Symptômes** : Écran de chargement infini, console montre erreur 404

**Solutions** :
1. Vérifier l'URL de l'API : `https://pokeapi.co/api/v2/pokemon/{id}`
2. Vérifier que l'ID est entre 1 et 151
3. Vérifier la connexion internet
4. Regarder l'onglet Network dans DevTools

```javascript
// Ajouter des console.log pour débugger
async function loadRandomPokemon() {
    const randomId = Math.floor(Math.random() * 151) + 1;
    console.log("Chargement du Pokémon #" + randomId); // LOG
    
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    console.log("Response status:", response.status); // LOG
    
    const data = await response.json();
    console.log("Données reçues:", data); // LOG
    
    return data;
}
```

### Problème : Les barres ne se mettent pas à jour
**Symptômes** : Les barres restent pleines même après attaque

**Solutions** :
1. Vérifier que `updateBars()` est bien appelée
2. Vérifier que les IDs correspondent dans le HTML et le JS
3. Vérifier que `gameState` est bien modifié

```javascript
// Ajouter des console.log
function updateBars(pokemonNumber) {
    const pokemon = gameState[`pokemon${pokemonNumber}`];
    console.log("Mise à jour barres pour:", pokemon.name); // LOG
    console.log("HP actuel:", pokemon.currentHp); // LOG
    
    const hpPercent = (pokemon.currentHp / pokemon.maxHp) * 100;
    console.log("Pourcentage HP:", hpPercent); // LOG
    
    // ... reste du code
}
```

### Problème : Le tour ne change pas
**Symptômes** : Toujours le même Pokémon peut jouer

**Solutions** :
1. Vérifier que `nextTurn()` est appelée
2. Vérifier que `gameState.currentTurn` change bien

```javascript
function nextTurn() {
    console.log("Tour avant:", gameState.currentTurn); // LOG
    
    gameState.currentTurn = gameState.currentTurn === 1 ? 2 : 1;
    
    console.log("Tour après:", gameState.currentTurn); // LOG
    
    updateTurnIndicator();
}
```

### Problème : Les animations ne marchent pas
**Symptômes** : Pas d'effet visuel lors des attaques

**Solutions** :
1. Vérifier que les `@keyframes` sont définis dans le CSS
2. Vérifier que les classes sont bien ajoutées/retirées
3. Vérifier la durée du setTimeout correspond à la durée de l'animation

```javascript
function animateAttack(pokemonNumber) {
    const card = document.getElementById(`pokemon${pokemonNumber}-card`);
    console.log("Animation attaque sur:", card); // LOG
    
    card.classList.add('attacking');
    console.log("Classes après ajout:", card.classList); // LOG
    
    setTimeout(() => {
        card.classList.remove('attacking');
        console.log("Classes après retrait:", card.classList); // LOG
    }, 500);
}
```

### Problème : La victoire n'est pas détectée
**Symptômes** : Le jeu continue même quand HP = 0

**Solutions** :
1. Vérifier que `checkVictory()` est appelée après chaque attaque
2. Vérifier la condition HP ≤ 0 (et non HP < 0)
3. Vérifier que `endGame()` est bien appelée

```javascript
function checkVictory() {
    console.log("Vérification victoire"); // LOG
    console.log("HP Pokemon 1:", gameState.pokemon1.currentHp); // LOG
    console.log("HP Pokemon 2:", gameState.pokemon2.currentHp); // LOG
    
    if (gameState.pokemon1.currentHp <= 0) {
        console.log("Pokemon 2 gagne !"); // LOG
        endGame(2);
        return true;
    }
    if (gameState.pokemon2.currentHp <= 0) {
        console.log("Pokemon 1 gagne !"); // LOG
        endGame(1);
        return true;
    }
    return false;
}
```

---

## 💡 Astuces Pro

### 1. Utiliser des constantes pour éviter les erreurs
```javascript
// ✅ BON - Facile à modifier et pas d'erreur de frappe
const POKEMON_CARD_PREFIX = 'pokemon';
const card = document.getElementById(`${POKEMON_CARD_PREFIX}${num}-card`);
```

### 2. Créer des fonctions utilitaires
```javascript
// Fonction pour obtenir l'adversaire
function getOpponentNumber(currentPlayer) {
    return currentPlayer === 1 ? 2 : 1;
}

// Utilisation
const opponentNum = getOpponentNumber(gameState.currentTurn);
```

### 3. Utiliser la déstructuration
```javascript
// ✅ Plus lisible
const { pokemon1, pokemon2, currentTurn } = gameState;
```

### 4. Validation des données API
```javascript
function initializePokemon(apiData) {
    // Vérifier que les données sont valides
    if (!apiData || !apiData.stats || !apiData.sprites) {
        throw new Error("Données API invalides");
    }
    
    // ... reste du code
}
```

---

## 📈 Améliorations Possibles

Une fois le jeu de base fonctionnel, voici des idées d'amélioration :

### Niveau Débutant+
1. ⭐ Ajouter un compteur de tours
2. ⭐ Afficher les dégâts infligés (nombres qui s'envolent)
3. ⭐ Ajouter des sons (attaque, victoire)
4. ⭐ Sauvegarder les statistiques (victoires/défaites) dans localStorage

### Niveau Intermédiaire
1. ⭐⭐ Ajouter un système de types (feu, eau, plante) avec bonus/malus
2. ⭐⭐ Permettre de choisir son Pokémon au lieu d'aléatoire
3. ⭐⭐ Ajouter un mode "IA" où l'ordinateur joue intelligemment
4. ⭐⭐ Créer différentes attaques magiques avec coûts/dégâts variés

### Niveau Avancé
1. ⭐⭐⭐ Système de statuts (poison, paralysie, brûlure)
2. ⭐⭐⭐ Combat en 3v3 avec changement de Pokémon
3. ⭐⭐⭐ Système d'expérience et de niveaux
4. ⭐⭐⭐ Mode multijoueur en temps réel (WebSocket)

---

## 📚 Ressources Complémentaires

### Documentation Officielle
- **PokéAPI** : https://pokeapi.co/docs/v2
  - Liste des endpoints
  - Structure des données
  - Exemples d'utilisation

- **MDN Web Docs** :
  - Fetch API : https://developer.mozilla.org/fr/docs/Web/API/Fetch_API
  - Async/Await : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function
  - DOM Manipulation : https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model
  - CSS Animations : https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Animations

### Outils de Développement
- **Chrome DevTools** : Pour débugger (F12)
- **JSONView** : Extension pour visualiser les données API
- **Postman** : Pour tester les appels API
- **VS Code Live Server** : Pour tester localement

### Concepts Clés à Maîtriser
1. ✅ Programmation asynchrone (async/await, Promises)
2. ✅ Manipulation du DOM (querySelector, getElementById, classList)
3. ✅ Gestion d'état (objet gameState)
4. ✅ Event listeners et callbacks
5. ✅ Animations CSS et JavaScript
6. ✅ Requêtes HTTP et parsing JSON
7. ✅ Conditions et boucles
8. ✅ Template literals (backticks)

---

## 🎓 Concepts Pédagogiques Couverts

Ce projet permet de pratiquer :

### JavaScript
- ✅ Variables (let, const)
- ✅ Fonctions (déclaration, paramètres, retour)
- ✅ Fonctions asynchrones (async/await)
- ✅ Objets et propriétés
- ✅ Tableaux
- ✅ Conditions (if/else, ternaire)
- ✅ Opérateurs (arithmétiques, comparaison, logiques)
- ✅ Manipulation DOM
- ✅ Events
- ✅ setTimeout
- ✅ API Fetch
- ✅ JSON

### HTML
- ✅ Structure sémantique
- ✅ Attributs (id, class)
- ✅ Images
- ✅ Boutons
- ✅ Divs et conteneurs

### CSS
- ✅ Sélecteurs (id, class, pseudo-classes)
- ✅ Flexbox
- ✅ Positionnement
- ✅ Transitions
- ✅ Animations (@keyframes)
- ✅ Gradients
- ✅ Media queries (responsive)
- ✅ Transform

---

Bon courage dans ton développement ! 🎮✨
