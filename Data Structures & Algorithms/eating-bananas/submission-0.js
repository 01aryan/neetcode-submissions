class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    // [5, 7, 3, 9] => h = hours needed
    // k => rate of eating bananas
    minEatingSpeed(piles, h) {
        var l = 1;
        var r = Math.max(...piles);
        var res = r;

        while (l <= r) {
            const k = Math.floor((l+r)/2);

            var totalTime = 0;
            for (var p of piles) {
                totalTime = totalTime + Math.ceil(p/k);
            }
            if (totalTime <= h) {
                res = k;
                r = k - 1;
            } else {
                l = k + 1;
            }
        }
        return res;
    }
}
