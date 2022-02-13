class MyQueue {
    que: number[] = []
    
    push(x: number) {
        while (this.que.length > 0 && x > this.que[this.que.length - 1])
            this.que.pop()
        this.que.push(x)
    }

    pop(x: number) {
        if (this.que.length > 0 && x === this.que[0])
            this.que.shift()
    }

    front() {
        return this.que[0]
    }
}

function maxSlidingWindow(nums: number[], k: number): number[] {
    let queue = new MyQueue(), res: number[] = []
    for (let i = 0; i < k - 1; i++)
        queue.push(nums[i])
    for (let i = k - 1; i < nums.length; i++) {
        queue.push(nums[i])
        res.push(queue.front())
        queue.pop(nums[i - k + 1])
    }
    return res
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))