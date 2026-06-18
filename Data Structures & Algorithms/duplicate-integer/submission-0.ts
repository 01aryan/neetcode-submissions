class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        var x = {};
        for (var i = 0; i < nums.length; i++) {
            if (x[nums[i]] !== undefined) return true
            x[nums[i]] = i;
        }
        return false;
    }
}
