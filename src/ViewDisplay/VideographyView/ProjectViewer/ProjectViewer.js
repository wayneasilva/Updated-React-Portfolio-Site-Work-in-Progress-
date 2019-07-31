import React, { Component } from 'react';
import Radium from 'radium';
import ProjectViewerSelector from './ProjectViewerSelector/ProjectViewerSelector';
import ProjectViewerDisplay from './ProjectViewerDisplay/ProjectViewerDisplay';
import portImage1 from '../../../images/documentationjs.png';

class ProjectViewer extends Component {
    state = {
        portItemViews: [
            {
                id: '1',
                name: 'Documentation.js',
                img: `${portImage1}`,
                about: 'We all have to start somewhere!',
                isLoaded: true
            },
            {
                id: '2',
                name: 'Micro Clock Project',
                // img: `${portImage2}`,
                about: 'This program was a learning tool!',
                isLoaded: false
            },
            {
                id: '3',
                name: 'Burger Builder',
                // img: `${portImage3}`,
                about: 'One of my assignments that taught me about the flow of data and clever state use in React!',
                isLoaded: false
            }
        ]
    }

    // componentDidMount() {

    // }

    portItemViewHandler = (id) => {
        console.log(id)
        const portItemIndex = this.state.portItemViews.findIndex(view => {
            return view.id === id;
        })
        // console.log(portItemIndex)

        const portItemStates = [...this.state.portItemViews];
        // console.log(portItemStates);

        const portItemState = {
            ...this.state.portItemViews[portItemIndex]
        }

        // console.log(portItemState);
        // console.log('test');

        portItemStates.forEach( itemState => {
            if (itemState.id === id) {
                itemState.isLoaded = true;
            }

            if (itemState.id !== id) {
                itemState.isLoaded = false;
            }
        })

        // console.log(this.state.portItemViews);
        // console.log(portItemStates);

        this.setState({
            portItemViews: portItemStates
        })
        // console.log(portItemStates);
    }

    render() {
        const style = {
            test: {
                boxSizing: 'border-box',
                display: 'flex',
                flexDirection: 'row',
                // justifyContent: 'center',
                // alignItems: 'center',
                // margin: '100px',
                padding: '10px',
                // width: '75%',
                // width: 'calc(100vw - 75px)',
                height: '100%',
                backgroundColor: 'white'
            },

            display: {
                width: '50%'
            },

            selector: {
                width: '50%'
            },
    
            porfolioViewDivStyle: {
                width: 'calc(100vw - 75px)',
                // height: '90vh',
                backgroundColor: '#FFF'
            },
    
            selectorDivStyle: {
                width: 'calc(100vw - 75px)',
                // height: '10vh'
            }
        }

        return (
            //change styles later
            <div style={style.test}>
                <ProjectViewerDisplay style={style.display} portItems={this.state.portItemViews} />
                <ProjectViewerSelector
                    style={style.selector}
                    portItems={this.state.portItemViews} 
                    portViewHandler={this.portItemViewHandler} 
                />
            </div>
        )
    }
}

export default Radium(ProjectViewer);