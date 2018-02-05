//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    return {
        nChars: txt.length,
        nWords: txt.split(" ").length,
        nLines: txt.split(/\r\n|\r|\n/).length,
        nNonEmptyLines: 22,
        averageWordLength: 3.3,
        maxLineLength: 33,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
    };
}

