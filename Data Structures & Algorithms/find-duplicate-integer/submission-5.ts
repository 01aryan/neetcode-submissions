class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums: number[]): number {
        for (var i = 0; i < nums.length; i++) {
            var idx = Math.abs(nums[i]) - 1;
            if (nums[idx] < 0) return Math.abs(nums[i]);
            nums[idx] *= -1;
        }
        return -1
    }
}
