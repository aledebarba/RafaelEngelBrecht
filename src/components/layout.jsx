
import React, {useEffect} from "react"
import PropTypes from "prop-types"
import {cssSpy} from './cssspy';

const Layout = (props) => {

  useEffect(()=>{
    cssSpy();
  }, [])

  return (
    <>
        <div id="PageTop">
          {props.children}
        </div>
    </>
  )
}
export default Layout

Layout.propTypes = { children: PropTypes.node.isRequired, }