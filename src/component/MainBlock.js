import React, { Component } from "react";
import WaveItem from "../objects/WaveItem";

import '../style/MainBlock.css';

import SelectBar from "./SelectBar";


class MainBlock extends Component {

    state = {
        N: 5,
        selected: 'grass',
        matrixBlock: [],
        isClicked: false,
        selectBar: null,
    }

    constructor(props) {
        super(props);
        this.start(props.N, true);
    }

    start(gridSize, isConstructor = false) {
        var matrixBlock = [];
        for (var i = 0;i < gridSize;i++) {
            var lineBlock = [];
            for (var j = 0;j < gridSize;j++) {
                lineBlock[j] = new WaveItem();
            }
            matrixBlock[i] = lineBlock;
        }
        var selectBar = <SelectBar selected={(name) => {this.setState({selected: name});}}/>
        if (isConstructor) {
            this.state = {
                matrixBlock: matrixBlock,
                N: gridSize,
                isClicked: false,
                selectBar: selectBar,
            };
        } else {
            this.setState({
                matrixBlock: matrixBlock,
                N: gridSize,
                isClicked: false,
                selectBar: selectBar,
            });
        }
    }

    waveFunctionCollapse(x, y) {
        var tempMatrix = [[x,y]];
        while (tempMatrix.length > 0) {
            var xy = tempMatrix.shift();
            if (xy[0]+1 < this.state.N && this.state.matrixBlock[xy[1]][xy[0]+1].getName() === undefined) {
                tempMatrix.push([xy[0]+1, xy[1]]);
            }
            if (xy[0]-1 >= 0 && this.state.matrixBlock[xy[1]][xy[0]-1].getName() === undefined) {
                tempMatrix.push([xy[0]-1, xy[1]]);
            }
            if (xy[1]+1 < this.state.N && this.state.matrixBlock[xy[1]+1][xy[0]].getName() === undefined) { 
                tempMatrix.push([xy[0], xy[1]+1]);
            }
            if (xy[1]-1 >= 0 && this.state.matrixBlock[xy[1]-1][xy[0]].getName() === undefined) {
                tempMatrix.push([xy[0], xy[1]-1]);
            }
            
            this.waveFunctionCollapseBlock(xy[0], xy[1], this.state.matrixBlock);         
        }
    }

    waveFunctionCollapseBlock(x, y, matrixBlock) {
        var possibilities = [];
        if (x+1 < this.state.N) {
            var allSet = WaveItem.getAllSets();
            for (var i = 0;i<allSet.length;i++)  {
                if (this.mathAllSides(x+1, y, allSet[i]) === true) {
                    possibilities.push(allSet[i]);
                }
            }
            var rng = Math.floor(Math.random() * possibilities.length);
            matrixBlock[y][x+1] = new WaveItem(possibilities[rng].getName(), possibilities[rng].img
                                ,possibilities[rng].top, possibilities[rng].bot, possibilities[rng].right, possibilities[rng].left, possibilities[rng].rotate);
        }
        if (x-1 >= 0) {
            possibilities = [];
            allSet = WaveItem.getAllSets();
            for (i = 0;i<allSet.length;i++)  {
                if (this.mathAllSides(x-1, y, allSet[i]) === true) {
                    possibilities.push(allSet[i]);
                }
            }
            rng = Math.floor(Math.random() * possibilities.length);
            matrixBlock[y][x-1] = new WaveItem(possibilities[rng].getName(), possibilities[rng].img
                                ,possibilities[rng].top, possibilities[rng].bot, possibilities[rng].right, possibilities[rng].left, possibilities[rng].rotate);
        }
        if (y+1 < this.state.N) { 
            possibilities = [];
            allSet = WaveItem.getAllSets();
            for (i = 0;i<allSet.length;i++)  {
                if (this.mathAllSides(x, y+1, allSet[i]) === true) {
                    possibilities.push(allSet[i]);
                }
            }
            rng = Math.floor(Math.random() * possibilities.length);
            matrixBlock[y+1][x] = new WaveItem(possibilities[rng].getName(), possibilities[rng].img
                                ,possibilities[rng].top, possibilities[rng].bot, possibilities[rng].right, possibilities[rng].left, possibilities[rng].rotate);
        }
        if (y-1 >= 0) {
            possibilities = [];
            allSet = WaveItem.getAllSets();
            for (i = 0;i<allSet.length;i++)  {
                if (this.mathAllSides(x, y-1, allSet[i]) === true) {
                    possibilities.push(allSet[i]);
                }
            }
            rng = Math.floor(Math.random() * possibilities.length);
            matrixBlock[y-1][x] = new WaveItem(possibilities[rng].getName(), possibilities[rng].img
                                ,possibilities[rng].top, possibilities[rng].bot, possibilities[rng].right, possibilities[rng].left, possibilities[rng].rotate);
        }

        this.setState({
            matrixBlock: matrixBlock,
        })

    }

