function largestSumAfterKNegations(nums: number[], k: number): number {
    nums.sort((a, b) => Math.abs(a) - Math.abs(b))
    let p = nums.length - 1
    while (k > 0) {
        while (p > 0 && nums[p] > 0)
            p--
        nums[p] *= -1
        k--
    }
    return nums.reduce((pre, cur) => pre + cur)
};

largestSumAfterKNegations([3, -1, 0, 2], 3)

