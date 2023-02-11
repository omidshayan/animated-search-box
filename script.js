let searchBox = document.querySelector('.search-box')
let btnSearch = document.querySelector('.btn-search')
let inputSearch = document.querySelector('.input-search')


btnSearch.addEventListener('click', () => {
    searchBox.classList.toggle('active')
    inputSearch.focus()
})
