import sample from 'lodash/sample';

import numberToEmoji from './numberToEmoji';
import symbolToEmoji from './symbolToEmoji';

import emojiData from './data/manualEmojiData.js';

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
};

export default class emojiDex {
  constructor() {
    this.getEmojiFor = this.getEmojiFor.bind(this);
    this.emojiData = emojiData;
  }

  getEmojiFor(word: string) {
    let replacement = word;
    let genericEmoji = this.emojiData[word];

    if (genericEmoji) {
      replacement = sample(genericEmoji);
    } else {
      let number = numberToEmoji(word);

      if (number) {
        replacement = number;
      } else {
        console.log('am here');
        console.log(word);
        console.log(replacement);
        let symbol = symbolToEmoji(word);

        if (symbol) {
          replacement = symbolEmoji;
        }
      }
    }

    return replacement;
  }
}
