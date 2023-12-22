const currentLevelInput = document.getElementById('current-level');
const targetLevelInput = document.getElementById('target-level');
const runesRequiredInput = document.getElementById('runes-required');

const calculate = () => {
  let level = parseInt(currentLevelInput.value)
  let target = parseInt(targetLevelInput.value);

  if(target <= level) {
    runesRequiredInput.value = 0;
    return;
  }

  let totalCost = 0;
  for(let i = level; i < target; i++) {
    let x = ((i + 81 - 92) * 0.02);
    x = x < 0 ? 0 : x;
    let cost = ((x+0.1) * ((i+81)**2))+1;
    cost = Math.floor(cost);
    totalCost += cost;
    cost = cost.toLocaleString();
  }

  totalCost = totalCost.toLocaleString();
  runesRequiredInput.value = totalCost;
}

const handleInputChange = () => {
  if ((currentLevelInput.value !== "")
    && (targetLevelInput.value !== "")) {
    calculate();
  }
}

currentLevelInput.addEventListener('input', handleInputChange);
targetLevelInput.addEventListener('input', handleInputChange);


const body = document.body;
const theme = localStorage.getItem('theme');
const themeToggle = document.querySelector('.theme-toggle');

if(theme === 'light') {
  body.classList.remove('dark');
  themeToggle.innerText = 'Dark Mode';
}

const toggleTheme = () => {
  let theme = localStorage.getItem('theme');
  if(theme === 'dark' || theme === null) {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    themeToggle.innerText = 'Dark Mode';
  } else {
    body.classList.add('dark');
    localStorage.removeItem('theme');
    themeToggle.innerText = 'Light Mode';
  }
}

themeToggle.addEventListener('click', toggleTheme);