import Banniere from '../../components/Banniere'
import styled from 'styled-components'
// import Card from '../../components/Card'
import Gallery from '../../components/Gallery'

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
`

/* fetch('../data/logements.json')
  .then((rep) => rep.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error)) */

function Home() {
  return (
    <HomeContainer>
      <Banniere />
      <Gallery />
    </HomeContainer>
  )
}

export default Home
