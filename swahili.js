import list, { length } from "./words.json";

/**
 * Generate an swahili of words
 *
 * @param Integer word_count
 * @return Array|String
 */
class swahili {
  constructor(word_count = 1) {
    this.random = function() {
      if (word_count > 0) {
        const word = list[Math.floor(Math.random() * length)];
        return word.sw;
      } else {
        const words = [];
        for (let i = 1; i < word_count; i++) {
          const word = list[Math.floor(Math.random() * length)];
          words.push(word);
        }
        return words;
      }
    };
  }
}

export default swahili;
