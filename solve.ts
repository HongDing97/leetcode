function reverseString(str: string[], left = 0, right = str.length) {
    let t = ''
    while(left < right) {
        t = str[left]
        str[left] = str[right]
        str[right] = t
        left++
        right--
    }
}

function reverseLeftWords(s: string, n: number): string {
    const str = s.split('')
    reverseString(str, 0, n - 1)
    reverseString(str, n, str.length - 1)
    reverseString(str)
    return str.join('')
};
