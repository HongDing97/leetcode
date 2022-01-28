/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
    let p = 0, q = s.length - 1
    while (p < q) {
        const t = s[p]
        s[p] = s[q]
        s[q] = t
        p++
        q--
    }
};