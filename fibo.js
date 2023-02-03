// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144.
/* 
fibo[3] = fibo[2] + fibo[1]
fibo[4] = fibo[3] + fibo[2]
fibo[457] = fibo[456] + fibo[455]
fibo[n] = fibo[n-1] + fibo[n-2]
fibo[i] = fibo[i-1] + fibo[i-2]
*/

const fibo = [0, 1];
for (let i = 2; i <= 15; i++) {
    // fibo[i] = fibo[i - 1] + fibo[i - 2];
    fibo[i] = fibo[i - 1] + fibo[i - 2];
};
// console.log(fibo);


// with function
function fibonacci(number) {
    fiboArr = [0, 1];
    for (let i = 2; i <= number; i++) {
        // set = get + get;
        fiboArr[i] = fiboArr[i - 1] + fiboArr[i - 2];
    }
    return fiboArr;
};

const number = 30;
const result = fibonacci(number);
console.log(result);