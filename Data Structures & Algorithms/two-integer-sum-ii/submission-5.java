class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int i = 0;
        int j = numbers.length -1;
        int sum = numbers[i] + numbers[j];

        while (sum != target) {
            if (sum < target) {
                i++;
            } else {
                j--;
            }
            sum = numbers[i] + numbers[j];
        }
        int[] output = new int[2];
        output[0] = i + 1;
        output[1] = j + 1;
        return output;
    }
}
