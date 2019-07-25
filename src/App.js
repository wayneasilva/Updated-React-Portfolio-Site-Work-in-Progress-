import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter  as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Radium, {StyleRoot} from 'radium';
import classes from './App.module.css';
import Navbar from './Navbar/Navbar';
import ViewDisplay from './ViewDisplay/ViewDisplay';

class App extends Component {

  state = {
    
  }

  render() {
    const style = {
      display: 'flex',
      flexDirection: 'row'
    }

    return (
      <StyleRoot>
        <Router>
          <div className={classes.App}>
            <Navbar />
            <ViewDisplay mViewHandler={this.portItemViewHandler} />
          </div>
        </Router>
      </StyleRoot>
    );
  }
}

export default Radium(App);
