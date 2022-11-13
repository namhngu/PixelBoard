import RadixTree from "./RadixTree.js";
import { SETTINGS } from "./server.js"
const date = new Date();

class Value {
    constructor() {
        this.lastAccess = date.getTime();
        this.paints = SETTINGS.MAX_PAINTS;
    }
}

class UserData {
    allUsers = new RadixTree();

    liveUpdate(ip) {
        if (this.allUsers.find(ip) == null) {
            this.allUsers.add(ip, new Value());
        }
        if ((date.getTime - this.allUsers.find(ip).value.lastAccess) >= SETTINGS.TIME_REFRESH) {
            let user = this.allUsers.find(ip).value;
            user.paints = Math.min(SETTINGS.MAX_PAINTS, (date.getTime - find(ip).value.lastAccess)/SETTINGS.TIME_REFRESH);
            user.lastAccess = date.getTime();
        }
    }

    userLeaves(ip) {
        this.allUsers.find(ip).value.lastAccess = date.getTime();
    }
    
    getPaints(ip) {
        return this.this.allUsers.find
    }
}