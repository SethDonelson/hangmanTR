export function HangmanWord() {

    const word = "Steve"
    const guessedLetters = ["t", "e"]

    //letter styling
    return <div style= {{ display: "flex", gap: "0.25em", fontSize: "6rem", fontWeight: "bold", textTransform: "uppercase", fontFamily: "monospace",}} >

        {/* compare each letter using index as key, make visible/hidden */}
        {word.split("").map((letter, index) => (
            <span style= {{ borderBottom: "0.1em solid black"}} key={index}>
                <span style= {{ visibility: guessedLetters.includes(letter) ? "visible" : "hidden", }}>
                
                {letter}
                </span>
            </span>
        ))}
    </div>
}