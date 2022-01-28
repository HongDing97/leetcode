function reverseStr(s: string, k: number): string {
    const str = s.split("")
    for (let i = 0; i < str.length; i += 2 * k) {
        let p = i, q = i + k - 1
        while (p < q) {
            const t = str[p]
            str[p] = s[q]
            str[q] = t
            p++
            q--
        }
    }
    return str.join("")
};