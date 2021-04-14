import list from "./words.json";

/**
 * Generate an swahili of words
 *
 * @param Integer word_count
 * @return Array|String
 */
class swahili {
  /**
   *
   * @param {*} word_count
   */
  constructor(word_count = 1) {
    this.random = function () {
      if (word_count == 1) {
        const word = list[Math.floor(Math.random() * list.length)];
        return word.sw;
      } else {
        const words = [];
        for (let i = 1; i < word_count; i++) {
          const word = list[Math.floor(Math.random() * list.length)];
          words.push(word);
        }
        return words;
      }
    };

    this.randomArray = function () {
      const words = [];
      for (let i = 1; i <= word_count; i++) {
        const word = list[Math.floor(Math.random() * list.length)];
        words.push(word.sw);
      }
      return words;
    };

    /**
     * Generate paragraph from word_count random words
     */
    this.paragraph = function () {
      let words = "";
      for (let i = 1; i <= word_count; i++) {
        const word = list[Math.floor(Math.random() * list.length)];
        words += word.sw + " ";
      }
      return words.trim();
    };
  }
}

export default swahili;
