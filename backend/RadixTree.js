class Node {
    constructor() {
        this.value = null;
        this.pointers = Array(256);
    }
}

export default class Radix {
    constructor() {
        this.root = new Node("");
    }

    add(fullKey, value) {
        let arr = fullKey.split(".");
        let curr = this.root;
        for (let i = 0; i < arr.length; i++) {
            let index = parseInt(arr[i]);
            if (curr.pointers[index] === undefined) {
                curr.pointers[index] = new Node();
            }
            curr = curr.pointers[index];
        }
        curr.value = value;
    }

    find(fullKey) {
        let arr = fullKey.split(".");
        console.log
        let curr = this.root;
        for (let i = 0; i < arr.length; i++) {
            curr = curr.pointers[arr[i]];
            if (curr === undefined) {
                return null;
            }
        }
        return curr;
    }
}