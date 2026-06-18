class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */

    // brute force solution

    // trap(height) {
    //     var water = 0;
    //     for (var i = 0; i < height.length; i++) {
    //         var leftMax = height[i];
    //         var rightMax = height[i];
    //         for (var j = 0; j < i; j++) {
    //             leftMax = Math.max(height[j], leftMax);
    //         }
    //         for (var k = i+1; k < height.length; k++) {
    //             rightMax = Math.max(height[k], rightMax);
    //         }
    //         water += (Math.min(leftMax, rightMax) - height[i]);
    //     }
    //     return water;
    // }

    // O(n) time & O(n) space
    // trap(height) {
    //     var water = 0;
    //     var leftMax = [height[0]];
    //     var rightMax = new Array(height.length);

    //     for (var i = 1; i < height.length; i++){
    //         var max = Math.max(height[i], leftMax[i-1])
    //         leftMax.push(max);
    //     }

    //     rightMax[height.length-1] = height[height.length -1];
    //     for (var j = height.length-2; j >= 0; j--) {
    //         var max = Math.max(height[j], rightMax[j+1]);
    //         rightMax[j] = max;
    //     }


    //     for (var k = 0; k < height.length; k ++) {
    //         water += Math.min(leftMax[k], rightMax[k]) - height[k];
    //     }
    //     return water;
    // }

    trap(height) {
        var water = 0;

        var left = 0;
        var right = height.length - 1;

        var leftMax = height[left];
        var rightMax = height[right];

        while (left < right) {
            if (leftMax < rightMax) {
                left++;
                leftMax = Math.max(leftMax, height[left]);
                water += leftMax - height[left];
            } else {
                right--;
                rightMax = Math.max(rightMax, height[right]);
                water += rightMax - height[right];
            }
        }
        return water;
    }
}
