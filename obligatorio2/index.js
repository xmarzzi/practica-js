const productosKiosco = [
    {
        id: 1,
        title: "Caja Rhodesia x36u.",
        price:3200,
        img: "https://http2.mlstatic.com/D_NQ_NP_931722-MLA44063838824_112020-O.webp",
        
    },
    {
        id: 2,
        title: "Chocolate Block 38gr. x20u.",
        price:2100,
        img: "https://cf.shopee.com.ar/file/b038dc9afdd847994cdc00b512edaab3",
        
    },
    {
        id: 3,
        title: "Bocadito Cabsha x18u.",
        price:2500,
        img: "https://cdn.shopify.com/s/files/1/0445/1903/0942/products/bocadito-cabsha-de-acrilico-x-18u-oferta-en-sweet-market-D_NQ_NP_744245-MLA40683910446_022020-F_480x480.jpg?v=1663020372",
        
    },
    {
        id: 4,
        title: "Chupelatín x32u.",
        price:1990,
        img: "https://http2.mlstatic.com/D_NQ_NP_743480-MLA46205050896_052021-O.jpg",
        
    },
    {
        id: 5,
        title: "Chocolatín Jack x20u.",
        price:3250,
        img: "https://cotillongonic.com.ar/wp-content/uploads/2021/06/chocolate-jack-felfort-los-simpsons-D_NQ_NP_665301-MLA25956161225_092017-F.jpg",
        
    },

    

];

let carrito = [];

const items = document.querySelector("#items");
const carritoHTML = document.querySelector("#carrito");

//pintar productos en la tienda

function renderizarProductos(){
    productosKiosco.forEach((producto) => {
        let productoHTML = `
        <div class="col-12 col-md-6 mb-5 d-flex justify-content-center">
        <div class="card text-light bg-dark" style="width: 18rem;">
            <img class="card-img-top" src="${producto.img}" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">${producto.title}</h5>
                <p class="card-text"> Some quick example texr to build on the card title and make up the bulk of the card's content.</p>
                <p>$${producto.price}</p>
                <button class="btn btn-primary" onclick="agregarProductoAlCarrito(${producto.id})">Añadir al carrito</button>
            </div>
        </div>
        </div>
    `;
        items.innerHTML += productoHTML;
    });
}
renderizarProductos();

/* Añadir productos al carrito */
/* Identificar el producto que eligió */
/* Mostrar la info del producto */
/* Si el producto ya esta solo modifica la cant */
/* Calcular el total */

function agregarProductoAlCarrito(id){
    let producto = productosKiosco.find((producto)=> producto.id === id);
    
    let productoEnCarrito = carrito.find((producto) => producto.id === id);
    if(productoEnCarrito){
        productoEnCarrito.cantidad++;
    }else{
        producto.cantidad = 1;
        carrito.push(producto);
    }

    renderizarCarrito();
    calcularTotal();
}

function renderizarCarrito(){
let htmlCarrito = ""

    carrito.forEach((prod, id) =>{
        htmlCarrito+=`
        <div class="col-12 mb-5 d-flex flex-row justify-content-center">
            <div class="card text-dark flex-row" style="width: 30rem;">
                <img style="width: 80%;" src="${prod.img}" alt="Card image cap">
            </div>
            <div class"card-body">
                <h5 class="card-title">${prod.title}</h5>
                <p>${prod.price}</p>
                <p>Cantidad: ${prod.cantidad}</p>
                <button class="btn btn-danger" onclink="eliminarProductoDelCarrito(${id})">Eliminar</button>
            </div>
        </div>
        `
    })
carritoHTML.innerHTML = htmlCarrito
}

function calcularTotal(){
let total = 0

carrito.forEach((prod)=>{
    total += prod.price * prod.cantidad;
});
const t = document.getElementById("total")
t.innerHTML = `<h5>$${total}</h5>`
}

function eliminarProductoDelCarrito(id){
    carrito[id].cantidad--;

    if (carrito[id].cantidad === 0) {
        carrito.splice(id, 1);
    }

    renderizarCarrito();
    calcularTotal();
    
}

function vaciarCarrito(){
    carrito = [];
    renderizarCarrito();
    calcularTotal();
}

const vaciar = document.querySelector("#boton-vaciar");
vaciar.addEventListener("click", vaciarCarrito);