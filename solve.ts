function eraseOverlapIntervals(intervals: number[][]): number {
    let cnt = 0
    intervals.sort((a, b) => a[0] - b[0])
    for (let i = intervals.length - 1; i > 0; i--) {
        if (intervals[i][0] < intervals[i - 1][1]) {
            cnt++
            intervals[i - 1][0] = intervals[i][0]
        }
    }
    return cnt
};

eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])