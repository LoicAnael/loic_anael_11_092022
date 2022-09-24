import Banniere from '../../components/Banner/banner.jsx'
import Gallery from '../../components/HomeGallery/homeGallery.jsx'
import './home.css'

/* fetch('../data/logements.json')
  .then((rep) => rep.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error)) */

function Home() {
  return (
    <main className="HomeContainer">
      <Banniere />
      <Gallery />
    </main>
  )
}

export default Home
