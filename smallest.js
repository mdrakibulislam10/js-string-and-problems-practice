function smallest(numbers) {
    let smallestNum = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number < smallestNum) {
            smallestNum = number;
        }
    }
    return smallestNum;
};

const heights = [167, 190, 120, 165, 100, 90, 137, 265, 180];
const small = smallest(heights);
console.log(small);