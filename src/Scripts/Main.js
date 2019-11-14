
UIBar.hide();

Config.passages.transitionOut = 10;

Config.history.controls = false;
Config.history.maxStates = 5;

Config.saves.id = "port-beryl";
Config.saves.slots = 6;

Config.saves.isAllowed = function () {
	if (!Story.get(passage()).tags.includes("mainMenu")) { return true; }
};

window.getSaveSlot = function() {
  for (let i = 0; i < Save.slots.length; i++) {
    if (!Save.slots.has(i)) {
      return i;
      break;
    }
  }
}
