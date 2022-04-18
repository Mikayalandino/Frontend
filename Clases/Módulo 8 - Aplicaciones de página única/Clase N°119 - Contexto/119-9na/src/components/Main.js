import Card from './Card'
import "./Main.css"
const cards = [
  {
    title: "Card 1",
  },
  {
    title: "Card 2",
  },
  {
    title: "Card 3",
  },
  {
    title: "Card 4",
  },
  {
    title: "Card 5",
  },

]

const Main = ({  }) => {
  return (
    <main>
      <h1>Soy Main</h1>
      <section className='contenedor-tarjetas'>
      {
        cards.map(card => (
          <Card 
            key={card.title} 
            title={card.title} 
            />
          ))}
      </section>
    </main>
  )
}

export default Main
