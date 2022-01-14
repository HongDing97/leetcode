function split(n: number): number[] {
    let res = new Array<number>()
    while (n > 0) {
        res.push(Math.floor(n % 10))
        n = Math.floor(n / 10)
    }
    return res
}

function isHappy(n: number): boolean {
    let s = new Set()
    while (true) {
        let sum = 0
        for (const i of split(n))
            sum += i ** 2
        n = sum
        if (s.has(sum))
            return false
        else if (sum === 1)
            return true
        else
            s.add(sum)
    }
};