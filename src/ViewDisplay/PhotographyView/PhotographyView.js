import React from 'react';
import Radium from 'radium';

const photoView = () => {
    const style = {
        test: {
            margin: '0',
            padding: '0',
            // width: 'calc(100% - 75px)',
            // height: '100vh',
            backgroundColor: 'yellow',

            '@media (max-width: 900px)': {
                width: '100%'
            }
        },

        h1: {
            margin: '0',
            padding: '0'
        }
    }

    return (
        <div style={style.test}>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
            <h1 style={style.h1}>View Route</h1>
        </div>
    )
}

export default Radium(photoView);