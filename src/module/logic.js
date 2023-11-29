import { saveData } from '../../main'
import { generatedbookObject } from './bookObject'
import { RENDER_EVENT, authorForm, checkboxDone, titleForm, toastId, toastTime, yearForm } from './variabel'

export function removeToast() {
    setTimeout(() => {
        let toastAlert = document.querySelector(`#${toastId}`)
        toastAlert.parentNode.removeChild(toastAlert)
        console.log(toastAlert)
    }, toastTime)
}
export function isStorageExist() {
    return (typeof (Storage) === 'undefined') ? false : true
}

// export function undoTaskFromComplete(bookId) {
//     const bookTarget = findBook(bookId)
//     if (bookTarget == null) return

//     bookTarget.isComplete = false
//     document.dispatchEvent(new Event(RENDER_EVENT))
//     saveData()
// }
// export function removeTaskFromCompleted(bookId /* HTMLELement */) {
//     const todoTarget = findTodoIndex(bookId)

//     if (todoTarget === -1) return

//     todos.splice(todoTarget, 1)
//     document.dispatchEvent(new Event(RENDER_EVENT))
//     saveData()
// }

