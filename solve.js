/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let p1 = 0, p2 = 0
    while (p2 < nums.length) {
        if (p1 !== p2)
            nums[p1] = nums[p2]
        if (val === nums[p1])
            p2++
        else {
            p1++
            p2++
        }
    }
    return p1
};

// let nums = [0, 1, 2, 2, 3, 0, 4, 2]
// let len = removeElement(nums, 2)
// for (let i = 0; i < len; i++)
//     console.log(nums[i])