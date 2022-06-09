import ground from './set2/ground.png'
import ground_leave from './set2/ground_leave.png'
import sky from './set2/sky.png'
import sky_flowers from './set2/sky_flowers.png'
import sky_leave_duplicate from './set2/sky_leave_duplicate.png'
import sky_leave_merge from './set2/sky_leave_merge.png'
import sky_leave_one_duplicate from './set2/sky_leave_one_duplicate.png'
import sky_cloud from './set2/sky_cloud.png'
import sky_one_flower from './set2/sky_one_flower.png'
import ground_full from './set2/ground_full.png'

export const set2Names = [
    'ground',
    'ground_leave',
    'sky',
    'sky_flowers',
    'sky_leave_duplicate',
    'sky_leave_merge',
    'sky_leave_one_duplicate',
    'sky_cloud',
    'sky_one_flower',
    'ground_full',
]

// TOP BOT RIGHT LEFT
export const set2List = new Map([
	['ground', {
        top: 0,
        bot: 10,
        right: 1,
        left: 1,
        img: ground,
        sides: [[]]
	}],
	['ground_leave', {
        top: 2,
        bot: 10,
        right: 1,
        left: 1,
        img: ground_leave,
        sides: [[]]
	}],
	['sky', {
        top: 0,
        bot: 0,
        right: 0,
        left: 0,
        img: sky,
        sides: [[]]
	}],
	['sky_flowers', {
        top: 0,
        bot: 5,
        right: 0,
        left: 0,
        img: sky_flowers,
        sides: [[]]
	}],
	['sky_leave_duplicate', {
        top: 5,
        bot: 2,
        right: 0,
        left: 0,
        img: sky_leave_duplicate,
        sides: [[]]
	}],
	['sky_leave_merge', {
        top: 4,
        bot: 2,
        right: 0,
        left: 0,
        img: sky_leave_merge,
        sides: [[]]
	}],
	['sky_leave_one_duplicate', {
        top: 2,
        bot: 4,
        right: 0,
        left: 0,
        img: sky_leave_one_duplicate,
        sides: [[]]
	}],
	['sky_cloud', {
        top: 0,
        bot: 0,
        right: 0,
        left: 0,
        img: sky_cloud,
        sides: [[]]
	}],
	['sky_one_flower', {
        top: 0,
        bot: 4,
        right: 0,
        left: 0,
        img: sky_one_flower,
        sides: [[]]
	}],
	['ground_full', {
        top: 10,
        bot: 10,
        right: 10,
        left: 10,
        img: ground_full,
        sides: [[]]
	}],
]);
