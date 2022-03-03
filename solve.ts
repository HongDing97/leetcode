function findMinArrowShots(points: number[][]): number {
    let cnt = 1
    points.sort((a, b) => a[0] - b[0])
    for (let i = 1; i < points.length; i++) {
        // 当前最左边大于上一个的最右边，所以上一个需要一根
        if (points[i][0] > points[i - 1][1])
            cnt++
        else 
            points[i][1] = Math.min(points[i][1], points[i - 1][1])
    }
    return cnt
};

findMinArrowShots([[9,12],[1,10],[4,11],[8,12],[3,9],[6,9],[6,7]])