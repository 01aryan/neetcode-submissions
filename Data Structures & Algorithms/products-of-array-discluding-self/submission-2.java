class Solution {
    public int[] productExceptSelf(int[] nums) {
        int[] prefixProducts = new int[nums.length];
        int[] suffixProducts = new int[nums.length];

        int pp = 1;
        for (int i = 0; i < nums.length; i++) {
            if (i != 0){
                pp = pp * nums[i-1];
            }
            prefixProducts[i] = pp;
        }

        int sp = 1;
        for (int j = nums.length-1; j >= 0; j--) {
            if (j != nums.length-1) {
                sp *= nums[j+1];
            }
            suffixProducts[j] = sp;
        }

        int[] output = new int[nums.length];
        for (int k = 0; k < nums.length; k++) {
            output[k] = prefixProducts[k] * suffixProducts[k];
        }
        return output;
    }
}  
