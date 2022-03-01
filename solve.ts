/**
 Do not return anything, modify board in-place instead.
 */
function solveSudoku(board: string[][]): void {
    dfs()
    return
    function validate(r: number, c: number, val: string) {
        // 界限
        const top = r - (r % 3), left = c - (c % 3)
        for (let i = top; i < top + 3; i++) {
            for (let j = left; j < left + 3; j++) {
                if (val === board[i][j])
                    return false
            }
        }
        for (let i = 0; i < 9; i++) {
            if (board[r][i] === val)
                return false
        }
        for (let i = 0; i < 9; i++) {
            if (board[i][c] === val)
                return false
        }
        return true
    }
    function dfs() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] !== '.')
                    continue
                for (let k = 1; k <= 9; k++) {
                    const val = `${k}`
                    if (!validate(i, j, val))
                        continue
                    board[i][j] = val
                    if (dfs())
                        return true
                    board[i][j] = '.'
                }
                // k 已经从 1 - 9 全部遍历过了，如果到这里还没有可以填入的，那一定是错误的
                return false
            }
        }
        return true
    }
};

solveSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]])