    mathAllSides(x, y, block) {
        for (var i = 0;i < 4;i++) {
            if (this.matchOneSide(x, y, block)) {
                return true;
            }
            if (i < 3)
                block.rotate90();
        }
        return false;
    }

    matchOneSide(x, y, block) {
        if (x-1 >= 0 && this.state.matrixBlock[y][x-1].getName() !== undefined) {
            if (block.getLeft() !== this.state.matrixBlock[y][x-1].getRight()) {
                return false;
            }
        } 
        if (x+1 < this.state.N && this.state.matrixBlock[y][x+1].getName() !== undefined) {
            if (block.getRight() !== this.state.matrixBlock[y][x+1].getLeft()) {
                return false;
            }
        }
        if (y-1 >= 0 && this.state.matrixBlock[y-1][x].getName() !== undefined) {
            if (block.getTop() !== this.state.matrixBlock[y-1][x].getBot()) {
                return false;
            }
        }
        if (y+1 < this.state.N && this.state.matrixBlock[y+1][x].getName() !== undefined) {
            if (block.getBot() !== this.state.matrixBlock[y+1][x].getTop()) {
                return false;
            }
        }
        return true;
    }

    clickOnBlock(x, y, selected) {
        if (selected !== undefined || this.state.isClicked === false) {
            var matrixBlock = this.state.matrixBlock;
            var actualSetList = WaveItem.getSetList();
            matrixBlock[y][x] = new WaveItem(selected, actualSetList.get(selected).img
                                ,actualSetList.get(selected).top, actualSetList.get(selected).bot, actualSetList.get(selected).right, actualSetList.get(selected).left);
            this.setState({
                isClicked: true,
                matrixBlock: matrixBlock,
            })
            this.waveFunctionCollapse(x, y, matrixBlock);
        }
    }

    handleGridOption(e) {
        this.start(parseInt(e.target.value), false);
    }

    handleSet(e) {
        WaveItem.ACTUAL_SET = parseInt(e.target.value);
        this.start(this.state.N, false);
    }

    render () {
        var size = 700/ this.state.N;
        return (
            <div className='main-containers'>
                <div className="options-container">
                    <select className="option-item-grid" onChange={(e) => this.handleGridOption(e)} value={this.state.N}>
                        <option value="5">5</option>
                        <option value="8">8</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                    <select className="option-item-set" onChange={(e) => this.handleSet(e)}>
                        <option value="1">Plains</option>
                        <option value="2">Flowers</option>
                        <option value="3">Wall</option>
                        <option value="4">Dicks</option>
                    </select>
                    <button className="option-item-restart" onClick={() => this.start(this.state.N, false)}>Restart</button>
                </div>
                <div className="blocks-containers">
                    {this.state.matrixBlock.map((line, i) => 
                        <div className="line-containers">
                            {line.map((object, j) => 
                                <div className='block-containers' onClick={(a, b, s) => this.clickOnBlock(j, i, this.state.selected)}
                                    style={{width: size, height: size}} >
                                    <img className='block-img' alt="" resizeMode="cover"
                                         src={this.state.matrixBlock[i][j].getImagePath()} 
                                         style={{ transform: 'rotate('+this.state.matrixBlock[i][j].getRotation()+'deg)'}}>
                                    </img>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                {this.state.selectBar}
            </div>
        )
    }
}

export default MainBlock

