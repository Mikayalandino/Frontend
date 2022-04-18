import "./Nav.css"

const Nav = () => {

  const estoyEnMobile = window.innerWidth < 600

  return (
    <nav>
      <h1>Soy Nav</h1>

      {estoyEnMobile && <h2>Estoy en celulares</h2>}
    </nav>
  )
}

export default Nav
