
const golosinas = [
    { nombre: "Alfajor", precio:105},
    { nombre: "Bon o bom", precio:30},
    { nombre: "Oreo", precio:180},
    { nombre: "Pepitos", precio:130},
    { nombre: "Rodhesia", precio:93},
    { nombre: "Tita", precio:78},
    { nombre: "Rumba", precio:113},
  ]; 

  const chocolates = [
    { nombre: "Kitkat", precio:125},
    { nombre: "Shot", precio:305},
    { nombre: "Aguila", precio:180},
    { nombre: "Cofler", precio:130},
   
  ]; 


const productos = golosinas.concat(chocolates);

let precioPublico =  productos.map(item => {
    return{
        Nombre: item.nombre,
        precio: item.precio + item.precio * 0.40,
    }
})
alert(precioPublico);
