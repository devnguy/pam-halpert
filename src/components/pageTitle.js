import React from 'react'
import styled from 'styled-components'


const TitleContainer = styled.div`
  margin: 8vh 0;
  padding: 0;
`
// const DescriptionEmphasized = styled.h1`
//   color: #5cb7bf;
// `

const PageTitle = (props) => (
  <TitleContainer>
    <h4>{props.title}</h4>
    <h1 className="hero-heading">{props.description}</h1>
    <h1 className="hero-heading accent-color">{props.emphasis}</h1>
  </TitleContainer>
)

export default PageTitle