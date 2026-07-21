class Solution {
    public int lengthOfLongestSubstring(String s) {
        if (s.length() == 1) return 1;
        Map<Character, Integer> map = new HashMap<>();

        int left = 0;
        int right = 0;
        int maxLength = 0;
        while (right < s.length()) {
            if (map.containsKey(s.charAt(right))) {
                // repeat character
                left = Math.max(map.get(s.charAt(right)) + 1, left);
            }
            map.put(s.charAt(right), right);
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        }
        return maxLength;
    }
}
