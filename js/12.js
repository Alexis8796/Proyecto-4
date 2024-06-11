// 'use strict';  // Correr js en modo estricto

// Objetos
const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible : true
}

Object.freeze(producto); // .freeze .seal(esta permite modificar las propiedades existentes)

producto.imagen = 'imagen.jpg';


console.log(producto)

