class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    checkValidString(s) {
        var stack = [];
        var star = [];
        for (var i = 0; i < s.length; i++) {
            if (s[i] === '(') stack.push(i);
            else if (s[i] === '*') star.push(i);
            else if (s[i] === ')') {
                if (stack.length === 0 && star.length === 0) return false;
                if (stack.length > 0) {
                    stack.pop();
                } else {
                    star.pop();
                }
            }
        }

        while (stack.length > 0 && star.length > 0) {
            if (stack.pop() > star.pop()) return false;
        }
        return stack.length === 0;
    }
}
