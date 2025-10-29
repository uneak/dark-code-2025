/**
 * Moteur Physique 3D avec Three.js et Cannon.js
 * Gère les billes qui tombent en fonction du compteur
 */

// ==================== VARIABLES GLOBALES ====================
let scene, camera, renderer;
let world; // Monde physique Cannon.js
let bodies = []; // Corps physiques des billes
let meshes = []; // Meshes Three.js des billes
let ballCount = 0;
let skyMesh = null; // Sphère d'environnement

// Paramètres
const BALL_RADIUS = 1;
const WORLD_WIDTH = 30;
const WORLD_HEIGHT = 40;
const WORLD_DEPTH = 20;
const GRAVITY = -30;

// ==================== INITIALISATION ====================
/**
 * Initialise la scène Three.js
 */
function initThreeScene() {
    console.log('🎬 initThreeScene START');

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f0f1e);
    scene.fog = new THREE.Fog(0x0f0f1e, 150, 300);
    console.log('✓ Scene créée');

    // Caméra - Positionnée pour bien voir l'intérieur de la boîte
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    // Positionner la caméra loin de la scène et légèrement au-dessus du centre
    camera.position.set(25, 20, 30);
    camera.lookAt(0, 10, 0);
    console.log('✓ Caméra créée et positionnée:', camera.position);
    console.log('✓ Caméra regarde vers:', new THREE.Vector3(0, 10, 0));

    // Vérifier le canvas
    const canvasElement = document.getElementById('canvas');
    console.log('✓ Canvas element:', canvasElement ? 'TROUVÉ' : 'MANQUANT');

    // Renderer
    renderer = new THREE.WebGLRenderer({
        canvas: canvasElement,
        antialias: true,
        alpha: false,
        precision: 'highp'
    });
    console.log('✓ Renderer créé');
    console.log('📐 Dimensions:', window.innerWidth, 'x', window.innerHeight);

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;
    console.log('✓ Renderer configuré');

    // Lumières
    addLights();

    // Environnement ciel
    createSkyEnvironment();

    // Nuage inférieur
    createUnderCloud();

    // Parois
    createWalls();

    // Ajouter des helpers de debug
    addDebugHelpers();

    // Gestionnaire de redimensionnement
    window.addEventListener('resize', onWindowResize);

    console.log('🎬 initThreeScene END');
}

/**
 * Crée une sphère d'environnement (skybox) avec ciel et nuages
 */
