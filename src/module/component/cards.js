export function cardsCompleted({ id, title, author, year, }) {
    return `
    <div aria-label="completeCards"
    class="flex flex-col items-center justify-start p-4 bg-white border rounded-lg shadow-sm sm:p-6 lg:p-8 lg:flex-row lg:justify-center border-white/60 dark:bg-secondary-child dark:border-secondary-bg">
           <div class="w-full lg:w-[60%] ">
           <h5 class="text-sm font-bold text-gray-900 dark:text-main-text">
                    ${id}
                </h5>
                <p class="text-sm font-medium text-gray-900 dark:text-main-text/60">
                 Author: ${title}
                </p>
                <p class="text-sm font-medium text-gray-900 dark:text-main-text/60">
                 Author: ${author}
                </p>
                <p class="text-sm font-medium text-gray-900 dark:text-main-text/60">
                 since: ${year}
                </p>
                </div>
           <div class="w-full lg:w-[40%] flex flex-col justify-start items-center">
          <div class="flex flex-row items-center justify-center group" aria-label="trashButton">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" class="group-hover:rotate-6 group-hover:transition-all fill-main-bg dark:fill-main-text/60 bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
           <p class="inline-block pr-10 ml-1 text-sm font-medium text-main-bg dark:text-main-text/60">
                Delete
                </p>
          </div>
<div class="flex flex-row items-center justify-center mt-1 group" aria-label="undoButton">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" class="group-hover:rotate-6 group-hover:transition-all fill-main-bg dark:fill-main-text/60 bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
</svg>
            <p class="inline-block ml-1 text-sm font-medium text-main-bg dark:text-main-text/60">
             uncompleted
                </p>
</div>
           </div>
            </div>
    `
}

export function cardsUncompleted() {
    return `
    <div aria-label="uncompletedCards"
    class="flex flex-col items-center justify-start p-4 bg-white border rounded-lg shadow-sm sm:p-6 lg:p-8 lg:flex-row lg:justify-center border-white/60 dark:bg-secondary-child dark:border-secondary-bg">
           <div class="w-full lg:w-[60%] ">
           <h5 class="text-sm font-bold text-gray-900 dark:text-main-text">
                    Title
                </h5>
                <p class="text-sm font-medium text-gray-900 dark:text-main-text/60">
                 Author: anonymous
                </p>
                <p class="text-sm font-medium text-gray-900 dark:text-main-text/60">
                 Author: anonymous
                </p>
                <p class="text-sm font-medium text-gray-900 dark:text-main-text/60">
                 since: 2003
                </p>
                </div>
           <div class="w-full lg:w-[40%] flex flex-col justify-start items-center">
          <div class="flex flex-row items-center justify-center group">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" class="group-hover:rotate-6 group-hover:transition-all fill-main-bg dark:fill-main-text/60 bi bi-trash3" viewBox="0 0 16 16">
  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
                </svg>
           <p class="inline-block pr-10 ml-1 text-sm font-medium text-main-bg dark:text-main-text/60">
                Delete
                </p>
          </div>
<div class="flex flex-row items-center justify-center mt-1 group">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" class="group-hover:rotate-6 group-hover:transition-all fill-main-bg dark:fill-main-text/60 bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
</svg>
            <p class="inline-block ml-1 text-sm font-medium text-main-bg dark:text-main-text/60">
             completed
                </p>
</div>
           </div>
            </div>
    `
}
