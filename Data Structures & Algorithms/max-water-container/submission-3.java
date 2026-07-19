class Solution {
    public int maxArea(int[] heights) {
        int left = 0;
        int right = heights.length -1;
        int water = 0;
        while (left < right) {
            int minH = Math.min(heights[left], heights[right]);
            int distance = right - left;
            int currWater = minH * distance;
            water = Math.max(currWater, water);
            if (heights[left] < heights[right]) left++;
            else right--;
        }
        return water;
    }
}
