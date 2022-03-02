import values from "/requiredForNextLevel.js";

const yourLevelInput = document.getElementById('your-level');
const targetLevelInput = document.getElementById('target-level');
const runesRequiredInput = document.getElementById('runes-required')

const calculate = () => {
  let level = parseInt(yourLevelInput.value)
  let target = parseInt(targetLevelInput.value);

  let levelsRequired = target - level;

  let runesRequired = 0;
  for (let i = 0; i < levelsRequired; i++) {
    runesRequired += values[level + i - 1];
  }

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