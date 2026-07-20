class Solution {
    public int trap(int[] height) {
        int left = 0;
        int right = height.length -1;
        int leftMax = height[left];
        int rightMax = height[right];
        int water = 0;
        while (left < right) {
            if (leftMax < rightMax) {
                left++;
                leftMax = Math.max(leftMax, height[left]);
                int currentWater = leftMax - height[left];
                water = water + currentWater;
            } else {
                right--;
                rightMax = Math.max(rightMax, height[right]);
                int currentWater = rightMax - height[right];
                water = water + currentWater;
            }
        }
        return water;
    }
}
