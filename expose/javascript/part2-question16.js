for (let key in statistics) {
    // Check if the property starts with the letter 'r' or if the value is an odd number
    if (key.startsWith('r') || statistics[key] % 2 !== 0) {
        // Print the value of the property
        console.log(statistics[key]);
    }
}
