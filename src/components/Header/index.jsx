import logo from '../../assets/LOGO.png'
import Navbar from '../Navbar'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 68px;
  margin: 40px;
`

function Header() {
  return (
    <HeaderWrapper>
      <img src={logo} alt="logo Kasa" />
      <Navbar />
    </HeaderWrapper>
  )
}

export default Header
