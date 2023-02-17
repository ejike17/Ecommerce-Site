function removeExclamationMarks(s) {
  let splitWord = s.split(",");
  for (let letter of splitWord) {
    if (letter == "!") {
      letter = "";
    }
  }
  let joinWord = splitWord.join();
  return joinWord;
}


console.log("wer!gebew!".split());