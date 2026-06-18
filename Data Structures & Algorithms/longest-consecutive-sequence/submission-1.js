class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        var hashMap = {};
        for (var n of nums) {
            hashMap[n] = 1;
        }

        var i = 0;
        var maxLength = 0;
        while (i < nums.length) {
            var leftNeighbour = nums[i] - 1;
            if (hashMap[leftNeighbour] === undefined) {
                var count = 0;
                var curr = nums[i];
                while (hashMap[curr] != undefined) {
                    count++;
                    curr++;
                }
                maxLength = Math.max(maxLength, count);
            }
            i++;
        }
        return maxLength;
    }
}
