import React from 'react'
import { useLaxElement } from 'use-lax';

const ParallaxHeader = (props) => {
    const refInfo       = useLaxElement();
    const refTrees      = useLaxElement();
    const refFloor      = useLaxElement();
    const refMountain   = useLaxElement();
    const refBottomBlack = useLaxElement();

    return (
        <div className="sub-headers">
            <div className="comp-layers">
            <div ref={refInfo} className="comp-info" data-lax-opacity="0 1,100 1,300 0">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
            <div className="layer-back">
            </div>
            <div 
                ref={refMountain} 
                className="layer-mountain" 
                data-lax-translate-y="0 0,1800 1000"
                data-lax-opacity="0 0.5, 150 0"   
                style={{
                    backgroundImage: `url(${require('../images/subpages-header/mountains.png')})`
                }}
            />
            <div 
                ref={refFloor} 
                className="layer-floor" 
                data-lax-translate-y="0 0, 1800 -500"
                data-lax-opacity="0 1, vh 0"
                style={{
                    backgroundImage: `url(${require('../images/subpages-header/people.png')})`
                }}
            />
            <div 
                ref={refTrees}
                className="layer-trees"
                data-lax-translate-y="0 0, vh -500"
                style={{
                    backgroundImage: `url(${require('../images/subpages-header/trees.png')})`
                }}
            />
            <div 
                className="layer-stack layer-bottom"
                ref={refBottomBlack}
                data-lax-translate-y="0 0, vh -500"    
            />
            <div className="scrollIcon">
                <ScrollDownIcon color='navajowhite'/>
            </div>
        </div>
        <div className="content"></div>
        </div>
  )
}

export default ParallaxHeader