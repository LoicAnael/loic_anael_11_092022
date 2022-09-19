import logo from '../../assets/LOGO.png'
import Navbar from '../Navbar'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 68px;
  margin: 40px;
`
const HeaderImage = styled.img``

function Header() {
  return (
    <HeaderWrapper>
      <HeaderImage src={logo} alt="logo Kasa" />
      <Navbar />
    </HeaderWrapper>
  )
}

export default Header
