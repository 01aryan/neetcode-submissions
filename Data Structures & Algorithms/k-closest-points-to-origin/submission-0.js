class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        var maxHeap = new PriorityQueue((a, b) => b[0] - a[0]);
        for (var i = 0; i < points.length; i++) {
            var [x, y] = points[i];
            var distanceFromOrigin = (x*x) + (y*y);
            maxHeap.push([distanceFromOrigin, x, y]);

            if (maxHeap.size() > k) {
                maxHeap.pop();
            }
        }
        var output = [];
        while (maxHeap.size() > 0) {
            var [_, x1, y1] = maxHeap.pop();
            output.push([x1, y1]);
        }
        return output;
    }
}