class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        var prev = this.keyStore.get(key) || {};
        prev[timestamp] = value;
        this.keyStore.set(key, prev);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        var val = this.keyStore.get(key);
        
        if (val) {
            if (val[timestamp] != undefined) {
                return val[timestamp];
            } else {
                var timestampInMap = Object.keys(val);
                timestampInMap = timestampInMap.filter(val => Number(val) < timestamp).sort((a, b) => Number(b) - Number(a));

                if (timestampInMap.length > 0 && timestampInMap[0] < timestamp) {
                    return val[timestampInMap[0]];
                } else {
                    return "";
                }
            }
        } else {
            return "";
        } 
    }
}
