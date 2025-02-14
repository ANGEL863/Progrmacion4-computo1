let compras = [];

while (true) {
    let opcion = prompt("¿Qué deseas hacer? (agregar, eliminar, mostrar, salir)");
    if (opcion.toLowerCase() === 'agregar') {
        let producto = prompt("Ingrese el producto:");
        compras.push(producto);
    } else if (opcion.toLowerCase() === 'eliminar') {
        let producto = prompt("Ingrese el producto a eliminar:");
        let indice = compras.indexOf(producto);
        if (indice !== -1) {
            compras.splice(indice, 1);
            console.log("Producto eliminado.");
        } else {
            console.log("Producto no encontrado.");
        }
    } else if (opcion.toLowerCase() === 'mostrar') {
        console.log("Tu lista de compras:");
        for (let i = 0; i < compras.length; i++) {
            console.log((i + 1) + ". " + compras[i]);
        }
    } else if (opcion.toLowerCase() === 'salir') {
        break;
    } else {
        console.log("Opción inválida.");
    }
}