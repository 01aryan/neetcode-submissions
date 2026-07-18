class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer, Integer> map = new HashMap<>();
        List<Integer>[] freq = new ArrayList[nums.length + 1];
        for (var i = 0; i < nums.length + 1; i++) {
            freq[i] = new ArrayList<>();
        }
        for (int n : nums) {
            map.put(n, map.getOrDefault(n, 0) + 1);
        }

        for (int key : map.keySet()) {
            int f = map.get(key);
            freq[f].add(key);
        }

        int[] output = new int[k];
        int index = 0;
        for (int j = freq.length -1; j > 0; j--) {
            for (int n : freq[j]) {
                output[index++] = n;
                if (index == k) {
                    return output;
                }
            }
        }
        return output;
    }
}
