/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let p1 = 0
    let p2 = nums.length - 1
    let res = []
    while (p1 <= p2)
        res.unshift(Math.abs(nums[p1]) > Math.abs(nums[p2]) ? nums[p1++] ** 2 : nums[p2--] ** 2)
    return res
};

// console.log(sortedSquares([-4, -1, 0, 3, 10]))