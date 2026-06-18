class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        var output = [];

        candidates.sort((a,b) => a - b);

        function backtrack(i, curr, sum) {
            if (sum === target) {
                output.push([...curr]);
                return;
            }

            if (i == candidates.length || sum > target) {
                return;
            }

            curr.push(candidates[i]);
            backtrack(i + 1, curr, sum + candidates[i]);
            curr.pop();
            while (i+1 < candidates.length && candidates[i] === candidates[i+1]) {i++};
            backtrack(i+1, curr, sum)
        }

        backtrack(0, [], 0);
        return output;
    }
}
