class Solution {
    public List<String> generateParenthesis(int n) {
        List<String> output = new ArrayList<>();
        generate(0, 0, "", n, output);
        return output;
    }
    private void generate (int open, int close, String str, int n, List<String> output) {
        if (open == close && open + close == 2*n) {
            // add to result
            output.add(str);
        }

        if (open < n) {
            generate(open+1, close, str + "(", n, output);
        }
        if (close < open) {
            generate(open, close+1, str + ")", n, output);
        }
    }
}
