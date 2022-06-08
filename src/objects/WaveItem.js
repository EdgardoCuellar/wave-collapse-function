import { set1Names, set1List} from "../assets/set1";
import { set2Names, set2List} from "../assets/set2";

const ACTUAL_SET = 2;

class WaveItem {

    constructor(name, img, top, bot, right, left, rotate) {
        this.name = name;
        if (img===undefined) {
            this.img = null;
        } else {
            this.img = img;
        }
        this.top = top;
        this.bot = bot;
        this.right = right;
        this.left = left;
        if (rotate===undefined) {
            this.rotate = 0;
        } else {
            this.rotate = rotate;
        }
    }

    getName() {
        return this.name;
    }

    getImagePath() {
        return this.img;
    }

    getRotation(){
        return this.rotate;
    }

    couldMatch(side) {
        if (side === this.top || side === this.bot || side === this.right || side === this.left)
            return true;
        else 
            return false;
    }

    getTop() {
        return this.top;
    }

    getBot() {
        return this.bot;
    }

    getLeft() {
        return this.left;
    }

    getRight() {
        return this.right;
    }

    rotate90() {
        var setItem;
        switch (ACTUAL_SET) {
            case 1:
                setItem = set1List.get(this.name);
                break;
            case 2:
                setItem = set2List.get(this.name);
                break;
            default:
                setItem = set1List.get(this.name);
                break;
        }

        if (this.rotate/90 < setItem.sides.length) {
            this.top = setItem.sides[this.rotate/90][0];
            this.bot = setItem.sides[this.rotate/90][1];
            this.right = setItem.sides[this.rotate/90][2];
            this.left =setItem.sides[this.rotate/90][3];
            this.rotate = this.rotate + 90;
        }
    }

    static getAllSets() {
        var setName;
        var setList;
        switch (ACTUAL_SET) {
            case 1:
                setName = set1Names;
                setList = set1List;
                break;
            case 2:
                setName = set2Names;
                setList = set2List;
                break;
            default:
                setName = set1Names;
                setList = set1List;
                break;
        }


        var sets = []
        for (var i = 0; i < setName.length; i++) {
            sets[i] = new WaveItem(setName[i], setList.get(setName[i]).img,
                                    setList.get(setName[i]).top, setList.get(setName[i]).bot,
                                    setList.get(setName[i]).right, setList.get(setName[i]).left)
        }
        return sets;
    }
}

export default WaveItem