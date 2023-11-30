// * export html element
export const title = document.querySelector('[aria-label="title"]').value
export const year = document.querySelector('[aria-label="year"]').value
export const author = document.querySelector('[aria-label="author"]').value
export const checkbox = document.querySelector('#bordered-checkbox-1').checked
export const wrapper = document.querySelector('[aria-label="searchWrapper"]')
export const submitForm = document.querySelector('[aria-label="bookForm"]')
// * modal elements
export const confirmYes = document.querySelector('[aria-label="confirmYes"]')
export const confirmNo = document.querySelector('[aria-label="confirmNo"]')
export const modal = document.querySelector('[aria-label="confirmModal"]')
// * render element
export const uncompletedList = document.querySelector('[aria-label="uncompletedRead"]')
export const listCompleted = document.querySelector('[aria-label="completedRead"]')
export const searchInput = document.querySelector('[aria-label="searchInput"]')
// * toast
export const tes = document.querySelector('[aria-label="tes"]')
export const toastId = `toastId${Date.now()}`
export const toastTime = 1500
// * custom dispatchEvent
export const RENDER_EVENT = 'render-book'
export const SAVED_EVENT = 'saved-book'
export const STORAGE_KEY = 'BOOK_APPS'
