class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if (s.length != t.length) return false;
        var x = {};
        var y = {};
        for (var i=0; i < s.length; i++) {
            if (x[s[i]] == undefined) {
                x[s[i]] = 1;
            } else {
                x[s[i]]++;
            }
            if (y[t[i]] == undefined) {
                y[t[i]] = 1;
            } else {
                y[t[i]]++;
            }
        }
        for (var key in x) {
            if (x[key] !== y[key]) {
                return false;
            }
        }
        return true;
    }
}