function createSkyEnvironment() {
    console.log('🌤️ Création de l\'environnement ciel...');

    // Créer un canvas pour générer la texture du ciel
    const canvas = document.createElement('canvas');
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Dégradé bleu ciel avec plus de contraste (du haut vers le bas)
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, '#1E3A8A');     // Bleu foncé en haut
    gradient.addColorStop(0.3, '#3B82F6');   // Bleu vif au milieu-haut
    gradient.addColorStop(0.6, '#60A5FA');   // Bleu clair au milieu
    gradient.addColorStop(1, '#BFDBFE');     // Bleu très pâle vers l'horizon

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Ajouter des nuages proceduraux légers
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)'; // Beaucoup plus léger (0.3 au lieu de 0.7)
    for (let i = 0; i < 35; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.6; // Concentrer les nuages en haut
        const size = Math.random() * 80 + 30; // Beaucoup plus petits (30-110 au lieu de 100-300)

        // Dessiner des formes nuageuses (cercles avec variations)
        ctx.beginPath();
        ctx.ellipse(x, y, size, size * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(x + size * 0.5, y, size * 0.8, size * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.ellipse(x - size * 0.5, y, size * 0.8, size * 0.4, 0, 0, Math.PI * 2);
        ctx.fill();
    }

    // Créer une texture à partir du canvas
    const skyTexture = new THREE.CanvasTexture(canvas);

    // Créer la géométrie de la sphère d'environnement
    const skyGeometry = new THREE.SphereGeometry(200, 32, 32);

    // Créer le matériau (à l'intérieur de la sphère, donc inverser les normales)
    const skyMaterial = new THREE.MeshBasicMaterial({
        map: skyTexture,
        side: THREE.BackSide // Afficher l'intérieur de la sphère
    });

    // Créer le mesh
    skyMesh = new THREE.Mesh(skyGeometry, skyMaterial);
    scene.add(skyMesh);

    console.log('✓ Ciel avec nuages créé');
}

/**
 * Crée un grand nuage sous la boîte
 */
function createUnderCloud() {
    console.log('☁️ Création du nuage inférieur...');

    // Créer une canvas pour la texture nuageuse
    const cloudCanvas = document.createElement('canvas');
    cloudCanvas.width = 1024;
    cloudCanvas.height = 1024;
    const cloudCtx = cloudCanvas.getContext('2d');

    // Fond transparent
    cloudCtx.clearRect(0, 0, cloudCanvas.width, cloudCanvas.height);

    // Dessiner des formes nuageuses blanches avec dégradé
    cloudCtx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    for (let i = 0; i < 15; i++) {
        const x = Math.random() * cloudCanvas.width;
        const y = Math.random() * cloudCanvas.height;
        const size = Math.random() * 300 + 150;

        // Formes nuageuses
        cloudCtx.beginPath();
        cloudCtx.ellipse(x, y, size, size * 0.6, 0, 0, Math.PI * 2);
        cloudCtx.fill();

        cloudCtx.beginPath();
        cloudCtx.ellipse(x + size * 0.6, y, size * 0.8, size * 0.5, 0, 0, Math.PI * 2);
        cloudCtx.fill();

        cloudCtx.beginPath();
        cloudCtx.ellipse(x - size * 0.6, y, size * 0.8, size * 0.5, 0, 0, Math.PI * 2);
        cloudCtx.fill();
    }

    // Créer une texture
    const cloudTexture = new THREE.CanvasTexture(cloudCanvas);

    // Créer un plan pour le nuage (grande surface plate)
    const cloudGeometry = new THREE.PlaneGeometry(200, 200);
    const cloudMaterial = new THREE.MeshBasicMaterial({
        map: cloudTexture,
        transparent: true,
        side: THREE.DoubleSide
    });

    const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
    cloud.position.y = -WORLD_HEIGHT / 2 - 30; // 30 unités sous le sol
    cloud.rotation.x = Math.PI / 2.5; // Légèrement incliné pour plus de profondeur
    scene.add(cloud);

    console.log('✓ Nuage inférieur créé');
}

/**
 * Ajoute des éléments de debug visuels
 */
function addDebugHelpers() {
    console.log('🔧 Helpers de debug initialisés');
    // Les axes et grille sont retirés pour une meilleure visibilité
}

/**
 * Initialise le monde physique Cannon.js
 */
function initPhysicsWorld() {
    // Vérifier que CANNON est disponible
    if (typeof CANNON === 'undefined') {
        console.error('❌ CANNON.js n\'est pas chargé!');
        console.log('Nouvelle tentative dans 500ms...');
        setTimeout(initPhysicsWorld, 500);
        return;
    }

    console.log('⚙️ initPhysicsWorld START');
    world = new CANNON.World();
    world.gravity.set(0, GRAVITY, 0);
    world.defaultContactMaterial.friction = 0.3;
    world.defaultContactMaterial.restitution = 0.5;
    console.log('✓ Monde physique créé - Gravité:', GRAVITY);

    // Créer les corps physiques pour les parois
    createPhysicsWalls();
    console.log('⚙️ initPhysicsWorld END');
}

/**
 * Ajoute les lumières à la scène
 */
function addLights() {
    console.log('💡 Ajout des lumières...');

    // Lumière ambiante (augmentée)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    console.log('✓ Lumière ambiante ajoutée - intensité: 0.7');

    // Lumière directionnelle (soleil)
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(15, 30, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.left = -WORLD_WIDTH;
    directionalLight.shadow.camera.right = WORLD_WIDTH;
    directionalLight.shadow.camera.top = WORLD_HEIGHT;
    directionalLight.shadow.camera.bottom = 0;
    directionalLight.shadow.camera.far = 100;
    scene.add(directionalLight);
    console.log('✓ Lumière directionnelle ajoutée - intensité: 1.0');

    // Lumière de remplissage (augmentée)
    const fillLight = new THREE.DirectionalLight(0x0099ff, 0.6);
    fillLight.position.set(-15, 15, -10);
    scene.add(fillLight);
    console.log('✓ Lumière de remplissage ajoutée - intensité: 0.6');

    // Lumière ponctuelle pour plus de visibilité
    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(0, WORLD_HEIGHT / 2, 0);
    scene.add(pointLight);
    console.log('✓ Lumière ponctuelle ajoutée - intensité: 0.5');
}

/**
 * Crée une vraie boîte transparente (6 côtés réguliers)
 */
function createWalls() {
    console.log('🧱 Création de la boîte 3D transparente...');

    // Matériau transparent pour les parois
    const wallMaterial = new THREE.MeshPhongMaterial({
        color: 0x5a6a9e,
        shininess: 50,
        transparent: true,
        opacity: 0.15,
        side: THREE.DoubleSide,
        wireframe: false
    });

    // Matériau pour sol et toit
    const floorMaterial = new THREE.MeshPhongMaterial({
        color: 0x3a4a6e,
        shininess: 100,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide
    });

    // Paroi arrière
    const backGeometry = new THREE.BoxGeometry(WORLD_WIDTH * 2, WORLD_HEIGHT, 1);
    const backWall = new THREE.Mesh(backGeometry, wallMaterial);
    backWall.position.z = -WORLD_DEPTH;
    backWall.castShadow = true;
    backWall.receiveShadow = true;
    scene.add(backWall);
    console.log('✓ Paroi arrière ajoutée');

    // Paroi avant
    const frontGeometry = new THREE.BoxGeometry(WORLD_WIDTH * 2, WORLD_HEIGHT, 1);
    const frontWall = new THREE.Mesh(frontGeometry, wallMaterial);
    frontWall.position.z = WORLD_DEPTH;
    frontWall.castShadow = true;
    frontWall.receiveShadow = true;
    scene.add(frontWall);
    console.log('✓ Paroi avant ajoutée');

    // Paroi gauche
    const leftGeometry = new THREE.BoxGeometry(1, WORLD_HEIGHT, WORLD_DEPTH * 2);
    const leftWall = new THREE.Mesh(leftGeometry, wallMaterial);
    leftWall.position.x = -WORLD_WIDTH;
    leftWall.castShadow = true;
    leftWall.receiveShadow = true;
    scene.add(leftWall);
    console.log('✓ Paroi gauche ajoutée');

    // Paroi droite
    const rightGeometry = new THREE.BoxGeometry(1, WORLD_HEIGHT, WORLD_DEPTH * 2);
    const rightWall = new THREE.Mesh(rightGeometry, wallMaterial);
    rightWall.position.x = WORLD_WIDTH;
    rightWall.castShadow = true;
    rightWall.receiveShadow = true;
    scene.add(rightWall);
    console.log('✓ Paroi droite ajoutée');

    // Sol
    const floorGeometry = new THREE.BoxGeometry(WORLD_WIDTH * 2, 1, WORLD_DEPTH * 2);
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.position.y = -WORLD_HEIGHT / 2;
    floor.receiveShadow = true;
    scene.add(floor);
    console.log('✓ Sol ajouté - Transparent à 30%');

    console.log('✓ Boîte 3D ouverte au sommet créée - Total objets:', scene.children.length);
}

/**
 * Crée les parois physiques pour Cannon.js
 */
function createPhysicsWalls() {
    const wallMaterial = new CANNON.Material('wall');
    const ballMaterial = new CANNON.Material('ball');

    world.addContactMaterial(
        new CANNON.ContactMaterial(ballMaterial, wallMaterial, {
            friction: 0.3,
            restitution: 0.6
        })
    );

    // Parois
    const wallShape = new CANNON.Box(new CANNON.Vec3(WORLD_WIDTH, WORLD_HEIGHT, 1));
    const sideWallShape = new CANNON.Box(new CANNON.Vec3(1, WORLD_HEIGHT, WORLD_DEPTH));

    // Paroi arrière
    let body = new CANNON.Body({ mass: 0, material: wallMaterial });
    body.addShape(wallShape);
    body.position.z = -WORLD_DEPTH;
    world.addBody(body);

    // Paroi avant
    body = new CANNON.Body({ mass: 0, material: wallMaterial });
    body.addShape(wallShape);
    body.position.z = WORLD_DEPTH;
    world.addBody(body);

    // Paroi gauche
    body = new CANNON.Body({ mass: 0, material: wallMaterial });
    body.addShape(sideWallShape);
    body.position.x = -WORLD_WIDTH;
    world.addBody(body);

    // Paroi droite
    body = new CANNON.Body({ mass: 0, material: wallMaterial });
    body.addShape(sideWallShape);
    body.position.x = WORLD_WIDTH;
    world.addBody(body);

    // Sol
    const floorShape = new CANNON.Box(new CANNON.Vec3(WORLD_WIDTH, 0.5, WORLD_DEPTH));
    body = new CANNON.Body({ mass: 0, material: wallMaterial });
    body.addShape(floorShape);
    body.position.y = -WORLD_HEIGHT / 2;
    world.addBody(body);
    console.log('✓ Sol physique ajouté - Boîte ouverte au sommet');
}

// ==================== GESTION DES OBJETS ====================

/**
 * Crée un objet aléatoire (sphère, cube, cylindre, cône, tore)
 */
function createRandomObject() {
    const objectTypes = ['sphere', 'cube', 'cylinder', 'cone', 'torus'];
    const randomType = objectTypes[Math.floor(Math.random() * objectTypes.length)];
    const randomSize = 0.5 + Math.random() * 1.5; // Taille entre 0.5 et 2.0

    // Matériaux colorés
    const colors = [0xff6b6b, 0x51cf66, 0x4dabf7, 0xffd93d, 0xff922b, 0xff00ff, 0x00ffff];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const material = new THREE.MeshPhongMaterial({
        color: color,
        shininess: 100,
        wireframe: false
    });

    let geometry, physicsShape, mesh;

    switch (randomType) {
        case 'cube':
            geometry = new THREE.BoxGeometry(randomSize, randomSize, randomSize);
            physicsShape = new CANNON.Box(new CANNON.Vec3(randomSize / 2, randomSize / 2, randomSize / 2));
            break;

        case 'cylinder':
            geometry = new THREE.CylinderGeometry(randomSize / 2, randomSize / 2, randomSize * 1.5, 16);
            physicsShape = new CANNON.Cylinder(randomSize / 2, randomSize / 2, randomSize * 1.5, 16);
            break;

        case 'cone':
            geometry = new THREE.ConeGeometry(randomSize / 2, randomSize * 1.5, 16);
            physicsShape = new CANNON.Sphere(randomSize / 2); // Approximation pour la physique
            break;

        case 'torus':
            geometry = new THREE.TorusGeometry(randomSize, randomSize / 3, 16, 100);
            physicsShape = new CANNON.Sphere(randomSize); // Approximation pour la physique
            break;

        case 'sphere':
        default:
            geometry = new THREE.SphereGeometry(randomSize, 32, 32);
            physicsShape = new CANNON.Sphere(randomSize);
            break;
    }

    geometry.computeVertexNormals();
    mesh = new THREE.Mesh(geometry, material);
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    // Rendre le matériau transparent pour l'animation d'opacité
    material.transparent = true;
    material.opacity = 0; // Commencer invisible

    return { mesh, physicsShape, type: randomType, size: randomSize };
}

/**
 * Anime l'apparition d'un objet (fade in)
 */
function animateObjectAppearance(mesh) {
    const duration = 400; // 400ms d'animation
    const startTime = Date.now();

    const appearanceStep = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Mettre à jour l'opacité de tous les matériaux du mesh
        if (mesh.material) {
            mesh.material.opacity = progress;
        }

        if (progress < 1) {
            requestAnimationFrame(appearanceStep);
        }
    };

    appearanceStep();
}

/**
 * Ajoute un objet aléatoire à la scène et au monde physique
 */
function addBall() {
    console.log('✨ Ajout d\'un nouvel objet... (count:', ballCount, ')');

    if (typeof CANNON === 'undefined') {
        console.error('❌ CANNON.js n\'est pas disponible!');
        return;
    }

    // Créer un objet aléatoire
    const objectData = createRandomObject();
    const mesh = objectData.mesh;
    const physicsShape = objectData.physicsShape;

    // Position initiale aléatoire en haut
    const x = (Math.random() - 0.5) * WORLD_WIDTH * 1.5;
    const y = WORLD_HEIGHT / 2 + Math.random() * 5;
    const z = (Math.random() - 0.5) * WORLD_DEPTH * 1.5;

    mesh.position.set(x, y, z);
    scene.add(mesh);

    console.log('✓ Mesh ajouté à la scène - Type:', objectData.type, '- Taille:', objectData.size.toFixed(2));

    // Corps physique
    const objectMaterial = new CANNON.Material('object');
    const body = new CANNON.Body({
        mass: 1,
        shape: physicsShape,
        material: objectMaterial,
        linearDamping: 0.3,
        angularDamping: 0.3
    });

    body.position.set(x, y, z);

    // Rotation initiale aléatoire
    body.angularVelocity.set(
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 5
    );

    // Vitesse initiale aléatoire
    body.velocity.set(
        (Math.random() - 0.5) * 10,
        0,
        (Math.random() - 0.5) * 10
    );

    world.addBody(body);
    console.log('✓ Corps physique ajouté au monde');

    // Stockage
    bodies.push(body);
    meshes.push(mesh);

    // Animation d'apparition
    animateObjectAppearance(mesh);

    ballCount++;
    console.log('✓ Objet ajouté avec succès! Total:', ballCount);
}

/**
 * Supprime la dernière bille avec disparition progressive
 */
function removeBall() {
    if (bodies.length === 0) return;

    const body = bodies.pop();
    const mesh = meshes.pop();

    if (!body || !mesh) return;

    console.log('🎱 Suppression d\'une bille avec animation...');

    // Décrémenter le compteur IMMÉDIATEMENT
    ballCount--;
    console.log('✓ ballCount décrémenté:', ballCount);

    // Retirer du monde physique
    world.removeBody(body);

    // Animation de disparition progressive
    animateBallRemoval(mesh);
}

/**
 * Anime la disparition progressive d'un objet (fade out simple)
 */
function animateBallRemoval(mesh) {
    const duration = 600; // 600ms de fade out
    const startTime = Date.now();

    // Ajouter un drapeau pour identifier les objets en suppression
    mesh.userData.isRemoving = true;

    // Créer une boucle d'animation de fade out
    const removeAnimationStep = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Animer l'opacité (fade out: 1 à 0)
        if (mesh.material) {
            mesh.material.opacity = 1 - progress;
        }

        if (progress < 1) {
            requestAnimationFrame(removeAnimationStep);
        } else {
            // Suppression complète
            scene.remove(mesh);
            console.log('✓ Objet supprimé après animation');
        }
    };

    removeAnimationStep();
}

