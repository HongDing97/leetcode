/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let p1 = 0, p2 = 0, sum = 0, minLen = nums.length + 1
    while (p2 < nums.length) {
        sum += nums[p2++]
        while (sum >= target){
            minLen = minLen < p2 - p1 ? minLen : p2 - p1
            sum -= nums[p1++]
        }
    }
    return minLen > nums.length ? 0 : minLen
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]))