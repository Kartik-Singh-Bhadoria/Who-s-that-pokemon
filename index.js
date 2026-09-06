// Change this if your backend runs somewhere else
const API_BASE = 'http://localhost:8000';

const display = document.getElementById('display');
const status = document.getElementById('status');
const form = document.getElementById('guess-form');
const input = document.getElementById('guess-input');
const scoreEl = document.getElementById('score');
const nextBtn = document.getElementById('next-btn');
const revealBtn = document.getElementById('reveal');

let score = 0;
let currentId = null;
let solved = false;

async function loadPokemon() {
  solved = false;
  status.textContent = '';
  status.className = 'status-line';
  input.value = '';
  input.disabled = false;
  input.focus();

  display.className = 'display';
  display.innerHTML = '<span class="placeholder">LOADING...</span>';

  try {
    const res = await fetch(`${API_BASE}/pokemon`);
    if (!res.ok) throw new Error('Request failed');
    const data = await res.json();
    currentId = data.id;

    // Show the real image, but as a black silhouette (anime-style reveal)
    display.innerHTML = `<img src="${data.image}" alt="mystery pokémon" />`;
    display.className = 'display silhouette';
  } catch (err) {
    console.error(err);
    display.innerHTML = '<span class="placeholder">COULD NOT LOAD</span>';
    status.textContent = 'Backend not reachable — is it running on :8000?';
    status.className = 'status-line wrong';
  }
}

async function submitGuess(guess) {
  try {
    const res = await fetch(`${API_BASE}/guess`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guess })
    });
    const data = await res.json();

    if (data.correct) {
      solved = true;
      score += 1;
      scoreEl.textContent = `Score: ${score}`;
      status.textContent = `Correct! It's ${data.name.toUpperCase()}.`;
      status.className = 'status-line correct';
      input.disabled = true;

      // Swap the class so the CSS filter transitions from black silhouette to full color
      display.className = 'display revealed';
    } else {
      status.textContent = 'Not quite — try again!';
      status.className = 'status-line wrong';
    }
  } catch (err) {
    console.error(err);
    status.textContent = 'Something went wrong talking to the server.';
    status.className = 'status-line wrong';
  }
}

function revealPokemon() {
  display.className = 'display revealed';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const guess = input.value.trim();
  if (!guess || solved) return;
  submitGuess(guess);
});

revealBtn.addEventListener('click', revealPokemon);

nextBtn.addEventListener('click', loadPokemon);

loadPokemon();