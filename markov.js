/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    // TODO
    
    const chains = {};
    const the_words = this.words;
    
    let x = 0;
    do {
    const word = the_words[x];
    const next = the_words[x+1];

    !chains[word] ? chains[word] = [] : null;

    next ? chains[word].push(next) : chains[word].push(null);

    x++;
  }
    while (x < the_words.length);

    // console.log(chains);
    this.chains = chains;

}

  /** return random text from chains */

  makeText(numWords = 100) {
    let keys = Array.from(Object.keys(this.chains));
    let random_Key = keys[Math.floor(Math.random() * keys.length)];
    let results = [];

    for (let i = results.length; i < numWords && random_Key !== null; i++) {
      results.push(random_Key);
      random_Key = keys[Math.floor(Math.random() * keys.length)];
    }
    // console.log(results);
    let combination = results.join(" ");
    // console.log(combination);
    return combination;
  }
}


// let mm = new MarkovMachine("the cat in the hat");
// console.log(mm)

// mm.makeChains()
// mm.makeText();

// const go = new MarkovMachine("the cat in the hat");
// console.log(go)

module.exports = {MarkovMachine};