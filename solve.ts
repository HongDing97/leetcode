function removeDuplicates(s: string): string {
    const stack: string[] = []
    for (const c of s) {
        if (stack.length === 0 || stack[stack.length - 1] !== c)
            stack.push(c)
        else
            stack.pop()
    }
    return stack.join('')
}

removeDuplicates('abbaca')