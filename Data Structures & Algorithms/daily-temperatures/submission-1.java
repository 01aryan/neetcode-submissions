class Solution {
    public int[] dailyTemperatures(int[] temperatures) {
        int[] output = new int[temperatures.length];
        Deque<int[]> stack = new ArrayDeque();
        for (int i = 0; i < temperatures.length; i++) {
            while (stack.size() > 0 && stack.peek()[0] < temperatures[i]) {
                int[] last = stack.pop();
                output[last[1]] = i - last[1];
            }
            stack.push(new int[]{temperatures[i], i});
        }
        return output;
    }
}
