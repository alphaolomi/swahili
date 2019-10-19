const list = require("./words.json");

/**
 * Generate an swahili of words
 *
 * @param Integer word_count
 * @return Array|String
 */
function swahili(word_count = 1) {
  this.random = function() {
    if (word_count > 0) {
      const word = list[Math.floor(Math.random() * list.length)];
      return word.sw;
    } else {
      const words = [];
      for (let i = 1; i < words_count; i++) {
        const word = list[Math.floor(Math.random() * list.length)];
        words.push(word);
      }
      return words;
    }
  };
}

module.exports = swahili;
