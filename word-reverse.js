function reverseWord(str) {
    let result = [];
    const words = str.split(" ");
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
    }
    const reversed = result.join(" ");
    return reversed;
};

const myString = "I am a good boy";
// console.log(reverseWord(myString));


// practice
function reversed(text) {
    let myWords = [];
    const words = text.split(" ");
    for (let i = words.length - 1; i >= 0; i--) {
        const word = words[i];
        myWords.push(word);
    }
    const reversedWords = myWords.join(" ");
    return reversedWords;
};

const paragraph = "I am Rakib. I am a website developer.";
console.log(reversed(paragraph));


// shortcut system:
function wordReverse(myText) {
    const myWord = myText.split(" ").reverse().join(" ");
    return myWord;
};

const myText = "my laptops color is silver";
// console.log(wordReverse(myText));