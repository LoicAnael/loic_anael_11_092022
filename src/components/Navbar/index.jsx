import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavbarContainer = styled.nav`
  gap: 100px;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ff6060;
  text-decoration: none;
`

function Navbar() {
  return (
    <NavbarContainer>
      <Link to="/">Accueil</Link>
      <Link to="/a-propos">A propos</Link>
    </NavbarContainer>
  )
}
export default Navbar
