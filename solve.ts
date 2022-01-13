function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false
    const map = new Array<number>(26).fill(0)
    for (const i of s)
        map[i.charCodeAt(0) - "a".charCodeAt(0)]++
    for (const i of t)
        if(--map[i.charCodeAt(0) - "a".charCodeAt(0)] < 0)
            return false
    return true
};