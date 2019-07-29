import React, { Component } from 'react';
import Radium from 'radium';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router/Redirect';
import MainView from './MainView/MainView';
import VideoView from './VideographyView/VideographyView';
import PhotoView from './PhotographyView/PhotographyView';
import EditingView from './EditingView/EditingView';
import ContactView from './ContactView/ContactView';

class ViewDisplay extends Component {

    state = {
        isMobile: false,

        width: window.innerWidth
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleScreenResize);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleScreenResize);
    };

    handleScreenResize = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {

        const screenWidth = this.state.width;

        const style = {
            test: {
                margin: '0',
                padding: '0',
                width: 'calc(100vw - 75px)',
                marginLeft: '75px'
            },

            portfolioDiv: {
                backgroundColor: 'red',
                height: '100%',
                height: '100%'
                // margin: '0',
                // padding: '0',
                // width: 'calc(100vw - 75px)',
                // marginLeft: '75px'
            },

            portfolioDivMobile: {
                backgroundColor: 'blue',
                height: '100%',
                height: '100%'
            },
        }

        if (screenWidth < 900) {
            style.test.width = '100%';
            style.test.height = 'calc(100% - 75px)';
            style.test.marginLeft = '0';
            style.test.marginTop = '75px';
        }

        return (
            <div style={style.test}>
                <Route path="/" exact strict component={MainView} />
                <Route path="/videography" exact strict component={VideoView} />
                <Route path="/photography" exact strict component={PhotoView} />
                <Route path="/editing" exact strict component={EditingView} />
                <Route path="/contact" exact strict component={ContactView} />
            </div>
        )
    }
}

export default Radium(ViewDisplay);