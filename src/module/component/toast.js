import { modal, toastId, toastTime } from '../variabel'

export function toast() {
    return `
    <div aria-label="toast"
    id="${toastId}" class="flex flex-row items-center justify-start p-2 transition-all bg-white border rounded-lg shadow-sm animate-bounce border-white/60 dark:bg-secondary-child dark:border-secondary-bg">
           <div class="w-full">
          <div class="flex flex-row items-center justify-center group">
         <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="group-hover:rotate-6 group-hover:transition-all fill-main-bg dark:fill-main-text/60 bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
</svg>
           <p class="inline-block pr-10 ml-1 text-sm font-medium text-main-bg dark:text-main-text/60">
                Done
                </p>
          </div
           </div>
            </div>
    `
}
export function removeAllert() {
    setTimeout(() => {
        const alert = document.querySelector(`#${toastId}`)
        if (alert) {
            alert.parentNode.removeChild(alert)
        }
    }, toastTime)
}

export function showDialog() {
    document.body.classList.add('overflow-hidden')
    modal.classList.remove('hidden')
    modal.classList.add('block')
}
export function hideDialog() {
    document.body.classList.remove('overflow-hidden')
    modal.classList.remove('block')
    modal.classList.add('hidden')
}
