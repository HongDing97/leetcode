function monotoneIncreasingDigits(n: number): number {
    const split: number[] = []
    while(n > 0) {
        split.push(n % 10)
        n = Math.floor(n / 10)
    }
    split.reverse()
    let flag = Infinity
    for (let i = split.length - 2; i >= 0; i--) {
        if (split[i] > split[i + 1]) {
            split[i]--
            split[i + 1] = 9
            flag = i + 1
        }
    }
    for (let i = flag; i < split.length; i++)
        split[i] = 9
    return Number(split.join(''))
};

monotoneIncreasingDigits(100)