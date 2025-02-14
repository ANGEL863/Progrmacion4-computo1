let tareas = [];

while (true) {
    let tarea = prompt("Ingrese una tarea (o escriba 'fin' para terminar):");
    if (tarea.toLowerCase() === 'fin') {
        break;
    }
    tareas.push(tarea);
}

tareas.sort(); // Ordenar las tareas alfabéticamente

console.log("Tus tareas para hoy son:");
for (let i = 0; i < tareas.length; i++) {
    console.log((i + 1) + ". " + tareas[i]);
}