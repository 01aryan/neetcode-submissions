class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    
    // BRUTE FORCE SOLUTION O(n^2)

    // productExceptSelf(nums: number[]): number[] {
    //     var output = [];
    //     for (var i = 0; i < nums.length; i++) {
    //         var product = 1;
    //         for (var j = 0; j < nums.length; j++) {
    //             if (i != j){
    //                 product *= nums[j]
    //             }
    //         }
    //         output.push(product)
    //     }
    //     return output;
    // }

    // compute prefix product and suffix product at each index 
    // then loop over nums and multiple prefix and suffix products to get result
    productExceptSelf(nums: number[]): number[] {
        var output = [];
        var prefixProd = {};
        var suffixProd = {};

        var product = 1;
        for (var i = 0; i < nums.length; i++) {
            if (i != 0){
                product *= nums[i-1];
            }
            prefixProd[i] = product;
        }

        product = 1;
        for (var i = nums.length -1; i >= 0; i--) {
            if (i != nums.length-1){
                product *= nums[i+1];
            }
            suffixProd[i] = product;
        }

        product = 1;
        for (var j = 0; j<nums.length; j++) {
            output.push(prefixProd[j] * suffixProd[j]);
        }
        return output;
    }
}
