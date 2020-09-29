import PropTypes from "prop-types"
import React from "react"
import {Section} from "./themeprovider"

const Header = ({ siteTitle }) => (
  <header>
    <Section />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header