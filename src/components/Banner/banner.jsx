import banniere from '../../assets/banniere.png'
import './banner.css'

function Banniere() {
  return (
    <div className="BanniereWrapper">
      <img className="BanniereImage" src={banniere} alt="banniere kasa" />
      <h1 className="bannerTitle">Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banniere
