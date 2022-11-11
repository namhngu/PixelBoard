class Node {
    constructor(key) {
        this.key = key;
    }
    value = null;
    pointers = {};
}

class Radix {
    constructor() {
        this.root = new Node("");
    }

    add(fullKey, value) {
        let arr = fullKey.split(".");
        let curr = root;
        for (let i = 0; i < arr.length; i++) {
            if (curr.pointers[arr[i]] == null) {
                curr.pointers[arr[i]] == new Node(arr[i]);
            }
            curr = curr.pointers[arr[i]];
        }
        curr.value = value;
    }

    find(fullKey) {
        let arr = fullKey.split(".");
        let curr = root;
        for (let i = 0; i < arr.length; i++) {
            if (curr == null) {
                return null;
            }
            curr = curr.pointers[arr[i]];
        }
        return curr;
    }
}

const radixTree = new Radix();

export { radixTree }