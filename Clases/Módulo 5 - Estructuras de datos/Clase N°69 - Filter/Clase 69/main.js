


// Usando map, definí la función preciosFinales que tome
//  una lista de costos de diferentes productos y
//   devuelva un nuevo array con el precio final de cada uno.


//  preciosFinales(costos)
// [22.6875, 101.64, 177.87, 83.03625]

// const agregarIVA = (costo) => {
//   return costo * 1.21;
// }


// const sumarGanancia = (costo) => {
//   return costo * 1.5;
// }

// const costos = [10, 12.5, 56, 98, 45.75 ];

// const resultado = costos.map((elemento) => {
//   // elemento // costo inicial 
//   // agregarIVA(elemento) // costo inicial + iva
//   // sumarGanancia(elemento) // costo inicial + ganancia
//   const costoConGanancia = sumarGanancia(elemento)
//   const costoConIva = agregarIVA(costoConGanancia)
//   return costoConIva 

//     // // alternativa
//     // return agregarIVA(sumarGanancia(elemento)) 
// })

// console.log(resultado)


// const preciosFinales = (costos) => {
//   const resultado = costos.map((elemento) => {
//   const costoConGanancia = sumarGanancia(elemento)
//   const costoConIva = agregarIVA(costoConGanancia)
//   return costoConIva 
// })
//   return resultado
// }


// const corresponder = (costos, productos) => {
//   const precios = preciosFinales(costos)
//   console.log(precios)

// //  precios [22.6875, 101.64, 177.87]
// // productos ['celular', 'notebook', 'monitor' ];

// // ['22.6875 celular', '101.64 notebook']

// const arrayFinal = precios.map((elemento, index) => {

//   console.log(elemento) // 0
//   console.log(index) // 0, 1, 2

//   productos[index]

// })


// }

// const productos = ['celular', 'notebook', 'monitor' ];
// const costos = [12.5, 56, 98];

// corresponder(costos, productos)




const operaciones = [
    {
      descripcion: 'Cena con amigos',
      categoria: 'Categoria',
      fecha: '25/09/2021',
      monto: 2500,
      tipo: 'Gasto',
    },
    {
      descripcion: 'Comida para gatos',
      categoria: 'Categoria',
      fecha: '25/09/2021',
      monto: 3000,
      tipo: 'Gasto',
    },
    {
      descripcion: 'Alquler',
      categoria: 'Categoria',
      fecha: '25/09/2021',
      monto: 25000,
      tipo: 'Gasto',
    },
  ];
  
  
  
  
  const tarjeta = document.querySelector("#tarjeta-operaciones")
  
  let acc = ""
  
  operaciones.map((operacion) => {
    acc = acc + `
    <div class="fila">
      <h2>${operacion.descripcion}</h2>
      <h3>${operacion.categoria}</h3>
      <h4>${operacion.monto}</h4>
    </div>
    `
  })
  
  tarjeta.innerHTML = acc
  
  // Declarar una funcion que se llame convertirOperacionesaHTML
  // la funcion recibe como parametro un array de operaciones
  // no debe retornar nada, debe pasar las operaciones a HTML 
  // (con el estilo de Ahorradas en Bulma)