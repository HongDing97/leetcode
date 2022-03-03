function partitionLabels(s: string): number[] {
    const res: number[] = []
    const lastIdx = new Map<string, number>()
    // 找到每个字母在字符串中最后出现的 index
    for (let i = 0; i < s.length; i++) {
        let j = s.length - 1
        while (j >= i && s[j] !== s[i])
            j--
        lastIdx.set(s[i], j)
    }
    let start = 0, end = 0
    for (let i = 0; i < s.length; i++) {
        end = Math.max(lastIdx.get(s[i])!, end)
        if (i === end) {
            res.push(end - start + 1)
            start = end + 1
        }
    }
    return res
};

partitionLabels('ababcbacadefegdehijhklij')