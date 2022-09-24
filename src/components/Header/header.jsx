import logo from '../../assets/LOGO.png'
import Navbar from '../Navbar/navbar.jsx'
import './header.css'

function Header() {
  return (
    <nav className="HeaderWrapper">
      <img src={logo} alt="logo Kasa" />
      <Navbar />
    </nav>
  )
}

export default Header
