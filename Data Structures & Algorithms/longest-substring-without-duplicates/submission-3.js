class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        var x = {};
        var i = 0;
        var j = 0;
        var maxLength = 0;
        while (j < s.length) {
            if (x[s[j]] != undefined) {
                // case when i have found a repeating character
                // set left pointer i to the 1 ahead of prev occurrence (found in  x)
                // but dont move backward (important)
                i = Math.max(x[s[j]] + 1, i);
            }

            x[s[j]] = j;
            maxLength = Math.max(maxLength, j - i + 1)
            j++;
        }
        return maxLength;
    }
}