class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        var stack = [];
        for (var char of s) {
            if (char === "(" || char === "[" || char === "{") {
                stack.push(char);
            } else {
                if (stack.length === 0) return false;
                var pop = stack.pop();
                if (char === ")" && pop !== "(") return false
                else if (char === "]" &&  pop !== "[") return false
                else if (char === "}" &&  pop !== "{") return false
            }
        }
        return stack.length === 0
    }
}
