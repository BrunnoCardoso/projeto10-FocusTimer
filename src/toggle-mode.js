let darkMode = true;
const buttonToggle = document.getElementById('toggle-mode');

buttonToggle.addEventListener('click', function(event) {
  document.querySelector('html').classList.toggle('light');
  // Daria no memo:
  // document.documentElement.classList.toggle('light');

  const mode = darkMode ? 'Light' : 'Dark';

  event.currentTarget.querySelector('span').textContent = `${mode} mode ativodo`;

  darkMode = !darkMode;
})