class Solution {
    public boolean validWordAbbreviation(String word, String abbr) {
        int i = 0;
        int j = 0;
        while (i < word.length() && j < abbr.length()) {
            char c = abbr.charAt(j);
            if (c == '0') return false;
            if (c >= '0' && c <= '9') {
                int num = 0;
                while (j < abbr.length() && abbr.charAt(j) >= '0' && abbr.charAt(j) <= '9') {
                    num = num * 10 + (abbr.charAt(j) - '0');
                    j++;
                }
                i += num;
            } else {
                if (word.charAt(i) != abbr.charAt(j)) {
                    return false;
                }
                i++;
                j++;
            }
        }
        return i == word.length() && j == abbr.length();
    }
}