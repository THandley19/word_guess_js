var guessWords = [
  { name: "cardinals", city: "Arizona" },
  { name: "falcons", city: "Atlanta" },
  { name: "ravens", city: "Baltimore" },
  { name: "bills", city: "Buffalo" },
  { name: "panthers", city: "Carolina" },
  { name: "bengals", city: "Cincinnati" },
  { name: "bears", city: "Chicago" },
  { name: "browns", city: "Cleveland" },
  { name: "cowboys", city: "Dallas" },
  { name: "broncos", city: "Denver" },
  { name: "lions", city: "Detroit" },
  { name: "texans", city: "Houston" },
  { name: "packers", city: "Green Bay" },
  { name: "colts", city: "Indianapolis" },
  { name: "rams", city: "Los Angeles" },
  { name: "jaguars", city: "Jacksonville" },
  { name: "vikings", city: "Minnesota" },
  { name: "chiefs", city: "Kansas City" },
  { name: "saints", city: "New Orleans" },
  { name: "raiders", city: "Las Vegas" },
  { name: "giants", city: "New York" },
  { name: "chargers", city: "Los Angeles" },
  { name: "eagles", city: "Philadelphia" },
  { name: "dolphins", city: "Miami" },
  { name: "49ers", city: "San Francisco" },
  { name: "patriots", city: "New England" },
  { name: "seahawks", city: "Seattle" },
  { name: "jets", city: "New York" },
  { name: "buccaneers", city: "Tampa Bay" },
  { name: "steelers", city: "Pittsburgh" },
  { name: "titans", city: "Tennessee" },
  { name: "redskins", city: "Washington" },
];
var selectedWord = "";
var selectedWordName = "";
var selectedWordHint = "";
var lettersinWord = [];
var numblanks = 0;
var blanksandSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 15;

function startGame() {
  selectedWord = guessWords[Math.floor(Math.random() * guessWords.length)];
  selectedWordName = selectedWord.name;
  selectedWordHint = selectedWord.city;
  lettersinWord = selectedWordName.split("");
  numblanks = selectedWordName.length;

  // sets values for new round of game
  guessesLeft = 15;
  wrongLetters = [];
  blanksandSuccesses = [];

  document.getElementById("wrongGuesses").innerHTML =
    "You haven't guessed anything yet.";

  document.getElementById("remainingGuesses").innerHTML = guessesLeft;
  document.getElementById("gamesWon").innerHTML = winCount;
  document.getElementById("gamesLost").innerHTML = lossCount;
  document.getElementById(
    "hints"
  ).innerHTML = `The city this NFL team is from is ${selectedWordHint}`;

  for (let i = 0; i < numblanks; i++) {
    blanksandSuccesses.push("_");
  }

  document.getElementById("wordToGuess").innerHTML = blanksandSuccesses.join(
    " "
  );
}

startGame();

document.onkeypress = (e) => {
  let userGuess = e.key;
  guessesLeft--;
  if (!selectedWordName.includes(userGuess)) {
    wrongLetters.push(userGuess);
    document.getElementById("remainingGuesses").innerHTML = guessesLeft;
    document.getElementById("wrongGuesses").innerHTML = wrongLetters;
  } else {
    for (let i = 0; i < selectedWordName.length; i++) {
      if (selectedWordName[i] == userGuess) {
        blanksandSuccesses.splice(i, 1, userGuess);
        document.getElementById("remainingGuesses").innerHTML = guessesLeft;
        document.getElementById(
          "wordToGuess"
        ).innerHTML = blanksandSuccesses.join(" ");
      }
    }
  }
  if (guessesLeft == 0) {
    alert("You lose.");
    lossCount++;
    startGame();
  } else if (!blanksandSuccesses.includes("_")) {
    alert("You Won!");
    winCount++;
    startGame();
  }
};
