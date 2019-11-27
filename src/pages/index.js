import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ContentContainer from '../styles/contentContainer'
// import BannerStroke from '../../src/images/svg/brush-stroke-banner.png'


const Project = styled.div`
  width: 100%;
  height: 100%;
  margin: 4em 0;
  overflow: hidden;
  position: relative;
  display: inline-block;
`

const ProjectImg = styled(Img)`
  opacity: 0.2;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  transition: 1.5s ease-in-out;

  &:hover {
    -webkit-filter: grayscale(0%);
    filter: grayscale(0%);
    opacity: 1.0;
    transform: scale(1.1);
    /* cursor: pointer; */
  }
`

const ProjectTitle = styled.h1`
  margin: 0 auto;
  padding: 0;
  text-align: center;
  position: absolute;
  top: 45%;
  left: 0;
  width: 100%;
  /* transform: translate(-50%, -50%); */
  color: white;
  font-size: 3em;
  pointer-events: none;
`


const Work = () => {
  const data = useStaticQuery(graphql`
    query Images {
      images: allFile(filter: {relativeDirectory: {in: "work"}}) {
        nodes {
          id
          childImageSharp {
            fluid(
              maxWidth: 1000, 
              maxHeight: 600, 
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      heroBackground: file(relativePath: {eq: "svg/brush-stroke-banner.png"}) {
        id
        childImageSharp {
          fluid(
            maxWidth: 1800  
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const titles = [
    'Dunder Mifflin Infinity',
    'Conflict Resolution',
    'Two Weeks',
    'Niagara',
    'Serenity by Jan',
    'Koi Pond',
    'Survivor Man',
    'Local Ad',
    'Threat Level Midnight',
    'Back From Vacation',
    'Branch Wars'
  ]

  return (
    <ContentContainer id="work">

      {data.images.nodes.map((image, index) => (
        <Project key={image.id}>
          <Parallax y={[-25,25]}>
            <ProjectImg fluid={image.childImageSharp.fluid} />
          </Parallax>

          <ProjectTitle>
              {titles[index]}
          </ProjectTitle>
        </Project>
      ))}

    </ContentContainer>
  )
}

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <Work />
    </Layout>
  )
}

export default IndexPage