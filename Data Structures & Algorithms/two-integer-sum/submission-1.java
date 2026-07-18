class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();  
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.get(complement) != null){
                int[] list = new int[2];
                list[0] = map.get(complement);
                list[1] = i;
                return list;
            }
            map.put(nums[i], i);
        }
        return new int[0];
    }
}
