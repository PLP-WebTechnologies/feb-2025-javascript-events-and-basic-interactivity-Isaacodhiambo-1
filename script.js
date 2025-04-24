
// ====== Dark Mode Toggle ======
const darkModeToggle = document.getElementById('dark-mode-toggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? '' : 'dark');
  });
}

// ====== Event Handling 🎈 ======
const clickMeBtn = document.getElementById('click-me');
if (clickMeBtn) {
  clickMeBtn.addEventListener('click', () => alert('Button clicked! 🎉'));
}

const hoverText = document.getElementById('hover-text');
if (hoverText) {
  hoverText.addEventListener('mouseenter', () => {
    console.log('Mouse entered the hover area!');
  });
}

const keypressInput = document.getElementById('keypress-input');
const keypressOutput = document.getElementById('keypress-output');
if (keypressInput && keypressOutput) {
  keypressInput.addEventListener('input', (e) => {
    keypressOutput.textContent = `You typed: ${e.target.value}`;
  });
}

const secretAction = document.getElementById('secret-action');
let pressTimer;
if (secretAction) {
  secretAction.addEventListener('dblclick', () => {
    alert('Secret double-click action unlocked! 🔑');
  });

  secretAction.addEventListener('mousedown', () => {
    pressTimer = setTimeout(() => {
      alert('Long press detected! 🕶️');
    }, 1000);
  });

  secretAction.addEventListener('mouseup', () => clearTimeout(pressTimer));
  secretAction.addEventListener('mouseleave', () => clearTimeout(pressTimer));
}

// ====== Interactive Elements 🎮 ======
const changeColorBtn = document.getElementById('change-color-btn');
if (changeColorBtn) {
  changeColorBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
  });
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  return '#' + Array.from({ length: 6 }, () =>
    letters[Math.floor(Math.random() * 16)]
  ).join('');
}

const images = document.querySelectorAll('.gallery-img');
images.forEach(img => {
  img.addEventListener('click', () => {
    alert(`You clicked on ${img.alt}`);
  });
});

const accordionTabs = document.querySelectorAll('.accordion-tab');
accordionTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const content = tab.nextElementSibling;
    if (content) {
      content.classList.toggle('visible');
    }
  });
});

// ====== Form Validation 📋✅ ======
const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
  });
}

function validateForm() {
  let isValid = true;

  const name = document.getElementById('name').value.trim();
  const nameError = document.getElementById('name-error');
  if
