class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        var x = {};
        for (var i = 0; i < numbers.length; i++) {
            var complement = target - numbers[i];
            if (x[complement] != undefined) {
                return [x[complement], i + 1];
            }
            x[numbers[i]] = i + 1;
        }
        return []
    }
}
