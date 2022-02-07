function isValid(s: string): boolean {
    function match(c1: string, c2: string): boolean {
        return (c1 === '(' && c2 === ')') || (c1 === '[' && c2 === ']') || (c1 === '{' && c2 === '}')
    }
    const stack: string[] = []
    for (const c of s) {
        if (c === '(' || c === '[' || c === '{')
            stack.push(c)
        else {
            if (!match(stack[stack.length - 1], c))
                return false
            else
                stack.pop()
        }
    }
    return stack.length === 0
}
