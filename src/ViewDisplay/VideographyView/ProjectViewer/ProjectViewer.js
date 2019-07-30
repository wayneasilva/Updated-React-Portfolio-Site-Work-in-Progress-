import React, { Component } from 'react';
import Radium from 'radium';
import ProjectViewerSelector from './ProjectViewerSelector/ProjectViewerSelector';
import ProjectViewerDisplay from './ProjectViewerDisplay/ProjectViewerDisplay';

class ProjectViewer extends Component {
    state = {
        portItemViews: [
            {
                id: '1',
                name: 'First Project',
                // img: `${portImage1}`,
                about: 'We all have to start somewhere!',
                isLoaded: false
            },
            {
                id: '2',
                name: 'Micro Clock Project',
                // img: `${portImage2}`,
                about: 'This program was a learning tool!',
                isLoaded: true
            },
            {
                id: '3',
                name: 'Real Steel',
                // img: `${portImage3}`,
                about: ' lorem 3',
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
        // const style = {
        //     test: {
        //         display: 'flex',
        //         flexDirection: 'column',
        //         // justifyContent: 'center',
        //         // alignItems: 'center',
        //         margin: '0',
        //         padding: '0',
        //         width: 'calc(100vw - 75px)',
        //         height: '100vh',
        //         backgroundColor: '#FFF'
        //     },
    
        //     porfolioViewDivStyle: {
        //         width: 'calc(100vw - 75px)',
        //         height: '90vh',
        //         backgroundColor: '#FFF'
        //     },
    
        //     selectorDivStyle: {
        //         width: 'calc(100vw - 75px)',
        //         height: '10vh'
        //     }
        // }

        return (
            <div>
                <ProjectViewerDisplay portItems={this.state.portItemViews} />
                <ProjectViewerSelector
                    portItems={this.state.portItemViews} 
                    portViewHandler={this.portItemViewHandler} 
                />
            </div>
        )
    }
}

export default Radium(ProjectViewer);