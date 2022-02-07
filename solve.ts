function strStr(haystack: string, needle: string): number {
    // get next
    let next = new Array(needle.length).fill(0)
    let j = 0
    for (let i = 1; i < needle.length; i++) {
        while (j > 0 && needle[i] !== needle[j])
            j = next[j - 1]
        if (needle[i] === needle[j])
            j++
        next[i] = j
    }
    // match
    let p = 0, q = 0
    while (p < haystack.length && q < needle.length) {
        if (haystack[p] === needle[q]) {
            p++
            q++
        } else {
            if (q > 0)
                q = next[q - 1]
            else
                p++
        }
    }
    if (q === needle.length)
        return p - q
    else
        return -1
};

console.log(strStr('aabaaabaaac','aabaaac'))