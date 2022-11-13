import RadixTree from "./RadixTree.js";
import { SETTINGS } from "./server.js"
const date = new Date();
const allUsers = RadixTree;

class Value {
    constructor() {
        this.lastAccess = date.getTime();
        this.paints = SETTINGS.MAX_PAINTS;
    }
}

export default class UserData {
    constructor(ip) {
        this.ip = ip;
    }

    liveUpdate() {
        if (allUsers.find(this.ip) == null) {
            allUsers.add(this.ip, new Value());
        }
        if ((date.getTime - allUsers.find(this.ip).value.lastAccess) >= SETTINGS.TIME_REFRESH) {
            let user = allUsers.find(this.ip).value;
            user.paints = Math.min(SETTINGS.MAX_PAINTS, (date.getTime - find(this.ip).value.lastAccess)/SETTINGS.TIME_REFRESH);
            user.lastAccess = date.getTime();
        }
    }

    userLeaves() {
        allUsers.find(this.ip).value.lastAccess = date.getTime();
    }
    
    getPaints() {
        return allUsers.find(this.ip).value.paints;
    }
}