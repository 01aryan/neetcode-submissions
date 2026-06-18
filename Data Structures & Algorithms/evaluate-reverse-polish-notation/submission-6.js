class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        var operators = {
            "+": 1,
            "-": 1,
            "*": 1,
            "/": 1
        }

        var stack = [];
        for (var t of tokens) {
            if (operators[t] === undefined) {
                stack.push(t);
            } else {
                var op2 = +stack.pop();
                var op1 = +stack.pop();
                if (t === "+") {
                    stack.push(op1 + op2)
                } else if (t === "-") {
                    stack.push(op1 - op2);
                } else if (t === "*") {
                    stack.push(op1 * op2);
                } else if (t === "/") {
                    stack.push(Math.trunc(op1/op2));
                }
            }
        }
        return stack.pop();
    }
}
