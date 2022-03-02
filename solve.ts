function candy(ratings: number[]): number {
    const candies = new Array(ratings.length).fill(0)
    // left to right
    for (let i = 0; i < ratings.length; i++) {
        if (i > 0 && ratings[i] > ratings[i - 1])
            candies[i] = candies[i - 1] + 1
        else
            candies[i] = 1
    }
    // right to left
    for (let i = ratings.length - 1; i >= 0; i--) {
        if (i < ratings.length - 1 && ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1])
            candies[i] = candies[i + 1] + 1
    }
    return candies.reduce((pre, cur) => pre + cur)
};

candy([1, 2, 2, 5, 4, 3, 2])