/**
 * Supprime toutes les billes (sans animation)
 */
function removeAllBalls() {
    // Retirer les animations en cours
    while (bodies.length > 0) {
        const body = bodies.pop();
        const mesh = meshes.pop();
        if (body) world.removeBody(body);
        if (mesh) scene.remove(mesh);
    }
    ballCount = 0;
}

/**
 * Met à jour le nombre de billes pour correspondre au compteur
 */
function updateBallCount(targetCount) {
    while (ballCount < targetCount) {
        addBall();
    }
    while (ballCount > targetCount) {
        removeBall();
    }
}

// ==================== BOUCLE D'ANIMATION ====================
/**
 * Boucle d'animation principale
 */
let frameCount = 0;
let cameraOrbitRadius = 90; // Distance de la caméra au centre (plus de recul)
const cameraOrbitRadiusMin = 30; // Distance minimale (zoom avant)
const cameraOrbitRadiusMax = 120; // Distance maximale (zoom arrière)
const cameraOrbitSpeed = 0.3; // Vitesse de rotation (rad/s)
let cameraAngle = 0; // Angle courant de la caméra
let targetCameraRadius = 90; // Rayon cible pour le zoom
let isZooming = false; // Flag pour savoir si on zoom

function animate() {
    requestAnimationFrame(animate);

    // Mise à jour du monde physique
    world.step(1 / 60); // 60 FPS

    // Mise à jour de la position des meshes selon les corps physiques
    for (let i = 0; i < bodies.length; i++) {
        const mesh = meshes[i];
        const body = bodies[i];

        if (!mesh || !body) continue;

        mesh.position.copy(body.position);
        mesh.quaternion.copy(body.quaternion);

        // Recycler les billes qui tombent trop bas (sauf celles qui sont en cours de suppression)
        if (body.position.y < -WORLD_HEIGHT && !mesh.userData.isRemoving) {
            // Repositionner la bille en haut
            const newX = (Math.random() - 0.5) * WORLD_WIDTH * 1.5;
            const newY = WORLD_HEIGHT / 2 + Math.random() * 5;
            const newZ = (Math.random() - 0.5) * WORLD_DEPTH * 1.5;

            body.position.set(newX, newY, newZ);
            body.velocity.set(
                (Math.random() - 0.5) * 10,
                0,
                (Math.random() - 0.5) * 10
            );
            body.angularVelocity.set(
                (Math.random() - 0.5) * 5,
                (Math.random() - 0.5) * 5,
                (Math.random() - 0.5) * 5
            );

            // Réinitialiser l'opacité quand l'objet est recyclé
            if (mesh.material) {
                mesh.material.opacity = 1;
            }
        }
    }

    // Interpoler le rayon vers le rayon cible pour un zoom smooth
    cameraOrbitRadius += (targetCameraRadius - cameraOrbitRadius) * 0.1;

    // Rotation de la caméra autour du conteneur
    cameraAngle += cameraOrbitSpeed * 0.016; // 0.016 ≈ 1/60 secondes
    const cameraX = Math.cos(cameraAngle) * cameraOrbitRadius;
    const cameraY = 10; // Hauteur fixe
    const cameraZ = Math.sin(cameraAngle) * cameraOrbitRadius;

    camera.position.set(cameraX, cameraY, cameraZ);
    camera.lookAt(0, 10, 0); // Regarder le centre du conteneur

    // Faire suivre la sphère de ciel à la caméra (pour qu'elle soit toujours autour)
    if (skyMesh) {
        skyMesh.position.copy(camera.position);
    }

    // Afficher les infos tous les 60 frames
    frameCount++;
    if (frameCount % 60 === 0) {
        console.log('📊 Stats - Billes:', meshes.length, '| Objets scène:', scene.children.length);
    }

    // Rendu
    renderer.render(scene, camera);
}

