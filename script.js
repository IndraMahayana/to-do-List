const inputtdl = document.querySelector('.input')
const buttontdl = document.querySelector('.buttoninput')
const listtdl = document.querySelector('.todolist')
const tasksTagline = document.querySelector('.tagline')

let totalTasks = 0
function AddTask(e) {
  e.preventDefault()

  if (inputtdl.value === '') return // Guard Class

  //Markup Html
  const markUp = `
    <div class="itemall">
        <p class="item">${inputtdl.value}</p>
        <button class="check-button"><i class="fa-solid fa-check"></i></button>
        <button class="trash-button"><i class="fa-solid fa-trash"></i></button>
    </div>
  `
  totalTasks++
  if (totalTasks > 0 && tasksTagline.classList.contains('hidden'))
    tasksTagline.classList.remove('hidden')

  // Adding that Html to To-Do List
  listtdl.insertAdjacentHTML('beforeend', markUp)
  inputtdl.value = ''
}

function MarkDone_Delete(e) {
  const item = e.target

  if (item.classList[0] === 'check-button') {
    const todolist = item.parentElement
    todolist.classList.toggle('checklist')
  }

  if (item.classList[0] === 'trash-button') {
    const todolist = item.parentElement
    todolist.remove()
    totalTasks--
  }

  if (totalTasks === 0 && !tasksTagline.classList.contains('hidden'))
    tasksTagline.classList.add('hidden')
}

inputtdl.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) AddTask(e)
})
buttontdl.addEventListener('click', AddTask)
listtdl.addEventListener('click', MarkDone_Delete)
