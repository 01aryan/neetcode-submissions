class Solution {

    public String encode(List<String> strs) {
        String encoded = "";
        for (String str : strs) {
            encoded += str.length() + "#" + str;
        }
        return encoded;
    }

    public List<String> decode(String str) {
        int i = 0;
        int j = 0;
        List<String> output = new ArrayList<>();
        while (j < str.length()) {
            i = j;
            while (str.charAt(j) != '#') {
                j++;
            }

            String lenStr = str.substring(i, j);
            int len = Integer.parseInt(lenStr);
            i = j + 1;
            j = i + len;
            String s = str.substring(i, j);
            output.add(s);
        }
        return output;
    }
}
