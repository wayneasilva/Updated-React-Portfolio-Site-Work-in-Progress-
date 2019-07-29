import React, {Component} from 'react';
import Radium from 'radium';
import portImage1 from '../../images/portImage1.jpg';
import portImage2 from '../../images/portImage2.jpg';
import portImage3 from '../../images/portImage3.jpg';
import PortItemSelector from './PortItemSelector/PortItemSelector';
// import MainViewDisplay from '../MainViewDisplay/MainViewDisplay.js';

const videoView = (props) => {
    // componentWillMount() {
    //     window.addEventListener('resize', this.handleScreenResize);
    // };

    // componentWillUnmount() {
    //     window.removeEventListener('resize', this.handleScreenResize);
    // };

    // handleScreenResize = () => {
    //     this.setState({ width: window.innerWidth });
    // };

    // portItemViewHandler = (id) => {
    //     const portItemIndex = this.state.portItemViews.findIndex(view => {
    //         return view.id === id;
    //     })
    //     // console.log(portItemIndex)

    //     const portItemStates = [...this.state.portItemViews];
    //     // console.log(portItemStates);

    //     const portItemState = {
    //         ...this.state.portItemViews[portItemIndex]
    //     }

        // console.log(portItemState);
        // console.log('test');

        // portItemStates.forEach( itemState => {
        //     if (itemState.id === id) {
        //         itemState.isLoaded = true;
        //     }

        //     if (itemState.id !== id) {
        //         itemState.isLoaded = false;
        //     }
        // })

        // console.log(this.state.portItemViews);
        // console.log(portItemStates);

        // this.setState({
        //     portItemViews: portItemStates
        // })
        // console.log(portItemStates);
    // }

    // if (screenWidth > 500) {
    //     return (
    //         <div style={style.portfolioDiv}>

    //         </div>
    //     )
    // }

    // else {
    //     return (
    //         <div style={style.portfolioDivMobile}>
    //             <p>lakjsdsad</p>
    //             <p>lakjsdsad</p>
    //             <p>lakjsdsad</p>
    //             <p>lakjsdsad</p>
    //         </div>
    //     )
    // }
    // return {

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

        // return (
        //     <div style={style.test}>
        //         <div style={style.porfolioViewDivStyle}>
        //             {/* <MainViewDisplay /> */}
        //         </div>
        //         <div style={style.selectorDivStyle}>
        //             <PortItemSelector
        //             portItemViews={this.state.portItemViews}
        //             portItemViewHandler={this.portItemViewHandler} />
        //         </div>
        //     </div>
        // )

        return (
            <div></div>
        )
    // }
}

export default Radium(videoView);