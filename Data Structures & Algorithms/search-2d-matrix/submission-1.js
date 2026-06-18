class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        var leftRow = 0;
        var rightRow = matrix.length -1;
        var midRow;

        while (leftRow <= rightRow) {
            midRow = leftRow + Math.floor((rightRow - leftRow)/2);
            if (matrix[midRow][0] > target) {
                // take left side
                rightRow = midRow -1;
            } else if (matrix[midRow][matrix[midRow].length-1] < target) {
                // take right side
                leftRow = midRow + 1;
            } else {
                break;
            }
        }

        var left = 0;
        var right = matrix[midRow].length -1;
        while (left <= right) {
            var mid = left + Math.floor((right - left)/2);
            if (matrix[midRow][mid] < target) {
                // take right side
                left = mid + 1;
            } else if (matrix[midRow][mid] > target) {
                // take left side
                right = mid - 1;
            } else {
                return true;
            }
        }
        return false;
    }
}
