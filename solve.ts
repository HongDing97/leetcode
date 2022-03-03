function merge(intervals: number[][]): number[][] {
    if (intervals.length < 2)
        return intervals
    const res: number[][] = []
    intervals.sort((a, b) => a[0] - b[0])
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] <= intervals[i - 1][1]) {
            intervals[i][0] = Math.min(intervals[i - 1][0], intervals[i][0])
            intervals[i][1] = Math.max(intervals[i - 1][1], intervals[i][1])
        }
        else
            res.push(intervals[i - 1])
    }
    res.push(intervals[intervals.length - 1])
    return res
};

merge([[1,3],[2,6],[8,10],[15,18]])