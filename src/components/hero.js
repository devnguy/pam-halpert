import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import Img from 'gatsby-image'
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax'

import Header from '../components/header'
// import BannerStroke from '../../src/images/svg/brush-stroke-banner.png'
// import BannerStroke from '../../src/images/svg/brush-stroke-black-10op.png'
import BannerStroke from '../../src/images/svg/brush-stroke-accent-10op.png'


const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin: auto;
  background-image: url(${BannerStroke});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* border: 1px solid black; */
`

const StyledHeroHeader = styled.header`
  /* font-size: 1.2em; */
  /* letter-spacing: .05em; */
  color: #323232;
  max-width: 75%;
  /* height: 30vh; */
  flex-grow: 2;
  /* padding: 48px; */
  margin: auto;
  text-align: center;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const HeaderFooter = styled.footer`
  margin: 0px auto 24px auto;
  /* align-self: flex-end; */
  font-size: 2em;
  /* border: 1px solid red; */
`

const ArrowBounce = styled.a`
  @keyframes bounce {
    0% { transform: translateY(0); }
    50% { transform: translateY(-24px); }
    100% { transform: translateY(0px); }
  }
  color: #323232;
  display: inline-block;
  animation-name: bounce;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.6, -0.28, 0.735, 0.045);
`

// Broke what was left of any conventions and hacked together cascading animations.
const HeroQuote = () => (
  <Parallax y={[-15,15]}>
    <span className="cascade-animation">
      <h1 className="hero-heading fade-in">There's a lot of beauty in </h1>
      <h1 className="hero-heading fade-in"><span className="accent-color">ordinary</span> things. Isn't that </h1>
      <h1 className="hero-heading fade-in">kind of the point?</h1>
    </span>
  </Parallax>
)


const Hero = () => {
  // // Can't figure out how to use gatsby image as background image
  // // Will just have to install gatsby-background-image plugin
  // const heroBackground = useStaticQuery(graphql`
  //   query HeroImage {
  //     image: file(relativePath: {eq: "svg/brush-stroke-banner.png"}) {
  //       id
  //       childImageSharp {
  //         fluid(
  //           maxWidth: 1800  
  //         ) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return ( 
    <StyledHero>
      <Header />
      <StyledHeroHeader>
        <HeroQuote />
      </StyledHeroHeader>
      <HeaderFooter>
        <ArrowBounce href="#work" className="hover-underline">{String.fromCharCode('8595')}</ArrowBounce>
      </HeaderFooter>
    </StyledHero>
  )
}


export default Hero