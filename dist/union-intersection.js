"use strict";
const newPerson = {
    name: "Rasel",
    roll: 566,
};
var Level;
(function (Level) {
    Level["junior"] = "Junior";
    Level["mid"] = "Mid";
    Level["senior"] = "Senior";
})(Level || (Level = {}));
const newDeveloper = {
    name: "Rasel Miah",
    expertise: "Javascript",
    experience: 1,
};
const developer = {
    name: "Rasel",
    expertise: "Javascript",
    experience: 3,
    leadershipExperience: 5,
    level: Level.senior
};
