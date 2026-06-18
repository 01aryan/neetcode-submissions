class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // groupAnagrams(strs: string[]): string[][] {
    //     var x = {};
    //     for (var i = 0; i < strs.length; i++) {
    //         var str = strs[i];
    //         var sortedStr = str.split("").sort().join();
    //         x[sortedStr] != undefined ? x[sortedStr].push(str) : x[sortedStr] = [str];
    //     }
        
    //     return Object.values(x);
    // }

    groupAnagrams(strs: string[]): string[][] {
        var x = {};
        for (var i = 0; i < strs.length; i++) {
            var str = strs[i];
            var alphabets = new Array(26).fill(0);
            for (var j = 0; j < str.length; j++) {
                alphabets[str[j].charCodeAt(0) - 'a'.charCodeAt(0)]+=1;
            }
            var key = alphabets.join("-");
            if (x[key] == undefined) {
                x[key] = [];
            }
            x[key].push(str);
        }
        return Object.values(x);
    }
}
