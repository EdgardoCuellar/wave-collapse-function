import React, { Component } from "react";
import { set2List } from "../assets/set2";
import WaveItem from "../objects/WaveItem";

import '../style/MainBlock.css';

import SelectBar from "./SelectBar";

class MainBlock extends Component {

    state = {
        N: 5,
        selected: 'grass',
        matrixBlock: [],
        isClicked: false,
    }

    constructor(props) {
        super(props);
        var matrixBlock = [];
        for (var i = 0;i < props.N;i++) {
            var lineBlock = [];
            for (var j = 0;j < props.N;j++) {
                lineBlock[j] = new WaveItem();
            }
            matrixBlock[i] = lineBlock;
        }
        
        this.state = {
            matrixBlock: matrixBlock,
            N: props.N,
            isClicked: false,
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
            if (possibilities.length === 0) {
                console.log(x, y, "Right");
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
            if (possibilities.length === 0) {
                console.log(x, y, "Left");
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
            if (possibilities.length === 0) {
                console.log(x, y, "Bot");
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
            if (possibilities.length === 0) {
                console.log(x, y, "Top");
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
            matrixBlock[y][x] = new WaveItem(selected, set2List.get(selected).img
                                ,set2List.get(selected).top, set2List.get(selected).bot, set2List.get(selected).right, set2List.get(selected).left);
            this.setState({
                isClicked: true,
                matrixBlock: matrixBlock,
            })
            this.waveFunctionCollapse(x, y, matrixBlock);
        }
    }

    render () {
        var size = 700/ this.state.N;
        return (
            <div className='main-containers'>
                <div className="blocks-containers">
                    {this.state.matrixBlock.map((line, i) => 
                        <div className="line-containers">
                            {line.map((object, j) => 
                                <div className='block-containers' onClick={(a, b, s) => this.clickOnBlock(j, i, this.state.selected)}
                                    style={{width: size, height: size}} >
                                    <img className='block-img' 
                                         src={this.state.matrixBlock[i][j].getImagePath()} 
                                         style={{ transform: 'rotate('+this.state.matrixBlock[i][j].getRotation()+'deg)'}} alt="">
                                    </img>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <SelectBar 
                    selected={(name) => {
                        this.setState({selected: name});
                    }}>
                </SelectBar>
            </div>
        )
    }
}

export default MainBlock

