import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'


import ContentContainer from '../styles/contentContainer'

const FooterContainer = styled.div`
  background-color: #323232;
  padding: 0 0 1.5em 0;
`
const FooterSection = styled(ContentContainer)`
  display: flex;
  justify-content: space-between;
  color: var(--faded-accent);
  padding-top: 48px;
  margin-bottom: 8px;
`

const PamNav = () => (
  <div>
    <h5>Pam Halpert</h5>
    <ul>
      <li>
        <Link 
          to="/" 
          className="footer-link"
        >
          Work
        </Link>
      </li>
      <li>
        <Link 
          to="/reviews" 
          className="footer-link"
        >
          Reviews
        </Link>
      </li>
      <li>
        <Link 
          to="/blog" 
          className="footer-link"
        >
          Blog
        </Link>
      </li>
      <li>
        <Link 
          to="/contact" 
          className="footer-link"
        >
          Commission
        </Link>
      </li>
      <li>
        <Link 
          to="/scroll" 
          className="footer-link"
        >
          About
        </Link>
      </li>
    </ul>

  </div>
)

const ContactNav = () => (
  <div>
    <h5>Contact</h5>
    <ul>
      <li>+1 123 456 7890</li>
      <li>nguyehu7@oregonstate.edu</li>
    </ul>
  </div>
)

const ConnectNav = () => (
  <div>
    <h5>Connect</h5>
    <ul>
      <li>
        <a 
          href="https://github.com/hdn301"
          className="footer-link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
           GitHub
        </a>
      </li>
      <li>
        <a 
          href="https://twitter.com/devnguy"
          className="footer-link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaTwitter className="icon" />
          Twitter
        </a>
      </li>
      <li>
        <a 
          href="https://instagram.com" 
          className="footer-link" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaInstagram className="icon" />
          Instagram
        </a>
      </li>
    </ul>
  </div>
)

const TopNav = () => (
  <div>
    <h4>
      <a href="#top" className="footer-link">{String.fromCharCode('8593')}</a>
    </h4>
  </div>
)

const CopyrightSection = () => (
  <div>
    <ul>
      <li className="faded-accent">Website by Devin Nguyen 2019</li>
      
      <li className="faded-accent">Images from <a href="https://unsplash.com" className="footer-link" target="_blank" rel="noopener noreferrer">Unsplash</a></li>

    </ul>
  </div>
)

const Footer = () => {
  return (
    <FooterContainer>

      <FooterSection>
        <PamNav />
        <ContactNav />
        <ConnectNav />
        <TopNav />
      </FooterSection>

      <FooterSection>
        <CopyrightSection />
      </FooterSection>

    </FooterContainer>

  )
}

export default Footer