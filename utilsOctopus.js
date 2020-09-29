export function countsAsYes(userInput) {
    return userInput.charAt(0).toUpperCase() === 'Y';
}

export function calculatePercent(value) {
    return ((value / 3) * 100).toFixed(0);
}