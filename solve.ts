function findItinerary(tickets: string[][]): string[] {

    // 将 tickets 转换为 map
    const flights = new Map<string, { destination: string, used: boolean }[]>()
    for (const ticket of tickets) {
        if (!flights.has(ticket[0]))
            flights.set(ticket[0], [{ destination: ticket[1], used: false }])
        else
            flights.get(ticket[0])!.push({ destination: ticket[1], used: false })
    }
    // 对目的地排序
    for (const destination of flights.values())
        destination.sort((x, y) => {
            if (x.destination < y.destination) return -1
            else return 1
        })

    const path: string[] = ['JFK']
    let res: string[] | null = null
    dfs('JFK')
    return res!
    function dfs(depature: string) {
        if (res !== null)
            return
        if (path.length === tickets.length + 1) {
            res = [...path]
            return
        }
        // 如果没有从这里出发的航班，直接返回
        if (!flights.get(depature)) 
            return
        for (const flight of flights.get(depature)!) {
            if (flight.used)
                continue
            flight.used = true
            path.push(flight.destination)
            dfs(flight.destination)
            flight.used = false
            path.pop()
        }
    }
};

// findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]])
// findItinerary([["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]])
findItinerary([["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]])