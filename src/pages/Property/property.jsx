import Gallery from '../../components/Gallery/gallery'
import ListeLogements from '../../data/logements.json'
import { useParams } from 'react-router-dom'
import './property.css'
import EtoilePleine from '../../assets/Etoile.png'
import EtoileVide from '../../assets/EtoileVide.png'

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
  // Notes
  let noteLogement = []
  let etoileComplete = true
  for (let index = 0; index < 5; index++) {
    index === parseInt(ficheLogement?.rating) && (etoileComplete = false)

    if (etoileComplete === true) {
      noteLogement.push(<img key={index} src={EtoilePleine} alt="etoiles" />)
    } else {
      noteLogement.push(<img key={index} src={EtoileVide} alt="etoiles" />)
    }
  }

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
          <div className="HostNote">{noteLogement}</div>
        </div>
      </section>
    </div>
  )
}
export default Details
