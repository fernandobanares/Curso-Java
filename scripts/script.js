let title = document.getElementById("title")
// let showProducts = document.getElementById("showProducts")
let showAllProducts = document.getElementById("showAllProducts")
const div = document.querySelector('.div')

console.log(showAllProducts)




// MOSTRAR PRODUCTOS //

let showProducts = document.getElementById("showProducts")

for(let product of products) {
        const productCardContainer = document.createElement("div");
        productCardContainer.classList.add("showAllProducts");
        
        productCardContainer.innerHTML = ` 
        <img src="${product.img}">
        <h3>${product.name}</h3>
        <h3>$${product.price}</h3>
        <button class="eliminar" data-id=${product.id}>Comprar</button>`
showAllProducts.appendChild(productCardContainer)
    }

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