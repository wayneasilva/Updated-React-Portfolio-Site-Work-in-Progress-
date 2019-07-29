import React from 'react';
import Radium from 'radium';

const projectViewerDisplay = (props) => {
    
    const currentView = props.portItems.filter( portItem => portItem.isLoaded === true);

    const style = {
        containerDiv: {
            width: '100%',
            backgroundColor: 'yellow'
        },

        viewH1: {
            backgroundColor: 'red'
        },

        viewP: {
            backgroundColor: 'blue'
        }
    }

    return (
        <div style={style.containerDiv}>
            <h1 style={style.viewH1}>{currentView[0].name}</h1>
            <p style={style.viewP}>{currentView[0].about}</p>
        </div>
    )
}

export default Radium(projectViewerDisplay);