import React from 'react';
import Radium from 'radium';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router/Redirect';
import MainView from './MainView/MainView';
import VideoView from './VideographyView/VideographyView';
import PhotoView from './PhotographyView/PhotographyView';
import EditingView from './EditingView/EditingView';
import ContactView from './ContactView/ContactView';

const viewDisplay = (props) => {

    const style = {
        test: {
            
        }
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

export default Radium(viewDisplay);