import React from 'react';
import Radium from 'radium';

const photoView = () => {
    const style = {
        test: {
            margin: '0',
            padding: '0',
            width: 'calc(100vw - 75px)',
            height: '100vh',
            backgroundColor: 'green'
        }
    }

    return (
        <h1 style={style.test}>View Route</h1>
    )
}

export default Radium(photoView);