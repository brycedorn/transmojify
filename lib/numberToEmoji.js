/*
 * @flow
 */

import toNumber from 'english2number'
import map from 'lodash/map'
import numeral from 'numeral'

const emojifiedNumbers = {
  '0': '0️⃣',
  '1': '1️⃣',
  '2': '2️⃣',
  '3': '3️⃣',
  '4': '4️⃣',
  '5': '5️⃣',
  '6': '6️⃣',
  '7': '7️⃣',
  '8': '8️⃣',
  '9': '9️⃣',
}

/*
 * Takes an input string and converts it to its
 * emoji equivalent. Uses the english2number library
 * to convert to integers then converts that to emoji.
 * 
 * TODO: allow multi-word numbers (e.g. three hundred thousand)
 */
const numberToEmoji = (input: string) => {
  let number

  try {
    number = toNumber(input)
  } catch (e) {
    number = typeof input === 'number' ? input : null
  }

  if (!number) {
    return false
  }

  // Edge case
  if (number === 10) {
    return '🔟'
  }

  const emoji = map(String(number).split(''), value => {
    return emojifiedNumbers[value]
  }).join('')

  return emoji
}

export default numberToEmoji
