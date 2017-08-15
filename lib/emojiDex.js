// JSON.parse(emoji.unemojify(JSON.stringify(emojiData)))

import sample from 'lodash/sample'

import numberToEmoji from './numberToEmoji'
import symbolToEmoji from './symbolToEmoji'
import emojiData from './data/emojiData.js'

const defaultOptions = {
  shouldSort: true,
  threshold: 0.1,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    'code',
    'category',
    'base',
    'variants',
  ]
}

export default class emojiDex {
  constructor() {
    this.getEmojiFor = this.getEmojiFor.bind(this)
    this.emojiData = emojiData
  }

  getEmojiFor(input: string) {
    let word = input
    let replacement = word
    let entry = this.emojiData[word]

    if (entry) {
      replacement = sample(entry)
    } else {
      let number = numberToEmoji(word)

      if (number) {
        replacement = number
      } else {
        let symbol = symbolToEmoji(word)

        if (symbol) {
          replacement = symbol
        }
      }
    }

    return replacement
  }
}
