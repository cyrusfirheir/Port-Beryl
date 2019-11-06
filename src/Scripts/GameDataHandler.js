
//adds new Quests, Status Effects, Notifications, etc
window.gameDataAdd = function(type, data) {
  State.variables[type].push(data);
  State.variables.subOptionAlerts.pushUnique(type);
  SimpleAudio.tracks.get("notif").volume(1).play();

  setup.notify("Logs updated!");

}
