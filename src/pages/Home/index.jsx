import Banniere from '../../components/Banniere'
import styled from 'styled-components'

const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
`

function Home() {
  return (
    <HomeContainer>
      <Banniere />
    </HomeContainer>
  )
}

export default Home
