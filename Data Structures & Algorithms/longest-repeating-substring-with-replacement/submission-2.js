class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    characterReplacement(s, k) {
        var x = {};
        var maxLength = 0;
        var i = 0;
        var j = 0;
        var maxFreq = 0;
        while (j < s.length) {
            x[s[j]] = (x[s[j]] || 0) + 1;
            maxFreq = Math.max(x[s[j]], maxFreq);

            var currWindowLength = (j - i + 1);
            var lettersToReplace = currWindowLength - maxFreq;
            if (lettersToReplace > k) {
                x[s[i]] = x[s[i]] -1;
                i++;
            }
            maxLength = Math.max(maxLength, j-i+1);

            j++;
        }
        return maxLength;
    }
}
