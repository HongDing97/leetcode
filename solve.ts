function validate(s: string) {
    if (s.length > 1 && s[0] === '0')
        return false
    if (Number(s) < 0 || Number(s) > 255)
        return false
    return true    
}

function restoreIpAddresses(s: string): string[] {
    const res: string[] = [], path: string[] = []
    dfs()
    return res
    function dfs(startIdx = 0, deepth = 0) {
        if (deepth === 4 && startIdx === s.length) {
            res.push(path.join('.'))
            return 
        }
        // 分割长度为 1、2、3 的数字段
        for (let i = 1; i <= 3 && (startIdx + i) <= s.length; i++) {
            const t = s.slice(startIdx, startIdx + i)
            // 剪枝
            if (!validate(t))
                continue
            path.push(t)
            // 注意是 startIdx + i, 因为可能是选取的 1、2、3 长度的数字段
            // 所以也应该越到 1、2、3 个后面数字继续取用
            dfs(startIdx + i, deepth + 1)
            path.pop()
        }
    }
};

restoreIpAddresses("25525511135")