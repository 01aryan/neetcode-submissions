class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        var output = [];
        function backtrack(index, curr) {
            if (index === nums.length) {
                output.push([...curr]);
                return
            }

            curr.push(nums[index]);
            backtrack(index+1, curr);

            curr.pop();
            backtrack(index+1, curr);

        }

        backtrack(0, []);
        return output;
    }
}
