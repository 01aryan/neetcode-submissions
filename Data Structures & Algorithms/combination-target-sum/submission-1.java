class Solution {
    public List<List<Integer>> combinationSum(int[] nums, int target) {
        Arrays.sort(nums);
        List<List<Integer>> output = new ArrayList<>();
        List<Integer> curr = new ArrayList<>();
        int currSum = 0;
        int i = 0;
        generate(nums, target, output, curr, currSum, i);
        return output;
    }

    private void generate(int[] nums, int target, List<List<Integer>> output, List<Integer> curr, int currSum, int i) {
        if (currSum == target) {
            output.add(new ArrayList<>(curr));
            return;
        }

        for (int j = i; j < nums.length; j++) {
            if (currSum + nums[j] > target) {
                return;
            }
            curr.add(nums[j]);
            generate(nums, target, output, curr, currSum + nums[j], j);

            curr.removeLast();
        }

        // generate(nums, target, output, curr, currSum, i+1);
    }
}
