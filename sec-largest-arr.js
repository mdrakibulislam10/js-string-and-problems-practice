function secLarge(numbers) {
    let largest = numbers[0];
    let secLargest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (number > largest) {
            secLargest = largest;
            largest = number;
        }
        else if (number > secLargest && number < largest) {
            secLargest = number;
        }
    }
    return secLargest;
};

const myNumbers = [200, 300, 800, 700, 500];
console.log(secLarge(myNumbers));