import { set1Names, set1List} from "../assets/set1";
import { set2Names, set2List} from "../assets/set2";
import { set3Names, set3List} from "../assets/set3";
import { set4Names, set4List} from "../assets/set4";


class WaveItem {

    static ACTUAL_SET = 1;

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
        switch (WaveItem.ACTUAL_SET) {
            case 1:
                setItem = set1List.get(this.name);
                break;
            case 2:
                setItem = set2List.get(this.name);
                break;
            case 3:
                setItem = set3List.get(this.name);
                break;
            case 4:
                setItem = set4List.get(this.name);
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

    static getSetName() {
        var setName;
        switch (WaveItem.ACTUAL_SET) {
            case 1:
                setName = set1Names;
                break;
            case 2:
                setName = set2Names;
                break;
            case 3:
                setName = set3Names;
                break;
            case 4:
                setName = set4Names;
                break;
            default:
                setName = set1Names;
                break;
        }
        return setName;
    }

    static getSetList() {
        var setList;
        switch (WaveItem.ACTUAL_SET) {
            case 1:
                setList = set1List;
                break;
            case 2:
                setList = set2List;
                break;
            case 3:
                setList = set3List;
                break;
            case 4:
                setList = set4List;
                break;
            default:
                setList = set1List;
                break;
        }
        return setList;
    }

    static getAllSets() {
        var setName = WaveItem.getSetName();
        var setList = WaveItem.getSetList();

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