
//returns a string to signify relation b/w Characters.
window.returnOpinion = function(opinionArray) {

  var rel = opinionArray[0];

  if (!opinionArray[1]) {

    if         (rel <  -1)                          { return "Hates you"; }
    else if   ((rel >= -1)    &&  (rel < -0.5))     { return "Doesn't like you at all"; }
    else if   ((rel >= -0.5)  &&  (rel <  0))       { return "Dislikes you"; }
    else if   ((rel >   0)    &&  (rel <  0.5))     { return "Is civil towards you"; }
    else if   ((rel >=  0.5)  &&  (rel <  1))       { return "Thinks you aren't a bother"; }
    else if   ((rel >=  1)    &&  (rel <  1.5))     { return "Is a friend"; }
    else if   ((rel >=  1.5)  &&  (rel <  2))       { return "Trusts you"; }
    else if   ((rel >=  2)    &&  (rel <  2.5))     { return "Enjoys your company"; }
    else if   ((rel >=  2.5)  &&  (rel <  3))       { return "Loves you"; }
    else if    (rel >=  3)                          { return "Is family"; }

  } else {

    if         (rel <  -1)                          { return "Truly hates you"; }
    else if   ((rel >= -1)    &&  (rel < -0.5))     { return "Avoids you everywhere"; }
    else if   ((rel >= -0.5)  &&  (rel <  0))       { return "Is pissed off at you"; }
    else if   ((rel >   0)    &&  (rel <  0.5))     { return "Silent treatment™"; }
    else if   ((rel >=  0.5)  &&  (rel <  1))       { return "Thinks you're fun"; }
    else if   ((rel >=  1)    &&  (rel <  1.5))     { return "Likes you"; }
    else if   ((rel >=  1.5)  &&  (rel <  2))       { return "Trusts you"; }
    else if   ((rel >=  2)    &&  (rel <  2.5))     { return "Enjoys your presence"; }
    else if   ((rel >=  2.5)  &&  (rel <  3))       { return "Loves you"; }
    else if    (rel >=  3)                          { return "Is family"; }

  }
}


//sets opinions and strings
window.setOpinion = function(charA, charB, mod=0, romanticToggle=false) {
  State.variables.Characters[charA].opinion[charB][0] += mod;
  if (romanticToggle) {
    State.variables.Characters[charA].opinion[charB][1] = !State.variables.Characters[charA].opinion[charB][1];
  }
  State.variables.Characters[charA].opinion[charB][2] = returnOpinion(State.variables.Characters[charA].opinion[charB]);
}


//initializes relations
window.initRelations = function(charID) {
  var chars = State.variables.Characters;
  State.variables.Characters[charID].opinion = {};
  for (let i = 0; i < Object.keys(chars).length; i++) {
    State.variables.Characters[charID].opinion[Object.keys(chars)[i]] = [0.01, false];
    State.variables.Characters[charID].opinion[Object.keys(chars)[i]].push(returnOpinion([0.01, false]));
  }
}
