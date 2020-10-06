import React from 'react';

const PlaceholderImage = (props) => {
    const width = props.width ? props.width : "100%";
    const height = props.height ? props.height : "100%";
    return (
        <img src={require("./image-place-holder.png")} style={{
            width: {width},
            height: {height}
        }}/>
    )
}

export default PlaceholderImage