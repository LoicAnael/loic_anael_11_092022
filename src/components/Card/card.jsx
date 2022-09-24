import './card.css'

function Card({ logement }) {
  return (
    <article className="CardWrapper">
      <img
        className="CardImage"
        src={logement.cover}
        alt={logement.title}
        title={logement.title}
      />
      <span className="CardTitle">{logement.title}</span>
    </article>
  )
}
export default Card
