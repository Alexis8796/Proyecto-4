// Objetos
const producto = {
    nombreProducto : 'Monitor 20 pulgadas',
    precio : 300,
    disponible : true
}

const medidas = {
    peso : '1kg',
    medida : '1m'
}

const nuevoProdcuto = { ...producto, ...medidas}


console.log(nuevoProdcuto);