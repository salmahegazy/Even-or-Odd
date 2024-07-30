let attempts = 0;
let score = 0;

function guess(userGuess) {
  attempts++;
  document.getElementById("attemp").innerHTML = attempts;

  // Generating Random Number
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = randomNumber % 2 == 0 ? "even" : "odd";

  function playSound(isCorrect) {
    const sound = isCorrect
      ? document.getElementById("correctSFX")
      : document.getElementById("wrongSFX");
    sound.pause();
    sound.currentTime = 0;
    sound.play();
  }

  if (userGuess == correctAnswer) {
    score++;
    document.getElementById("userScore").innerHTML = score;
    document.getElementById(
      "display"
    ).innerText = `Correct! The number was ${randomNumber} `;
    playSound(true);
  } else {
    document.getElementById(
      "display"
    ).innerText = `Wrong! The number was ${randomNumber} `;
    playSound(false);
  }
}
