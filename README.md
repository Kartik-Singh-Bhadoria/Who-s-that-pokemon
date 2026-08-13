# Who's That Pokémon? 🔴

A "Who's That Pokémon?" guessing game inspired by the anime segment — built with **Express.js** on the backend and vanilla **HTML/CSS/JS** on the frontend, using live data from [PokeAPI](https://pokeapi.co/).

<p align="center">
  <img src="screenshots/gameplay-silhouette.png" width="45%" alt="Silhouette state — guess the Pokémon" />
  <img src="screenshots/gameplay-revealed.png" width="45%" alt="Correct guess — Pokémon revealed" />
</p>

## How it works

1. On load, the backend picks a random Pokémon (ID 1–1025) and fetches its data from PokeAPI.
2. The Pokémon's name is kept **server-side only** — the frontend receives the artwork, but renders it as a solid black silhouette using a CSS `brightness(0)` filter.
3. You type a guess. The backend compares it (case-insensitive) against the stored answer.
4. Correct guess → the silhouette transitions to full color and the name is revealed. Score goes up.
5. Wrong guess → try again, same Pokémon stays active.
6. "Skip / Next" loads a new random Pokémon at any time.

## Tech stack

- **Backend:** Node.js, Express 5
- **Frontend:** Plain HTML/CSS/JS (no framework, no build step)
- **Data source:** [PokeAPI](https://pokeapi.co/) (official artwork sprites)

## Project structure

```
├── public/
│   └── index.html      # frontend — served statically by Express
├── index.js             # Express server + game routes
├── package.json
```

## API routes

| Method | Route       | Description                                                        |
|--------|-------------|---------------------------------------------------------------------|
| GET    | `/pokemon`  | Picks a random Pokémon, stores the answer server-side, returns `{ id, image }` (no name) |
| POST   | `/guess`    | Body: `{ guess }`. Returns `{ correct: true, name, image }` on success, `{ correct: false }` otherwise |

## Running locally

```bash
git clone <your-repo-url>
cd <project-folder>
npm install
npm start
```

Then open `http://localhost:8000` in your browser.

## Known limitations

- Game state (`currentAnswer`, `currentImage`) is stored in a single in-memory variable — it's shared across **all** visitors, so multiple simultaneous players will interfere with each other's rounds. Fine for local/demo use; a future improvement would move this to per-session state or a database.
- Score resets on page refresh (no persistence yet).

## Roadmap

- [ ] Per-session game state (so multiple players don't collide)
- [ ] Leaderboard / persistent scores
- [ ] Difficulty modes (limit to certain generations)
- [ ] Hint system (type, region, etc.)

---

Built as a learning project to practice Express fundamentals — routing, async/await, external API calls, and request/response design.
