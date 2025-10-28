// ============================================
// IMPORTS - Dépendances externes et styles
// ============================================
import './style.css'
import Chart from 'chart.js/auto'
import { marked } from 'marked'

// ============================================
// STATE - Variables pour gérer l'état de l'app
// ============================================
/** @type {Array} Liste de toutes les tâches */
let todos = []
/** @type {number} ID de la tâche actuellement sélectionnée */
let selectedTodoId = null
/** @type {Chart} Instance du graphique de progression */
let progressChart = null
/** @type {Chart} Instance du graphique de statistiques */
let statsChart = null
/** @type {boolean} Indique si on est en mode édition */
let isEditMode = false

// ============================================
// DOM ELEMENTS - Références aux éléments HTML
// ============================================
// Éléments de saisie et d'affichage
const todoInput = document.getElementById('todoInput')
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('todoList')
const emptyState = document.getElementById('emptyState')
const clearBtn = document.getElementById('clearBtn')

// Graphiques et statistiques
const progressChartCanvas = document.getElementById('progressChart')
const statsChartCanvas = document.getElementById('statsChart')

// Panneau de détail
const detailPanel = document.getElementById('detailPanel')
const emptyDetail = document.getElementById('emptyDetail')
const detailTitle = document.getElementById('detailTitle')
const detailDescription = document.getElementById('detailDescription')
const detailDate = document.getElementById('detailDate')
const saveBtn = document.getElementById('saveBtn')

// Boutons de mode (lecture/édition)
const readModeBtn = document.getElementById('readModeBtn')
const editModeBtn = document.getElementById('editModeBtn')
const readMode = document.getElementById('readMode')
const editMode = document.getElementById('editMode')
const descriptionRendered = document.getElementById('descriptionRendered')

// ============================================
// EVENT LISTENERS - Attachement des écouteurs
// ============================================
addBtn.addEventListener('click', addTodo)
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTodo()
})
clearBtn.addEventListener('click', clearCompleted)
saveBtn.addEventListener('click', saveTodoDetails)
readModeBtn.addEventListener('click', () => switchToReadMode())
editModeBtn.addEventListener('click', () => switchToEditMode())
detailDescription.addEventListener('input', updateRenderedPreview)

// ============================================
// FUNCTIONS - GESTION DES TÂCHES
// ============================================

/**
 * Ajoute une nouvelle tâche à la liste
 * Valide le texte, crée un objet tâche avec un ID unique et ajoute à la liste
 */
function addTodo() {
  const text = todoInput.value.trim()

  if (!text) {
    alert('Veuillez entrer une tâche')
    return
  }

  // Créer un nouvel objet tâche avec les propriétés par défaut
  const todo = {
    id: Date.now(), // ID unique basé sur le timestamp
    text,
    description: '',
    completed: false,
    createdAt: new Date().toLocaleString('fr-FR') // Date et heure actuelles
  }

  // Ajouter au début de la liste et réinitialiser l'input
  todos.unshift(todo)
  todoInput.value = ''
  render()
  todoInput.focus()
}

/**
 * Supprime une tâche de la liste par son ID
 * @param {number} id - L'ID de la tâche à supprimer
 */
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id)
  render()
}

/**
 * Bascule l'état de complétude d'une tâche
 * @param {number} id - L'ID de la tâche à basculer
 */
function toggleTodo(id) {
  const todo = todos.find(t => t.id === id)
  if (todo) {
    todo.completed = !todo.completed
    render()
  }
}

/**
 * Efface toutes les tâches complétées après confirmation de l'utilisateur
 */
function clearCompleted() {
  if (confirm('Êtes-vous sûr de vouloir effacer toutes les tâches complétées?')) {
    todos = todos.filter(todo => !todo.completed)
    render()
  }
}


// ============================================
// FUNCTIONS - STATISTIQUES ET GRAPHIQUES
// ============================================

/**
 * Met à jour les statistiques et les graphiques
 * Calcule le nombre total, complétées et en cours
 * Met à jour ou crée les graphiques de progression et statistiques
 */
function updateStats() {
  // Calculer les statistiques
  const total = todos.length
  const completed = todos.filter(t => t.completed).length
  const pending = total - completed

  // Afficher le bouton "Effacer" seulement s'il y a des tâches complétées
  clearBtn.style.display = completed > 0 ? 'block' : 'none'

  // Mettre à jour le graphique en donut (progression)
  if (total > 0) {
    if (progressChart) {
      // Mettre à jour le graphique existant
      progressChart.data.datasets[0].data = [completed, pending]
      progressChart.update()
    } else {
      // Créer un nouveau graphique
      createProgressChart(completed, pending)
    }
  } else {
    // Détruire le graphique si aucune tâche
    if (progressChart) {
      progressChart.destroy()
      progressChart = null
    }
  }

  // Mettre à jour le graphique en barres (statistiques)
  if (statsChart) {
    statsChart.data.datasets[0].data = [total, pending, completed]
    statsChart.update()
  } else if (total > 0) {
    createStatsChart(total, pending, completed)
  }
}

