import grass from './set1/grass.png'
import forest from './set1/forest.png'
import forest_edge from './set1/forest_edge.png'
import forest_line from './set1/forest_line.png'
import river_corner from './set1/river_corner.png'
import river_line from './set1/river_line.png'
import grass_edge from './set1/grass_edge.png'

// export const set1Names = [
//     'grass',
//     'forest',
//     'forest_edge',
//     'forest_line',
//     'river_corner',
//     'river_line',
//     'grass_edge'
// ]

export const set1Names = [
        'grass',
        'river_corner',
        'river_line'
    ]

export const set1List = new Map([
	['grass', {
        top: 0,
        bot: 0,
        right: 0,
        left: 0,
        img: grass
	}],
	['forest', {
        top: 1,
        bot: 1,
        right: 1,
        left: 1,
        img: forest
	}],
	['forest_edge', {
        top: 0,
        bot: 2,
        right: 0,
        left: 3,
        img: forest_edge
	}],
	['forest_line', {
        top: 2,
        bot: 3,
        right: 0,
        left: 1,
        img: forest_line
	}],
	['grass_edge', {
        top: 1,
        bot: 3,
        right: 1,
        left: 2,
        img: grass_edge
	}],
	['river_corner', {
        top: 0,
        bot: 5,
        right: 0,
        left: 5,
        img: river_corner
	}],
	['river_line', {
        top: 5,
        bot: 5,
        right: 0,
        left: 0,
        img: river_line
	}]
]);
