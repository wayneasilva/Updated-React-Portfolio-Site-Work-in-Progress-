import React from 'react';
import Radium from 'radium';

const spacer = () => {

    const style = {
        spacerStyle: {
            height: '10vh'
        }
    }

    return (
        <div style={style.spacerStyle}></div>
    )
}

export default Radium(spacer);