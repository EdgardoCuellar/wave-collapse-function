import { Component } from 'react';
import WaveItem from '../objects/WaveItem';
import '../style/SelectBar.css';
import BlockItem from './BlockItem';

class SelectBar extends Component {

    render() {
        var setName = WaveItem.getSetName();
        var setList = WaveItem.getSetList();

        var blockList = [];

        setName.map((name) => 
            blockList.push(<BlockItem 
                waveItem={new WaveItem(name, setList.get(name).img,
                                        setList.get(name).top, setList.get(name).bot,
                                        setList.get(name).right, setList.get(name).left)}
                selected={this.props.selected}>
            </BlockItem>)
        );

        return (
            <div className='items-containers'>
                {blockList}
            </div>
        )
    }
}

export default SelectBar