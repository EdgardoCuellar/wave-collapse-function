import cross from './set3/cross.png'
import full from './set3/full.png'
import line from './set3/line.png'
import semi_cross from './set3/semi_cross.png'

export const set3Names = [
    'cross',
    'full',
    'line',
    'semi_cross',
]

// TOP BOT RIGHT LEFT
export const set3List = new Map([
	['cross', {
        top: 0,
        bot: 0,
        right: 0,
        left: 0,
        img: cross,
        sides: [[]]
	}],
	['full', {
        top: 1,
        bot: 1,
        right: 1,
        left: 1,
        img: full,
        sides: [[]]
	}],
	['line', {
        top: 1,
        bot: 1,
        right: 0,
        left: 0,
        img: line,
        sides: [[0, 0, 1, 1]]
	}],
	['semi_cross', {
        top: 0,
        bot: 1,
        right: 0,
        left: 0,
        img: semi_cross,
        sides: [[0, 0, 0, 1], [1, 0, 0, 0], [0, 0, 1, 0]]
	}],
]);
