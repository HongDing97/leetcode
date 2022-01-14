function intersection(nums1: number[], nums2: number[]): number[] {
    if (nums1.length < nums2.length) {
        const _ = nums1
        nums1 = nums2
        nums2 = _
    }
    const s1 = new Set(nums1)
    const res = new Set<number>()
    for (let i = 0; i < nums2.length; i++) {
        if (s1.has(nums2[i]))
            res.add(nums2[i])
    }
    return [...res]
};