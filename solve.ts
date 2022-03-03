function reconstructQueue(people: number[][]): number[][] {
    people.sort((a, b) => {
        if (a[0] !== b[0])
            return b[0] - a[0]
        else
            return a[1] - b[1]
    })
    const res: number[][] = [people[0]]
    for (let i = 1; i < people.length; i++) {
        let insertPoint = 0
        // 要找到 k 次 >= h 的数字
        for (let j = 0; j < people[i][1] && insertPoint < res.length;) {
            if (res[insertPoint][0] >= people[i][0])
                j++
            insertPoint++
        }
        res.splice(insertPoint, 0, people[i])
    }
    return res
};

reconstructQueue( [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]])