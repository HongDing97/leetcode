const keymap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
}

function letterCombinations(digits: string): string[] {
    if (digits === '')
        return []
    const res: string[] = [], r: string[] = [], len = digits.length
    dfs(0)
    return res
    function dfs(deepth: number) {
        if (deepth === len) {
            res.push(r.join(''))
            return
        }
        for (const c of keymap[digits[deepth]]) {
            r.push(c)
            dfs(++deepth)
            r.pop()
            deepth--
        }
    }
};

console.log(letterCombinations('9234'))