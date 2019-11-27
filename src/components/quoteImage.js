import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const QuoteImage = () => {
  const data = useStaticQuery(graphql`
    query Image {
      quoteImage: file(relativePath: {eq: "svg/quote-accent.png"}) {
        id
        childImageSharp {
          fluid(
            maxWidth: 62
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img fluid={data.quoteImage.childImageSharp.fluid} />
  )
}

export default QuoteImage