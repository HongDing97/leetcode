function canConstruct(ransomNote: string, magazine: string): boolean {
    const hash = new Array(26).fill(0)
    for (const s of magazine)
        hash[s.charCodeAt(0) - 'a'.charCodeAt(0)]++
    for (const s of ransomNote) {
        if (!hash[s.charCodeAt(0) - 'a'.charCodeAt(0)]--)
            return false
    }
    return true
};