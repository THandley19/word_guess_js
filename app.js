var guessWords = [
  "colts",
  "jaguars",
  "ravens",
  "steelers",
  "patriots",
  "lions",
  "packers",
];
var selectedWord = "";
var lettersinWord = [];
var numblanks = 0;
var blanksandSuccesses = [];
var wrongLetters = [];

var winCount = 0;
var lossCount = 0;
var guessesLeft = 15;

(function startGame() {
  selectedWord = guessWords[Math.floor(Math.random() * guessWords.length)];
  lettersinWord = selectedWord.split("");
  numblanks = lettersinWord.length;

  guessesLeft = 15;
  wrongLetters = [];
  blanksandSuccesses = [];

  for (let i = 0; i < numblanks; i++) {
    blanksandSuccesses.push("_");
  }

  document.getElementById("wordToGuess").innerHTML = blanksandSuccesses.join(
    " "
  );

  (function wrongGuesses() {
    return wrongLetters.length == 0
      ? (document.getElementById("wrongGuesses").innerHTML =
          "You haven't guessed anything yet.")
      : (document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(
          " , "
        ));
  })();
})();
