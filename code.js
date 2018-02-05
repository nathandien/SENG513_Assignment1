//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    return {
        nChars: txt.length,
        nWords: getWords(txt),
        nLines: getLines(txt),
        nNonEmptyLines: 22,
        averageWordLength: 3.3,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

function getWords(txt) {
	// Checks to see if txt is not an empty string
	// If so, split txt by spaces and return length
	// Else, return 0
	if(txt) {
		return txt.split(" ").length;
	}
	else {
		return 0;
	}
}

function getLines(txt) {
	// Checks to see if txt is not an empty string
	// If so, split by new line and return length
	// Else, return 0
	if(txt) {
		return txt.split(/\r\n|\r|\n/).length;
	}
	else {
		return 0;
	}
}

