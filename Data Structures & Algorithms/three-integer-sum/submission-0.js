class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        var target = 0;
        var output = [];

        for (var i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i-1]) continue;

            var l = i+1;
            var r = nums.length -1
            while (l < r) {
                var sum = nums[i] + nums[l] + nums[r];
                if (sum > target) r--;
                else if (sum < target) l++;
                else {
                    output.push([nums[i], nums[l], nums[r]]);

                    l++;
                    r--;
                    while (l < r && nums[l] == nums[l-1]) l++;
                    while (l < r && nums[r] == nums[r+1]) r--;
                }
            }
        }
        return output;
    }
}
