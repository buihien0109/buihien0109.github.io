const items = [
    {
        name: "cake item",
        thumbnail: "./img/cake-1.jpeg",
        price: 100000
    },
    {
        name: "cake item",
        thumbnail: "./img/cake-2.jpeg",
        price: 150000
    },
    {
        name: "cake item",
        thumbnail: "./img/cake-3.jpeg",
        price: 200000
    },
    {
        name: "cupcake item",
        thumbnail: "./img/cupcake-1.jpeg",
        price: 200000
    },
    {
        name: "cupcake item",
        thumbnail: "./img/cupcake-2.jpeg",
        price: 180000
    },
    {
        name: "cupcake item",
        thumbnail: "./img/cupcake-3.jpeg",
        price: 130000
    },
    {
        name: "dougnut item",
        thumbnail: "./img/doughnut-1.jpeg",
        price: 200000
    },
    {
        name: "dougnut item",
        thumbnail: "./img/doughnut-2.jpeg",
        price: 100000
    },
    {
        name: "dougnut item",
        thumbnail: "./img/doughnut-3.jpeg",
        price: 120000
    },
    {
        name: "sweets item",
        thumbnail: "./img/sweets-1.jpeg",
        price: 120000
    },
    {
        name: "sweets item",
        thumbnail: "./img/sweets-2.jpeg",
        price: 150000
    },
    {
        name: "sweets item",
        thumbnail: "./img/sweets-3.jpeg",
        price: 100000
    },
]

let item_container = document.querySelector('.item-container')

for (let i = 0; i < items.length; i++) {
    const e = items[i];
    item_container.innerHTML += `
        <div class="card-item ${e.name}">
            <div class="card">
                <div class="card-thumb">
                    <img src="${e.thumbnail}" alt="${e.name}">
                </div>
                <div class="card-info">
                    <h2 class="name">${e.name}</h2>
                    <p class="price">${e.price}</p>
                </div>
            </div>
        </div>
    `
}

let prices = document.querySelectorAll('.price')

prices.forEach(function (price) {
    let money = price.innerText
    price.innerText = money.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
});


const buttons = document.querySelectorAll('.btn')
const storeItems = document.querySelectorAll('.card-item')

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        e.preventDefault()
        const filter = this.getAttribute('filter')

        Array.from(buttons).map(btn => btn.classList.remove('btn-active'))
        button.classList.add('btn-active')

        storeItems.forEach((item) => {
            if (filter === 'all') {
                item.style.display = 'block'
            } else {
                if (item.classList.contains(filter)) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            }
        })
    })
})

const searchBox = document.querySelector('#search-item')
const cardItems = document.querySelectorAll('.card-item')

searchBox.addEventListener('keyup', (e) => {
    if(e.keyCode == 13) {
        const searchFilter = e.target.value.toLowerCase().trim()
        storeItems.forEach((item) => {
            if (item.textContent.includes(searchFilter)){
                item.style.display = 'block'
            } else {
                item.style.display = 'none'
            }
        })
    }
})
