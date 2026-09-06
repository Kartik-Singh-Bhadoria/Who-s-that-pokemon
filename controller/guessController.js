let currentAnswer = null
let currentImage = null
export const guessController = (req,res)=>{
    const userGuess = req.body.guess

    if (!currentAnswer || !userGuess) {
        return res.status(400).json({ error: "No active game or missing guess." });
    }

    if (userGuess.toLowerCase().trim() === currentAnswer.toLowerCase()) {
        res.json({
            correct: true,
            name: currentAnswer,
            image: currentImage
        })
    }
    
    else {
        res.json({
            correct: false
        });
    }
}