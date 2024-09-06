let someNumber = Math.floor(Math.random() * 100) + 1;
attempts = 10;
const checkGuess = () => {
  let anyNumber = document.getElementById("guess");
  let feedbackElement = document.getElementById("feedback");
  let guess = anyNumber.value;
  if (guess < 1 || guess > 100) {
    feedbackElement.style.color = "orange";
    feedbackElement.innerHTML = "Please enter a valid number";
    return;
  }
  if (guess == someNumber) {
    feedbackElement.style.color = "green";
    attempts = 0;
    feedbackElement.innerHTML = "Yess..! Your Guess is Right";
    return;
  } else if (guess < someNumber) {
    feedbackElement.style.color = "red";
    attempts--;
    feedbackElement.innerHTML = `Too low..!Try Again. attmpts left : ${attempts}`;
  } else {
    feedbackElement.style.color = "red";
    attempts--;
    feedbackElement.innerHTML = `Too high..!Try Again. attmpts left : ${attempts}`;
  }
  if (attempts <= 0) {
    feedbackElement.style.color = "red";
    feedbackElement.innerHTML = `Game Over...`;
  }
};
