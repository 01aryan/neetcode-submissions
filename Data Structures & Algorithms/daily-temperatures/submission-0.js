class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        var stack = [];
        var output = new Array(temperatures.length).fill(0);

        for (var i=0; i < temperatures.length; i++) {
            var t = temperatures[i];
            while (stack.length > 0 && t > stack[stack.length-1][0]) {
                var [stackT, stackI] = stack.pop();
                output[stackI] = i - stackI;
            }
            stack.push([t, i]);
        }
        return output;
    }
}
