import { Component } from 'react';
import '../style/BlockItem.css';

class BlockItem extends Component {


    state = {
        waveItem: '',
        callBackSelected: ''
    }

    constructor(props) {
        super(props);
        this.state = {
            waveItem: props.waveItem,
            callBackSelected: props.selected
        }
    }

    selected(who) {
        this.state.callBackSelected(who);
    }

    render() {
        return (
            <div className='item-container' onClick={(n) => this.selected(this.state.waveItem.getName())}>
                <img className='item-img' src={this.state.waveItem.getImagePath()} alt="" />
            </div>
        )
    }
}

export default BlockItem