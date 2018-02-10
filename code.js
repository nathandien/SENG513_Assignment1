//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    return {
        nChars: txt.length,
        nWords: getWords(txt),
        nLines: getLines(txt),
        nNonEmptyLines: getNonEmptyLines(txt),
        averageWordLength: 3.3,
        maxLineLength: getMaxLine(txt),
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

function getWords(txt) {
	// Checks to see if txt is not an empty string
	// If so, return number of words
	// Else, return 0
	if(txt) {
		// Replaces new lines with spaces
		txt = txt.replace(/\W+/g, " ");
		txt = txt.replace(/\n/," ");
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

function getNonEmptyLines(txt) {
	// Splits txt by new lines
	txt = txt.split(/\r\n|\r|\n/).length;

	let count = 0;
	
	for(let line of txt) {
		// Removes white space
		line = line.replace(/\s/g, "");
		// Increments counter if line is not empty
		if(line.length != 0) {
			count++;
		}
	}
	
	return count;
}

function getMaxLine(txt) {
	// Splits txt by new lines
	txt = txt.split(/\r\n|\r|\n/).length;
	let max = 0;
	
	// Finds the value of the max length line
	for(let line of txt) {
		// Get length of current line
		len = line.length;
		if(len >= max) {
			max = len;
		}
	}
	
	return max;
}

