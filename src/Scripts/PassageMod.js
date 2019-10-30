
window.customWrapper = function(custom = true) {
  State.variables.customDescriptions = custom;
  State.variables.customChoices = custom;
}


window.cleanLocation = function() {
  State.variables.locationDescriptions = [];
  State.variables.locationChoices = [];
}


Macro.add('showDescriptions', {
	handler  : function () {
    if (State.variables.customDescriptions) { return; }
    var output = "";
    for (let i = 0; i < State.variables.locationDescriptions.length; i++ ) {
      output += State.variables.locationDescriptions[i] + "<br><br>";
    }
		$(this.output).wiki(output);
	}
});


Macro.add('showChoices', {
	handler  : function () {
    if (State.variables.customChoices) { return; }
		var output = '<div class="choice">';
    for (let i = 0; i < State.variables.locationChoices.length; i++ ) {
      output += State.variables.locationChoices[i] + "<br>";
    }
    output += '</div>';
		$(this.output).wiki(output);
	}
});
