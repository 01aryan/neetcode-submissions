class Solution {
    public int carFleet(int target, int[] position, int[] speed) {
        int[][] pair = new int[position.length][2];

        for (int i = 0; i < position.length; i++) {
            pair[i][0] = position[i];
            pair[i][1] = speed[i];
        }

        Arrays.sort(pair, (a, b) -> Integer.compare(b[0], a[0]));

        Stack<Double> stack = new Stack<>();
        for (int i = 0; i < pair.length; i++) {
            int distanceToTravel = target - pair[i][0];
            int s = pair[i][1];
            double time = (double) distanceToTravel/s;
            stack.push(time);
            if (stack.size() > 1 && stack.get(stack.size() - 2) >= time) {
                stack.pop();
            }
        }
        return stack.size();
    }
}
