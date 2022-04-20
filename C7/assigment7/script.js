
const movie = prompt(`what is your favourite movie?`);
console.log(movie)

if (movie ==='Batman') {
  console.log(movie);
}
else  {
    alert(`It should be Batman!`);
};

let numberString = prompt("How old are you?");
let age = parseInt(numberString);

if (age > 16) {
    console.log(`You are aligible to watch the movie`);
} else {
    alert(`Sorry, it seems you are ${age}, you are too toung for this movie!`);
}