class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        var x = {};
        var freq = Array.from({length: nums.length + 1}, () => []);
        for (var i = 0; i < nums.length; i++) {
            if (x[nums[i]] == undefined) {
                x[nums[i]] = 0;
            }
            x[nums[i]] += 1;
        }
        

        for (var key in x) {
            freq[x[key]].push(parseInt(key));
        }

        var output = [];
        for (var j=freq.length -1; j > 0; j--) {
            for (var m=0; m < freq[j].length; m++) {
                output.push(freq[j][m]);
                if (output.length == k){
                    return output;
                }
            }
        }
    }
}
