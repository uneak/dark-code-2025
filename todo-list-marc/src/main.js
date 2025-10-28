import './style.css'
import Chart from 'chart.js/auto'
import { marked } from 'marked'

// State
let todos = []
let selectedTodoId = null
let progressChart = null
let statsChart = null
let isEditMode = false

// DOM Elements
const todoInput = document.getElementById('todoInput')
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('todoList')
const emptyState = document.getElementById('emptyState')
const clearBtn = document.getElementById('clearBtn')
const progressChartCanvas = document.getElementById('progressChart')
const statsChartCanvas = document.getElementById('statsChart')
const detailPanel = document.getElementById('detailPanel')
const emptyDetail = document.getElementById('emptyDetail')
const detailTitle = document.getElementById('detailTitle')
const detailDescription = document.getElementById('detailDescription')
const detailDate = document.getElementById('detailDate')
const saveBtn = document.getElementById('saveBtn')
const readModeBtn = document.getElementById('readModeBtn')
const editModeBtn = document.getElementById('editModeBtn')
const readMode = document.getElementById('readMode')
const editMode = document.getElementById('editMode')
const descriptionRendered = document.getElementById('descriptionRendered')

// Event Listeners
addBtn.addEventListener('click', addTodo)
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTodo()
})
clearBtn.addEventListener('click', clearCompleted)
saveBtn.addEventListener('click', saveTodoDetails)
readModeBtn.addEventListener('click', () => switchToReadMode())
editModeBtn.addEventListener('click', () => switchToEditMode())
detailDescription.addEventListener('input', updateRenderedPreview)

// Add Todo
function addTodo() {
  const text = todoInput.value.trim()

  if (!text) {
    alert('Veuillez entrer une tâche')
    return
  }

  const todo = {
    id: Date.now(),
    text,
    description: '',
    completed: false,
    createdAt: new Date().toLocaleString('fr-FR')
  }

  todos.unshift(todo)
  todoInput.value = ''
  render()
  todoInput.focus()
}

// Delete Todo
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id)
  render()
}

// Toggle Todo
function toggleTodo(id) {
  const todo = todos.find(t => t.id === id)
  if (todo) {
    todo.completed = !todo.completed
    render()
  }
}

// Clear Completed
function clearCompleted() {
  if (confirm('Êtes-vous sûr de vouloir effacer toutes les tâches complétées?')) {
    todos = todos.filter(todo => !todo.completed)
    render()
  }
}


// Update Stats
function updateStats() {
  const total = todos.length
  const completed = todos.filter(t => t.completed).length
  const pending = total - completed

  clearBtn.style.display = completed > 0 ? 'block' : 'none'

  // Update Pie Chart (Progression)
  if (total > 0) {
    if (progressChart) {
      progressChart.data.datasets[0].data = [completed, pending]
      progressChart.update()
    } else {
      createProgressChart(completed, pending)
    }
  } else {
    if (progressChart) {
      progressChart.destroy()
      progressChart = null
    }
  }

  // Update Bar Chart (Statistiques)
  if (statsChart) {
    statsChart.data.datasets[0].data = [total, pending, completed]
    statsChart.update()
  } else if (total > 0) {
    createStatsChart(total, pending, completed)
  }
}

// Create Progress Chart (Pie Chart)
function createProgressChart(completed, pending) {
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
          backgroundColor: ['#10b981', '#fbbf24'],
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

// Create Stats Chart (Bar Chart)
function createStatsChart(total, pending, completed) {
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
          backgroundColor: ['#3b82f6', '#fbbf24', '#10b981'],
          borderColor: ['#1d4ed8', '#f59e0b', '#059669'],
          borderWidth: 1,
          borderRadius: 4
        }
      ]
    },
    options: {
      indexAxis: 'y',
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
            stepSize: 1
          }
        }
      }
    }
  })
}

