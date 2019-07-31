import React from 'react';
import Radium from 'radium';

const projectViewerSelector = (props) => {
    // console.log(props.portViewHandler)
    const style = {
        selectorDiv: {
            display: 'flex',
            flexDirection: 'column',
            // justifyContent: 'space-between',
            // position: 'fixed',
            fontSize: '.5rem',
            // width: '10rem',
            // height: '100%',
            // backgroundColor: 'green'
        },

        portItem: {
            // boxSizing: 'border-box',
            margin: '0 0 5px',
            padding: '0',
            // width: '100%',
            // height: '100px',
            // width: '100px',
            // border: '1px solid black'
        },

    }

    return(
        <div style={style.selectorDiv}>
            {
                props.portItems.map(portItem => {
                    return (
                        <div 
                            id={portItem.id} 
                            key={portItem.id} 
                            onClick={(e) => props.portViewHandler(portItem.id)}
                            style={style.selectorDiv}>
                            <h1 style={style.portItem}>{portItem.name}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Radium(projectViewerSelector);