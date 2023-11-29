import './src/css/output.css'
// import { generatedbookObject } from './src/module/bookObject'
// import { cardsCompleted } from './src/module/component/cards'
// import { domLoad } from './src/module/domEvent'
// import { isStorageExist, removeTaskFromCompleted, undoTaskFromComplete } from './src/module/logic'
// import { RENDER_EVENT, SAVED_EVENT, STORAGE_KEY, authorForm, checkboxDone, generateId, titleForm, trashButton, uncompletedRead, undoButton, yearForm } from './src/module/variabel'
// // import { cardsCompleted } from './src/module/component/cards'
// // import { toast } from './src/module/component/toast'
// // import { removeToast } from './src/module/logic'
// // import { completedRead, form, tes } from './src/module/variabel'
// // tes.addEventListener('click', function () {
// //     form.insertAdjacentHTML('afterbegin', toast())
// //     removeToast()
// // })

// // * restore data in local Storage
// let dataBooks = []
// // * Dom Events
// document.addEventListener('DOMContentLoaded', domLoad)
// // * muat localstorage and parse data
// export function loadDataFromStorage() {
//     const response = localStorage.getItem(STORAGE_KEY)
//     let data = JSON.parse(response)

//     if (data !== null) {
//         for (const book of data) {
//             dataBooks.push(book)
//         }
//     }
//     document.dispatchEvent(new Event(RENDER_EVENT))
// }
// // * crud methods
// // * create
// function makeBooks(bookObject) {
//     const { id, title, author, year, isComplete } = bookObject
//     const completeCards = cardsCompleted({ id, title, author, year, isComplete })
//     uncompletedRead.innerHTML = completeCards
//     if (isComplete.checked == true) {
//         undoButton.addEventListener('click', () => {
//             undoTaskFromComplete(id)
//         })
//         trashButton.addEventListener('click', () => {
//             removeTaskFromCompleted(id)
//         })
//     } else {
//         console.error('oj')
//     }
// }
// // * update
// function addBooks() {
//     const generatedID = generateId()
//     const bookObject = generatedbookObject(generatedID, titleForm, authorForm, yearForm, checkboxDone)

//     dataBooks.push(bookObject)
//     saveData()
// }
// // * local storage methods
// export function saveData() {
//     if (isStorageExist()) {
//         const parsed = JSON.stringify(dataBooks)
//         localStorage.setItem(STORAGE_KEY, parsed)
//         document.dispatchEvent(new Event(SAVED_EVENT))
//     }
// }

// // * find methods for searching books
// function findBook(bookId) {
//     for (const bookItem of dataBooks) {
//         if (bookItem.id === bookId) {
//             return bookItem
//         }
//     }
//     return null
// }
// function findBookById(bookId) {
//     for (const index in dataBooks) {
//         if (dataBooks[index].id === bookId) {
//             return index
//         }
//     }
//     return -1
// }
const todos = []
const RENDER_EVENT = 'render-todo'
const SAVED_EVENT = 'saved-todo'
const STORAGE_KEY = 'TODO_APPS'

function generateId() {
    return +new Date()
}

function generateTodoObject(id, title, author, year, isCompleted) {
    return { id, title, author, year: Number(year), isCompleted }
}

function findTodoIndex(todoId) {
    return todos.findIndex(todo => todo.id === todoId)
}

function isStorageExist() {
    if (typeof Storage === 'undefined') {
        alert('Browser kamu tidak mendukung local storage')
        return false
    }
    return true
}

function saveData() {
    if (isStorageExist()) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
        document.dispatchEvent(new Event(SAVED_EVENT))
    }
}

function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY)
    todos.push(...(JSON.parse(serializedData) || []))
    document.dispatchEvent(new Event(RENDER_EVENT))
}

function makeTodoElement(todoObject) {
    const { id, title, author, year, isCompleted } = todoObject

    const textTitle = document.createElement('h2')
    textTitle.innerText = title

    const authorform = document.createElement('p')
    authorform.innerText = author
    const yearform = document.createElement('p')
    yearform.innerText = year
    const textContainer = document.createElement('div')
    textContainer.classList.add('inner')
    textContainer.append(textTitle, authorform, yearform)

    const container = document.createElement('div')
    container.classList.add('item', 'shadow')
    container.setAttribute('id', `todo-${id}`)

    const actionButton = document.createElement('button')
    actionButton.innerText = 'test'
    actionButton.addEventListener('click', () => {
        isCompleted ? undoTaskFromCompleted(id) : addTaskToCompleted(id)
    })

    if (isCompleted) {
        actionButton.classList.add('undo-button')
    } else {
        actionButton.classList.add('check-button')
    }

    const trashButton = document.createElement('button')
    trashButton.innerText = 'Delete'
    trashButton.classList.add('trash-button')
    trashButton.addEventListener('click', () => removeTaskFromCompleted(id))

    container.append(textContainer, actionButton, trashButton)

    return container
}

function addTodo() {
    const textTodo = document.querySelector('[aria-label="title"]').value
    const year = document.querySelector('[aria-label="year"]').value
    const author = document.querySelector('[aria-label="author"]').value
    const checkbox = document.querySelector('#bordered-checkbox-1').checked
    const generatedID = generateId()
    const todoObject = generateTodoObject(generatedID, textTodo, author, year, checkbox)

    todos.push(todoObject)
    document.dispatchEvent(new Event(RENDER_EVENT))
    saveData()
}

function addTaskToCompleted(todoId) {
    const todoIndex = findTodoIndex(todoId)
    if (todoIndex !== -1) {
        todos[todoIndex].isCompleted = true
        document.dispatchEvent(new Event(RENDER_EVENT))
        saveData()
    }
}

function removeTaskFromCompleted(todoId) {
    const todoIndex = findTodoIndex(todoId)
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1)
        document.dispatchEvent(new Event(RENDER_EVENT))
        saveData()
    }
}

function undoTaskFromCompleted(todoId) {
    const todoIndex = findTodoIndex(todoId)
    if (todoIndex !== -1) {
        todos[todoIndex].isCompleted = false
        document.dispatchEvent(new Event(RENDER_EVENT))
        saveData()
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const submitForm = document.querySelector('[aria-label="bookForm"]')
    submitForm.addEventListener('submit', function (event) {
        event.preventDefault()
        addTodo()
    })

    if (isStorageExist()) {
        loadDataFromStorage()
    }
})

// let alertId = `notif${Date.now()}`

// function removeAllert() {
//     setTimeout(() => {
//         const alert = document.querySelector(`#${alertId}`)
//         if (alert) {
//             alert.parentNode.removeChild(alert)
//         }
//     }, 1500)
// }

// function showAllert() {
//     const wrapper = document.querySelector('.wrapper')
//     wrapper.insertAdjacentHTML('afterbegin', `<p style="color:green;" id="${alertId}">Sukses create</p>`)
// }

document.addEventListener(SAVED_EVENT, () => {
    console.log('sukses')
    // showAllert()
    // removeAllert()
})

document.addEventListener(RENDER_EVENT, function () {
    const uncompletedTODOList = document.querySelector('[aria-label="uncompletedRead"]')
    const listCompleted = document.querySelector('[aria-label="completedRead"]')

    uncompletedTODOList.innerHTML = ''
    listCompleted.innerHTML = ''

    for (const todoItem of todos) {
        const todoElement = makeTodoElement(todoItem)
        todoItem.isCompleted ? listCompleted.appendChild(todoElement) : uncompletedTODOList.appendChild(todoElement)
    }
})
