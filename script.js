const searchBox = document.querySelector('.search-box')
const btnSearch = document.querySelector('.btn-search')
const inputSearch = document.querySelector('.input-search')
btnSearch.addEventListener('click', () => {
    searchBox.classList.toggle('active')
    inputSearch.focus()
})
