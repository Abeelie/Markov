const start = require("../markov");

describe("Markov Machine class methods test", function(){

   test("testing makeChains method", function(){
        const go = new start.MarkovMachine("the cat in the hat");
        expect(go).toEqual({
  				words: [ 'the', 'cat', 'in', 'the', 'hat' ],
 				chains: {the: [ 'cat', 'hat' ], cat: [ 'in' ], in: [ 'the' ], hat: [ null ]}
	});
});

   test("testing makeText mathod", function() {
    const go = new start.MarkovMachine("the pickle is on the counter");
    const data = go.makeText(20);
    const data_array = data.split(' ');
    expect(data_array.length).toEqual(20);
    });
});