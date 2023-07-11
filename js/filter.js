document.querySelectorAll("[data-filter]")
    .forEach(btn => btn.addEventListener('click', filterItems))

function filterItems(event) {
    event.preventDefault();
    const cat = event.target.dataset.filter

    const items = document.querySelectorAll("[data-cat]")

    if (cat === 'all') {
        items.forEach(item => item.classList.remove('hide'))
    } else {
        items.forEach(item => {
            const workCat = item.dataset.cat;

            if (workCat !== cat) {
                item.classList.add('hide')
            } else {
                item.classList.remove('hide')
            }
        })
    }
}