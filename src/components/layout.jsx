
import React, {useEffect} from "react"
import PropTypes from "prop-types"
import Footer from "./footer"
import {UsingCustomTheme} from './themeprovider'
import {cssSpy} from './cssspy';

const Layout = (props) => {

  useEffect(()=>{
    cssSpy();
  }, [])

  return (
    <UsingCustomTheme>
        <div id="PageTop">
          {props.children}
        </div>
      <Footer/>
    </UsingCustomTheme>
  )
}
export default Layout

Layout.propTypes = { children: PropTypes.node.isRequired, }