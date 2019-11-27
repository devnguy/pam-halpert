// This file is currently unfinished and unused

import React from 'react'
import styled from 'styled-components'

const StyledDot = styled.span`
  cursor: pointer;
  height: 12px;
  width: 12px;
  margin: 0 5px;
  /* background-color: #f7dfe0; */
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  border: 1px solid black;
  &:hover {
    background-color: var(--accent-color);
  }
`

class Dot extends React.Component {
  state = {
    active: false
  }

  handleToggleActive = () => {
    this.setState({
      active: !this.state.active
    })
  }

  render() {
    return (
      

      <StyledDot 
        className={this.state.active ? "active" : "" }
        onClick={this.handleToggleActive}
      />
    )
  }
}

export default Dot
