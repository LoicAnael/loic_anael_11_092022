import './about.css'
import AboutData from './Aboutdata'
import '../../components/Banner/banner.css'
import Banniere from '../../assets/banniereAbout.png'
import Collapse from '../../components/Collapse/collapse.jsx'

function About() {
  return (
    <div className="AProposContainer">
      <img src={Banniere} alt="montagne" className="BanniereWrapper" />
      <div className="DropdownContainer">
        {AboutData.map(({ title, description }) => (
          <Collapse
            title={title}
            description={description}
            key={description}
          ></Collapse>
        ))}
      </div>
    </div>
  )
}

export default About
