leaving off:
 - emojifiedWords/emojifiedSymbols

# transmojify-js

[![npm version](https://badge.fury.io/js/transmojify-js.svg)](https://badge.fury.io/js/transmojify-js) [![MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/brycedorn/transmojify-js/master/LICENSE)

Chain texts have established themselves as a [modern art form](http://chaintexts.tumblr.com/). This handy tool :wrench: enables you to give some flair to that boring :unamused: :unamused: text you were just about to send :wink: .

[Demo](http://bryce.io/transmojify).

## Usage

```javascript
import Transmojify as tm from 'transmojify-js';

const text = 'this is the text I want to send to all my friends';

console.log(tm(text)); /* THIS is the TEXT I WANT to SEND to all my FRIENDS */
```

## Advanced usage

```javascript
const opts = {
  frequency: 10,
  upperCaseThreshold: 0,
  replaceNumbers: false
};

console.log(tm(text, opts)); /* this is the text I want to send to all my friends */
```

There are knobs you can turn to customize the output:

##### frequency `[0 ... 10]`, default: `5`

 - Frequency to insert emojis.

##### upperCaseThreshold `[0 ... 10]`, default: `5`

 - Frequency to uppercase random (non-determiner/prepositional) words. `10` upcases entire output.

##### replaceNumbers `[true, false]`, default: `true`

 - Whether to replace 9 with :nine:, etc.

##### skinTone `[null, 0 ... 4]`, default: `null`

 - Which skin tone to use for hand emojis (e.g. :wave:). `null` randomizes for each emoji.

## Issues

If you have any crucial phrases that I missed, feel free to make a pull request or create an [issue](https://github.com/brycedorn/transmojify-js/issues).

## Thanks
* [emojidex](https://www.emojidex.com/emoji?utf8=%E2%9C%93)
* [iemoji](http://www.iemoji.com/meanings-gallery)
* [People of the Internet](http://chaintexts.tumblr.com)


#### TODOS
 - add 'show me what just happened' that prints out all the conversions Helps with debugging too
