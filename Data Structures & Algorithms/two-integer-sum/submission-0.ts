class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        var x = {};
        for (var i = 0; i < nums.length; i++) {
            var complement = target - nums[i];
            if (x[complement] != undefined) {
                return [x[complement], i];
            }
            x[nums[i]] = i;
        }
        return [];
    }
}
