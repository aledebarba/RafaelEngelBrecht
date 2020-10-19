import React from 'react'
import { CardDeck, UserCard } from '../cards'
const Team = (props) => {
    return (
            <>
                <h1>Our Team</h1>
                <CardDeck>
                    <UserCard 
                        image="placeHolderUser-2.jpg"
                        title="Alexandre Macedo"
                        subtitle="Manager"
                        text="Anim cillum tempor voluptate incididunt commodo proident sunt nulla excepteur amet duis veniam. Non tempor est Lorem eiusmod cupidatat ipsum officia occaecat nisi."
                        social={{
                            twitter: "https://www.twitter.com",
                            linkedin: "https://linkedin.com"
                        }}/>

                    <UserCard 
                        image="placeHolderUser-4.jpg"
                        title="Cezar Macedo" 
                        subtitle="CEO / founder"
                        text="Ipsum ad voluptate esse qui culpa commodo ad deserunt irure dolore qui adipisicing excepteur nulla. Velit adipisicing in cillum ad eiusmod in ad sunt esse ex occaecat.Velit adipisicing in cillum ad eiusmod in ad sunt esse ex occaecat."
                        social={{
                            twitter: "https://www.twitter.com",
                            linkedin: "https://linkedin.com"
                        }}/>

                    <UserCard 
                        image="placeHolderUser-6.jpg"
                        title="Jane J Doe"
                        subtitle="partner"
                        text="Ad ullamco laboris exercitation reprehenderit occaecat laborum nulla quis culpa. Dolor sit id consequat qui aute sint id ex aute. Dolore aliquip voluptate sit commodo amet reprehenderit aliquip."
                        social={{
                            instagram: "https://www.twitter.com",
                            facebook: "https://linkedin.com"
                        }}/>

                    <UserCard 
                        image="placeHolderUser-1.jpg"
                        title="Emma Josephinne"
                        subtitle="lawyer"
                        text="Ad ullamco laboris exercitation reprehenderit occaecat laborum nulla quis culpa. Dolor sit id consequat qui aute sint id ex aute. Dolore aliquip voluptate sit commodo amet reprehenderit aliquip."
                        social={{
                            facebook: "https://www.facebook.com",
                            linkedin: "https://linkedin.com"
                        }}/>
                </CardDeck>
            </>
    )}
export default Team