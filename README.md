# Who's That Pokémon?

A browser-based Pokémon guessing game inspired by the classic silhouette reveal. Identify the Pokémon from its shadow, submit your guess, and build your score.

> **Project status:** Early prototype / actively being developed. This README describes the current implementation; features such as accounts, persistent scores, multiplayer, and a production leaderboard are planned, not available yet.

## Gameplay

1. A random Pokémon is selected from the PokéAPI.
2. Its official artwork is displayed as a silhouette.
3. Enter the Pokémon's name and submit your guess.
4. A correct guess reveals the Pokémon and increases your score.
5. Reveal the answer or skip to the next Pokémon.

The current frontend also includes a local score counter. It resets when the page is refreshed.

## Built with

- **HTML, CSS and vanilla JavaScript** — browser interface and gameplay interactions
- **Node.js and Express** — backend HTTP server and API routes
- **PokéAPI** — Pokémon data and official artwork

## Getting started

### Prerequisites

- Node.js 18 or newer (the server uses the built-in `fetch` API)
- npm

### 1. Clone the repository

```bash
git clone https://github.com/Kartik-Singh-Bhadoria/Who-s-that-pokemon.git
cd Who-s-that-pokemon
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the backend

```bash
npm start
```

The Express server listens on port **8000**.

### 4. Open the frontend

Open the repository's `index.html` in your browser. The frontend currently sends API requests to `http://localhost:8000`, so keep the backend running while playing.

> **Development note:** The server is currently configured to serve static files from a `public/` directory, while the frontend files are in the repository root. Opening `index.html` directly is the current workaround. This will be aligned as the project structure is refactored.

## API (current prototype)

The Express router is mounted at both `/pokemon` and `/guess`. The frontend currently uses:

| Method | Endpoint | Purpose |
| --- | --- | --- |
| `GET` | `/pokemon` | Request a random Pokémon's ID and artwork URL |
| `POST` | `/guess` | Submit a guess |

Example request body for `POST /guess`:

```json
{
  "guess": "pikachu"
}
```

The guess endpoint is intended to return whether the answer is correct and, on success, the Pokémon's name and image.

> **Known limitation:** Game state is currently stored in separate controller modules, so the selected answer is not shared with the guess controller. The guessing flow needs a shared, session-aware game state before it can work reliably. Do not treat the current prototype as multiplayer-safe.

## Repository structure

```text
.
├── controller/
│   ├── getPokeController.js
│   └── guessController.js
├── routes/
│   └── pokemonRouter.js
├── index.html
├── index.js
├── styles.css
├── data.js
├── server.js
├── package.json
└── package-lock.json
```

## Roadmap

The project is being developed towards a complete, production-ready game. Planned improvements include:

- [ ] Refactor backend into routes, controllers, services, and game/session logic
- [ ] Support independent game sessions for multiple players
- [ ] Add difficulty levels, hints, timers, streaks, and game modes
- [ ] Add persistent player accounts, profiles, and scores
- [ ] Build a database-backed leaderboard
- [ ] Add automated tests and API validation
- [ ] Improve responsive design and accessibility
- [ ] Add deployment, logging, monitoring, and production security

## Contributing

This is an evolving personal project, but suggestions and bug reports are welcome. Feel free to open an issue describing the problem or proposed improvement.

## Credits and disclaimer

- Pokémon data and artwork are provided by [PokéAPI](https://pokeapi.co/).
- Pokémon and Pokémon character names are trademarks of their respective owners. This is an unofficial fan-made project and is not affiliated with or endorsed by Nintendo, Game Freak, or The Pokémon Company.

---

Made with ⚡ by [Kartik Singh Bhadoria](https://github.com/Kartik-Singh-Bhadoria).
