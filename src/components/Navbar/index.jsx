import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavbarContainer = styled.ul`
  gap: 100px;
  height: 34px;
  display: flex;
  a {
    text-decoration: none;
  }
  li {
    list-style: none;
    color: #ff6060;
  }
  .active li {
    border-bottom: 2px solid #ff6060;
  }
`

function Navbar() {
  return (
    <NavbarContainer>
      <NavLink to="/" end activeclassname="active">
        <li>Accueil</li>
      </NavLink>
      <NavLink to="/a-propos" end activeclassname="active">
        <li>A propos</li>
      </NavLink>
    </NavbarContainer>
  )
}
export default Navbar
