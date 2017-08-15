#!/usr/bin/env node

const fs = require('fs')
const pos = require('pos')

const chainTexts = require('./chainTexts')

/*
 * WIP - a way to parse the chain texts
 * and somehow associate certain emoji
 * with phrases/words
 */
function parseChainTexts () {
  const output = {}
  const lexer = new pos.Lexer()
  const tagger = new pos.Tagger()

  let words
  let taggedWords

  let word
  let type

  let emojilessWord

  const emojiRegex = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g
  const total = chainTexts.length

  chainTexts.forEach((chainText, i) => {
    words = lexer.lex(chainText)
    taggedWords = tagger.tag(words)

    taggedWords.forEach((taggedWord, j) => {
      word = taggedWord[0].toLowerCase()

      emoji = word.match(emojiRegex)

      if (emoji) {
        emojilessWord = word

        emoji.forEach((emojiInWord) => {
          emojilessWord = emojilessWord.replace(emojiInWord, ' ')
        })

        if (emojilessWord) {
          if (!output[emojilessWord]) {
            output[emojilessWord] = emoji
          } else {
            output[emojilessWord].push(emoji)
          }

          console.log(`Entry added for ${emojilessWord}: ${emoji}.`)
        }
      }
    })

    console.log(`Completed ${i} of ${total}.`)
  })

  fs.writeFile('emojiData.js', JSON.stringify(output), 'utf8', (error) => {
    if (error) throw error
  })
}
