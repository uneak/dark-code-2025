# 🎮 Exercice : Jeu de Combat Pokémon Tour par Tour

## 📋 Énoncé de l'Exercice

### Objectif
Créer un jeu de combat Pokémon en JavaScript vanilla (sans framework) où deux Pokémon s'affrontent au tour par tour. Le jeu doit charger des Pokémon aléatoires depuis l'API PokéAPI et permettre aux joueurs de contrôler alternativement chaque Pokémon.

### Contexte Pédagogique
Cet exercice permet de pratiquer :
- Les appels d'API asynchrones avec `fetch` et `async/await`
- La manipulation du DOM (modification d'éléments HTML)
- La gestion d'état dans une application JavaScript
- L'utilisation d'événements (clics sur boutons)
- Les animations CSS déclenchées par JavaScript
- La structure et l'organisation d'un projet JavaScript

---

## 🎯 Cahier des Charges

### 1. Chargement des Pokémon
- Au démarrage du jeu, charger **2 Pokémon aléatoires** depuis l'API PokéAPI
- Utiliser l'endpoint : `https://pokeapi.co/api/v2/pokemon/{id}`
- Afficher un écran de chargement pendant la récupération des données
- Les Pokémon doivent avoir leur image (sprite) et leurs statistiques

### 2. Interface Utilisateur
Chaque Pokémon doit afficher :
- ✅ Son nom (capitalisé)
- ✅ Son image (sprite)
- ✅ Une barre de vie (HP) avec couleur dynamique :
  - Vert si > 50% de vie
  - Orange si entre 25% et 50%
  - Rouge si < 25%
- ✅ Une barre de mana
- ✅ Ses statistiques (Attaque et Défense)
- ✅ Le texte affichant les valeurs numériques (ex: "150/200")

L'interface doit aussi inclure :
- Un indicateur du tour actuel (quel Pokémon joue)
- Deux boutons d'action : **Attaque Simple** et **Attaque Magique**
- Un log de combat affichant l'historique des actions

### 3. Système de Combat

#### Configuration de base
- **PV maximum** : 200
- **Mana maximum** : 100
- **Mana de départ** : 50

#### Attaque Simple (⚔️)
- Inflige **15 points de dégâts** à l'adversaire
- Recharge **30 points de mana** à l'attaquant
- Toujours disponible

#### Attaque Magique (✨)
- Inflige **40 points de dégâts** à l'adversaire
- Coûte **50 points de mana**
- Seulement disponible si le Pokémon a assez de mana
- Si pas assez de mana, afficher un message dans le log

#### Déroulement d'un tour
1. Le Pokémon actif peut choisir une attaque
2. L'attaque est exécutée (dégâts, changements de mana)
3. Les barres de vie/mana sont mises à jour
4. Une animation visuelle est jouée
5. L'action est enregistrée dans le log
6. On vérifie si un Pokémon a perdu (HP ≤ 0)
7. Si non, on passe au tour du Pokémon suivant

### 4. Conditions de Victoire
- Un Pokémon gagne quand les **HP de l'adversaire tombent à 0**
- Afficher une modal de victoire avec le nom du gagnant
- Proposer de recommencer une nouvelle partie

### 5. Animations (bonus)
- Animation "shake" quand un Pokémon attaque
- Flash rouge quand un Pokémon reçoit des dégâts
- Bordure dorée sur le Pokémon dont c'est le tour
- Transition fluide sur les barres de vie/mana

---

## 💡 Indices et Méthodologie

### Phase 1 : Structure HTML de base
**Commencez par créer la structure HTML** avant d'écrire le JavaScript :
1. Créer les deux cartes Pokémon (gauche et droite)
2. Ajouter les éléments pour afficher nom, image, barres, stats
3. Créer la zone de contrôles (boutons)
4. Créer la zone de log
5. Créer un écran de chargement
6. Créer une modal de victoire (cachée au début)

**Conseil** : Utilisez des `id` clairs et cohérents (ex: `pokemon1-name`, `pokemon2-hp-bar`)

### Phase 2 : Style CSS
Avant le JavaScript, assurez-vous que :
1. Les cartes Pokémon sont bien positionnées
2. Les barres de vie/mana sont stylisées
3. Les animations CSS sont définies (`@keyframes`)
4. Le design est responsive (adapté mobile)

### Phase 3 : Variables et Configuration
Créez un objet global pour stocker l'état du jeu :
```javascript
const gameState = {
    pokemon1: null,
    pokemon2: null,
    currentTurn: 1,
    gameOver: false
};
```

Créez un objet de configuration :
```javascript
const CONFIG = {
    MAX_HP: 200,
    MAX_MANA: 100,
    // ... autres constantes
};
```

### Phase 4 : Chargement des Pokémon
1. Écrire une fonction pour générer un ID aléatoire (1-151)
2. Écrire une fonction `async` pour charger un Pokémon depuis l'API
3. Parser les données de l'API pour extraire les infos nécessaires
4. Initialiser les deux Pokémon au démarrage

**Piège à éviter** : Penser à gérer les erreurs avec `try/catch`

### Phase 5 : Affichage des Données
1. Écrire une fonction pour afficher un Pokémon dans sa carte
2. Mettre à jour les éléments DOM (nom, image, stats)
3. Créer une fonction séparée pour mettre à jour les barres

**Astuce** : Utilisez un paramètre `pokemonNumber` (1 ou 2) pour généraliser

### Phase 6 : Système de Combat
1. Écrire la fonction d'attaque simple
2. Écrire la fonction d'attaque magique
3. Créer une fonction pour calculer/appliquer les dégâts
4. Créer une fonction pour gérer le passage au tour suivant

**Organisation** : Chaque action doit :
- Modifier l'état (gameState)
- Mettre à jour l'affichage (barres)
- Jouer une animation
- Ajouter au log

### Phase 7 : Gestion de Victoire
1. Vérifier après chaque attaque si HP ≤ 0
2. Désactiver les boutons si partie terminée
3. Afficher la modal de victoire
4. Permettre de relancer une partie

### Phase 8 : Log et Feedback
1. Créer une fonction pour ajouter des messages au log
2. Limiter le nombre de messages (garder les 10 derniers)
3. Utiliser des classes CSS pour différencier les types de messages

### Phase 9 : Animations
1. Créer des fonctions pour ajouter/retirer des classes CSS
2. Utiliser `setTimeout` pour retirer les classes après l'animation
3. Synchroniser les animations avec les changements d'état

### Phase 10 : Tests et Finitions
- Tester tous les cas limites (mana insuffisante, HP à 0, etc.)
- Vérifier que les animations fonctionnent
- S'assurer que le jeu est jouable plusieurs fois
- Ajouter des commentaires clairs dans le code

---

## 🏗️ Analyse Fonctionnelle

### Architecture Globale

Le jeu est organisé autour de **3 couches principales** :

```
┌─────────────────────────────────────┐
│   COUCHE PRÉSENTATION (DOM)         │
│   - Affichage des Pokémon           │
│   - Mise à jour des barres          │
│   - Animations visuelles            │
│   - Log de combat                   │
└─────────────────────────────────────┘
              ↕
┌─────────────────────────────────────┐
│   COUCHE LOGIQUE (Game Logic)       │
│   - Système de combat               │
│   - Gestion des tours               │
│   - Calcul des dégâts               │
│   - Vérification de victoire        │
└─────────────────────────────────────┘
              ↕
┌─────────────────────────────────────┐
│   COUCHE DONNÉES (State & API)      │
│   - État du jeu (gameState)         │
│   - Chargement API                  │
│   - Initialisation Pokémon          │
└─────────────────────────────────────┘
```

---

## 📊 Liste des Fonctions et leurs Interactions

### 🔵 Groupe 1 : INITIALISATION ET CHARGEMENT

#### `initGame()`
**Rôle** : Point d'entrée principal, orchestre le démarrage du jeu  
**Appelle** :
- `loadRandomPokemon()` (×2)
- `initializePokemon()` (×2)
- `displayPokemon()` (×2)
- `updateTurnIndicator()`
- `addLog()`

**Pseudo-code** :
```
FONCTION initGame():
    Afficher écran de chargement
    
    pokemon1Data ← loadRandomPokemon()
    pokemon2Data ← loadRandomPokemon()
    
    gameState.pokemon1 ← initializePokemon(pokemon1Data)
    gameState.pokemon2 ← initializePokemon(pokemon2Data)
    
    displayPokemon(1, gameState.pokemon1)
    displayPokemon(2, gameState.pokemon2)
    
    Cacher écran de chargement
    Afficher arène de combat
    
    updateTurnIndicator()
    addLog("Le combat commence !")
```

---

#### `loadRandomPokemon()`
**Rôle** : Charge un Pokémon aléatoire depuis l'API PokéAPI  
**Retourne** : Objet contenant les données brutes de l'API  
**Appelle** : Aucune (fonction feuille)

**Pseudo-code** :
```
FONCTION ASYNC loadRandomPokemon():
    randomId ← nombre aléatoire entre 1 et 151
    
    response ← fetch("https://pokeapi.co/api/v2/pokemon/" + randomId)
    
    SI response pas OK:
        ERREUR "Échec du chargement"
    
    data ← response.json()
    RETOURNER data
```

---

#### `initializePokemon(apiData)`
**Rôle** : Transforme les données API en objet Pokémon utilisable pour le jeu  
**Paramètres** : 
- `apiData` : Données brutes de l'API  
**Retourne** : Objet Pokémon avec stats de combat  
**Appelle** : Aucune (fonction feuille)

**Pseudo-code** :
```
FONCTION initializePokemon(apiData):
    hp ← extraire stat HP depuis apiData
    attack ← extraire stat Attack depuis apiData
    defense ← extraire stat Defense depuis apiData
    
    RETOURNER {
        name: apiData.name,
        sprite: apiData.sprites.front_default,
        maxHp: CONFIG.MAX_HP,
        currentHp: CONFIG.MAX_HP,
        maxMana: CONFIG.MAX_MANA,
        currentMana: CONFIG.INITIAL_MANA,
        attack: attack,
        defense: defense
    }
```

---

### 🟢 Groupe 2 : AFFICHAGE ET INTERFACE

#### `displayPokemon(pokemonNumber, pokemon)`
**Rôle** : Affiche toutes les infos d'un Pokémon dans sa carte  
**Paramètres** :
- `pokemonNumber` : 1 ou 2
- `pokemon` : Objet contenant les données du Pokémon  
**Appelle** : `updateBars()`

**Pseudo-code** :
```
FONCTION displayPokemon(pokemonNumber, pokemon):
    Mettre à jour le nom dans le DOM
    Mettre à jour l'image dans le DOM
    Mettre à jour les stats (attack, defense) dans le DOM
    
    updateBars(pokemonNumber)
```

---

#### `updateBars(pokemonNumber)`
**Rôle** : Met à jour les barres de vie et mana avec les valeurs actuelles  
**Paramètres** :
- `pokemonNumber` : 1 ou 2  
**Appelle** : Aucune (fonction feuille)

**Pseudo-code** :
```
FONCTION updateBars(pokemonNumber):
    pokemon ← gameState["pokemon" + pokemonNumber]
    
    // Calculer les pourcentages
    hpPercent ← (pokemon.currentHp / pokemon.maxHp) × 100
    manaPercent ← (pokemon.currentMana / pokemon.maxMana) × 100
    
    // Mettre à jour la barre de vie
    Modifier la largeur de la barre HP à hpPercent%
    Mettre à jour le texte "X/Y"
    
    // Changer la couleur selon le pourcentage
    SI hpPercent > 50:
        Classe CSS = "high" (vert)
    SINON SI hpPercent > 25:
        Classe CSS = "medium" (orange)
    SINON:
        Classe CSS = "low" (rouge)
    
    // Mettre à jour la barre de mana
    Modifier la largeur de la barre Mana à manaPercent%
    Mettre à jour le texte "X/Y"
```

---

#### `updateTurnIndicator()`
**Rôle** : Met à jour l'affichage pour montrer quel Pokémon joue  
**Appelle** : Aucune (fonction feuille)

**Pseudo-code** :
```
FONCTION updateTurnIndicator():
    pokemon ← gameState["pokemon" + gameState.currentTurn]
    
    Mettre à jour le texte de l'indicateur avec le nom du pokemon
    
    Retirer la classe "active-turn" des deux cartes
    Ajouter la classe "active-turn" à la carte du pokemon actif
```

---

#### `addLog(message, type)`
**Rôle** : Ajoute un message au log de combat  
**Paramètres** :
- `message` : Texte à afficher
- `type` : Type de message ('attack', 'heal', 'victory')  
**Appelle** : Aucune (fonction feuille)

**Pseudo-code** :
```
FONCTION addLog(message, type):
    Créer un nouvel élément div
    Ajouter la classe CSS "log-entry" et la classe du type
    Définir le texte comme message
    
    Insérer l'élément au début du log
    
    // Limiter à 10 messages
    SI plus de 10 messages:
        Supprimer les messages les plus anciens
```

---

### 🟡 Groupe 3 : LOGIQUE DE COMBAT

#### `basicAttack()`
**Rôle** : Exécute une attaque simple (dégâts + recharge mana)  
**Appelle** :
- `animateAttack()`
- `animateDamage()`
- `updateBars()` (×2)
- `addLog()`
- `checkVictory()`
- `nextTurn()`

**Pseudo-code** :
```
FONCTION basicAttack():
    SI gameState.gameOver:
        RETOUR (ne rien faire)
    
    attacker ← Pokémon du tour actuel
    defenderNumber ← L'autre Pokémon (1→2 ou 2→1)
    defender ← gameState["pokemon" + defenderNumber]
    
    // Animation
    animateAttack(gameState.currentTurn)
    
    // Appliquer les dégâts
    damage ← CONFIG.BASIC_ATTACK_DAMAGE
    defender.currentHp ← MAX(0, defender.currentHp - damage)
    
    // Recharger le mana
    attacker.currentMana ← MIN(
        attacker.maxMana,
        attacker.currentMana + CONFIG.BASIC_MANA_GAIN
    )
    
    // Animation de dégâts
    animateDamage(defenderNumber)
    
    // Mise à jour de l'affichage
    updateBars(gameState.currentTurn)
    updateBars(defenderNumber)
    
    // Log
    addLog(message approprié, 'attack')
    
    // Vérifier la victoire
    SI checkVictory():
        RETOUR
    
    // Tour suivant
    nextTurn()
```

---

#### `magicAttack()`
**Rôle** : Exécute une attaque magique (gros dégâts - coût mana)  
**Appelle** :
- `animateAttack()`
- `animateDamage()`
- `updateBars()` (×2)
- `addLog()`
- `checkVictory()`
- `nextTurn()`

**Pseudo-code** :
```
FONCTION magicAttack():
    SI gameState.gameOver:
        RETOUR
    
    attacker ← Pokémon du tour actuel
    defenderNumber ← L'autre Pokémon
    defender ← gameState["pokemon" + defenderNumber]
    
    // Vérifier le mana
    SI attacker.currentMana < CONFIG.MAGIC_MANA_COST:
        addLog("Pas assez de mana !", 'attack')
        RETOUR
    
    // Animation
    animateAttack(gameState.currentTurn)
    
    // Consommer le mana
    attacker.currentMana ← attacker.currentMana - CONFIG.MAGIC_MANA_COST
    
    // Appliquer les dégâts
    damage ← CONFIG.MAGIC_ATTACK_DAMAGE
    defender.currentHp ← MAX(0, defender.currentHp - damage)
    
    // Animation de dégâts
    animateDamage(defenderNumber)
    
    // Mise à jour de l'affichage
    updateBars(gameState.currentTurn)
    updateBars(defenderNumber)
    
    // Log
    addLog(message approprié, 'attack')
    
    // Vérifier la victoire
    SI checkVictory():
        RETOUR
    
    // Tour suivant
    nextTurn()
```

---

#### `nextTurn()`
**Rôle** : Passe au tour du Pokémon suivant  
**Appelle** : `updateTurnIndicator()`

**Pseudo-code** :
```
FONCTION nextTurn():
    SI gameState.currentTurn == 1:
        gameState.currentTurn ← 2
    SINON:
        gameState.currentTurn ← 1
    
    updateTurnIndicator()
```

---

#### `checkVictory()`
**Rôle** : Vérifie si un Pokémon a gagné  
**Retourne** : Boolean (true si partie terminée)  
**Appelle** : `endGame()`

**Pseudo-code** :
```
FONCTION checkVictory():
    SI gameState.pokemon1.currentHp ≤ 0:
        endGame(2)  // Pokémon 2 gagne
        RETOURNER true
    
    SI gameState.pokemon2.currentHp ≤ 0:
        endGame(1)  // Pokémon 1 gagne
        RETOURNER true
    
    RETOURNER false
```

---

#### `endGame(winner)`
**Rôle** : Termine la partie et affiche le vainqueur  
**Paramètres** :
- `winner` : Numéro du Pokémon gagnant (1 ou 2)  
**Appelle** : `addLog()`

**Pseudo-code** :
```
FONCTION endGame(winner):
    gameState.gameOver ← true
    winnerPokemon ← gameState["pokemon" + winner]
    
    // Désactiver les boutons
    Désactiver le bouton d'attaque simple
    Désactiver le bouton d'attaque magique
    
    // Message de victoire
    addLog(message de victoire, 'victory')
    
    // Afficher la modal
    Mettre à jour le texte de la modal
    Afficher la modal de victoire
    
    // Afficher bouton nouvelle partie
    Afficher le bouton restart
```

---

### 🔴 Groupe 4 : ANIMATIONS

#### `animateAttack(pokemonNumber)`
**Rôle** : Joue l'animation d'attaque (shake)  
**Paramètres** :
- `pokemonNumber` : 1 ou 2  
**Appelle** : Aucune (fonction feuille)

**Pseudo-code** :
```
FONCTION animateAttack(pokemonNumber):
    card ← Élément DOM de la carte
    Ajouter la classe "attacking"
    
    APRÈS 500ms:
        Retirer la classe "attacking"
```

---

#### `animateDamage(pokemonNumber)`
**Rôle** : Joue l'animation de dégâts (flash rouge)  
**Paramètres** :
- `pokemonNumber` : 1 ou 2  
**Appelle** : Aucune (fonction feuille)

**Pseudo-code** :
```
FONCTION animateDamage(pokemonNumber):
    card ← Élément DOM de la carte
    Ajouter la classe "damaged"
    
    APRÈS 500ms:
        Retirer la classe "damaged"
```

---

## 🔄 Diagramme de Flux d'Exécution

### Au démarrage du jeu :
```
[Page chargée]
       ↓
   initGame()
       ↓
   ┌───┴────┐
   ↓        ↓
loadRandom  loadRandom
Pokemon()   Pokemon()
   ↓        ↓
   └───┬────┘
       ↓
initialize  initialize
Pokemon()   Pokemon()
       ↓
   ┌───┴────┐
   ↓        ↓
display     display
Pokemon(1)  Pokemon(2)
       ↓
updateTurnIndicator()
       ↓
   addLog()
       ↓
[Jeu prêt]
```

### Lors d'une attaque :
```
[Clic bouton]
       ↓
basicAttack() ou magicAttack()
       ↓
animateAttack(attacker)
       ↓
[Calcul dégâts]
       ↓
[Modification HP/Mana]
       ↓
animateDamage(defender)
       ↓
   ┌───┴────┐
   ↓        ↓
updateBars  updateBars
(attacker)  (defender)
       ↓
   addLog()
       ↓
checkVictory()
   ├──→ OUI → endGame()
   │              ↓
   │         [Fin partie]
   │
   └──→ NON → nextTurn()
                  ↓
         updateTurnIndicator()
                  ↓
         [Tour suivant]
```

---

## 📦 Structure des Données

### Objet `gameState`
```javascript
{
    pokemon1: {
        name: "pikachu",
        sprite: "https://...",
        maxHp: 200,
        currentHp: 200,
        maxMana: 100,
        currentMana: 50,
        attack: 55,
        defense: 40
    },
    pokemon2: { /* idem */ },
    currentTurn: 1,  // 1 ou 2
    gameOver: false  // true ou false
}
```

### Objet `CONFIG`
```javascript
{
    MAX_HP: 200,
    MAX_MANA: 100,
    INITIAL_MANA: 50,
    BASIC_ATTACK_DAMAGE: 15,
    MAGIC_ATTACK_DAMAGE: 40,
    BASIC_MANA_GAIN: 30,
    MAGIC_MANA_COST: 50
}
```

---

## 🎯 Ordre de Développement Recommandé

1. ✅ **Structure HTML** (cartes, boutons, log)
2. ✅ **CSS de base** (layout, couleurs)
3. ✅ **Variables globales** (gameState, CONFIG)
4. ✅ **Chargement API** (loadRandomPokemon, initializePokemon)
5. ✅ **Affichage** (displayPokemon, updateBars)
6. ✅ **Initialisation** (initGame)
7. ✅ **Combat de base** (basicAttack sans animations)
8. ✅ **Gestion tours** (nextTurn, updateTurnIndicator)
9. ✅ **Victoire** (checkVictory, endGame)
10. ✅ **Attaque magique** (magicAttack avec vérification mana)
11. ✅ **Log** (addLog avec différents types)
12. ✅ **Animations CSS** (@keyframes)
13. ✅ **Animations JS** (animateAttack, animateDamage)
14. ✅ **Polish** (responsive, modal, bouton restart)

---

## 🚀 Conseils de Débogage

### Console.log stratégiques
Ajoutez des logs pour suivre le flux :
```javascript
console.log("🎮 Initialisation du jeu...");
console.log("📡 Chargement Pokémon #" + randomId);
console.log("⚔️ Attaque :", attacker.name, "→", defender.name);
```

### Vérifications importantes
- ✅ Les Pokémon sont-ils bien chargés ?
- ✅ Les barres se mettent-elles à jour ?
- ✅ Le tour change-t-il correctement ?
- ✅ La mana est-elle bien vérifiée ?
- ✅ La victoire est-elle détectée ?

### Outils DevTools
- **Inspector** : Vérifier que le DOM est bien modifié
- **Console** : Voir les erreurs et les logs
- **Network** : Vérifier les appels API
- **Sources** : Mettre des breakpoints

---

## 📚 Ressources Utiles

- **Documentation PokéAPI** : https://pokeapi.co/docs/v2
- **MDN - Fetch API** : https://developer.mozilla.org/fr/docs/Web/API/Fetch_API
- **MDN - Async/Await** : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function
- **MDN - CSS Animations** : https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Animations

Bon courage ! 🎮✨
