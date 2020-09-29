import React from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";


const PageLinks = [ 
    { label: "Home",     to: "/#PageTop" },
    { label: "About",    to: "/#SectionOne" },
    { label: "Services", to: "/#SectionTwo" },
    { label: "Partners", to: "/#SectionThree" },
    { label: "Portfolio",to: "/#SectionFour" },
    { label: "Team",     to: "/#SectionFive" },
    { label: "Contact",  to: "/#Footer" },
]

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top css-spy-scroll">
            <div className="container-fluid">
                <AnchorLink className="navbar-brand" to="/">Navbar</AnchorLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        {PageLinks.map(link => 
                            <li className="nav-item"  key={link.label+link.to}>
                                <AnchorLink className="nav-link active" to={link.to}>{link.label}</AnchorLink>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar

const DropDown = () =>  
<li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="#dropdown" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
        Dropdown
    </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><AnchorLink className="dropdown-item" to="/">Action</AnchorLink></li>
        <li><AnchorLink className="dropdown-item" to="/">Another action</AnchorLink></li>
        <li><AnchorLink className="dropdown-item" to="/">Something else here</AnchorLink></li>
    </ul>
</li>

const MenuForm = () => 
<form className="d-flex">
    <input className="form-control mr-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success" type="submit">Search</button>
</form>

const DisabledItem = () => 
<li className="nav-item">
    <AnchorLink className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">Disabled</AnchorLink>
</li>