define([
    'config/characterGender'
], function(
    characterGender
) {
    
    var characterPortraits = [
        {
            gender: characterGender.female.key,
            id: 0,
            x: 0,
            y: 0
        },
        {
            gender: characterGender.female.key,
            id: 1,
            x: 275,
            y: 0
        },
        {
            gender: characterGender.male.key,
            id: 2,
            x: 548,
            y: 0
        },
        {
            gender: characterGender.male.key,
            id: 3,
            x: 822,
            y: 0
        }
    ];
    
	return characterPortraits;
});