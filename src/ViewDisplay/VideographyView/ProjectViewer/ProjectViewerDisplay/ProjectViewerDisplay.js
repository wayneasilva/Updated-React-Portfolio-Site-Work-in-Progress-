import React from 'react';
import Radium from 'radium';

const projectViewerDisplay = (props) => {
    
    const currentView = props.portItems.filter( portItem => portItem.isLoaded === true);

    const style = {
        containerDiv: {
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            // border: '1px solid black'
            // backgroundColor: 'black',
            // margin: '10px'
        },

        viewH1: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            // backgroundColor: 'red',
            margin: '0',
            height: '25%'
        },

        viewP: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            // backgroundColor: 'blue',
            margin: '0',
            height: '15%'
        },

        imgDiv: {
            // backgroundColor: 'yellow',
            width: '100%'
        },

        img: {
            width: '100%',
            height: '100%'
        }
    }

    return (
        <div style={style.containerDiv}>
            <div>
                <h1 style={style.viewH1}>{currentView[0].name}</h1>
                <p style={style.viewP}>{currentView[0].about}</p>
            </div>
            <div style={style.imgDiv}>
                <img src={currentView[0].img} style={style.img}></img>
            </div>
        </div>
    )
}

export default Radium(projectViewerDisplay);