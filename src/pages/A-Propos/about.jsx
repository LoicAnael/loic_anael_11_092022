import './about.css'
import AboutData from './Aboutdata'
import React, { useState } from 'react'
import fleche from '../../assets/FlecheDropdown.svg'
import '../../components/Banniere/banner.css'
import Banniere from '../../components/Banniere'
import styled from 'styled-components'

const ArrowStyle = styled.a`
  &.${true} {
    transform: rotate(180deg);
    justify-content: flex-start;
  }
`

function Dropdown({ title, description }) {
  const [dropdown, setDropdown] = useState(false)

  return (
    <div className="DropdownWrapper" id={`dropdown-${title}`}>
      <div className="DropdownHeader">
        <div className="DropdownTitle">{title}</div>
        <ArrowStyle
          className={`${dropdown}`}
          onClick={() => setDropdown(!dropdown)}
        >
          <img src={fleche} alt="Ouvrir" />
        </ArrowStyle>
      </div>
      {dropdown && <div className="DropdownContent">{description}</div>}
    </div>
  )
}

function About() {
  return (
    <div className="AProposContainer">
      <Banniere className="BanniereWrapper" />
      <div className="DropdownContainer">
        {AboutData.map(({ title, description }) => (
          <Dropdown
            title={title}
            description={description}
            key={description}
          ></Dropdown>
        ))}
      </div>
    </div>
  )
}

export default About
