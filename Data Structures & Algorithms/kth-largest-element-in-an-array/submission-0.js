class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    findKthLargest(nums, k) {
        // nums.sort((a,b) => b - a);
        // return nums[k-1];

        var minHeap = new MinPriorityQueue();
        for (var n of nums) {
            minHeap.push(n);
            if(minHeap.size() > k) {
                minHeap.pop();
            }
        }
        return minHeap.pop();
    }
}
