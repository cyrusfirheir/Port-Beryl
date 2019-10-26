
Macro.add('customButton', {
	tags     : null,
	handler  : function () {
	
	var buttonType = this.args[0];
	var buttonText = "";

	if (this.args.length > 1) {
		buttonText = this.args[1];
	} else {
		buttonText = "";
	}

    var wiki = this.payload[0].contents.trim();

    if (wiki === '') {return;}

		var output = '<span class="' + buttonType + '">';
		output += '<<button "' + buttonText + '">>';
    	output += wiki;
		output += '<</button>></span>';
		$(this.output).wiki(output);
	}
});