/**
 * Crée un graphique en donut pour afficher la progression
 * @param {number} completed - Nombre de tâches complétées
 * @param {number} pending - Nombre de tâches en cours
 */
function createProgressChart(completed, pending) {
  // Détruire l'ancien graphique s'il existe
  if (progressChart) {
    progressChart.destroy()
  }

  const ctx = progressChartCanvas.getContext('2d')
  progressChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Complétées', 'En cours'],
      datasets: [
        {
          data: [completed, pending],
          backgroundColor: ['#10b981', '#fbbf24'], // Couleurs : vert et jaune
          borderColor: ['#059669', '#f59e0b'],
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  })
}

/**
 * Crée un graphique en barres pour afficher les statistiques
 * @param {number} total - Nombre total de tâches
 * @param {number} pending - Nombre de tâches en cours
 * @param {number} completed - Nombre de tâches complétées
 */
function createStatsChart(total, pending, completed) {
  // Détruire l'ancien graphique s'il existe
  if (statsChart) {
    statsChart.destroy()
  }

  const ctx = statsChartCanvas.getContext('2d')
  statsChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Total', 'En cours', 'Complétées'],
      datasets: [
        {
          label: 'Nombre de tâches',
          data: [total, pending, completed],
          backgroundColor: ['#3b82f6', '#fbbf24', '#10b981'], // Bleu, jaune, vert
          borderColor: ['#1d4ed8', '#f59e0b', '#059669'],
          borderWidth: 1,
          borderRadius: 4
        }
      ]
    },
    options: {
      indexAxis: 'y', // Barres horizontales
      responsive: true,
      maintainAspectRatio: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            stepSize: 1 // Incrément de 1
          }
        }
      }
    }
  })
}

// ============================================
// FUNCTIONS - RENDU DE L'INTERFACE
// ============================================

/**
 * Affiche l'état vide ou rend la liste des tâches
 * Crée les éléments HTML pour chaque tâche et attache les écouteurs d'événements
 */
function render() {
  // Réinitialiser la liste
  todoList.innerHTML = ''

  // Si aucune tâche, afficher le message vide
  if (todos.length === 0) {
    emptyState.style.display = 'block'
    clearDetailPanel()
  } else {
    emptyState.style.display = 'none'

    // Créer un élément pour chaque tâche
    todos.forEach(todo => {
      const li = document.createElement('div')
      li.className = `flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer ${
        todo.completed ? 'opacity-60' : '' // Réduire l'opacité si complétée
      }`
      li.dataset.id = todo.id

      // Construire le contenu HTML de la tâche
      li.innerHTML = `
        <input
          type="checkbox"
          ${todo.completed ? 'checked' : ''}
          class="w-5 h-5 text-indigo-600 rounded cursor-pointer todo-checkbox"
        />
        <div class="flex-1 min-w-0">
          <p class="font-medium ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}">
            ${escapeHtml(todo.text)}
          </p>
          <p class="text-xs text-gray-400 mt-1">${todo.createdAt}</p>
        </div>
        <button
          class="bg-red-100 hover:bg-red-200 text-red-600 font-semibold px-3 py-1 rounded transition-colors todo-delete flex-shrink-0"
        >
          ✕
        </button>
      `

      // Récupérer les éléments interactifs
      const checkbox = li.querySelector('.todo-checkbox')
      const deleteBtn = li.querySelector('.todo-delete')

      // Gérer le clic sur la tâche pour sélectionner et afficher les détails
      li.addEventListener('click', (e) => {
        if (!e.target.closest('.todo-checkbox') && !e.target.closest('.todo-delete')) {
          selectTodo(todo.id)
        }
      })

      // Gérer le changement d'état de complétude
      checkbox.addEventListener('change', (e) => {
        e.stopPropagation()
        toggleTodo(todo.id)
      })

      // Gérer la suppression
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        deleteTodo(todo.id)
      })

      // Ajouter à la liste
      todoList.appendChild(li)
    })
  }

  // Mettre à jour les statistiques et graphiques
  updateStats()
}

/**
 * Échappe les caractères HTML pour éviter les injections XSS
 * Remplace &, <, >, ", ' par leurs entités HTML
 * @param {string} text - Le texte à échapper
 * @returns {string} Le texte échappé
 */
