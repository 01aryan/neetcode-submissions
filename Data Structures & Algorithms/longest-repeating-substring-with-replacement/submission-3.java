class Solution {
    public int characterReplacement(String s, int k) {
        Map<Character, Integer> charFreqMap = new HashMap<>();
        int left = 0;
        int right = 0;
        int maxLength = 0;
        int maxFreq = 0;
        while (right < s.length()) {
            Character c = s.charAt(right);
            int freq = charFreqMap.getOrDefault(c, 0);
            charFreqMap.put(c, freq + 1);

            maxFreq = Math.max(maxFreq, charFreqMap.get(c));
            int currWindowLength = right - left + 1;
            int charToReplace = currWindowLength - maxFreq;
            if (charToReplace > k) {
                int leftCount = charFreqMap.get(s.charAt(left));
                charFreqMap.put(s.charAt(left), leftCount -1);
                left++;
            }
            maxLength = Math.max(maxLength, right - left + 1);
            right++;
        }
        return maxLength;
    }
}
