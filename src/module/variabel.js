// * export html element
export const title = document.querySelector('[aria-label="title"]').value
export const year = document.querySelector('[aria-label="year"]').value
export const author = document.querySelector('[aria-label="author"]').value
export const checkbox = document.querySelector('#bordered-checkbox-1').checked
export const wrapper = document.querySelector('[aria-label="searchWrapper"]')
export const submitForm = document.querySelector('[aria-label="bookForm"]')
// * create element
export const textStatus = document.createElement('h1')
export const textTitle = document.createElement('h2')
export const authorform = document.createElement('p')
export const yearform = document.createElement('p')
export const textContainer = document.createElement('div')
export const container = document.createElement('div')
export const actionButton = document.createElement('button')
export const trashButton = document.createElement('button')
export const containerDelete = document.createElement('div')
export const containerUndo = document.createElement('div')
export const containerWrapper = document.createElement('div')

// * modal elements
export const confirmYes = document.querySelector('[aria-label="confirmYes"]')
export const confirmNo = document.querySelector('[aria-label="confirmNo"]')
export const modal = document.querySelector('[aria-label="confirmModal"]')
// * render element
export const uncompletedList = document.querySelector('[aria-label="uncompletedRead"]')
export const listCompleted = document.querySelector('[aria-label="completedRead"]')
export const searchInput = document.querySelector('[aria-label="searchInput"]')
// * completed & uncompleted fields
// export const uncompletedRead = document.querySelector('[aria-label="uncompletedRead"]')
// export const completedRead = document.querySelector('[aria-label="completedRead"]')
// * toast
export const tes = document.querySelector('[aria-label="tes"]')
export const toastId = `toastId${Date.now()}`
export const toastTime = 1500
// * custom dispatchEvent
export const RENDER_EVENT = 'render-book'
export const SAVED_EVENT = 'saved-book'
export const STORAGE_KEY = 'BOOK_APPS'
