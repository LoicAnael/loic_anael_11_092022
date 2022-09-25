import './gallery.css'
import fleche from '../../assets/FlecheGallery.png'
import { useState } from 'react'

function Gallery({ images }) {
  let [imageEnCours, changerImage] = useState(0)
  let nombreImages = images.length

  const prevImage = () => {
    imageEnCours === 0
      ? changerImage(nombreImages - 1)
      : changerImage(imageEnCours - 1)
    return changerImage
  }

  const nextImage = () => {
    imageEnCours === nombreImages - 1
      ? changerImage((nombreImages = 0))
      : changerImage(imageEnCours + 1)
    return changerImage
  }
  return (
    <div className="galleryWrapper">
      <img
        className="galleryFlGauche"
        src={fleche}
        alt="précedént"
        onClick={prevImage}
      />

      <img
        className="galleryFlDroite"
        src={fleche}
        alt="suivant"
        onClick={nextImage}
      />

      {images.map((image, index) => {
        if (index === imageEnCours)
          return (
            <img
              key={index}
              className="GalleryImage"
              src={image}
              alt="Logement"
            />
          )
      })}
    </div>
  )
}

export default Gallery
