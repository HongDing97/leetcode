class MyQueue {
    inStack: number[] = []
    outStack: number[] = []

    constructor() {

    }

    push(x: number): void {
        this.inStack.push(x)
    }

    pop(): number {
        if (this.outStack.length > 0)
            return this.outStack.pop()!
        while (this.inStack.length > 0)
            this.outStack.push(this.inStack.pop()!)
        return this.outStack.pop()!
    }

    peek(): number {
        const t = this.pop()
        this.outStack.push(t)
        return t
    }

    empty(): boolean {
        return this.inStack.length === 0 && this.outStack.length === 0
    }
}


let obj = new MyQueue()
console.log(obj.push(1))
console.log(obj.push(2))
console.log(obj.peek())
console.log(obj.pop())
console.log(obj.empty())