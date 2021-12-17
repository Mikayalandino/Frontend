// // API KEY 

// // open weather api key: 28dd2ec85ef2c8982f8cc2380349186a


// // tres maneras de mostrar la info de un endpoint
// // estos son ejemplos, LEAN LA DOCUMENTACION DE CADA API 

// // /characters  --> nos trae la lista completa de recursos
// // /characters/1 --> nos va a traer 1 recurso en especifico
// // /characters?q=Rick --> nos trae todos los recursos que coincidan con la busqueda

// // busqueda:
// const buscarInfo = (ciudad) => {
//   fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&appid=28dd2ec85ef2c8982f8cc2380349186a&units=metric`)
//   .then(res => res.json())
//   .then(data => {
//     hacerHTML(data)
//   })
// }


// const hacerHTML = data => {
//     const tarjeta = document.querySelector("#tarjeta")
//     const html = `
//       <div>
//         <h1>${data.name}</h1>
//         <h2>${data.main.temp} Cº</h2>
//         <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png">
//       </div>
//     `
//     tarjeta.innerHTML = html
// }

// const form = document.querySelector("#form")
// const ciudadInput = document.querySelector("#ciudad")

// form.onsubmit = (e) => {
//   e.preventDefault();
//   buscarInfo(ciudadInput.value)
// }
