import grass from './set1/grass.png'
import forest from './set1/forest.png'
import forest_edge from './set1/forest_edge.png'
import forest_line from './set1/forest_line.png'
import grass_edge from './set1/grass_edge.png'
import river_corner from './set1/river_corner.png'
import river_line from './set1/river_line.png'

export const set1Names = [
    'grass',
    'forest',
    'forest_edge',
    'forest_line',
    'grass_edge',
    'river_corner',
    'river_line',
]

// TOP BOT RIGHT LEFT
export const set1List = new Map([
	['grass', {
        top: 0,
        bot: 0,
        right: 0,
        left: 0,
        img: grass,
        sides: [[]]
	}],
	['forest', {
        top: 1,
        bot: 1,
        right: 1,
        left: 1,
        img: forest,
        sides: [[]]
	}],
	['forest_edge', {
        top: 0,
        bot: 3,
        right: 0,
        left: 2,
        img: forest_edge,
        sides: [[3, 0, 0, 4], [5 ,0 ,4 , 0], [0, 5, 2, 0]]
	}],
	['forest_line', {
        top: 3,
        bot: 3,
        right: 0,
        left: 1,
        img: forest_line,
        sides: [[1, 0, 4, 4], [5, 5,1,0], [0, 1, 2, 2]]
	}],
	['grass_edge', {
        top: 1,
        bot: 5,
        right: 1,
        left: 4,
        img: grass_edge,
        sides: [[5,1,1,2], [3, 1, 1, 2], [1, 3, 4, 1]]
	}],

	['river_corner', {
        top: 0,
        bot: 10,
        right: 0,
        left: 10,
        img: river_corner,
        sides: [[10, 0, 0, 10], [10, 0, 10, 0], [0, 10, 10, 0]]
	}],
	['river_line', {
        top: 10,
        bot: 10,
        right: 0,
        left: 0,
        img: river_line,
        sides: [[0, 0, 10, 10]]
	}]
]);
