import banniere from '../../assets/banniere.png'
import styled from 'styled-components'
import './index.css'

const BanniereWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  background-color: #000000;
  width: 100%;
  height: 223px;
`
const BanniereImage = styled.img`
  opacity: 0.8;
  border-radius: 25px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

function Banniere() {
  return (
    <BanniereWrapper>
      <BanniereImage src={banniere} alt="banniere kasa" />
      <h1 className="bannerTitle">Chez vous, partout et ailleurs</h1>
    </BanniereWrapper>
  )
}

export default Banniere
