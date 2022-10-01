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
  const [isOpenDropdown, setDropdown] = useState(false)

  return (
    <div className="DropdownWrapper">
      <div className="DropdownHeader">
        <div className="DropdownTitle">{title}</div>
        <ArrowStyle
          className={`${isOpenDropdown}`}
          onClick={() => setDropdown(!isOpenDropdown)}
        >
          <img src={fleche} alt="Ouvrir" />
        </ArrowStyle>
      </div>
      {isOpenDropdown && <div className="DropdownContent">{description}</div>}
    </div>
  )
}
export default Collapse
