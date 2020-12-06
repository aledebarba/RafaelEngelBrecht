import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

const Image = props => {
    const data = useStaticQuery (graphql `
            query {
                allImages: allFile {
                    edges {
                        node {
                            name
                            relativePath
                            id
                            childImageSharp {
                                fluid (maxWidth:1024) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        `
    )
    const image = data.allImages.edges.find( element => {
        return (element.node.relativePath.includes(props.src));
    })
    if (!image) { return <>No Image Found</> }
    const id = image.node.id;
    const imageSrc = image.node.childImageSharp.fluid;
    return (
        <Img fluid={imageSrc} alt={props.alt} key={id} style={{...props.style}}/>
    )
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    style: PropTypes.object
}

export default Image
