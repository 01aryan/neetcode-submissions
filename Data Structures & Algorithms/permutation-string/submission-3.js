class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    // abc => abc, bca, cab, cba, bac, acb 
    // lecabee => lec, eca, cab, abe, bee
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        var s1Chars = new Array(26).fill(0);
        for (var i=0; i < s1.length; i++) {
            s1Chars[s1[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        var left = 0
        var right = left + s1.length;
        while (right <= s2.length) {
            var substr = s2.substring(left, right);
            // TODO: check if substr is anagram of s1
            var s2Chars = new Array(26).fill(0);
            for(var s of substr) {
                s2Chars[s.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            var allMatch = true;
            for (var j=0; j < s2Chars.length; j++) {
                if (s2Chars[j] != s1Chars[j]){
                    allMatch = false;
                    break;
                }
            }
            if(allMatch) {
                return true
            } else {
                left++;
                right = left + s1.length;
            }
        }
        return false;
    }
}
