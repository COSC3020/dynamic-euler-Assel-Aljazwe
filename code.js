function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function e(n) {
    let sum = 1.0; // Start with the first term of the series
    let fact = 1;  // Initializing factorial result for 0!
    for (let i = 1; i <= n; i++) {
        fact *= i;  // Calculating i! iteratively to avoid repeated work
        sum += 1.0 / fact;
    }
    return sum;
}

