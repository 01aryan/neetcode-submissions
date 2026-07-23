class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t.length > s.length || t.length === 0) return "";

        var map = {};
        for (var c of t) {
            map[c] = (map[c] || 0) + 1;
        }

        var left = 0;
        var right = 0;
        var count = 0;
        var minLength = s.length + 1;
        var startIndex = -1;
        
        while (right < s.length) {
            if (map[s[right]] > 0) count++;

            map[s[right]] = (map[s[right]] || 0) -1;

            // trying to shrink the substring to find minLength
            while (count === t.length) {
                if (right - left + 1 < minLength) {
                    minLength = right - left + 1;
                    startIndex = left;
                }
                map[s[left]] = (map[s[left]] || 0) + 1;
                if (map[s[left]] > 0) count--;
                left++;
            }
            right++;
        }
        
        return startIndex === -1 ? "" : s.substring(startIndex, startIndex+minLength)
    }
}
