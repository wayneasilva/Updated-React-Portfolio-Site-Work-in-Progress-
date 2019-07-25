import React from 'react';
import Radium from 'radium';

const portItem = (props) => {

    const style = {
        portItemDiv: {
            // width: '300px',
            width: '33.33333%',
            height: '100%',
            backgroundColor: '#FFF',
            // margin: '1px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center',
            // background: `url(${props.image})`,
            // backgroundSize: '100% 100%',
            // backgroundRepeat: 'no-repeat'
        },

        // imgDiv: {
        //     width: '100%',
        //     height: '100%'
        // },

        // img: {
        //     // objectFit: 'cover'
        // },

        headerDiv: {
            
        },

        h1: {
            color: '#000',
            margin: '0'
        }
    }

    return (
        <div style={style.portItemDiv} onClick={() => props.portItemViewHandler(props.id)}>
            {/* <div style={style.imgDiv}>
                <img style={style.img} src={props.image}></img>
            </div> */}
            <div style={style.headerDiv}>
                <h1 style={style.h1}>{props.name}</h1>
            </div>
        </div>
    )
}

export default Radium(portItem);