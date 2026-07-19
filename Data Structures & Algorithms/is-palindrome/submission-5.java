class Solution {
    public boolean isPalindrome(String s) {
        int i = 0;
        int j = s.length() -1;
        while (i < j) {
            while (i < j && !alphaNum(s.charAt(i))) {
                i++;
            }
            while (i < j && !alphaNum(s.charAt(j))) {
                j--;
            }
            Character a = s.charAt(i);
            Character b = s.charAt(j);

            if (Character.toLowerCase(a) != Character.toLowerCase(b)) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }

    private boolean alphaNum(char c) {
        return ((c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9'));
    }
}
