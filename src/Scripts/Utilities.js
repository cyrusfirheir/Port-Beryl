
setup.toSentenceCase = function(str) {
  var text = str.trim();
  if (text.length > 0) {
    return text[0].toUpperCase() + text.substring(1);
  } else {
    return '';
  }
};


setup.chance = function(percent) {
  let comparator = Math.random();
  if (comparator < percent) {
    return true;
  }
  return false;
}


Macro.add('arrayPush', {
  tags    : ['nextPush'],
  handler : function () {
    if (this.payload[0].contents.trim() === '') { return; }
    var arrayVar = this.args[0];
    for (let i = 0; i < this.payload.length; i++) {
      State.variables[arrayVar].push(this.payload[i].contents.trim());
    }
  }
});


Macro.add('arraySplice', {
  tags    : ['nextSplice'],
  handler : function () {
    if (this.payload[0].contents.trim() === '') { return; }
    var arrayVar = this.args[0];
    var splicePosition = this.args[1];
    var spliceDelete = 0;
    if (this.args.length > 2) {spliceDelete = this.args[2];}
    for (let i = 0; i < this.payload.length; i++) {
      State.variables[arrayVar].splice(splicePosition, spliceDelete, this.payload[i].contents.trim());
    }
  }
});
