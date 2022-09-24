import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
  return (
    <ul className="NavbarContainer">
      <NavLink to="/" end activeclassname="active">
        <li>Accueil</li>
      </NavLink>
      <NavLink to="/a-propos" end activeclassname="active">
        <li>A propos</li>
      </NavLink>
    </ul>
  )
}
export default Navbar
