class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        var left = 0;
        var right = nums.length - 1;

        while (left < right) {
            var mid = left + Math.floor((right - left) / 2);

            // [5,1,2,3,4]
            if (nums[mid] < nums[right]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return nums[left];
    }
}
