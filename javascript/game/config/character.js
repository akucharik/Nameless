define([
    'config/characterAttribute',
    'config/characterAttributes',
    'config/characterClass',
    'config/characterGender',
    'config/characterPortraits',
    'config/characterSkill',
    'config/characterSkills',
    'config/characterUnit',
    'config/characterUnits'
], function(
    characterAttribute,
    characterAttributes,
    characterClass,
    characterGender,
    characterPortraits,
    characterSkill,
    characterSkills,
    characterUnit,
    characterUnits
) {
    
    var character = {
        attribute: characterAttribute,
        attributes: characterAttributes,
        characterClass: characterClass,
        gender: characterGender,
        portraits: characterPortraits,
        skill: characterSkill,
        skills: characterSkills,
        unit: characterUnit,
        units: characterUnits
    };
    
	return character;
});