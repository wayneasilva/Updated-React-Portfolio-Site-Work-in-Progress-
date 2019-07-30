import React from 'react';
import Radium from 'radium';

const projectViewerSelector = (props) => {
    // console.log(props.portViewHandler)
    const style = {
        selectorDiv: {
            display: 'flex',
            width: '100%'
        },

        portItem: {
            border: '1px solid black'
        },

    }

    return(
        <div>
            {
                props.portItems.map(portItem => {
                    return (
                        <div 
                            id={portItem.id} 
                            key={portItem.id} 
                            onClick={(e) => props.portViewHandler(portItem.id)}
                            style={style.selectorDiv}>
                            <h1 style={style.portItem}>{console.log(portItem.isLoaded)}click</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Radium(projectViewerSelector);