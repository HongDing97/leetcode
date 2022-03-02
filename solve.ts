function lemonadeChange(bills: number[]): boolean {
    const money = new Map([[20, 0], [10, 0], [5, 0]])
    for (let i = 0; i < bills.length; i++) {
        money.set(bills[i], money.get(bills[i])! + 1)
        let change = bills[i] - 5
        for (const [price, cnt] of money) {
            if (change === 0)
                break
            // 计算需要几张该币值的纸币
            const cost = Math.floor(change / price)
            if (cost <= cnt) {
                money.set(price, cnt - cost)
                change -= cost * price
            }
        }
        if (change > 0)
            return false
    }
    return true
};

lemonadeChange([5,5,10,10,20])
