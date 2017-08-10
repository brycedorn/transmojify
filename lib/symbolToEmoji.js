/*
 * @flow
 */

import { search } from 'node-emoji'

const symbols = {
  ':': 'colon',
  ';': 'semicolon',
  '<': 'less than sign',
  '=': 'equal sign',
  '>': 'greater than sign',
  '?': 'question mark',
  ' ': 'space',
  '!': 'exclamation point',
  '"': 'double quotes',
  '#': 'number sign',
  '$': 'dollar sign',
  '%': 'percent sign',
  '&': 'ampersand',
  "'": 'single quote',
  '(': 'opening parenthesis',
  ')': 'closing parenthesis',
  '*': 'asterisk',
  '+': 'plus sign',
  ',': 'comma',
  '-': 'minus sign - hyphen',
  '.': 'period',
  '/': 'slash',
  '¢': 'cent sign',
  '£': 'pound sign',
  '¤': 'currency sign',
  '¥': 'yen sign',
  '¦': 'broken vertical bar',
  '§': 'section sign',
  '¨': 'spacing diaeresis - umlaut',
  '©': 'copyright sign',
  '«': 'left double angle quotes',
  '¬': 'not sign',
  '®': 'registered trade mark sign',
  '€': 'euro sign',
  '™': 'trade mark sign',
}

const symbolToEmoji = (input: string) => {
  let words = symbols[input]

  if (!words) {
    return input
  }

  return search(words)
}

export default symbolToEmoji
