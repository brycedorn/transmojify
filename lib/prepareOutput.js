/*
 * Handles a few edge cases with punctuation
 * and weird spacing.
 *
 * @flow
 */

const prepareOutput = (parsedWords: Array<string>) => {
  let nextWord
  let nextNextWord
  let openQuote
  let prevWord
  let prevIndex

  parsedWords.forEach((word, index) => {
    if ([':', '"'].includes(word)) {
     nextNextWord = parsedWords[index + 2]

     if (nextNextWord && nextNextWord === word) {
       nextWord = parsedWords[index + 1]

       parsedWords.splice(index, 3, `${word}${nextWord}${word}`)
     }
   } else if (word === "'" && index > 0) {
     prevIndex = index - 1
     prevWord = parsedWords[prevIndex]

     if (prevWord && parsedWords.length > (index + 1)) {
       nextWord = parsedWords[index + 1]

       parsedWords.splice(prevIndex, 3, `${prevWord}${word}${nextWord}`)
     }
   }
  })

  return parsedWords
}

export default prepareOutput
