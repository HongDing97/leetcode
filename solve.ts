function reverseString(str: string[], left: number, right: number) {
    while (left < right) {
        const t = str[left]
        str[left] = str[right]
        str[right] = t
        left++
        right--
    }
}

function reverseWords(s: string): string {
    let str = s.split('')
    // 处理多余的空格
    let slow = 0, fast = 0, len = str.length
    while (fast < len) {
        if (str[fast] === ' ' && (fast === 0 || str[fast - 1] === ' '))
            fast++
        else
            str[slow++] = str[fast++]
    }
    str.length = str[slow - 1] === ' ' ? slow - 1 : slow
    // 翻转字符串
    reverseString(str, 0, str.length - 1)
    // 翻转单词
    slow = 0, fast = 0
    while (fast < str.length) {
        while (fast < str.length && str[fast] !== ' ')
            fast++
        reverseString(str, slow, fast - 1)
        slow = ++fast
    }
    return str.join('')
};

reverseWords(' Hello  world   a  ')