/**
 * Gère le redimensionnement de la fenêtre
 */
function onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

// ==================== GESTION DU ZOOM ====================

/**
 * Gère les appuis clavier pour le zoom
 */
document.addEventListener('keydown', (event) => {
    if (event.key.toLowerCase() === 'z') {
        event.preventDefault();
        // Basculer entre zoom avant et zoom arrière
        if (targetCameraRadius > 60) {
            // Zoom avant
            targetCameraRadius = cameraOrbitRadiusMin;
            console.log('🔍 Zoom avant activé');
        } else {
            // Zoom arrière
            targetCameraRadius = cameraOrbitRadiusMax;
            console.log('🔍 Zoom arrière activé');
        }
    }
});

// ==================== INITIALISATION ====================
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initialisation de la scène 3D...');

    initThreeScene();
    console.log('✓ Scene 3D initialized');

    // Attendre que CANNON soit disponible avant d'initialiser le monde physique
    let cannonCheckAttempts = 0;
    function waitForCannon() {
        if (typeof CANNON !== 'undefined') {
            console.log('✓ CANNON.js trouvé!');
            initPhysicsWorld();
            animate();
            console.log('✓ Animation loop started');
        } else {
            cannonCheckAttempts++;
            if (cannonCheckAttempts < 50) { // Augmenté à 50 pour 5 secondes
                if (cannonCheckAttempts % 10 === 0) {
                    console.log('⏳ En attente de CANNON.js... (', (cannonCheckAttempts * 100) / 1000, 's)');
                }
                setTimeout(waitForCannon, 100);
            } else {
                console.error('❌ Timeout: CANNON.js n\'a pas pu être chargé!');
                console.error('⚠️ Vérifiez le CDN : https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/dist/cannon-es.js');
            }
        }
    }

    // Commencer à attendre après 200ms pour laisser le temps aux scripts de charger
    setTimeout(waitForCannon, 200);
});