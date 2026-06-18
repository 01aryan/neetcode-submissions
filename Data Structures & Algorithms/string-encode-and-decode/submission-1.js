class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        var result = "";
        for (var str of strs) {
            result += str.length + "#" + str;
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        var i = 0;
        var j = 0;
        var output = [];
        while (j < str.length) {
            if (str[j] != "#") {
                j++;
            } else {
                // ex: str = "2#Hi5#arpit"
                var lenStr = str.substring(i, j);
                var length = parseInt(lenStr);
                i = j + 1;
                j = i + length;
                var subStr = str.substring(i, j);
                output.push(subStr);
                i = j;
            }
        }
        return output;
    }
}
