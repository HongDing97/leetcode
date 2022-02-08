function calc(n1: number, n2: number, op: string) {
    let res = 0
    switch (op) {
        case '+':
            res = n1 + n2
            break
        case '-':
            res = n1 - n2
            break
        case '*':
            res = n1 * n2
            break
        case '/':
            res = n1 / n2 > 0 ? Math.floor(n1 / n2) : Math.ceil(n1 / n2)
            break
    }
    return res
}

function evalRPN(tokens: string[]): number {
    const stack: number[] = []
    for (const c of tokens) {
        if (isNaN(Number(c))) {
            const n2 = stack.pop()!, n1 = stack.pop()!
            stack.push(calc(n1, n2, c))
        } else {
            stack.push(Number(c))
        }
    }
    return stack[0]
};

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))