import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import Header from '../components/header'
import PageTitle from '../components/pageTitle'

import ContentContainer from '../styles/contentContainer'

const Divider = styled.hr`
  margin: 8vh auto;
  width: 66%;
  border: none;
  border-top: 1px solid gray;
`

const StyledScrollBox = styled.div`
  height: 200px;
  overflow-y: scroll;
`

const ScrollBox = () => (
  <div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
    </p>
    <p>
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis laboriosam quibusdam tenetur libero eos, deleniti quam quae omnis at? Magni possimus reprehenderit voluptatem? Vel, ex. Totam sunt maiores numquam voluptatem?
    </p>
  </div>
)

const ReviewsPage = () => {
  return (
    <Layout>
      <Header />
      <ContentContainer>
        <PageTitle
          title="About me"
          description="I'm a former "
          emphasis="receptionist turned artist"
        />
        <Divider />
        <StyledScrollBox>
          <ScrollBox />
        </StyledScrollBox>


      </ContentContainer>
    </Layout>
  )
}


export default ReviewsPage