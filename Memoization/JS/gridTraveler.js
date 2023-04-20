function gridTraveler(m, n, memo = {}) {
    const key = `${m},${n}`;
    const flippedKey = `${n},${m}`;

    if (key in memo) return memo[key];
    if (flippedKey in memo) return memo[flippedKey];

    if (m === 0 || n === 0) return 0;
    if (m === 1 || n === 1) return 1;

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    memo[flippedKey] = memo[key];

    return memo[key];
}

console.log(gridTraveler(18, 18)) // 2333606220