/** Command-line tool to generate Markov text. */
const fs = require('fs');
const start = require("./markov") 
const process = require('process');
const axios = require('axios');
const striptags = require('striptags');

function markov(data){
    const go = new start.MarkovMachine(data)
    console.log(go.makeText());
}

function cat(path) {
  fs.readFile(path, 'utf8', function(err, data) {
    if (err) {
      console.error(`Error reading ${path}: ${err}`);
      process.exit(1);
    } else {
      markov(data);
    }
  });
}

async function webCat(url) {
	const get_url = await axios.get(url).then(data => { markov(striptags(data.data));})
                  .catch(err => {
                    console.log(`Error reading the url at ${url}: ${err}`); 
                  	process.exit(1);
  });         
}

function results(){
  switch(process.argv[2]){
    case 'file': cat(process.argv[3]);
    break;
    case 'url': webCat(process.argv[3]);
    break;
    default: console.log("The second argument must be file or url"); process.exit(1);
  }
}


results();