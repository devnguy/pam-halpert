import React from 'react'
import styled from 'styled-components'
// import { FiInstagram } from 'react-icons/fi'


import { Link } from 'gatsby'

const HeaderListItem = styled.li`
  display: inline-block;
  font-size: 1.1em;
  letter-spacing: 0.01em;
  padding: 0px 4px;
  margin: 15px 20px;
  list-style-type: none;
  font-weight: 700;
`

const HeaderLogo = styled.h1`
  font-size: 1.1em;
  letter-spacing: 0.01em;
  padding: 0px 4px;
  margin: 15px 20px;
  font-weight: 700;
  line-height: 3em;
`

const HeaderListNav = styled.ul`
  list-style-type: none;
  margin: 16px 0;
`

const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0px 48px;
`

const Header = () => {
  return (
    <HeaderNav>
      <HeaderLogo>
        <HeaderListItem>
          
        <Link 
          to="/" 
          className="hover-underline"
          >
          Pam Halpert
        </Link>
          </HeaderListItem>
      </HeaderLogo>
      <HeaderListNav>
        <HeaderListItem>
          <Link 
            to="/" 
            className="hover-underline" 
            activeClassName="active-link"
          >
            Work
          </Link>
        </HeaderListItem>
        <HeaderListItem>
          <Link 
            to="/reviews" 
            className="hover-underline" 
            activeClassName="active-link"
          >
            Reviews
          </Link>
        </HeaderListItem>
        <HeaderListItem>
          <Link 
            to="/blog" 
            className="hover-underline" 
            activeClassName="active-link"
          >
            Blog
          </Link>
        </HeaderListItem>
        <HeaderListItem>
          <Link 
            to="/contact" 
            className="hover-underline" 
            activeClassName="active-link"
          >
            Contact
          </Link>
        </HeaderListItem>
        {/* <HeaderListItem>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" title="instagram"><FiInstagram /></a>
        </HeaderListItem> */}
      </HeaderListNav>
    </HeaderNav>
  )
}

export default Header