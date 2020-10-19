import React from 'react'
import Image from './image'
import { CardsSocialNetworks } from './socialnetworks'
import styled from 'styled-components'

export const CardDeck = (props) => {

    const justify = props.justifyContent ? "justify-content-"+props.justifyContent : 'justify-content-center';

    return (
            <div className={`row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 ${justify}`}>
                {props.children}
            </div>
    )
}

export const UserCard = (props) =>{ 
    
    const userImage = props.image ? props.image : "image-place-holder.png";

    return(
    <StyledCards className="col">
        <div className="card h-100 user-card">
            <div className="user-photo">
                <Image src={userImage} className="user-photo"/>
            </div>
            <div className="card-body">
                <h1 className='card-title'>{props.title}</h1>
                { props.subtitle && <h2>{props.subtitle}</h2>}
                <p className='card-text'>{props.text}</p>
            </div>
            <div className="card-footer">
                {props.social && <CardsSocialNetworks {...props.social} />}
            </div>
        </div>
    </StyledCards>
)}


// local css
const StyledCards = styled.div`
    .user-card {
        background-color: #f2f2f2;
        background-image: linear-gradient(0deg, #f2f2f2, #ffffff);
        border-radius: 8px;

        .user-photo {
            width: 50%;
            height: auto;
            border-radius: 50%;
            margin: 8px auto; padding: 0;
            border: 4px solid white;
            overflow: hidden;
            box-shadow: 0px 3px 5px rgba(0,0,0,0.2), inset 0px -3px 5px rgba(0,0,0,0.2);
        }

        h1 {
            font-size: 1.15rem;
            text-align: center;
            font-weight: var(--font-1-light);
            margin: 0px;
            line-height: 1.3rem;
         }
         h2 { 
            margin: 0px;
            color: var(--font-2-color);
            font-size: 1rem;
            text-align: center;
            text-transform: uppercase;
         }
         p {
             font-size: 0.8rem;
             line-height: 0.95rem;
             opacity: 0.7;
             padding: 8px 4px;
         }

    } 
`
