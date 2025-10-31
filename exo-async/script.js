// ========== FONCTION 1: Récupération de données utilisateur ==========
// Fonction async (asynchrone) = elle retourne une Promise et peut utiliser await
async function fetchUserData(userId) {
  // Validation: vérifie que l'ID est valide (pas vide, pas négatif)
  if (!userId || userId < 0) {
    // Lève une erreur immédiatement si l'ID est invalide
    throw new Error("ID utilisateur invalide");
  }

  // Crée une Promise pour simuler une requête API asynchrone
  // new Promise reçoit une fonction avec (resolve, reject) en paramètres
  return new Promise((resolve, reject) => {
    // setTimeout simule un délai réseau (2 secondes = 2000ms)
    // Dans une vraie API, ce délai correspond au temps de réponse du serveur
    setTimeout(() => {
      // Cas d'erreur: si l'ID est 999, on simule un utilisateur non trouvé
      if (userId === 999) {
        // reject() lance l'erreur et passe au bloc catch
        reject(new Error("Utilisateur non trouve"));
      } else {
        // Cas de succès: resolve() retourne les données de l'utilisateur
        // Les données sont retournées sous forme d'objet JavaScript
        resolve({ id: userId, name: "John Doe", email: "john@example.com" });
      }
    }, 2000); // Le délai de 2000ms s'applique avant la résolution/rejet
  });
}

// ========== FONCTION 2: Traitement des données utilisateur ==========
// Fonction async qui utilise la fonction 1 et gère les erreurs avec try/catch
async function processUserData(userId) {
  // try = bloc qui essaie d'exécuter du code
  // Si une erreur se produit, on saute directement au bloc catch
  try {
    // Affiche un message au démarrage (backticks `` permettent d'insérer des variables)
    console.log(`Recuperation des donnees pour l'utilisateur ${userId}...`);

    // await = pause l'exécution jusqu'à ce que la Promise soit résolue
    // Cette ligne attend 2 secondes que fetchUserData() retourne les données
    // Si fetchUserData lance une erreur, elle sera attrapée par le catch ci-dessous
    const userData = await fetchUserData(userId);

    // Si nous arrivons ici, c'est que fetchUserData a réussi (resolve)
    // Affiche les données reçues avec un message de succès
    console.log("[OK] Donnees recues :", userData);
    // Retourne les données pour que l'appelant puisse les utiliser
    return userData;

  } catch (error) {
    // Bloc catch = exécuté si une erreur est levée dans le try
    // 'error' contient l'objet d'erreur (avec message, stack, etc.)

    // Affiche l'erreur dans la console avec un préfixe [ERROR] pour la visibility
    // error.message extrait juste le texte du message sans les détails techniques
    console.error("[ERROR] Erreur lors du traitement :", error.message);

    // throw error = relaunch l'erreur pour que la fonction appelante puisse la gérer aussi
    // Si on ne relançait pas, l'erreur serait "avalée" et disparaîtrait
    throw error;
  }
}


// ========== EXÉCUTION DU CODE ==========
// Cette syntaxe crée une fonction async anonyme (sans nom) et l'exécute immédiatement
// Les parenthèses () à la fin = appel immédiat de la fonction
// C'est ce qu'on appelle une "IIFE" (Immediately Invoked Function Expression)
(async () => {
  // try = bloc principal qui exécute le code
  try {
    // Première requête: ID = 1 (utilisateur valide)
    // await met en pause l'exécution jusqu'à ce que processUserData(1) soit complète
    // Cela prend 2 secondes (délai du setTimeout)
    await processUserData(1);
    
    // Deuxième requête: ID = 999 (utilisateur invalide)
    // Dans fetchUserData, l'ID 999 trigger un reject() qui lance une erreur
    // Cette erreur sera attrapée par le catch ci-dessous
    await processUserData(999);

  } catch (error) {
    // Ce bloc catch attrape l'erreur qui vient de processUserData(999)
    // C'est le dernier niveau de gestion des erreurs
    // Si une erreur arrive ici, elle ne peut plus être relancée plus haut
    console.log("Erreur finale capturee :", error.message);
  }
  // Fin de la fonction async: le programme s'arrête après l'exécution
})(); // Les parenthèses () exécutent la fonction immédiatement


((nom) => console.log(nom))("MARC");