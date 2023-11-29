// * export html element
export const form = document.querySelector('[aria-label="bookForm"]')
export const titleForm = document.querySelector('[aria-label="title"]').value
export const authorForm = document.querySelector('[aria-label="author"]').value
export const yearForm = document.querySelector('[aria-label="year"]').value
export const checkboxDone = document.querySelector('[bordered-checkbox-1]')
export const undoButton = document.querySelector('[aria-label="undoButton"]')
export const trashButton = document.querySelector('[aria-label="trashButton"]')
// * completed & uncompleted fields
export const uncompletedRead = document.querySelector('[aria-label="uncompletedRead"]')
export const completedRead = document.querySelector('[aria-label="completedRead"]')
// * testing
export const tes = document.querySelector('[aria-label="tes"]')
export const toastId = `toastId${Date.now()}`
export const toastTime = 1500
// * custom dispatchEvent
export const RENDER_EVENT = 'render-books'
export const SAVED_EVENT = 'saved-books'
export const STORAGE_KEY = 'BOOKS_APPS'
// * generated id
export function generateId() {
    return +new Date()
}
