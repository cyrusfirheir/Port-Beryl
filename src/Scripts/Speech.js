
Macro.add('speech', {
	tags     : null,
	handler  : function () {

    var characterID = this.args[0];
		var characterColor = characterID;
		var displayedName = "";
		var characterType = "";

		//if char doesn't exist
		if (typeof(State.variables.Characters[characterID]) == "undefined") {
			displayedName = "???";
			characterColor = "default";
		} else if (this.args.length > 1) {
			displayedName = this.args[1];
		} else {
			displayedName = characterID;
		}

    switch (characterID) {

      case "PC":
          characterType = "PC";
					displayedName = "";
					break;

      default:
          characterType = "NPC";
					break;

    }

    var wiki = this.payload[0].contents.trim();

    if (wiki === '') {return;}

		var output = '<div class = "speech"><fieldset><legend>' + displayedName + '</legend>';
		output += '<span class="speech' + characterType + '"' + ' style="border-color: var(--' + characterColor + 'Color);"><br>';
    output += wiki;
		output += '</span></fieldset></div>';
		$(this.output).wiki(output);

	}
});
