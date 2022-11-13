import RadixTree from "./RadixTree.js";
import { SETTINGS } from "./server.js"
const date = new Date();
const allUsers = RadixTree;

class Data {
    constructor() {
        this.lastAccess = date.getTime();
        this.paints = SETTINGS.MAX_PAINTS;
        this.group = null;
    }
}

export default class UserAcess {
    constructor(ip) {
        if (allUsers.find(ip) == null) {
            allUsers.add(ip, new Value());
        }
        this.node = allUsers.find(ip);
    }

    liveUpdate() {
        if ((date.getTime - this.node.value.lastAccess) >= SETTINGS.TIME_REFRESH) {
            let user = this.node.value;
            user.paints = Math.min(SETTINGS.MAX_PAINTS, (date.getTime - find(this.ip).value.lastAccess)/SETTINGS.TIME_REFRESH);
            user.lastAccess = date.getTime();
        }
    }

    userLeaves() {
        this.node.value.lastAccess = date.getTime();
    }
    
    getPaints() {
        return this.node.value.paints;
    }

    assignGroup(group) {
        this.node.group = group;
    }
} 