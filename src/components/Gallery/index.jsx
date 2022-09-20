import Card from '../../components/Card'
import { NavLink } from 'react-router-dom'
import './index.css'
import { useEffect, useState } from 'react'

function Gallery() {
  const [logements, setLogement] = useState([])

  useEffect(() => {
    fetch('../../data/logements.json')
      .then((rep) => rep.json())
      .then((data) => setLogement(data))
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
