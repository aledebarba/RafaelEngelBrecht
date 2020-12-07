import React from 'react'
import VideoHeader from '../components/videoheader'

const VHExample = () => {
    return (
    <>
        <VideoHeader>
            <video>
                <source />
            </video>
            <div className="video__header__content">
                <h1>This is the main title</h1>
                <p>LoremQui aliquip cupidatat ex dolore quis esse cillum amet non veniam commodo cillum. Officia nisi ut consectetur id sit culpa aute esse exercitation adipisicing ad. Ipsum veniam quis voluptate sit Lorem minim commodo. Esse deserunt magna do occaecat eu excepteur laboris commodo veniam.</p>
                <button className="button button-primary">Call to action</button>
            </div>
        </VideoHeader>
    </>
    )
}

export default VHExample