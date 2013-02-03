var readline = require('readline');
var parser = require('./parser');

exports.start = function (line) {
    var rl = readline.createInterface({
		input: process.stdin, 
		output: process.stdout});
	var lastSexpr;
	var pmpt = 'sjsu> ';

    rl.on('line', function(line) {
	// FIXME: need to change to allow for multi-line input, which would
	// suggest possibly re-writing as an event-driven parser.
		//console.log("result " + parser.parse(line));
		console.log(parser.parse(line));
		rl.setPrompt(pmpt, pmpt.length);
   		rl.prompt();
    }).on('close', function() {
	console.log('San Jose Scheme is exiting...');
	process.exit(0);
    });


    rl.on('uncaughtException', function (err) {
	console.log('Caught exception: ' + err);
    });

    
    rl.setPrompt(pmpt, pmpt.length);

    rl.prompt();
};
