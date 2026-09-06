import express from 'express'
import { pokeController } from '../controller/getPokeController.js'
import { guessController } from '../controller/guessController.js'
export const pokeRouter = express.Router()
pokeRouter.get('',pokeController)
pokeRouter.post('',guessController);