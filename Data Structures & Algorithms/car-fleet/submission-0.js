class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        var pair = [];
        for (var i = 0; i < position.length; i++) {
            pair.push([position[i], speed[i]]);
        }

        pair.sort((a, b) => b[0] - a[0]);

        var res=[]; 
        for (var j = 0; j < pair.length; j++) {
            var time = (target - pair[j][0])/pair[j][1];
            res.push(time);
            if (res.length > 1 && time <= res[res.length-2]) {
                res.pop();
            }
        }
        return res.length;
    }
}
