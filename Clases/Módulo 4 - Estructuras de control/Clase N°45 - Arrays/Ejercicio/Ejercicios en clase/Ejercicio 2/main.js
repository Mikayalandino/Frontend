const nombres = ["Ana", "Elsa", "Olaf", "Sven", "Hans"]
let acc = ``

for (let i = 0; i < nombres.length; i++) {
    acc = nombres + `<li>${nombres}</li>`
    console.log(nombres[i])
    
}