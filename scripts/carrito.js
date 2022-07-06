let carrito;
if(JSON.parse(localStorage.getItem('carrito')))  {
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    localStorage.setItem('carrito', JSON.stringify([]))
    carrito = JSON.parse(localStorage.getItem('carrito'))
}

const totalCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
}

const body = document.getElementById('carrito');
if(carrito.length == 0){
    const texto = `
    <div class='cartContainer'>
        <h1 class='txtCarrito'>No hay productos en el carrito</h1>
        <a class='btnVolver' href='index.html'>
            <button>VOLVER</button>
        </a>
    </div>`;    
body.innerHTML += texto;
} else {
    const titulo = `
        <div class='cartContainer'>
            <h1 class='txtCarrito'>Carrito de compras</h1>
        </div>`;
    body.innerHTML += titulo;
    const table = `
        <div class='tableContainer'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th class='txtTabla'>PRODUCTOS</th>
                        <th class='txtTabla'>CANTIDAD</th>
                        <th class='txtTabla'>PRECIO</th>
                    </tr>
                </thead>
                <tbody id='tbody'>
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th class='txtTotal'>Total:</th>
                        <th id='total'>$${totalCarrito().toLocaleString()}</th>
                    </tr>
                </tfoot>
            </table>
            </div>
            <div class='btn-container'>
                <button class='btnTerminar'>TERMINAR COMPRA</button>
            </div>`;
            body.innerHTML += table
            const tbody = document.getElementById('tbody')
            for (let i = 0; i < carrito.length; i++) {
                const element = carrito[i];
                const { id, nombre, img, precio, cantidad } = element;
                const cart = `
                <tr id=${id}>
                    <th><img class='trash' src='./multimedia/trash.png' alt='foto de borrar'></th>
                    <th class='detallesTabla'><img class='imgProdCart' src=${img} alt='foto del producto'><span class='nombreProd'>${nombre}</span></th>
                    <th>${cantidad}</th>
                    <th>$${(cantidad * precio).toLocaleString()}</th>
                </tr>`
                tbody.innerHTML += cart
            }
}
const showAlert = () => {
    Swal.fire({
        title:'Estimado',
        text:'Tu Carrito esta vacío',
        icon:'Error',
        confirmButtonText:'Seguir Comprando'
    })
}

const btnBorrarCarrito = document.getElementById('buttonDeleteCart')
btnBorrarCarrito.onclick = showAlert;
btnBorrarCarrito.addEventListener("click", () => {
    //    console.log(carrito)
    carrito = []
    // console.log(carrito)
    localStorage.setItem('carrito',JSON.stringify([]))
    totalCarrito()
    tbody.innerHTML = ''
    })





    
    














// btnBorrarCarrito [0] 
// const element = buttonDeleteCart
// btnBorrarCarrito.addEventListener('click', VaciarCarrito)
// btnBorrarCarrito.addEventListener("click", () => {
//     VaciarCarrito()
// })

// function VaciarCarrito () {


// btnBorrarCarrito.innerText = "Eliminar compra"
//         detalleCompra.appendChild(btnBorrarCarrito)
//         btnBorrarCarrito.setAttribute ("id", "buttonDeleteCart")
//         buttonDeleteCart.onclick = () => {
//             carrito = []
//             detalleCompra.innerHTML=``
//             console.log(carrito)
//         }
// }
        // const btnAgregar = document.getElementsByClassName('btnAgregar')

// for (let i = 0; i < btnAgregar.length; i++) {
//     const element = btnAgregar[i];
//     element.addEventListener('click', agregarAlCarrito)
// }

// otra opcion eliminar carrito

// let eliminarcompra=document.querySelector(".eliminar")


// const total1 = carrito.map((element)=> (element.precio)).reduce((carritoTotalPrecio,
//     currenItemPrecio)=> carritoTotalPrecio + currenItemPrecio, 0);
  

// let totalDeCompra=document.createElement("h4")
//     totalDeCompra.innerHTML=("TOTAL:" + "$" + total1.toLocaleString())
//     div.append(totalDeCompra)

// let vaciarCarrito =document.createElement("button")
//  vaciarCarrito.innerHTML=("Desechar Todo")
//  vaciarCarrito.setAttribute("class","desechar")
//  div.append(vaciarCarrito)
  
//  vaciarCarrito.onclick=()=>{
//     carrito=[]
//     div.innerHTML=``
//     console.log(carrito)
//  }

