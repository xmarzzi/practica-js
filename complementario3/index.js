let stock = document.getElementById("stock");
const golosinas = [
    { nombre: "Alfajor", precio:105, stock:7},
    { nombre: "Bon o bom", precio:30, stock:9},
    { nombre: "Oreo", precio:180, stock:23},
    { nombre: "Pepitos", precio:130, stock:15},
    { nombre: "Rodhesia", precio:93, stock:54},
    { nombre: "Tita", precio:78, stock:60},
    { nombre: "Rumba", precio:113, stock:24},
  ]; 

  const chocolates = [
    { nombre: "Kitkat", precio:125, stock:50},
    { nombre: "Shot", precio:305, stock:30},
    { nombre: "Aguila", precio:180, stock:15},
    { nombre: "Cofler", precio:130, stock:25},
   
  ]; 


const productos = golosinas.concat(chocolates);


alert("Hola, nos encargaremos de filtrar tu búsqueda de acuerdo a tu margen económico!");
let precio = parseInt(prompt("Ingrese el valor de precio máximo por unidad para calcular su lista de compra"));
let filtrados = productos.filter(item => item.precio < precio);

for(const producto of filtrados){
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Producto: ${producto.nombre}</h2> 
    <p>Stock del momento: ${producto.stock}</p>
    <b>$${producto.precio}</b>
  `;

  stock.append(div);
} 