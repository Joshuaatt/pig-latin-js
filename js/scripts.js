var pigLatin = function(words) {

  var vowels = ['a', 'e', 'i', 'o', 'u'];
  if (vowels.indexOf(words[0]) >= 0) {
    return words.concat('ay');
  } else {
    var counter = 0
    while (vowels.indexOf(words[counter]) < 0) {
      if
      counter += 1
    }
    var beginning_consanant = words.slice(0, counter);
    var remainder = words.slice(counter);
    return remainder.concat(beginning_consanant + 'ay');
  }
};
