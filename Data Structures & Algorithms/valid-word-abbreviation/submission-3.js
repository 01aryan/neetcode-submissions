class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        var i = 0;
        var j = 0;
        while (i < word.length && j < abbr.length) {
            if (abbr[j] === '0') return false;
            if (abbr[j] >= '0' && abbr[j] <= '9') {
                var num = 0;
                while (j < abbr.length && abbr[j] >= '0' && abbr[j] <= '9') {
                    num = num * 10 + Number(abbr[j]);
                    j++;
                }
                i = i + num;
            } else {
                // char found, match with word[i]
                if (word[i] !== abbr[j]) {
                    return false;
                }
                i++;
                j++;
            }
        }
        return i == word.length && j == abbr.length;
    }
}
