function rollDice() {
  // Random numbers between 1–6
  const dice1 = Math.floor(Math.random() * 6) + 1;
  const dice2 = Math.floor(Math.random() * 6) + 1;

  // Change images
  document.getElementById("dice1").src = "dice" + dice1 + ".png";
  document.getElementById("dice2").src = "dice" + dice2 + ".png";

  // Show result
  let resultText = "";
  if (dice1 > dice2) {
    resultText = "🎉 Player 1 Wins!";
  } else if (dice2 > dice1) {
    resultText = "🎉 Player 2 Wins!";
  } else {
    resultText = "😅 It's a Draw!";
  }

  document.getElementById("result").textContent = resultText;
}
