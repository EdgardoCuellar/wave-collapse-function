import balls from './set4/balls.png'
import balls_2 from './set4/balls_2.png'
import end from './set4/end.png'
import end_2 from './set4/end_2.png'
import lines from './set4/lines.png'
import superpose from './set4/superpose.png'

export const set4Names = [
        'balls',
        'balls_2',
        'end',
        'end_2',
        'lines',
        'superpose',
]

// TOP BOT RIGHT LEFT
export const set4List = new Map([
	['balls', {
        top: 0,
        bot: 0,
        right: 1,
        left: 0,
        img: balls,
        sides: [[0, 1, 0, 0]]
	}],
	['balls_2', {
        top: 0,
        bot: 0,
        right: 0,
        left: 2,
        img: balls_2,
        sides: [[2, 0, 0, 0]]
	}],
	['end', {
        top: 0,
        bot: 0,
        right: 0,
        left: 1,
        img: end,
        sides: [[1, 0, 0, 0]]
	}],
	['end_2', {
        top: 0,
        bot: 0,
        right: 2,
        left: 0,
        img: end_2,
        sides: [[0, 2, 0, 0]]
	}],
	['lines', {
        top: 0,
        bot: 0,
        right: 1,
        left: 1,
        img: lines,
        sides: [[1, 1, 0, 0], [0, 0, 2, 2], [2, 2, 0, 0]]
	}],
	['superpose', {
        top: 1,
        bot: 1,
        right: 1,
        left: 1,
        img: superpose,
        sides: [[2, 2, 1, 1], [1, 1, 2, 2], [2, 2, 2, 2]]
	}],
]);
