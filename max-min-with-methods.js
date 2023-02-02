const jim = 69;
const dela = 99;
const chinku = 87;

// max
function maxNumber(jimNum, delaNum, chinkuNum) {
    const numberOne = Math.max(jimNum, delaNum, chinkuNum);
    // max number
    // return numberOne;

    // for name showing
    if (numberOne === jimNum) {
        return "jim is number one";
    }
    else if (numberOne === delaNum) {
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
    const numberLast = Math.min(jimNum, delaNum, chinkuNum);
    // min number
    // return numberLast;

    // for name showing
    if (numberLast === jimNum) {
        return "jim is number last";
    }
    else if (numberLast === delaNum) {
        return "dela is number last";
    }
    return "chinku is number last";
};

const numberLast = minNumber(jim, dela, chinku);
console.log(numberLast);