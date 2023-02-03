function smallestNum(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        if (smallest > number) {
            smallest = number;
        }
    }
    return smallest;
};

const myNumbers = [344, 56, 89, 43, 788, 32, 34, 222, 900, 45, 35];
const smallest = smallestNum(myNumbers);
console.log("smallest number is:", smallest);