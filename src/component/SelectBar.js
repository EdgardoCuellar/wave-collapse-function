import { Component } from 'react';
import { set1List, set1Names } from '../assets/set1';
import { set2List, set2Names } from '../assets/set2';
import WaveItem from '../objects/WaveItem';
import '../style/SelectBar.css';
import BlockItem from './BlockItem';

class SelectBar extends Component {

    render() {
        return (
            <div className='items-containers'>
                {set2Names.map((name) => 
                    <BlockItem 
                        waveItem={new WaveItem(name, set2List.get(name).img,
                                                set2List.get(name).top, set2List.get(name).bot,
                                                set2List.get(name).right, set2List.get(name).left)}
                        selected={this.props.selected}>
                     </BlockItem>
                )}
            </div>
        )
    }
}

export default SelectBar