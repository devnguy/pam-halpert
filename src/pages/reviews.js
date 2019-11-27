import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Header from '../components/header'
import PageTitle from '../components/pageTitle'
import Carousel from '../components/carousel'

import ContentContainer from '../styles/contentContainer'
import resumeDownload from '../../static/pam-halpert-resume.pdf'

const ReviewsContent = styled.div`
  display: flex;
`

const ReviewsHeading = styled.div`
  flex: 1;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    padding-right: 1em;
    margin: 0;
  }
  /* border: 1px solid orange; */
`

const Divider = styled.hr`
  margin: 8vh auto;
  width: 66%;
  border: none;
  border-top: 1px solid gray;
`

const DownloadResume = styled.div`
  margin: 8vh auto 0;
  text-align: center;
`

const ReviewsPage = () => {
  return (
    <Layout>
      <Header />
      <ContentContainer>
        <PageTitle
          title="Customer Surveys"
          description="See why others"
          emphasis="can't stop talking about my art"
        />
        <Divider />

        <ReviewsContent>
          <ReviewsHeading>

            <h3>Feedback from past clients</h3>
          </ReviewsHeading>

          <Carousel />
        </ReviewsContent>

        <DownloadResume>
          <p>
            Still not convinced I'm the right artist for the job?<br/>
            Download my resume <a href={resumeDownload} className="hover-underline" target="_blank" rel="noopener noreferrer">here</a>
          </p>
        </DownloadResume>

      </ContentContainer>
    </Layout>
  )
}


export default ReviewsPage