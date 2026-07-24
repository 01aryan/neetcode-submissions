class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        var left = 0;
        var right = left + k -1;
        var output = [];
        while (right < nums.length) {
            var max = -Infinity;
            for (var i = left; i <= right; i++) {
                max = Math.max(max, nums[i]);
            }
            output.push(max);
            left++;
            right++
        }
        return output;
    }
}
