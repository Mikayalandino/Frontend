const form = document.getElementById("form");
const inputNombre = document.getElementById("input-nombre");
const inputEmail = document.getElementById("input-email");
const inputDireccion = document.getElementById("input-direccion");
const inputTelefono = document.getElementById("input-telefono");

const crearBotonesBorrar = () => {
    const botonesBorrar = document.querySelectorAll(".botones-borrar")
    for (let i = 0; i < botonesBorrar.length; i++) {
        botonesBorrar[i].onclick = () => {
            const idDelUsuarioABorrar = botonesBorrar[i].dataset.id
            eliminarUsuarios(idDelUsuarioABorrar)
        }
    }
}

const eliminarUsuarios = (id) => {
    console.log("Borrando usuario", id)
    fetch(`https://601da02bbe5f340017a19d60.mockapi.io/users/${id}`, {
        method: "DELETE"
    })
  .then((res) => res.json())
  .then((data) => {
    console.log(data)
    obtenerUsuarios()
  })
}

const crearTablaHTML = (data) => {
  const tabla = document.querySelector("#tabla")
  const html = data.reduce((acc, curr) => {
    return acc + `  
    <tr>
      <td>${curr.fullname}</td>
      <td>${curr.email}</td>
      <td>${curr.address}</td>
      <td>${curr.phone}</td>
      <td><button data-id="${curr.id}" class="botones-editar">Editar usuario</button></td>
      <td><button data-id="${curr.id}" class="botones-borrar">Borrar usuario</button></td>
    </tr>
    `
  }, `
    <tr>
      <th>Nombre</th>
      <th>Email</th>
      <th>Direccion</th>
      <th>Telefono</th>
      <th>Acciones</th>
    </tr>
    `)  

    tabla.innerHTML = html 
    crearBotonesBorrar()
}

const obtenerUsuarios = () => {
    fetch("https://601da02bbe5f340017a19d60.mockapi.io/users")
    .then((res) =>  res.json())
    .then((data) => { 
        console.log(data)
        crearTablaHTML(data)
    })
}

obtenerUsuarios()

form.onsubmit = (e) => {
    e.preventDefault()
    const nuevoUsuario = {
        fullname: inputNombre.value,
        phone: inputTelefono.value,
        address: inputDireccion.value,
        email: inputEmail.value,
    }
    fetch("https://601da02bbe5f340017a19d60.mockapi.io/users", {
    method: "POST",
    body: JSON.stringify(nuevoUsuario),
    headers: {
        "Content-Type": "application/json"
    }
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        obtenerUsuarios()
    })
}

