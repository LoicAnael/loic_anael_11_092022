import { useState } from 'react'
import fleche from '../../assets/FlecheDropdown.svg'
import styled from 'styled-components'

const ArrowStyle = styled.a`
  &.${true} {
    transform: rotate(180deg);
    justify-content: flex-start;
  }
`
function Collapse({ title, description }) {
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
export default Collapse
