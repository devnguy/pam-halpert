import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import Header from '../components/header'
import ContentContainer from '../styles/contentContainer'
import PageTitle from '../components/pageTitle'

const Posts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`


const Post = styled.div`
  max-width: 300px;
  width: 100%;
  margin: 12px;
  overflow: hidden;
  @media (max-width: 1296px) {
    max-width: 400px;
  }
  @media (max-width: 1130px) {
    max-width: 600px;
  }
`

const PostImage = styled(Img)`
  /* max-width: 200px; */
  transition: 0.5s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`

const PostTitle = styled.div`
  &:hover {
    cursor: pointer;
  }
`


const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query BlogImages {
      images: allFile(filter: {relativeDirectory: {in: "blog"}}) {
        nodes {
          id
          childImageSharp {
            fluid(
              maxWidth: 400, 
              maxHeight: 300, 
            ) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  // console.log(data)

  const titles = [
    'Tour of My Workspace',
    'Digital vs Traditional Art',
    'My Journey From Receptionist to Artist',
    'Do You Need to Move to New York to be an Artist?',
    'Staying Focused',
    'Dealing With Burnout',
    'Finding Inspiration',
    'Post Modern Design',
    'Guide to Thumbnails and Splash Frames',
    'Creating the Dunder Mifflin Infinity Logo',
    'MORE Books That Helped Me Become an Artist',
    'Books That Helped me Become an Artist',
  ]

  return (
    <Layout>
      <Header />
      <ContentContainer>
        <PageTitle
          title='Thoughts, insights, guides'
          description='Documenting my journey from'
          emphasis='receptionist to artist'
        />

        <Posts>
          {data.images.nodes.map((image, index) => (
            <Post key={image.id}>
              <PostImage fluid={image.childImageSharp.fluid} />
              <PostTitle>
                <h4>{titles[index]}</h4>
              </PostTitle>
            </Post>
          ))}
        </Posts>

      </ContentContainer>
    </Layout>
  )
}

export default BlogPage