
//get thickness from definitions.css
window.getOriginalThickness = function() {
  State.variables.originalThickness = $(":root").css("--thickness").replace("vmin", "");
}

//css zoomLevel
window.cssZoomLevel = function() {

  var level = State.variables.zoomLevel;
  var origThickness = State.variables.originalThickness;

  if (typeof level == "undefined") { level = 100; }

  //fontZooms
  $(":root").css({ "--thickness": (origThickness * (level/100)) + "vmin" });
  $("body").css({ "font-size": (4 * (level/100)) + "vmin" });
  $("h1").css({ "font-size": (7 * (level/100)) + "vmin" });
  $("h2").css({ "font-size": (6 * (level/100)) + "vmin" });
  $("h3").css({ "font-size": (5 * (level/100)) + "vmin" });
  $("h4").css({ "font-size": (4 * (level/100)) + "vmin" });
  $("h5").css({ "font-size": (3 * (level/100)) + "vmin" });
  $("h6").css({ "font-size": (2 * (level/100)) + "vmin" });
  $(".bigText").css({ "font-size": (6.5 * (level/100)) + "vmin" });
  $(".smallText").css({ "font-size": (2.5 * (level/100)) + "vmin" });
}

//options show
window.showOptions = function() {
  if (!Story.get(passage()).tags.includes("noOptions")) {
    $("#options-container").toggleClass("show");
    activeSubOption();
    let sound = SimpleAudio.tracks.get("menuSlide").clone();
    sound.volume(0.5).play();
  }
}

//show active subOption when clicekd
window.activeSubOption = function() {
  $("#optionCategory").children().removeClass("optionActive");
  $("#"+State.variables.currentSubOption).addClass("optionActive");
  optionAlert();
}

//show new notif alert thingy
window.optionAlert = function() {
  $("#optionCategory").children().removeClass("optionAlert");
  let alertsArray = State.variables.subOptionAlerts;
  for (let i = 0; i < alertsArray.length; i++) {
    if (alertsArray[i] == State.variables.currentSubOption) {
      State.variables.subOptionAlerts.splice(i, 1);
    }
    $("#"+alertsArray[i]).addClass("optionAlert");
  }
}

//keyboard toggles
$(document).on('keydown', function(ev) {
	switch (ev.code) {
    case "KeyE":
  	case "Escape":
  		showOptions();
  		break;
    case "KeyR":
      if ((State.variables.debug) && !(Story.get(passage()).tags.includes("noOptions"))) { Engine.restart(); }
      break;
	}
});

//hover stuff
$('#story').on('mouseover', 'a', function() {
  let sound = SimpleAudio.tracks.get("mouseOverLink").clone();
  sound.volume(0.5).play();
});
$(document).on('mouseover', ':button', function() {
  let sound = SimpleAudio.tracks.get("mouseOverLink").clone();
  sound.volume(0.5).play();
});

//click stuff
$('#story').on('mousedown', 'a', function() {
  let sound = SimpleAudio.tracks.get("mouseDownLink").clone();
  sound.volume(0.5).play();
});
$(document).on('mousedown', ':button', function() {
  let sound = SimpleAudio.tracks.get("mouseDownLink").clone();
  sound.volume(0.5).play();
});
