//import express from 'express'
let currentAnswer = null
let currentImage = null
export const pokeController = async (req,res)=>{
    try {
        const randomId = Math.floor(Math.random() * 1025) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`)
        if (!response.ok) {
            throw new Error('failed to fetch from PokeAPI');
        }

        const data = await response.json();

        currentAnswer = data.name.toLowerCase();
        const image = data.sprites.other['official-artwork'].front_default;
        // store image for later reveal when the user guesses
        currentImage = image;
        res.json({
            id: randomId,
            image: image
        })

    }
    catch (error) {
        console.error("Error fectching pokemon", error);
        res.status(500).json({ error: "Could not fetch a Pokémon right now." });
    }
}