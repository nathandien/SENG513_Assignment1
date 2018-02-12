function getStats(txt) {
    return {
        nChars: txt.length,
        nWords: getWords(txt).length,
        nLines: getLines(txt),
        nNonEmptyLines: getNonEmptyLines(txt),
		maxLineLength: getMaxLine(txt),
        averageWordLength: getAvgWordLen(txt),
        palindromes: getPalindromes(txt),
        longestWords: getLongWords(txt),//[],//getWords(txt),
        mostFrequentWords: getFrequentWords(txt)//["hello(7)", "world(1)"]
    };
}

function getWords(txt) {
	// Removes new lines and extra symbols
	txt = txt.replace(/\W/g, " ").trim();
	txt = txt.replace(/\s+/g," ").trim();
	txt = txt.toLowerCase();
	
	//txt = txt.replace(/\s/g," ");

	return txt.split(" ");
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
	txt = txt.split(/\r\n|\r|\n/);

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
	txt = txt.split(/\r\n|\r|\n/);
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

function getAvgWordLen(txt) {
	// Replaces new lines with spaces
	txt = getWords(txt);

	let avgLen = 0;
	let divisor = 0;
	
	// Sums the length of each word and increments divisor
	for(let word of txt) {
		avgLen += word.length;
		divisor++;
	}
	
	return avgLen/divisor;
	
}

// Removes duplicate words from txt
function removeDup(txt) {
	txt = txt.filter(function(item, pos) {
		return txt.indexOf(item) == pos;
	})
	
	return txt;
}

function getPalindromes(txt) {
	let pal = [];
	let allWords = getWords(txt);
	
	allWords = removeDup(allWords);
	
	// Iterate through all words
	for(let word of allWords) {
		// Length of palindrome has to be at least 2
		if(word.length > 2) {
			// Reverses the current word
			let letters = word.split("");
			letters = letters.reverse();
			let revWord = letters.join("");
			
			// Checks to see if word is palindrome (ignore case)
			if(word.toLowerCase() === revWord.toLowerCase()) {
				pal.push(word.toLowerCase());
			}
		}
	}
	
	return pal;
}

function getLongWords(txt) {
	let allWords = getWords(txt);
	allWords = removeDup(allWords);
	
	//Words = allWords.map(w => w.replace(/([\w\s]+)\1+/, '$1'))
	
	// Sorts by length of words
	let longWords = allWords.sort(function(word1, word2) {
		return word2.length - word1.length;
	});
	
	let topWords = [];
	let checkLen = 10;
	
	// Check to see if number of words is less than 10
	// If so, set checkLen so we don't push non-existent words
	if(allWords.length < 10) {
		checkLen = allWords.length;
	}
	
	// Add top longest words (<= 10) to topWords
	for(count = 0; count < checkLen; count++) {
		topWords.push(longWords[count].toLowerCase());
	}
	
	return topWords;
}

function getFrequentWords(txt) {
	let freqWord = [];
	let allWords = getWords(txt);
	
	// Get frequency of all words
	for(let word of allWords) {
		word = word.toLowerCase()
		// Check if current word is not already found
		// If so, add word to array
		if(!freqWord[word]) {
			freqWord[word] = 0;
		}
		freqWord[word]++;
	}
	
	let temp = [];

	// Push words and their frequency to a temporary array
	Object.keys(freqWord).forEach(function(word) {
		temp.push([word, freqWord[word]]);
		//arrayWords.push(word + "(" + freqWord[word] + ")");
	});
	
	// Sort the array by frequency
	let sortFreqWord = temp.sort(function(a, b) {
		return b[1] - a[1];
	});
	
	let checkLen = 10;
	let retArray = [];
	
	// Check to see if number of words is less than 10
	// If so, set checkLen so we don't push non-existent words
	if(sortFreqWord.length < 10) {
		checkLen = sortFreqWord.length;
	}
	
	// Form output array
	for(count = 0; count < checkLen; count++) {
		let word = sortFreqWord[count];
		retArray.push(word[0] + "(" + word[1] + ")");
	}
	
	return retArray;
}
