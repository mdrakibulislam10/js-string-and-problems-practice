const lyrics = "Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomay bolte pari ni. kala kala sada sada";
const parts = lyrics.split(" ");
const sentence = lyrics.split(".");
const chars = lyrics.split("");
// const chars = lyrics.split();

// console.log(chars);

const partial = lyrics.slice(2, 7);
// console.log(partial);

const partial2 = lyrics.substring(2, 7)
// console.log(partial2);

const lines = [
    'Tumi bondhu kala pakhi ami jeno ki',
    ' bosonto kale tomay bolte pari ni',
    ' kala kala sada sada'
];

// const newSong = lines.join("");
// const newSong = lines.join(".");
// const newSong = lines.join();
// console.log(newSong);

const trimer = " hello ";
// console.log(trimer);
// console.log(trimer.trim());

const a = "the";
const b = "sun";
// console.log(a.concat(b));
// console.log(a.concat(" ", b));
console.log(a.concat(" red ", b));