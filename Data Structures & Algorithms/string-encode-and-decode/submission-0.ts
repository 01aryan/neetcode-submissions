class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        var output = '';
        for (var n of strs) {
            output += n.length + "#" + n;
        }
        return output;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        var i=0, j=0;
        var output = [];
        while (i < str.length){
            // j = i;
            while(str[j] != "#"){
                j++;
            }
            var len = parseInt(str.substring(i, j));
            i = j+1;
            j = i + len;
            var decodedStr = str.substring(i, j);
            output.push(decodedStr);
            i = j;
        }
        return output;
    }
}
