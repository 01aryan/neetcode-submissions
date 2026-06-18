class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        var output = [];
        function generate(open, close, str) {
            if (open === close && (open + close === 2*n)) {
                output.push(str);
                return
            }
            if (open < n) {
                generate(open+1, close, str+"(");
            }
            if (close < open) {
                generate(open, close+1, str+")");
            }
        }

        generate(0,0,"");
        return output;
    }
}
