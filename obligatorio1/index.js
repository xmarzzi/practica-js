alert("Bienvenido al simulador de precios para su negocio");
let precioProducto = parseInt(prompt("coloque el precio del producto"));
let unidades = parseInt(prompt("coloque la cantidad de unidades del producto"));

while (precioProducto, unidades != "ESC"){
    const suma = (a,b) => a + b;
    const division = (a,b) => a / b;
    const porsentaje = x => x * 0.40;
    
    
    let nuevoPrecio = division (suma(precioProducto, porsentaje(precioProducto)), unidades);
    alert("El precio de su producto para venta al público es " + nuevoPrecio); 
    precioProducto = parseInt(prompt("coloque el precio del producto"));
    unidades = parseInt(prompt("coloque la cantidad de unidades del producto"));
}


