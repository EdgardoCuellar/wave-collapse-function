import { Component } from 'react';
import '../style/BlockItem.css';

class BlockItem extends Component {


    state = {
        callBackSelected: ''
    }

    constructor(props) {
        super(props);
        this.state = {
            callBackSelected: props.selected
        }
    }

    selected(who) {
        this.state.callBackSelected(who);
    }

    render() {
        return (
            <div className='item-container' onClick={(n) => this.selected(this.props.waveItem.getName())}>
                <img className='item-img' src={this.props.waveItem.getImagePath()} alt="" />
            </div>
        )
    }
}

export default BlockItem