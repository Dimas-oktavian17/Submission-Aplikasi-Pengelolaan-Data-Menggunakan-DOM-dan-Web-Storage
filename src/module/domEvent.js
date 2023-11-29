import { loadDataFromStorage } from '../../main'
import { isStorageExist } from './logic'
import { form } from './variabel'

export function domLoad() {
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        addBooks()
    })
    if (isStorageExist()) {
        loadDataFromStorage()
    }
}
