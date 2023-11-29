// * import assets, components, functions
import './src/css/output.css'
import trash3 from './public/trash3.svg'
import loop3 from './public/loop.svg'
import { hideDialog, removeAllert, showDialog, toast } from './src/module/component/toast'
import { RENDER_EVENT, SAVED_EVENT, STORAGE_KEY, confirmNo, confirmYes, listCompleted, searchInput, submitForm, uncompletedList, wrapper, } from './src/module/variabel'
import { generateId, generateTodoObject, isStorageExist } from './src/module/logic'
const books = []

function findBookIndex(bookId) {
    return books.findIndex(todo => todo.id === bookId)
}


function saveData() {
    if (isStorageExist()) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(books))
        document.dispatchEvent(new Event(SAVED_EVENT))
    }
}

function loadDataFromStorage() {
    const serializedData = localStorage.getItem(STORAGE_KEY)
    books.push(...(JSON.parse(serializedData) || []))
    document.dispatchEvent(new Event(RENDER_EVENT))
}

function makeBookElement(bookObject) {
    const { id, title, author, year, isCompleted } = bookObject
    // * Create element
    const textStatus = document.createElement('h1')
    const textTitle = document.createElement('h2')
    const authorform = document.createElement('p')
    const yearform = document.createElement('p')
    const textContainer = document.createElement('div')
    const container = document.createElement('div')
    const actionButton = document.createElement('button')
    const trashButton = document.createElement('button')
    const containerDelete = document.createElement('div')
    const containerUndo = document.createElement('div')
    const containerWrapper = document.createElement('div')
    const deleteImage = document.createElement('i')
    const undoImage = document.createElement('i')
    // * add text & style
    textStatus.textContent = `Status:${isCompleted}`
    textStatus.classList.add('cards-font')
    textTitle.textContent = title
    textTitle.classList.add('cards-font')
    authorform.textContent = `Author:${author}`
    authorform.classList.add('cards-font')
    yearform.textContent = `since:${year}`
    yearform.classList.add('cards-font')
    textContainer.classList.add('w-full', 'lg:w-[60%]')
    textContainer.append(textStatus, textTitle, authorform, yearform)
    container.classList.add('cards-container')
    container.setAttribute('id', `todo-${id}`)
    actionButton.textContent = 'undo'
    actionButton.classList.add('action')
    actionButton.addEventListener('click', () => showAlertDialog(id, isCompleted))
    trashButton.textContent = 'Delete'
    trashButton.classList.add('action')
    trashButton.addEventListener('click', () => showAlertDialog(id, 'delete'))
    const deleteSvg = new Image()
    const undoSvg = new Image()
    deleteSvg.src = trash3
    undoSvg.src = loop3
    deleteImage.appendChild(deleteSvg)
    undoImage.appendChild(undoSvg)
    containerWrapper.classList.add('container-wrapper')
    containerDelete.classList.add('container-btn', 'mb-1')
    containerUndo.classList.add('container-btn')
    containerDelete.append(deleteImage, trashButton)
    containerUndo.append(undoImage, actionButton)
    containerWrapper.append(containerDelete, containerUndo)
    container.append(textContainer, containerWrapper)
    return container
}

function addTodo() {
    const title = document.querySelector('[aria-label="title"]').value
    const year = document.querySelector('[aria-label="year"]').value
    const author = document.querySelector('[aria-label="author"]').value
    const checkbox = document.querySelector('#bordered-checkbox-1').checked
    const generatedID = generateId()
    const bookObject = generateTodoObject(generatedID, title, author, year, checkbox)

    books.push(bookObject)
    document.dispatchEvent(new Event(RENDER_EVENT))
    saveData()


}

function addTaskToCompleted(bookId) {
    const bookIndex = findBookIndex(bookId)
    if (bookIndex !== -1) {
        books[bookIndex].isCompleted = true
        document.dispatchEvent(new Event(RENDER_EVENT))
        saveData()
    }
}

function removeTaskFromCompleted(bookId) {
    const bookIndex = findBookIndex(bookId)
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1)
        document.dispatchEvent(new Event(RENDER_EVENT))
        saveData()
    }
}

function undoTaskFromCompleted(bookId) {
    const bookIndex = findBookIndex(bookId)
    if (bookIndex !== -1) {
        books[bookIndex].isCompleted = false
        document.dispatchEvent(new Event(RENDER_EVENT))
        saveData()
    }
}

document.addEventListener('DOMContentLoaded', function () {

    submitForm.addEventListener('submit', function (event) {
        event.preventDefault()
        addTodo()
        submitForm.reset()
    })
    searchInput.addEventListener('keyup', function () {
        renderBooks()
    })
    if (isStorageExist()) {
        loadDataFromStorage()
    }
})

document.addEventListener(SAVED_EVENT, () => {
    wrapper.insertAdjacentHTML('afterbegin', toast())
    removeAllert()
})


function showAlertDialog(id, status) {
    showDialog()
    confirmYes.addEventListener('click', () => {
        hideDialog()
        return status === 'delete' ? removeTaskFromCompleted(id) : status === false ? addTaskToCompleted(id) : undoTaskFromCompleted(id)
    })
    confirmNo.addEventListener('click', () => {
        hideDialog()
    })
}
function renderBooks() {

    uncompletedList.innerHTML = ''
    listCompleted.innerHTML = ''
    const value = searchInput.value.toLowerCase()
    // Filter todos based on the search term
    const filteredBooks = books.filter(todo => todo.title.toLowerCase().includes(value))


    for (const bookItem of filteredBooks) {
        const bookELement = makeBookElement(bookItem)
        bookItem.isCompleted ? listCompleted.appendChild(bookELement) : uncompletedList.appendChild(bookELement)
    }

}
document.getElementById('default-toggle').addEventListener('click', () => {
    document.documentElement.classList.toggle('dark')
})

document.addEventListener(RENDER_EVENT, function () {
    renderBooks()

})
