class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    
    // Approach 1 uses O(n) space 

    // twoSum(numbers, target) {
    //     var x = {};
    //     for (var i = 0; i < numbers.length; i++) {
    //         var complement = target - numbers[i];
    //         if (x[complement] != undefined) {
    //             return [x[complement], i + 1];
    //         }
    //         x[numbers[i]] = i + 1;
    //     }
    //     return []
    // }

    twoSum(numbers, target) {
        var left = 0;
        var right = numbers.length - 1;
        while (left < right) {
            var sum = numbers[left] + numbers[right];
            if (sum > target) right--;
            else if (sum < target) left++;
            else {
                return [left+1, right+1]
            }
        }
        return []
    }
}
