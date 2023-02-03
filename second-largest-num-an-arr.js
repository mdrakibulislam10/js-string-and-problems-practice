function secondLargest(numbers) {
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

const myNumbers = [3, 5, 45, 2, 18, 45, 13];
const secLarge = secondLargest(myNumbers);
console.log(secLarge);
