function threeSum(nums: number[]): number[][] {
    let res: number[][] = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0)
            break
        let left = i + 1, right = nums.length - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum === 0) {
                // 去重
                if (i === 0 || nums[i] !== nums[i - 1])
                    res.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[++left])
                    ;
                while (left < right && nums[right] === nums[++right])
                    ;
            }
            else if (sum < 0)
                left++
            else
                right--
        }
    }
    return res
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]))