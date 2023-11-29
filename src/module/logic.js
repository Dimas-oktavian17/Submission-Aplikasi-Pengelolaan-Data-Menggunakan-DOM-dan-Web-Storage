export function generateId() {
    return +new Date()
}
export function generateTodoObject(id, title, author, year, isCompleted) {
    return { id, title, author, year: Number(year), isCompleted }
}
export function isStorageExist() {
    if (typeof Storage === 'undefined') {
        alert('Browser kamu tidak mendukung local storage')
        return false
    }
    return true
}
