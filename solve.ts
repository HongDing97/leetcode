class MyStack {

    queue: number[] = []

    constructor() {

    }

    push(x: number): void {
        this.queue.push(x)
    }

    pop(): number {
        const len = this.queue.length
        for (let i = 0; i < len - 1; i++)
            this.queue.push(this.queue.shift()!)
        return this.queue.shift()!
    }

    top(): number {
        const t = this.pop()
        this.queue.push(t)
        return t
    }

    empty(): boolean {
        return this.queue.length === 0
    }
}

