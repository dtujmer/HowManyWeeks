const dateInput = document.getElementById('dateInput');
const calculateButton = document.getElementById('calculateButton');
const result = document.getElementById('result');

calculateButton.addEventListener('click', () => {
  const enteredDate = new Date(dateInput.value);
  const today = new Date();

  // Calculate the difference in milliseconds
  const timeDifference = today.getTime() - enteredDate.getTime();

  // Calculate the difference in weeks (rounding down)
  const weeksDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));

  // Display the result
  result.textContent = `There are ${weeksDifference} weeks between ${enteredDate.toDateString()} and today.`;
});
