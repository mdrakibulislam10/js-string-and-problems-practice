const lyrics = "Tumi bondhu kala pakhi ami jeno ki. bosonto kale tomay bolte pari ni. kala kala sada sada";

// includes

const searchString = "Pakhi";
// const doesExists = lyrics.includes("pakhi");
// const doesExists = lyrics.includes("Pakhi");
// const doesExists = lyrics.includes(searchString);

const lyricsLowerCase = lyrics.toLowerCase();
// const doesExists = lyricsLowerCase.includes(searchString);

const searchStringLowerCase = searchString.toLowerCase();
const doesExists = lyricsLowerCase.includes(searchStringLowerCase);

const doesExistsOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase());
// console.log(doesExists);
// console.log(doesExistsOneLine);

// indexOf

// console.log(lyrics.indexOf("kala"));
// console.log(lyrics.indexOf("hhhhgfg"));
// console.log(lyrics.indexOf("Tumi"));

if (lyrics.indexOf("sada") !== -1) {
    // console.log("exists");
}
else {
    // console.log("not exists");
};

// startswith

// console.log(lyrics.startsWith("2mi"));
// console.log(lyrics.startsWith("Tumi"));

// endswith

const pdf = "myFile.pdf";
const img = "myImg.png";
console.log(img.endsWith(".jpg"));