import React from 'react'
import styled from 'styled-components'

import QuoteImage from '../components/quoteImage'

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  min-height: 40vh;
  padding-left: 16%;
  margin-left: -16%;
  background-size: 140px 120px;
  /* background-color: #d9dcda; */
  background-color: var(--faded-accent);
  background-position: -10px -20px;
`

const SlideContainer = styled.div`
`

const Slide = styled.div`
`

const DotContainer = styled.div`
  padding: 0 0 1em;
  .active {
    background-color: var(--accent-color);
  }
`

const Dot = styled.span`
  cursor: pointer;
  height: 12px;
  width: 12px;
  margin: 0 5px;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  border: 1px solid black;
  &:hover {
    background-color: var(--accent-color);
  }
`

const StyledQuote = styled.div`
  padding-right: 2em;
  font-style: italic;

`

const StyledAuthor = styled.div`
  h6 {
    margin: 1em 0;
  }
`

const Controller = styled.div`

`

const QuoteImageContainer = styled.div`
  width: 62px;
  margin-top: -1.5em;
`

const slides = [
  { 
    quote: 'My God, these could be tracings!',
    author: 'Michael Scott',
    index: 0
  }, {
    quote: 'Real art takes courage. And honesty. That\'s why this is.. motel art.',
    author: 'Gil',
    index: 1
  }, {
    quote: 'Your art.. was the prettiest art of.. all art.',
    author: 'Roy Anderson',
    index: 2
  }, {
    quote: 'There are shadows coming from two directions. What!? Are there two suns? Uhh, last I checked that\'s not an office building in the Andromeda galaxy. It\'s totally unrealistic!',
    author: 'Dwight Schrute',
    index: 3
  }, {
    quote: 'I would never say this to her face but she\'s a wonderful person and a gifted artist.',
    author: 'Michael Scott',
    index: 4
  }
]

class Carousel extends React.Component {
  
  state = {
    currentSlide: slides[0]
  }
  handleSetSlide0 = () => this.setState({ currentSlide: slides[0] })
  handleSetSlide1 = () => this.setState({ currentSlide: slides[1] })
  handleSetSlide2 = () => this.setState({ currentSlide: slides[2] })
  handleSetSlide3 = () => this.setState({ currentSlide: slides[3] })
  handleSetSlide4 = () => this.setState({ currentSlide: slides[4] })


  // Increments the current slide. Wraps around to index 0 when index === 4 (max)
  incrementSlide = () => {
    this.setState(
      this.state.currentSlide.index === 4 ? 
      {
        currentSlide: slides[0]
      } : {
        currentSlide: slides[this.state.currentSlide.index + 1]
      }
    )
  }

  handleSetSlide = (e) => {
    // Remove active class from currently active dot.
    const currentActiveDot = document.getElementById(this.state.currentSlide.index)
    currentActiveDot.classList.remove("active")

    // Set state based on dot that was clicked.
    this.setState({
      currentSlide: slides[e.target.id]
    })
  }

  render() {
    
    return (
      <CarouselContainer>

        <SlideContainer>
          <QuoteImageContainer>
            <QuoteImage />
          </QuoteImageContainer>
          <Slide>
            <StyledQuote>
              <p>{this.state.currentSlide.quote}</p>
            </StyledQuote>
          </Slide>
        </SlideContainer>

        <Controller>
          <StyledAuthor>
            <h6>- {this.state.currentSlide.author}</h6>
          </StyledAuthor>
          <DotContainer>
            {
              slides.map((slide, index) => (
                this.state.currentSlide.index === index ?
                  <Dot key={index} onClick={this.handleSetSlide} className="active" id={index} /> :
                  <Dot key={index} onClick={this.handleSetSlide} id={index}/>
                )
              )
            }
          </DotContainer>
        </Controller>

      </CarouselContainer>
    )
  }
}

export default Carousel