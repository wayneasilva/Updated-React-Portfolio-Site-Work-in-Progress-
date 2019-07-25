import React from 'react';
import Radium from 'radium';
import Route from 'react-router-dom/Route';
import Navbar from '../Navbar/Navbar';
import MainView from '../ViewDisplay/MainView/MainView';
import VideoView from '../ViewDisplay/VideographyView/VideographyView';
import PhotoView from '../ViewDisplay/PhotographyView/PhotographyView';
import EditingView from '../ViewDisplay/EditingView/EditingView';
import ContactView from '../ViewDisplay/ContactView/ContactView';
// import ViewDisplay from '../ViewDisplay/ViewDisplay';

// const mainPage = () => {
//     const style = {
//         mainPageDiv: {
//             display: 'flex',
//             width: '100vw',
//         }
//     }

//     return (
//         <div style={style.mainPageDiv}>
//             <Route path="/" render={() => <MainView />} />
//             <Route path="/videography" render={() => <VideoView />} />
//             <Route path="/photography" render={() => <PhotoView />} />
//             <Route path="/editing" render={() => <EditingView />} />
//             <Route path="/contact" render={() => <ContactView />} />
//             {/* <ViewDisplay /> */}
//         </div>
//     )
// }

// export default Radium(mainPage);