// Render Todos
function render() {
  todoList.innerHTML = ''

  if (todos.length === 0) {
    emptyState.style.display = 'block'
    clearDetailPanel()
  } else {
    emptyState.style.display = 'none'

    todos.forEach(todo => {
      const li = document.createElement('div')
      li.className = `flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer ${
        todo.completed ? 'opacity-60' : ''
      }`
      li.dataset.id = todo.id

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

      // Add event listeners
      const checkbox = li.querySelector('.todo-checkbox')
      const deleteBtn = li.querySelector('.todo-delete')

      li.addEventListener('click', (e) => {
        if (!e.target.closest('.todo-checkbox') && !e.target.closest('.todo-delete')) {
          selectTodo(todo.id)
        }
      })
      checkbox.addEventListener('change', (e) => {
        e.stopPropagation()
        toggleTodo(todo.id)
      })
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation()
        deleteTodo(todo.id)
      })

      todoList.appendChild(li)
    })
  }

  updateStats()
}

// Escape HTML
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

// Select Todo and Show Detail Panel
function selectTodo(id) {
  selectedTodoId = id
  const todo = todos.find(t => t.id === id)

  if (todo) {
    detailTitle.value = todo.text
    detailDescription.value = todo.description
    detailDate.textContent = todo.createdAt
    detailPanel.style.display = 'flex'
    emptyDetail.style.display = 'none'

    // Render markdown preview
    renderMarkdown(todo.description)

    // Switch to read mode by default
    switchToReadMode()

    // Highlight selected todo
    document.querySelectorAll('[data-id]').forEach(el => {
      el.classList.remove('ring-2', 'ring-indigo-500', 'bg-indigo-50')
    })
    document.querySelector(`[data-id="${id}"]`).classList.add('ring-2', 'ring-indigo-500', 'bg-indigo-50')

    detailTitle.focus()
  }
}

// Switch to Read Mode
function switchToReadMode() {
  isEditMode = false
  readMode.style.display = 'flex'
  editMode.style.display = 'none'
  readModeBtn.classList.add('bg-white', 'border', 'border-gray-300', 'text-gray-700')
  readModeBtn.classList.remove('bg-indigo-600', 'text-white')
  editModeBtn.classList.remove('bg-white', 'border', 'border-gray-300', 'text-gray-700')
  editModeBtn.classList.add('bg-indigo-600', 'text-white')
  renderMarkdown(detailDescription.value)
}

// Switch to Edit Mode
function switchToEditMode() {
  isEditMode = true
  readMode.style.display = 'none'
  editMode.style.display = 'flex'
  editModeBtn.classList.add('bg-white', 'border', 'border-gray-300', 'text-gray-700')
  editModeBtn.classList.remove('bg-indigo-600', 'text-white')
  readModeBtn.classList.remove('bg-white', 'border', 'border-gray-300', 'text-gray-700')
  readModeBtn.classList.add('bg-indigo-600', 'text-white')
  detailDescription.focus()
}

// Render Markdown
function renderMarkdown(text) {
  if (!text || text.trim() === '') {
    descriptionRendered.innerHTML = '<p class="text-gray-400 italic">Aucune description...</p>'
  } else {
    descriptionRendered.innerHTML = marked(text)
  }
}

// Update Rendered Preview (Live Preview)
function updateRenderedPreview() {
  renderMarkdown(detailDescription.value)
}

// Save Todo Details
function saveTodoDetails() {
  if (selectedTodoId === null) return

  const todo = todos.find(t => t.id === selectedTodoId)
  if (todo) {
    todo.text = detailTitle.value.trim()
    todo.description = detailDescription.value.trim()
    render()
  }
}

// Clear Detail Panel
function clearDetailPanel() {
  selectedTodoId = null
  detailPanel.style.display = 'none'
  emptyDetail.style.display = 'flex'
  detailTitle.value = ''
  detailDescription.value = ''
  detailDate.textContent = ''

  document.querySelectorAll('[data-id]').forEach(el => {
    el.classList.remove('ring-2', 'ring-indigo-500', 'bg-indigo-50')
  })
}

// Initial render
render()
