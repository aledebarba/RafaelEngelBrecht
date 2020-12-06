import React from 'react'
import Carousel from '../components/carousel'

const CarouselSandbox = () => {
    return(
    <>
    <div className="container p-5">
        <h1 className="mb-3">Images via URL</h1>
            <Carousel 
            images={[
                'https://www.bgaprojeto.com/figma-assets/slide-image-0.jpg',
                'https://www.bgaprojeto.com/figma-assets/slide-image-1.jpg',
                'https://www.bgaprojeto.com/figma-assets/slide-image-2.jpg',
                'https://www.bgaprojeto.com/figma-assets/slide-image-3.jpg',
                ]}
            imageStyle={{borderRadius: 24}}    
            />
    </div>
    
    <div className="container p-5">
        <h1 className="mb-3">Images via image-name</h1>
            <Carousel 
            images={[
                'case-slide-1.jpg',
                'case-slide-2.jpg',
                'case-slide-3.jpg',
                'case-slide-4.jpg',
                'case-slide-5.jpg',
                'case-slide-6.jpg'
                ]}
            imageStyle={{margin: "0 16px", border: "5px solid black", borderRadius: 16}}
            />
    </div>
    </>
    ) 
}

export default CarouselSandbox