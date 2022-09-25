import Gallery from '../../components/Gallery/gallery'
import ListeLogements from '../../data/logements.json'
import { useParams } from 'react-router-dom'
import './property.css'

function Details() {
  const getId = useParams()
  const ficheLogement = ListeLogements.find(
    (logement) => logement.id === getId.id
  )

  return (
    <div className="LogementContainer">
      <Gallery images={ficheLogement?.pictures} />
    </div>
  )
}
export default Details
