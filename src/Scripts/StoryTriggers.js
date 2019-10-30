
Object.defineProperty(window, "v",      { get: function() { return State.variables; } });
Object.defineProperty(window, "t",      { get: function() { return State.temporary; } });
Object.defineProperty(window, "setup",  { get: function() { return setup; } });


window.parseExpression = function(obj) {
  return Function('c', 'return (' + obj + ')');
}


window.checkForEvents = function() {
  var storyEventsArray = State.variables.storyEvents;

  for (let i = 0; i < storyEventsArray.length; i++) {
    var curEvent = storyEventsArray[i];
    var triggerCheck = parseExpression(curEvent.triggers);

    if (triggerCheck({  hasVisited  : hasVisited
                      , lastVisited : lastVisited
                      , passage     : passage
                      , previous    : previous
                      , visited     : visited
                      , visitedTags : visitedTags
                      , Story       : Story
                      , Dialog      : Dialog
                      , Engine      : Engine
                      , State       : State
                    })) {

      Engine.play(curEvent.destination);

      if (typeof curEvent.repeat == "undefined") { curEvent.repeat = 0; }
      if (curEvent.repeat > 0) {
        State.variables.storyEvents[i].repeat--;
      }
      if (curEvent.repeat == 0) {
        State.variables.storyEvents.splice(i,1);
      }

      break;
    }

  }

}
