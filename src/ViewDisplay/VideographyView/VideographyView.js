import React, {Component} from 'react';
import Radium from 'radium';
// import portImage1 from '../../images/portImage1.jpg';
// import portImage2 from '../../images/portImage2.jpg';
// import portImage3 from '../../images/portImage3.jpg';
import ProjectViewer from './ProjectViewer/ProjectViewer';
// import PortItemSelector from './PortItemSelector/PortItemSelector';
// import MainViewDisplay from '../MainViewDisplay/MainViewDisplay.js';

const videoView = (props) => {
        // const style = {
        //     portfolioDiv: {
        //         backgroundColor: 'red',
        //         height: '100%',
        //         height: '100%'
        //         // margin: '0',
        //         // padding: '0',
        //         // width: 'calc(100vw - 75px)',
        //         // marginLeft: '75px'
        //     },

        //     portfolioDivMobile: {
        //         backgroundColor: 'blue',
        //         height: '100%',
        //         height: '100%'
        //     },

        //     // test: {
        //     //     display: 'flex',
        //     //     flexDirection: 'column',
        //     //     margin: '0',
        //     //     padding: '0',
        //     //     width: 'calc(100vw - 75px)',
        //     //     height: '100vh',
        //     //     backgroundColor: '#FFF'
        //     // },
    
        //     // porfolioViewDivStyle: {
        //     //     width: 'calc(100vw - 75px)',
        //     //     height: '90vh',
        //     //     backgroundColor: '#FFF'
        //     // },
    
        //     // selectorDivStyle: {
        //     //     width: 'calc(100vw - 75px)',
        //     //     height: '10vh'
        //     // }
        // }
    const style = {
        background: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            height: '100%',
            // padding: '50px',
            // margin: 'auto',
            // padding: '10px'
        }
    }

    return (
        <div style={style.background}>
            <ProjectViewer />
        </div>
    )
}

export default Radium(videoView);