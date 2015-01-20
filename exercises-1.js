/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(n1, n2){
    "use strict";
    if (n1 > n2) {
			return n1; 
		}
		else { 
			return n2; 
		}
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(n1, n2, n3){
    "use strict";
    return max(max(n1, n2), max(n2, n3));
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    var vowels = ['a', 'e', 'i', 'o', 'u'];
		if (char === 'y') {
			var sometimes = Math.random() * 10;
			return (sometimes >= 5);
		}
		return (vowels.indexOf(char) > -1);
}

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var retval = [];
		phrase.split('').forEach( function(l) {
			if (!isVowel(l) && l !== ' ') { retval.push(l+ "o" + l); }
			else { retval.push(l); }
		});
		return retval.join('');
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(arr){
    "use strict";
    return arr.reduce(function(one, two) { return one + two; });
}

function multiply(arr){
    "use strict";
    return arr.reduce(function(one, two) { return one * two; });
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(str){
    "use strict";
    return str.split('').reverse().join('');
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    var max = 0;
		words.forEach(function(word) {
			if (word.split('').length > max) { max = word.split('').length; }
		});
		return max;
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    var retval = [];
		words.forEach(function(word) {
			if (word.split('').length > i) { retval.push(word); }
		});
		return retval;
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    var retval = {};
		string.split('').forEach(function(c) {
			if (!retval[c]) { retval[c] = 0; }
			retval[c] += 1;
		});
		return retval;
}

