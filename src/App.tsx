import { useState } from  "react"
import { HangmanDrawing } from './HangmanDrawing'
import { HangmanWord } from './HangmanWord'
import { Keyboard } from  './Keyboard'
import words from "./wordList.json"



function App(){
  //get random word from list
  const [wordToGuess, setWordToGuess] = useState(() =>{
    return words[Math.floor(Math.random() * words.length)] 
  })
    //add guessed letters to a string
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  return (
    // style container
    <div style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center",
    }}
    >

      <div style = {{ fontSize: "2rem", textAlign: 'center'}}>
        Lose
        Win
      </div>

      <HangmanDrawing />
      <HangmanWord />
      <Keyboard />

    </div>

      
  )

}


export default App