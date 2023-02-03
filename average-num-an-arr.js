function average(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const number = numbers[i];
        sum += number;
    }
    const averageNum = sum / numbers.length;
    const integerNum = Math.round(averageNum);
    return integerNum;
};

const myNumbers = [344, 56, 89, 43, 788, 32, 34, 222, 900, 45, 35];
// const myNumbers = [60, 60, 60];
const myAverage = average(myNumbers);
console.log(myAverage);