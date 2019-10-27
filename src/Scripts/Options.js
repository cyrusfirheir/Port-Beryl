
//css zoomLevel
window.cssZoomLevel = function() {

  var level = State.variables.zoomLevel;

  if (typeof level == "undefined") { level = 100; }

  //fontZooms
  $(":root").css({ "--thickness": (0.5 * (level/100)) + "vmin" });
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
  $("#options-container").toggleClass("show");
}
