import React from 'react';
import Radium from 'radium';
import Spacer from '../../Spacer/Spacer';

const mainView = () => {
    const style = {
        test: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            margin: '0',
            padding: '0',
            width: 'calc(100vw - 75px)',
            height: '100vh',
            // backgroundColor: '#2d1577',
        },

        headerStyle: {
            
        },

        h1Style: {
            fontFamily: 'Staatliches, cursive',
            fontSize: '8rem',
            margin: '0',
            // transform: 'rotate(90deg)',
	        // transformOrigin: 'left top 0',
        },

        h2DivStyle: {
            display: 'flex',
            justifyContent: 'space-around'
        },

        h2Style: {
            fontFamily: 'Raleway, sans-serif',
            fontSize: '1.5rem'
        },

        bookButtonDiv: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px'
            
        },

        bookButton: {
            display: 'inline-block',
            padding: '0.3em 1.2em',
            margin: '0 0.3em 0.3em 0',
            borderRadius: '2em',
            boxSizing: 'border-box',
            textDecoration: 'none',
            fontFamily: 'Roboto,sans-serif',
            fontWeight: '300',
            color: '#FFFFFF',
            backgroundColor: '#4eb5f1',
            textAlign: 'center',
            fontSize: '2rem'
        }

    }

    return (
        <div style={style.test}>
            <Spacer />
            <Spacer />
            <header style={style.headerStyle}>
                <h1 style={style.h1Style}>Ali K. Allen</h1>
                <div style={style.h2DivStyle}>
                    <h2 style={style.h2Style}>#Videographer</h2>
                    <h2 style={style.h2Style}>#Photographer</h2>
                    <h2 style={style.h2Style}>#Producer</h2>
                </div>
                <div style={style.bookButtonDiv}>
                    <div style={style.bookButton}>BOOK NOW</div>
                </div>
            </header>
        </div>
    )
}

export default Radium(mainView);