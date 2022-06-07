import { Component } from 'react';
import { set1List, set1Names } from '../assets/set1';
import WaveItem from '../objects/WaveItem';
import '../style/SelectBar.css';
import BlockItem from './BlockItem';

class SelectBar extends Component {

    render() {
        return (
            <div className='items-containers'>
                {set1Names.map((name) => 
                    <BlockItem 
                        waveItem={new WaveItem(name, set1List.get(name).img,
                                                set1List.get(name).top, set1List.get(name).bot,
                                                set1List.get(name).right, set1List.get(name).left)}
                        selected={this.props.selected}>
                     </BlockItem>
                )}
            </div>
        )
    }
}

export default SelectBar