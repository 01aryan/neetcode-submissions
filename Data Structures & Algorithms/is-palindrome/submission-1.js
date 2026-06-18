class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        var left = 0;
        var right = s.length -1;

        var regX = /[A-Za-z0-9]/
        while (left < right) {
            while (!regX.test(s[left]) && left < right) left++;
            while (!regX.test(s[right]) && left < right) right--;

            if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
            left++;
            right--;
        }
        return true
    }
}
