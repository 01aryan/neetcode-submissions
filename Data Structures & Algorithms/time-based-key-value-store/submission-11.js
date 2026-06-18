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
        var prev = this.keyStore.get(key) || [];
        prev.push([timestamp, value]);
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
            var left = 0;
            var right = val.length -1;
            var result = '';
            while (left <= right) {
                var mid = Math.floor((left + right) / 2);
                if (val[mid][0] <= timestamp) {
                    result = val[mid][1];
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return result;
        } else {
            return "";
        } 
    }
}
