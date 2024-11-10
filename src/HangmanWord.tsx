type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
}


export function HangmanWord({ guessedLetters, wordToGuess}: HangmanWordProps) {

    //letter styling
    return <div style= {{ display: "flex", gap: "0.25em", fontSize: "6rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace",}} >

        {/* compare each letter using index as key */}
        {wordToGuess.split("").map((letter, index) => (
            <span style= {{ borderBottom: "0.1em solid black"}} key={index}>
                {/* hide letter if not in guess */}
                <span style= {{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden", }}> 
                
                {letter}
                </span>
            </span>
        ))}
    </div>
}