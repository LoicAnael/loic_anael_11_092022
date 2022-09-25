import Gallery from '../../components/Gallery/gallery'
import ListeLogements from '../../data/logements.json'
import { useParams } from 'react-router-dom'
import './property.css'

function Details() {
  const getId = useParams()
  const ficheLogement = ListeLogements.find(
    (logement) => logement.id === getId.id
  )
  // Tags
  const TagsLogement = ficheLogement?.tags.map((tag, index) => {
    return (
      <span className="TagsLogement" key={index}>
        {tag}
      </span>
    )
  })
  return (
    <div className="LogementContainer">
      <Gallery images={ficheLogement?.pictures} />
      <section className="LogementWrapper">
        <div className="LogementInfos">
          <span className="LogementTitre">{ficheLogement?.title} </span>
          <span className="LogementLocation">{ficheLogement?.location}</span>
          <span>{TagsLogement}</span>
        </div>
        <div className="HostWrapper">
          <div className="HostInfo">
            <span className="HostName">{ficheLogement?.host.name}</span>
            <img
              className="HostPicture"
              src={ficheLogement?.host.picture}
              alt="host pic"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
export default Details
