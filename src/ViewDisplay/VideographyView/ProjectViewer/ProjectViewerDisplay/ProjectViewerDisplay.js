import React from 'react';
import Radium from 'radium';

const projectViewerDisplay = (props) => {
    
    const currentView = props.portItems.filter( portItem => portItem.isLoaded === true);

    return (
        <div>
            <h1>{currentView[0].name}</h1>
            <p>{currentView[0].about}</p>
        </div>
    )
}

export default Radium(projectViewerDisplay);