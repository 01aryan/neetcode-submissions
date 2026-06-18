class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        var x = {}
        var count = 0;
        var maxLen = 0;

        for (var num of nums) {
            x[num] = true;
        }

        var i = 0;
        while (i < nums.length) {
            if (x[nums[i] -1] == undefined) {
                count = 1;
                while (i < nums.length) {
                    if (x[nums[i] + count]) {
                        count++;
                    } else {
                        break;
                    }
                }
                maxLen = Math.max(maxLen, count);
            }
            i++;
        }

        return maxLen;
    }
}
