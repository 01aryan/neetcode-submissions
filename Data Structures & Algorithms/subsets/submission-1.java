class Solution {
    public List<List<Integer>> subsets(int[] nums) {
        List<List<Integer>> output = new ArrayList<>();
        List<Integer> curr = new ArrayList<>();
        generate(output, curr, 0, nums);
        return output;

    }

    private void generate(List<List<Integer>> output, List<Integer> curr, int index, int[] nums) {
        if(index >= nums.length){
            output.add(new ArrayList<>(curr));
            return;
        }
        curr.add(nums[index]);
        generate(output, curr, index+1, nums);

        curr.removeLast();
        generate(output, curr, index+1, nums);
    }
}
