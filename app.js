import values from "/elden-ring-runes-calculator/required.js";

const yourLevelInput = document.getElementById('your-level');
const targetLevelInput = document.getElementById('target-level');
const runesRequiredInput = document.getElementById('runes-required');

const calculate = () => {
  let level = parseInt(yourLevelInput.value)
  let target = parseInt(targetLevelInput.value);

  let runesRequired = values[target-1] - values[level-1];
  runesRequired = runesRequired.toLocaleString();
  runesRequiredInput.value = runesRequired;
}

const handleInputChange = () => {
  if ((yourLevelInput.value !== "")
    && (targetLevelInput.value !== "")) {
    calculate();
  }
}

yourLevelInput.addEventListener('input', handleInputChange);
targetLevelInput.addEventListener('input', handleInputChange);
