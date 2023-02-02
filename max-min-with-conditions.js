const jim = 69;
const dela = 99;
const chinku = 87;

// max
function maxNumber(jimNum, delaNum, chinkuNum) {
    if (jimNum > delaNum && jimNum > chinkuNum) {
        return "jim is number one";
    }
    else if (delaNum > jimNum && delaNum > chinkuNum) {
        return "dela is number one";
    }
    // else {
    return "chinku is number one";
    // }
};

const numberOne = maxNumber(jim, dela, chinku);
// console.log(numberOne);

// min
function minNumber(jimNum, delaNum, chinkuNum) {
    if (jimNum < delaNum && jimNum < chinkuNum) {
        return "jim is number last"
    }
    else if (delaNum < jimNum && delaNum < chinkuNum) {
        return "dela is number last"
    }
    return "chinku is number last"
};

const numberLast = minNumber(jim, dela, chinku);
console.log(numberLast);