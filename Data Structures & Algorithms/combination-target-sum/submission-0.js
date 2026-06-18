class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        var output = [];
        nums.sort((a, b) => a - b);

        function backTrack(i, arr, sum) {
            if (sum === target) {
                output.push([...arr]);
                return;
            }

            for (var j = i; j < nums.length; j++) {
                if (sum + nums[j] > target) {
                    return;
                }

                arr.push(nums[j]);
                backTrack(j, arr, sum + nums[j]);
                arr.pop();
            }
        }

        backTrack(0, [], 0);
        return output;
    }
}
