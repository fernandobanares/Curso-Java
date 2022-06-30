// let title = document.getElementById("title")
// // let showProducts = document.getElementById("showProducts")
// let showAllProducts = document.getElementById("showAllProducts")
// const div = document.querySelector('.div')

// console.log(showAllProducts)




// MOSTRAR PRODUCTOS //

// let showProducts = document.getElementById("showProducts")

// for(let product of products) {
//         const productCardContainer = document.createElement("div");
//         productCardContainer.classList.add("showAllProducts");
        
//         productCardContainer.innerHTML = ` 
//         <img src="${product.img}">
//         <h3>${product.name}</h3>
//         <h3>$${product.price}</h3>
//         <button class="comprar" id=${product.name}>Comprar</button>`
// showAllProducts.appendChild(productCardContainer)
//     }


let carrito;

if(JSON.parse(localStorage.getItem('carrito'))){
    carrito = JSON.parse(localStorage.getItem('carrito'))
}else{
    localStorage.setItem('carrito',JSON.stringify([]))
    carrito = JSON.parse(localStorage.getItem('carrito'))
}

function desplegarProductos() {

    for (let i = 0; i < productos.length; i++) {
        const element = productos[i];
        const { id, nombre, precio, img } = element
        const card = `
        <div class='card'>
            <p>${nombre}</p>
            <div>
                <img class='imgProducto' src=${img} alt=''/>
            </div>
            <div>
                <p>$${precio.toLocaleString()}</p>
            </div>
            <div class="btn-container">
                <button id=${id} class='btnAgregar'>Agregar al carrito</button>
            </div>
        </div>
        `
        const container = document.getElementById('showAllProducts')
        container.innerHTML += card
    }
}

desplegarProductos()
    
const btnAgregar = document.getElementsByClassName('btnAgregar')

for (let i = 0; i < btnAgregar.length; i++) {
    const element = btnAgregar[i];
    element.addEventListener('click', agregarAlCarrito)
}


function agregarAlCarrito(e) {
    const btn = e.target;
    const idBoton = btn.getAttribute('id')
    const prodEncontrado = productos.find(prod => prod.id == idBoton)
    const encarrito = carrito.find(prod => prod.id == prodEncontrado.id)
    if(!encarrito) {
        carrito.push({...prodEncontrado, cantidad: 1})
    } else {
        let carritoFiltrado = carrito.filter(prod => prod.id != encarrito.id)
        carrito = [...carritoFiltrado, {...encarrito, cantidad: encarrito.cantidad + 1}]
    }
    console.log(carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito))
}

const contador = document.getElementById('carritoCounter')
contador.innerHTML = carrito.length



    // FILTRAR PRODUCTOS // 
let buscador = document.getElementById("inputSearch")
let filtrar = document.getElementById("filtrar")

function filtrarPorCat() {
    let verTodo = document.createElement("button")
    verTodo.innerText = ("Ver Todo")
    showProducts.append(verTodo)
    const filteredProducts = productos.filter((productos) => productos.categoria === buscador.value)
    console.log(filteredProducts)

    filteredProducts.forEach((filter) => {
        let cardFilter = document.createElement("div")
        showAllProducts.append(cardFilter)
        let imgFilter = document.createElement("img")
        imgFilter.setAttribute("src", filter.img)
        let nameFilter = document.createElement("h3")
        nameFilter.innerText = (filter.nombre)
        let priceFilter = document.createElement("p")
        priceFilter.innerText = (filter.precio)
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

// carrito 2

// const carrito = []



// const buttonsComprar = document.getElementsByClassName("comprar")

// // console.log(buttonComprar);

// function findAndAddProduct(id){
    
//     const product = products.find( product => product.name === id);

//     // console.log(product);

//     carrito.push(product);

//     // console.log(carrito);
// }


// for(const buttonComprar of buttonsComprar){

//     buttonComprar.addEventListener("click", (e) => {
        
//         // console.log("click");

//         // console.log(e.target);

//         const buttonID = e.target.id;

//         // console.log(buttonID);

//         findAndAddProduct(buttonID);

//         rendercarrito();
//     })
// }

// const carritoBtn = document.getElementById("carritoBtn");

// const visualcarrito = document.getElementById("visualcarrito");

// carritoBtn.addEventListener("click", () =>{

//     // console.log(visualcarrito.style.bottom);

//     if (visualcarrito.style.bottom === "-300px" || visualcarrito.style.bottom === ''){
//     visualcarrito.style.bottom =0;
// }
// else{
//     visualcarrito.style.bottom = "-300px"
// }

// });


// function rendercarrito(){

//     visualcarrito.innerHTML = '';

//     for(const carritoItem of carrito){

//         const carritoItemContainer = document.createElement('div');

//         carritoItemContainer.innerHTML = `<p>${carritoItem.name} </p>`;

//         visualcarrito.appendChild(carritoItemContainer);

//     }
    
// }