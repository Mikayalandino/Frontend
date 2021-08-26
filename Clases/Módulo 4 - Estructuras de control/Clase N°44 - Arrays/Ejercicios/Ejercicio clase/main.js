const cards = document.querySelectorAll(".cards")
const button = document.getElementById("button")

button.onclick = () => {
   for (let i = 0; i < cards.length; i++) {
    cards[i].textContent = "Hola chicas"
   }
}


for (let i = 0; i < cards.length; i++) {
    cards[i].onclick = () => {
        cards[i].style.backgroundColor = "red"
    }
    
}