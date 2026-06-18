class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        var maxHeap = new MaxPriorityQueue();
        for (var s of stones) {
            maxHeap.push(s);
        }

        while (maxHeap.size() > 1) {
            var stone1 = maxHeap.pop();
            var stone2 = maxHeap.pop();

            maxHeap.push(stone1 - stone2);
        }

        return maxHeap.pop();
    }
}
