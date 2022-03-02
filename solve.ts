function canJump(nums: number[]): boolean {
    if (nums.length < 2)
        return true
    let cover = 0
    for (let i = 0; i <= cover; i++) {
        if (nums[i] + i > cover)
            cover = nums[i] + i
        if (cover >= nums.length - 1)
            return true
    }
    return false
};

canJump([3,0,8,2,0,0,1])