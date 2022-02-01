function replaceSpace(s: string): string {
    const str = s.split('');
    const len = str.length;
    for (let i = 0; i < len; i++) {
        if (str[i] === ' ')
            str.push(...new Array(2).fill(' '));
    }
    let p = s.length - 1, q = str.length - 1;
    while (p >= 0 && p !== q) {
        if (str[p] === ' ') {
            str[q - 2] = '%';
            str[q - 1] = '2';
            str[q] = '0';
            q -= 3
        } else {
            str[q] = str[p]
            q--
        }
        p--
    }
    return str.join('')
}
