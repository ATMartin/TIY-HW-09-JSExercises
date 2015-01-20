var affirmations = ["You're amazing!", "Great job!", "WOAH that was tough!", "Incredible!", "Inconceivable!", "I'm impressed.", "Can you teach me to program?"];
var randomAffirmation = function() {
  var myIdx = Math.floor(Math.random() * 7);
  return affirmations[myIdx];
};

//Test 1: max(a, b)

console.assert( max(6, 9) == 9, "- max(a,b) failed to return the correct value!");
console.log("max() passed!");
console.log(randomAffirmation());

//Test 2: maxOfThree(a, b, c)

console.assert ( maxOfThree(3, 8, 4) == 8, "- maxOfThree(a,b,c) failed to return the correct value!");
console.log("maxOfThree() passed!");
console.log(randomAffirmation());
//Test 3: isVowel(char)

console.assert ( isVowel('a') === true, "- isVowel(a) failed to return the correct value!");
console.log("isVowel() passed!");
console.log(randomAffirmation());
//Test 4: rovarspraket(string)

console.assert ( rovarspraket('this is fun') == 'tothohisos isos fofunon', "- rovarspraket(str) failed to return the correct value!");
console.log('rovarspraket() passed!');
console.log(randomAffirmation());
//Test 5: sum([a, b, c])

console.assert( sum([1, 2, 3, 10]) == 16, "- sum([]) failed to return the correct value!");
console.log("sum() passed!");
console.log(randomAffirmation());
//Test 6: multiply([a, b, c])

console.assert( multiply([1, 3, 5, 7]) == 105, "- multiply([]) failed to return the correct value!");
console.log("multiply() passed!");
console.log(randomAffirmation());
//Test 7: reverse(str)

console.assert( reverse("jag testar") == "ratset gaj", "- reverse(string) failed to return the correct value!");
console.log("reverse() passed!");
console.log(randomAffirmation());
//Test 8: findLongestWord([a, b, c])

console.assert( findLongestWord(["ape", "banana", "grape"]) == 6, "- findLongestWord([]) failed to return the correct value!");
console.log("findLongestWord() passed!");
console.log(randomAffirmation());
//Test 9: filterLongWords([a, b, c], i)

console.assert( filterLongWords(["ape", "banana", "grape"], 4).length == 2, "- filterLongWords([], i) failed to return the correct value!");
console.log("filterLongWords() passed!");
console.log(randomAffirmation());
//Test 10: charFreq(string)

console.assert( Object.keys(charFreq("this is working")).length === 11, "- charFreq(str) failed to return the correct value!");
console.log("charFreq() passed!");
console.log(randomAffirmation());

console.log("ALL FUNCTIONS PASSED!");
console.log("WOOHOO!");
console.log("GO GRAB A BEER!");
