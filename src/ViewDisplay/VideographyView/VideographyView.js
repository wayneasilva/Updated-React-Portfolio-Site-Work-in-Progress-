import React, {Component} from 'react';
import Radium from 'radium';
import portImage1 from '../../images/portImage1.jpg';
import portImage2 from '../../images/portImage2.jpg';
import portImage3 from '../../images/portImage3.jpg';
import PortItemSelector from './PortItemSelector/PortItemSelector';
import MainViewDisplay from '../MainViewDisplay/MainViewDisplay.js';

class VideoView extends Component {
    
    state = {
        portItemViews: [
            {
                id: '1',
                name: 'Project Heat Atlanta',
                img: `${portImage1}`,
                about: 'Loprem one',
                isLoaded: 'true'
            },
            {
                id: '2',
                name: 'Trey Davidson',
                img: `${portImage2}`,
                about: 'Lorem 2',
                isLoaded: 'false'
            },
            {
                id: '3',
                name: 'Real Steel',
                img: `${portImage3}`,
                about: ' lorem 3',
                isLoaded: 'false'
            }
        ]
    }

    portItemViewHandler = (id) => {
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
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: 'center',
                // alignItems: 'center',
                margin: '0',
                padding: '0',
                width: 'calc(100vw - 75px)',
                height: '100vh',
                backgroundColor: '#FFF'
            },
    
            porfolioViewDivStyle: {
                width: 'calc(100vw - 75px)',
                height: '90vh',
                backgroundColor: '#FFF'
            },
    
            selectorDivStyle: {
                width: 'calc(100vw - 75px)',
                height: '10vh'
            }
        }

        return (
            <div style={style.test}>
                <div style={style.porfolioViewDivStyle}>
                    <MainViewDisplay />
                </div>
                <div style={style.selectorDivStyle}>
                    <PortItemSelector
                    portItemViews={this.state.portItemViews}
                    portItemViewHandler={this.portItemViewHandler} />
                </div>
            </div>
        )
    }
}

export default Radium(VideoView);