function isSymmetric(s: string): boolean {
    let low = 0, high = s.length - 1
    while (low < high) {
        if (s[low] !== s[high])
            return false
        low++
        high--
    }
    return true
}

function partition(s: string): string[][] {
    const res: string[][] = [], path: string[] = []
    dfs(0)
    return res
    function dfs(start: number) {
        if (start === s.length) {
            res.push([...path])
            return
        }
        for (let i = start; i < s.length; i++) {
            const t = s.slice(start, i + 1)
            if (!isSymmetric(t))
                continue
            path.push(t)
            dfs(i + 1)
            path.pop()
        }
    }
};

partition('efe')