import Card from '../Card/card.jsx'
import { NavLink } from 'react-router-dom'
import './homeGallery.css'
import { useEffect, useState } from 'react'
import data from '../../data/logements.json'

function Gallery() {
  const [logements, setLogement] = useState([])
  /*   useEffect(() => {
    fetch('../../data/logements.json')
      .then((rep) => rep.json())
      .then((data) => setLogement(data))
  }, [setLogement]) */
  useEffect(() => {
    setLogement(data)
  }, [setLogement])

  return (
    <section className="CardsContainer">
      {logements.map((logement) => (
        <NavLink key={logement.id} to={'/logement/' + logement.id + '/'}>
          <Card logement={logement} />
        </NavLink>
      ))}
    </section>
  )
}

export default Gallery
