let title = document.getElementById("title")
// let showProducts = document.getElementById("showProducts")
let showAllProducts = document.getElementById("showAllProducts")
const div = document.querySelector('.div')



// MOSTRAR PRODUCTOS //
function mostrarProductos() {
    products.forEach((product) => {
//         let Card = document.createElement('div')
//         Card.innerHTML += ` 
//         <img src="${element.img}">
//         <h3>${element.name}</h3>
//         <h3>$${element.price}</h3>
//         <button class="eliminar" data-id=${element.id}>X</button>`
// div.appendChild(Card)
//     })

        let card = document.createElement("div")
        showAllProducts.append(card)
        let img = document.createElement("img")
        img.setAttribute("src", product.img)
        let name = document.createElement("h3")
        name.innerText = (product.name)
        let price = document.createElement("p")
        price.innerText = (product.price)
        let buyButton = document.createElement("button")
        buyButton.innerText = ("Agregar al carrito")
        card.append(img, name, price, buyButton)

        buyButton.addEventListener("click", function () {
            cart.push(product)
            alert("Agregaste " + product.name + " al carrito")
            // divCart.innerHTML = ``
            div.innerHTML = ``
            showCart()
        })
    })
}



mostrarProductos()

// FILTRAR PRODUCTOS // 
let buscador = document.getElementById("inputSearch")
let filtrar = document.getElementById("filtrar")

function filtrarPorCat() {
    let verTodo = document.createElement("button")
    verTodo.innerText = ("Ver Todo")
    showProducts.append(verTodo)
    const filteredProducts = products.filter((product) => product.category === buscador.value)
    console.log(filteredProducts)

    filteredProducts.forEach((filter) => {
        let cardFilter = document.createElement("div")
        showAllProducts.append(cardFilter)
        let imgFilter = document.createElement("img")
        imgFilter.setAttribute("src", filter.img)
        let nameFilter = document.createElement("h3")
        nameFilter.innerText = (filter.name)
        let priceFilter = document.createElement("p")
        priceFilter.innerText = (filter.price)
        let buyButtonFilter = document.createElement("button")
        buyButtonFilter.innerText = ("Agregar al carrito")
        cardFilter.append(imgFilter, nameFilter, priceFilter, buyButtonFilter)

    })

    verTodo.onclick = () => {
        showAllProducts.innerHTML = ``
        mostrarProductos()
    }
}

buscador.onchange = () => {
    showAllProducts.innerHTML = ``
    filtrarPorCat()
}

filtrar.onclick = () => {
    showAllProducts.innerHTML = ``
    filtrarPorCat()
}

