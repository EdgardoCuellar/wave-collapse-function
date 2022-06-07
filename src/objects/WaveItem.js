import { set1Names, set1List} from "../assets/set1";

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
        var temp = this.top;
        this.top = this.left;
        this.left = this.bot;
        this.bot = this.right;
        this.right = temp;
        this.rotate = this.rotate + 90;
    }

    static getAllSets() {
        var sets = []
        for (var i = 0; i < set1Names.length; i++) {
            sets[i] = new WaveItem(set1Names[i], set1List.get(set1Names[i]).img,
                set1List.get(set1Names[i]).top, set1List.get(set1Names[i]).bot,
                set1List.get(set1Names[i]).right, set1List.get(set1Names[i]).left)
        }
        return sets;
    }
}

export default WaveItem