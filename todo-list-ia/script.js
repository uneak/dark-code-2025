// Sélectionner les éléments du DOM
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

// Initialiser les tâches depuis le localStorage
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Afficher les tâches au chargement
renderTasks();

// Événement pour ajouter une tâche quand on clique le bouton
addBtn.addEventListener('click', addTask);

// Événement pour ajouter une tâche quand on appuie sur Entrée
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});

// Fonction pour ajouter une tâche
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Veuillez entrer une tâche!');
        return;
    }

    // Créer un objet tâche
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };

    // Ajouter à la liste
    tasks.push(task);

    // Sauvegarder dans le localStorage
    saveTasks();

    // Réinitialiser l'input
    taskInput.value = '';
    taskInput.focus();

    // Réafficher les tâches
    renderTasks();
}

// Fonction pour afficher les tâches
function renderTasks() {
    taskList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = '<div class="empty-message">Aucune tâche pour le moment 🎉</div>';
        taskCount.textContent = '0';
        return;
    }

    tasks.forEach((task) => {
        const li = document.createElement('li');
        li.className = 'task-item';

        if (task.completed) {
            li.classList.add('completed');
        }

        li.innerHTML = `
            <input
                type="checkbox"
                class="checkbox"
                ${task.completed ? 'checked' : ''}
                data-id="${task.id}"
            >
            <span class="task-text">${task.text}</span>
            <button class="delete-btn" data-id="${task.id}">Supprimer</button>
        `;

        taskList.appendChild(li);

        // Événement pour cocher une tâche
        li.querySelector('.checkbox').addEventListener('change', (e) => {
            toggleTask(task.id);
        });

        // Événement pour supprimer une tâche
        li.querySelector('.delete-btn').addEventListener('click', (e) => {
            deleteTask(task.id);
        });
    });

    // Mettre à jour le compteur
    taskCount.textContent = tasks.length;
}

// Fonction pour cocher/décocher une tâche
function toggleTask(id) {
    const task = tasks.find((t) => t.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
    }
}

// Fonction pour supprimer une tâche
function deleteTask(id) {
    tasks = tasks.filter((t) => t.id !== id);
    saveTasks();
    renderTasks();
}

// Fonction pour sauvegarder dans le localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
