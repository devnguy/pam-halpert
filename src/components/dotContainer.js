// This file is currently unfinished and unused

import React from 'react'
import styled from 'styled-components'

import Dot from '../components/dot'


const StyledDotContainer = styled.div`
  /* border: solid 1px red; TESTING */
  padding: 0 0 1em;
  .active {
    background-color: var(--accent-color);
  }
`

class DotContainer extends React.Component {
  state = {
    activeDotIndex: 0
  }

  handleSetActiveDot = (e) => {
    e.target.id
  }


  render() {
    return (
      <StyledDotContainer>
        <Dot id="0"></Dot>
        <Dot id="1"></Dot>
        <Dot id="2"></Dot>
      </StyledDotContainer>
    )
  }
}

export default DotContainer
