import { useState, useEffect, useCallback } from  "react"
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

  //checks for correct letter
  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  )

  //tracks guessed letter, limits repeated misses
  const addGuessedLetters = useCallback((letter: string) => {
      if (guessedLetters.includes(letter)) return

      setGuessedLetters(currentLetters => [...currentLetters, letter])
    }, [guessedLetters]
  )
 

  //allow keyboard input, add and remove event listener  
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key
    
      if (!key.match(/^[a-z]$/)) return

      //run function if key is a-z
      e.preventDefault()
      addGuessedLetters(key)
    }

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }

  }, [guessedLetters])

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

      {/* add to drawing if incorrect */}
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />

      <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess} />

      <div style= {{ alignSelf: "stretch"}}>
        <Keyboard activeLetters={guessedLetters.filter(letter =>
          wordToGuess.includes(letter)
        )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetters}
          
          />
      </div>

    </div>

      
  )

}


export default App