function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }
  return text.replace(/[&<>"']/g, (m) => map[m])
}

// ============================================
// FUNCTIONS - GESTION DU PANNEAU DE DÉTAILS
// ============================================

/**
 * Sélectionne une tâche et affiche son panneau de détails
 * @param {number} id - L'ID de la tâche à sélectionner
 */
function selectTodo(id) {
  selectedTodoId = id
  const todo = todos.find(t => t.id === id)

  if (todo) {
    // Remplir le formulaire de détails
    detailTitle.value = todo.text
    detailDescription.value = todo.description
    detailDate.textContent = todo.createdAt
    detailPanel.style.display = 'flex'
    emptyDetail.style.display = 'none'

    // Afficher l'aperçu markdown
    renderMarkdown(todo.description)

    // Passer en mode lecture par défaut
    switchToReadMode()

    // Mettre en évidence la tâche sélectionnée
    document.querySelectorAll('[data-id]').forEach(el => {
      el.classList.remove('ring-2', 'ring-indigo-500', 'bg-indigo-50')
    })
    document.querySelector(`[data-id="${id}"]`).classList.add('ring-2', 'ring-indigo-500', 'bg-indigo-50')

    // Focus sur le titre
    detailTitle.focus()
  }
}

/**
 * Bascule le panneau en mode lecture (affichage du markdown)
 * Affiche le rendu markdown et cache l'éditeur
 */
function switchToReadMode() {
  isEditMode = false
  readMode.style.display = 'flex'
  editMode.style.display = 'none'

  // Mettre à jour l'apparence des boutons
  readModeBtn.classList.add('bg-white', 'border', 'border-gray-300', 'text-gray-700')
  readModeBtn.classList.remove('bg-indigo-600', 'text-white')
  editModeBtn.classList.remove('bg-white', 'border', 'border-gray-300', 'text-gray-700')
  editModeBtn.classList.add('bg-indigo-600', 'text-white')

  // Afficher l'aperçu
  renderMarkdown(detailDescription.value)
}

/**
 * Bascule le panneau en mode édition (éditeur de texte avec aperçu)
 * Affiche l'éditeur et cache le rendu markdown
 */
function switchToEditMode() {
  isEditMode = true
  readMode.style.display = 'none'
  editMode.style.display = 'flex'

  // Mettre à jour l'apparence des boutons
  editModeBtn.classList.add('bg-white', 'border', 'border-gray-300', 'text-gray-700')
  editModeBtn.classList.remove('bg-indigo-600', 'text-white')
  readModeBtn.classList.remove('bg-white', 'border', 'border-gray-300', 'text-gray-700')
  readModeBtn.classList.add('bg-indigo-600', 'text-white')

  // Focus sur la description pour éditer
  detailDescription.focus()
}

/**
 * Rend le texte markdown en HTML et l'affiche
 * @param {string} text - Le texte markdown à rendre
 */
function renderMarkdown(text) {
  if (!text || text.trim() === '') {
    descriptionRendered.innerHTML = '<p class="text-gray-400 italic">Aucune description...</p>'
  } else {
    // Utiliser la librairie marked pour convertir markdown en HTML
    descriptionRendered.innerHTML = marked(text)
  }
}

/**
 * Met à jour l'aperçu rendu en temps réel quand on tape dans l'éditeur
 * Utilisé pour prévisualiser le markdown en direct
 */
function updateRenderedPreview() {
  renderMarkdown(detailDescription.value)
}

/**
 * Sauvegarde les modifications de titre et description d'une tâche
 * Met à jour la tâche et relance le rendu
 */
function saveTodoDetails() {
  if (selectedTodoId === null) return

  const todo = todos.find(t => t.id === selectedTodoId)
  if (todo) {
    // Mettre à jour avec les valeurs du formulaire
    todo.text = detailTitle.value.trim()
    todo.description = detailDescription.value.trim()
    render()
  }
}

/**
 * Réinitialise le panneau de détails et efface la sélection
 */
function clearDetailPanel() {
  selectedTodoId = null
  detailPanel.style.display = 'none'
  emptyDetail.style.display = 'flex'

  // Réinitialiser les champs
  detailTitle.value = ''
  detailDescription.value = ''
  detailDate.textContent = ''

  // Retirer la mise en évidence de toutes les tâches
  document.querySelectorAll('[data-id]').forEach(el => {
    el.classList.remove('ring-2', 'ring-indigo-500', 'bg-indigo-50')
  })
}

// ============================================
// INITIALIZATION - Initialisation de l'app
// ============================================

// Afficher la liste au chargement de la page
render()
