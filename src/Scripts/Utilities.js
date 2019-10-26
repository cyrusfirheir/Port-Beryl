
setup.toSentenceCase = function(str) {
  var text = str.trim();
  if (text.length > 0) {
    return text[0].toUpperCase() + text.substring(1);
  } else {
    return '';
  }
};
