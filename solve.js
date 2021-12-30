/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    // init
    let res = Array(n).fill(0).map(x => Array(n).fill(0))
    let i = 0, j = 0, cnt = 1, d = 0
    while (cnt <= n ** 2) {
        res[i][j] = cnt++
        if (d === 0) {
            ++j
            if (j >= n || res[i][j] !== 0) {
                j--
                i++
                d = 1
            }
        } else if (d === 1) {
            i++
            if (i >= n || res[i][j] !== 0) {
                i--
                j--
                d = 2
            }
        } else if (d === 2) {
            j--
            if (j < 0 || res[i][j] !== 0) {
                j++
                i--
                d = 3
            }
        } else if (d === 3) {
            i--
            if (i < 0 || res[i][j] !== 0) {
                i++
                j++
                d = 0
            }
        }
    }
    return res
};

// console.log(generateMatrix(4))