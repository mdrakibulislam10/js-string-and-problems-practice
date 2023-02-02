function reverseString(text) {
    let reversed = "";
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        // reversed = reversed + element;
        reversed += element;
    }
    return reversed;
};

const myString = "I am a good boy";
const reversed = reverseString(myString);
// console.log(reversed);


// practice:
function reverseLetter(paragraph) {
    let myLetter = "";
    for (let i = paragraph.length - 1; i >= 0; i--) {
        const letter = paragraph[i];
        myLetter += letter;
    }
    return myLetter;
};

const paragraph = "I am Rakib. I am a website developer.";
// console.log(reverseLetter(paragraph));


// shortcut system:
function letterReverse(myText) {
    const reversed = myText.split("").reverse().join("");
    return reversed;
};

const myText = "my laptops color is silver";
console.log(letterReverse(myText));