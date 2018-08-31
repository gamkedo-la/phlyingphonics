// Similar to the Input module, this static Sounds module keeps loaded sounds in a dictionary, with the keys being what was entered in "soundFileNames"
//without the directory names and file extensions.
// Essentially, edit the soundFileNames array with all your sound paths, then access them with Sounds.getSound(nameOnly)
//
// Example: viewtiful.mp3 in soundFileNames ---> let viewtifulJoeSound = Sounds.getSound("viewtiful");
//
// ---> This implies string comparisons, ie don't pull and draw directly from the dict each frame.
// Instead, give the reference to an object, for example player.sound = Sounds.getSound("player"), then draw player.sound
// If there is no object oriented design in the game, you could discard this module and use the standard club Soundloading.js method,
//or you could pull directly from the dict anyway (should be fine really)

// If there are issues with how the OS handles file directories (for example if the "/" does not work for whatever reason) please tell me! :O

// Made by your friend Remy :) (based on the usual script from Chris)

function Sounds() {
    let sound;
    let soundDict = [];

    console.log("Initializing Sounds module.");

    for (let i = 0, len = soundFileNames.length; i < len; i++) {

        // Cuts up the path to extract the sound name, and adds it in the dict
        let splitArray = soundFileNames[i].split("/");
        let soundName = splitArray[splitArray.length - 1].split(".")[0];

        sound = document.createElement("AUDIO");
        soundDict[soundName] = sound; //the spot is being kept by a dummy sound; we will load it later
    }

    Sounds.loadSounds = function () {

        for (let i = 0, len = soundFileNames.length; i < len; i++) {

            // We did this already above, but this time we are loading the sounds
            // (ie giving all placeholder sounds their .src)
            let splitArray = soundFileNames[i].split("/");
            let soundName = splitArray[splitArray.length - 1].split(".")[0];

            soundDict[soundName].src = soundFileNames[i];

            //console.log("Added '" + soundName + "' with path: " + soundFileNames[i]); // uncomment for debug

            // The ordering of these lines might cause problems(?)
            sound.onload = countLoadedSoundsAndLaunchIfReady();

        }
    }

    Sounds.getSound = function (name) {

        try {
            let sound = soundDict[name];
            if (typeof sound === "undefined") {
                throw "Error: Did not find sound with name '" + name + "'. Check that soundFileNames in Sounds module contains the correct file path!";
            }
        }
        catch (err) {
            //console.log(err);
        }
        return soundDict[name];
    }

}

//////////////    Your file names go here!    ////////////////


function countLoadedSoundsAndLaunchIfReady() {
    assetsToLoad--;
    if (assetsToLoad == 0) {

        launchGame();

    } else {
        // TODO render a progress bar
    }
    //console.log(assetsToLoad);
}

//Load sounds must be called in window.onload (Main.js)
Sounds();

let arrayOfMissedSounds = ["audio/miss_woosh.mp3","audio/miss_woosh_2.mp3","audio/VOX_Sofia_GoodTry.mp3","audio/VOX_Sofia_MmMm.mp3","audio/VOX_Sofia_UhOh01.mp3",
							"audio/VOX_Sofia_UhOh02.mp3","audio/VOX_Sofia_UhUh.mp3"];
missedSound.volume = 0.55;

let arrayOfCorrectSounds = ["audio/VOX_Sofia_GoodJob01.mp3","audio/VOX_Sofia_GoodJob02.mp3","audio/VOX_Sofia_GreatWork.mp3","audio/VOX_Sofia_Hurray.mp3",
							"audio/VOX_Sofia_KeepItUp.mp3","audio/VOX_Sofia_Yay.mp3","audio/splatsound.mp3"];
correctSound.volume = 0.55;