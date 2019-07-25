import React, {Component} from 'react';
import Radium from 'radium';
import PortItem from './PortItem/PortItem';

const portItemSelector = (props) => {

    //     portItemViewHandler = (id) => {
    //         const portItemIndex = this.state.portItemViews.findIndex(view => {
    //             return view.id === id;
    //         })
    //         // console.log(portItemIndex)

    //         const portItemStates = [...this.state.portItemViews];
    //         // console.log(portItemStates);

    //         const portItemState = {
    //             ...this.state.portItemViews[portItemIndex]
    //         }

    //     portItemStates.forEach( itemState => {
    //         if (itemState.id === id) {
    //             itemState.isLoaded = true;
    //         }

    //         if (itemState.id !== id) {
    //             itemState.isLoaded = false;
    //         }
    //     })

    //     // console.log(this.state.portItemViews);
    //     // console.log(portItemStates);

    //     this.setState({
    //         portItemViews: portItemStates
    //     })
    //     // console.log(portItemStates);
    // }

    const style = {
        portItemSelector: {
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
        }
    }

    return (
        <div style={style.portItemSelector}>
            {props.portItemViews.map(item => {
                return <PortItem
                    name={item.name}
                    key={item.id}
                    id={item.id}
                    portItemViewHandler={props.portItemViewHandler}
                    portItemViews={props.portItemViews} />
                })}
        </div>
    )
}

export default Radium(portItemSelector);