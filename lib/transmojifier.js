/*
 * Transmojifier v0.0.1
 * https://github.com/brycedorn/transmojify-js
 *
 * Released under the MIT license
 * https://mit-license.org
 *
 * @flow
 */

import map from 'lodash/map'
import { emojify } from 'node-emoji'
import pos from 'pos'

import emojiDex from './emojiDex'
import prepareOutput from './prepareOutput'

export default class Transmojifier {

  emojiDex: Object

  constructor() {
    this.emojiDex = new emojiDex()
  }

  transmojify(input: string) {
    const words = input.split(' ')
    const parsedWords = []

    words.forEach((word) => {
      if (['.', '!', '?', ','].includes(word)) {
        let prevEntry = parsedWords.pop()

        parsedWords.push(`${prevEntry}${word}`)
      } else {
        let replacement = this.emojiDex.getEmojiFor(word)

        if (replacement === word) {
          parsedWords.push(replacement)
        } else {
          // TODO: randomize if it's before/after/both
          parsedWords.push(`${word}${replacement}`)
        }
      }
    })

    const output = prepareOutput(parsedWords)

    return emojify(output.join(' '))
  }
}
