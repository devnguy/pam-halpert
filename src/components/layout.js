import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import MetaData from '../components/metaDataHelmet'
import Footer from '../components/footer'


import '../styles/index.css'

const Layout = (props) => {
  return (
    <ParallaxProvider className="container">
      <MetaData />
      {props.children}
      <Footer />
    </ParallaxProvider>
  )
}

export default Layout