import React, { useEffect } from 'react'
import { withPrefix } from "gatsby"
import gsap from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin" 
import { AnchorLink } from "gatsby-plugin-anchor-links";
import logo from '../images/brand-menu-icon.png';

const PageLinks = [ 
    { label: "Home",     to: "/#PageTop" },
    { label: "About",    to: "/#SectionOne" },
    { label: "Services", to: "/#SectionTwo" },
    { label: "Partners", to: "/#SectionThree" },
    { label: "Portfolio",to: "/#SectionFour" },
    { label: "Team",     to: "/#SectionFive" },
    { label: "Contact",  to: "/#Footer" },
]

const Navbar = (props) => {

    useEffect (()=>{
        gsap.registerPlugin(ScrollToPlugin);
    }, [])
    const menuLinks = props.menu ? props.menu : PageLinks;
    const useGsap = props.useGsap ? true : false;
    const handleClick = (toElementId) => {
        if (window !== undefined ) {
            console.log("clicked: ",toElementId)
            gsap.to(window, {duration: 1, scrollTo: toElementId,  offsetY: 80})
         }
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top css-spy-scroll">
            <div className="container-fluid">
                <AnchorLink className="navbar-brand" to={withPrefix("/")}>
                    <img src={logo} alt="Landing Page Logo" />
                </AnchorLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        {menuLinks.map(link => 
                            <li className="nav-item"  key={link.label+link.to}>
                                { useGsap !== true 
                                ? <AnchorLink className="nav-link active" to={withPrefix(link.to)}>{link.label}</AnchorLink>
                                : <span className="nav-link active" onClick={()=>handleClick(link.to)}>{link.label}</span>
                                } 
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar