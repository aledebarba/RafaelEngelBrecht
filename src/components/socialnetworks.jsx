import React from 'react'
import styled from 'styled-components'
import {StyledIconBase} from '@styled-icons/styled-icon'

import { Twitter } from '@styled-icons/fa-brands/Twitter'
import { FacebookF } from '@styled-icons/fa-brands/FacebookF'
import { Youtube } from '@styled-icons/fa-brands/Youtube'
import { LogoTiktok } from '@styled-icons/ionicons-solid/LogoTiktok'
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin'
import { Github } from '@styled-icons/fa-brands/Github'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { PinterestP } from '@styled-icons/fa-brands/PinterestP'
import { Whatsapp } from '@styled-icons/fa-brands/Whatsapp'
import { TelegramPlane } from '@styled-icons/fa-brands/TelegramPlane'
import { Skype } from '@styled-icons/fa-brands/Skype'
import { Gmail } from '@styled-icons/simple-icons/Gmail'

const SocialNetworks = (props) => {
    
    const size = props.size ? props.size : 32; 
    
    return (
    <IconStyleWrapper size={props.size} center>
        <ul>
            { props.twitter     && <li><a href={props.twitter} target="_blank" rel="noreferrer"><Twitter size={size} /></a></li> }
            { props.facebook    && <li><a href={props.facebook} target="_blank" rel="noreferrer"><FacebookF size={size} /></a></li> }
            { props.youtube     && <li><a href={props.youtube} target="_blank" rel="noreferrer"><Youtube size={size} /></a></li> }
            { props.tiktok      && <li><a href={props.tiktok} target="_blank" rel="noreferrer"><LogoTiktok size={size} /></a></li> }
            { props.github      && <li><a href={props.github} target="_blank" rel="noreferrer"><Github size={size}/></a></li> }
            { props.instagram   && <li><a href={props.instagram} target="_blank" rel="noreferrer"><Instagram size={size}/></a></li> }
            { props.pinterest   && <li><a href={props.pinterest} target="_blank" rel="noreferrer"><PinterestP size={size} /></a></li> }
            { props.whatsapp    && <li><a href={props.whatsapp} target="_blank" rel="noreferrer"><Whatsapp size={size} /></a></li> }
            { props.telegram    && <li><a href={props.telegram} target="_blank" rel="noreferrer"><TelegramPlane size={size}/></a></li> }
            { props.skype       && <li><a href={props.skype} target="_blank" rel="noreferrer"><Skype size={size}/></a></li> }
            { props.email       && <li><a href={"mailto:"+props.email} rel="noreferrer"><Gmail size={size}/></a></li> }
            { props.linkedin    && <li><a href={props.linkedin} target="_blank" rel="noreferrer"><Linkedin size={size} /></a></li> }
        </ul>
    </IconStyleWrapper>
    )
}

export default SocialNetworks

const IconStyleWrapper = styled.div`
  
  ul { 
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: ${props => props.center ? "center" : props.right ? "flex-end" : "flex-start" };
     }

  ${StyledIconBase} {

    color: white;
    background-color: #444444;
    background-image: linear-gradient(45deg, #0e0e0e, #696969);
    width: ${props => props.size*1.6}px;
    height: ${props => props.size*1.6}px;
    margin-right: ${props => props.size/8}px;
    margin-bottom: ${props => props.size/8}px;
    padding: ${props => props.size/3}px;
    border-radius: 10px;  
    transition: all 0.3s;
    border: 0;  

    &:hover {
        color: cyan;
        transition: all 0.3s;
    }
  }
`
