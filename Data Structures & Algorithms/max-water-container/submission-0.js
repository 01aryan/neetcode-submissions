class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        var area = 0;
        var left = 0;
        var right = heights.length -1;
        while (left < right) {
            var height = Math.min(heights[left], heights[right]);
            var breadth = right - left;
            var currArea = height * breadth;
            area = Math.max(area, currArea);
            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }
        return area;
    }
}
