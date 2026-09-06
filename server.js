import express from 'express'
//import { leaderboardData } from './data.js';
import cors from 'cors'
import { pokeRouter } from './routes/pokemonRouter.js';
const app = express();
const port = 8000;
let currentAnswer = null;
let currentImage = null;
app.use(cors())
app.use(express.json())
// Serve frontend
app.use(express.static('public'));

// app.get('/pokemon', async (req, res) => {
//     try {
//         const randomId = Math.floor(Math.random() * 1025) + 1;
//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
//         if (!response.ok) {
//             throw new Error('failed to fetch from PokeAPI');
//         }

//         const data = await response.json();

//         currentAnswer = data.name.toLowerCase();
//         const image = data.sprites.other['official-artwork'].front_default;
//         // store image for later reveal when the user guesses
//         currentImage = image;
//         res.json({
//             id: randomId,
//             image: image
//         })

//     }
//     catch (error) {
//         console.error("Error fectching pokemon", error);
//         res.status(500).json({ error: "Could not fetch a Pokémon right now." });
//     }
// })

// app.post('/guess', (req,res)=>{
//     const userGuess = req.body.guess

//     if (!currentAnswer || !userGuess) {
//         return res.status(400).json({ error: "No active game or missing guess." });
//     }

//     if (userGuess.toLowerCase().trim() === currentAnswer.toLowerCase()) {
//         res.json({
//             correct: true,
//             name: currentAnswer,
//             image: currentImage
//         })
//     }
    
//     else {
//         res.json({
//             correct: false
//         });
//     }
// })

 app.use('/pokemon', pokeRouter)
 app.use('/guess', pokeRouter)

app.listen(port, () => console.log(`server is running on ${port} :)`));