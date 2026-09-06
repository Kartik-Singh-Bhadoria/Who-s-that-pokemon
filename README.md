# Who's That Pokémon?

A small browser-based game where players guess the Pokémon from its silhouette. Built with plain HTML and JavaScript, the project focuses on a lightweight, offline-friendly experience that runs in any modern browser.

## Demo

Open `index.html` in your browser or host the folder on a static server (see Running Locally).

## Features

- Shows a silhouette of a Pokémon.
- Let players guess the Pokémon's name.
- Simple scoring and feedback.
- Minimal, dependency-free code (HTML + JavaScript).

## Technologies

- HTML
- JavaScript

(The repository language composition: ~75% HTML, ~25% JavaScript.)

## Project structure (example)

- index.html — main page
- css/ — stylesheets
- js/ — JavaScript logic
- assets/ or images/ — Pokémon silhouettes and other images

Adjust paths above to match the repository layout.

## Running locally

Option A — Open directly
1. Clone or download the repository.
2. Open `index.html` in a modern web browser.

Option B — Serve with a simple HTTP server (recommended for browsers that block local file requests)

Using Python 3:

```bash
python -m http.server 8000
```

Then open http://localhost:8000 in your browser.

Using Node (http-server):

```bash
npx http-server -p 8000
```

## How to play

1. View the silhouette shown on the page.
2. Type your guess into the input box and submit.
3. The game will tell you if you're correct and show the real image/name.

## Contributing

Contributions are welcome! If you'd like to suggest improvements or fixes:

1. Open an issue describing the change or bug.
2. Fork the repository and create a feature branch.
3. Send a pull request with a clear description of your change.

Guidelines:
- Keep JavaScript modular and well-documented.
- Add or update tests/examples when introducing new behavior.
- If adding assets (images), keep file sizes reasonable and include attribution if required.

## Assets & Attribution

If you add external images or data (e.g., from PokéAPI or other sources), please include attribution and ensure you have the right to redistribute them.

## License

No license is specified in this repository. Add a `LICENSE` file to set the project's license (MIT is a common choice).

## Contact

Maintainer: Kartik-Singh-Bhadoria

Questions, suggestions, or feature requests? Open an issue or reach out through your GitHub account.
