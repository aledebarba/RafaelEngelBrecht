
import React, {useEffect} from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Navbar from "./navbar"
import Footer from "./footer"
import {UsingCustomTheme} from './themeprovider'
import {cssSpy} from './cssspy';

const Layout = (props) => {

  useEffect(()=>{
    cssSpy();
  }, [])

  return (
    <UsingCustomTheme>
      <Navbar/>
      <div id="PageTop"></div>
      {props.useHeroHeader  && <HeroHeader/>}
      {!props.useHeroHeader && <Header/>}
      {props.children}
      <div id="Footer"></div>
      <Footer/>
    </UsingCustomTheme>
  )
}
export default Layout

Layout.propTypes = { children: PropTypes.node.isRequired, }

const HeroHeader = () => 
<header id="heroheader">
  <div className="container">
    <h3>Simple Subtitle Text</h3>
    <h1>The big message is here, use with inteligence</h1>
    <button className="btn btn-primary">Call to action</button>
    <div className="video-container">
      <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="muted"
          loop="loop"
          poster="./mobile-no-movie.jpg"
        >
          <source
            src="https://forle.uxdir.com/wp-content/uploads/2020/03/Hero-Movie.mp4"
            type="video/mp4"
          />
          <track></track>
        </video>
      </div>
  </div>
</header>