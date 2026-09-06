import express from 'express'
import cors from 'cors'
import { pokeRouter } from './routes/pokemonRouter.js';
const app = express();
const port = 8000;
//let currentAnswer = null;
//let currentImage = null;
app.use(cors())
app.use(express.json())
// Serve frontend
app.use(express.static('public'));
app.use('/pokemon', pokeRouter)
app.use('/guess', pokeRouter)

app.listen(port, () => console.log(`server is running on ${port} :)`));