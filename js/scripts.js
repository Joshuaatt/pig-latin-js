var pigLatin = function(words) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.indexOf(words[0]) >= 0) {

    return words.concat('ay');
  }
};
