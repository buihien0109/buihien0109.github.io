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


const buttons = document.querySelectorAll('.btn')
const storeItems = document.querySelectorAll('.card-item')

buttons.forEach((button) => {
    button.addEventListener('click', function (e) {
        e.preventDefault()
        const filter = this.getAttribute('filter')

        console.log(filter)

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


//wire up filter search box
// (function(){

//     const searchBox = document.querySelector('#search-item')
//     const storeItems = document.querySelectorAll('.store-item')

//     searchBox.addEventListener('keyup', (e) => {

//         const searchFilter = e.target.value.toLowerCase().trim()
//         //display only items that contain filter input

//         storeItems.forEach((item) => {
//             if (item.textContent.includes(searchFilter)){
//                 item.style.display = 'block'
//             } else {
//                 item.style.display = 'none'
//             }
//         })
//     })

// })();
