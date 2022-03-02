function canCompleteCircuit(gas: number[], cost: number[]): number {
    let sum = 0, totalSum = 0, startIdx = 0
    for (let i = 0; i < gas.length; i++) {
        totalSum += gas[i] - cost[i]
        sum += gas[i] - cost[i]
        if (sum < 0) {
            startIdx = i + 1
            sum = 0
        }
    }
    if (totalSum >= 0)
        return startIdx
    else
        return -1
};

canCompleteCircuit([2,3,4],[3,4,3])