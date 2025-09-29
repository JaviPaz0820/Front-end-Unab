function obtenerUsuarioCallback(callback) {
    setTimeout(() => {
        const usuario = {
            nombre: "Juanito Pérez",
            correo: "juanito.perez@example.com",
            ciudad: "Santiago, Chile"
        };
        callback(usuario); 
    }, 2000);
}

// 2. Usa el callback para imprimir en consola el nombre y correo del
// usuario.
    obtenerUsuarioCallback((usuario) => {
        console.log("Callback:");
        console.log("Nombre:", usuario.nombre);
        console.log("Correo:", usuario.correo);
        console.log("Ciudad:", usuario.ciudad);
    });

// Uso de Promesas
function obtenerUsuarioPromesa() {
    return new Promise((resolve) => { 
        setTimeout(() => {
            const usuario = {
                nombre: "Juanito Pérez",
                correo: "juanito.perez@example.com",
                ciudad: "Santiago, Chile"
            };
            resolve(usuario);
        }, 2000);
    });
}

// 2. Consume esa promesa con .then() y .catch() mostrando el nombre y la
// ciudad del usuario en consola.

obtenerUsuarioPromesa()
    .then((usuario) => {
        console.log("Promesa:");
        console.log("Nombre:", usuario.nombre);
        console.log("Correo:", usuario.correo);
        console.log("Ciudad:", usuario.ciudad);
    })
    .catch((error) => {
        console.error("Error:", error);
    });

// Uso de Async/Await
debugger;
async function obtenerUsuarioAsync() {
    try {
        const usuario = await obtenerUsuarioPromesa();
        console.log("Async/Await:");
        console.log("Nombre:", usuario.nombre);
        console.log("Correo:", usuario.correo);
        console.log("Ciudad:", usuario.ciudad);
    } catch (error) {
        console.error("Error:", error);
    }
}
obtenerUsuarioAsync();



document.getElementById("btnCallback").addEventListener("click", () => {
    const container = document.getElementById("usuario-info");
    container.innerHTML = `<em>Cargando (callback)...</em>`;
    obtenerUsuarioCallback((usuario) => {
        container.innerHTML = `
            <h2>Nombre: ${usuario.nombre}</h2>
            <p>Correo: ${usuario.correo}</p>
            <p>Ciudad: ${usuario.ciudad}</p>
        `;
    });
});

document.getElementById("btnPromesa").addEventListener("click", () => {
    const container = document.getElementById("usuario-info");
    container.innerHTML = `<em>Cargando (promesa)...</em>`;
    obtenerUsuarioPromesa()
        .then((usuario) => {
            container.innerHTML = `
                <h2>Nombre: ${usuario.nombre}</h2>
                <p>Correo: ${usuario.correo}</p>
                <p>Ciudad: ${usuario.ciudad}</p>
            `;
        })
        .catch((error) => {
            container.innerHTML = `<span style="color:crimson">Error al obtener usuario</span>`;
            console.error("Error:", error);
        });
});

document.getElementById("btnAsync").addEventListener("click", async () => {
    const container = document.getElementById("usuario-info");
    container.innerHTML = `<em>Cargando (async/await)...</em>`;
    try {
        const usuario = await obtenerUsuarioPromesa();
        container.innerHTML = `
            <h2>Nombre: ${usuario.nombre}</h2>
            <p>Correo: ${usuario.correo}</p>
            <p>Ciudad: ${usuario.ciudad}</p>
        `;
    } catch (error) {
        container.innerHTML = `<span style="color:crimson">Error al obtener usuario</span>`;
        console.error("Error:", error);
    }
});