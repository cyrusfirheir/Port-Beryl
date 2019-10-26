
Macro.add('speech', {
	tags     : null,
	handler  : function () {

    var characterName = this.args[0];
		var displayedName = "";
		var characterType = "";

		if (this.args.length > 1) {
			displayedName = this.args[1];
		} else {
			displayedName = characterName;
		}

    switch (characterName) {

      case "You":
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
		output += '<span class="speech' + characterType + ' ' + characterName + '"><br>';
    	output += wiki;
		output += '</span></fieldset></div>';
		$(this.output).wiki(output);
	}
});
