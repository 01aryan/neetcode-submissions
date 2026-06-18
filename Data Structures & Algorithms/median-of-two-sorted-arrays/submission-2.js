class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        var totalLength = nums1.length + nums2.length;
        var n1 = 0;
        var n2 = 0;
        var prev = -1;
        var curr = -1;

        var range = Math.floor(totalLength/2);
        var i = 0;

        if (totalLength === 0) {
            return 0;
        }

        if (nums1.length === 0) {
            if (totalLength % 2 === 0) {
                return (nums2[range-1] + nums2[range])/2;
            } else {
                return nums2[range];
            }
        } else if (nums2.length === 0) {
            if (totalLength % 2 === 0) {
                return (nums1[range-1] + nums1[range])/2;
            } else {
                return nums1[range];
            }
        }
        while (i <= range) {
            prev = curr;
            if (nums1[n1] <= nums2[n2]) {
                curr = nums1[n1];
                n1++;
            } else {
                curr = nums2[n2];
                n2++;
            }
            i++;
        }

        var median = totalLength % 2 === 0 ? (prev + curr)/2 : curr;
        return median;
    }
}
