// Similar to the Input module, this static Images module keeps loaded images in a dictionary, with the keys being what was entered in "imageFileNames"
//without the directory names and file extensions.
// Essentially, edit the imageFileNames array with all your image paths, then access them with Images.getImage(nameOnly)
//
// Example: viewtiful.jpg in imageFileNames ---> let viewtifulJoeImage = Images.getImage("viewtiful");
//
// ---> This implies string comparisons, ie don't pull and draw directly from the dict each frame.
// Instead, give the reference to an object, for example player.sprite = Images.getImage("player"), then draw player.sprite
// If there is no object oriented design in the game, you could discard this module and use the standard club Imageloading.js method,
//or you could pull directly from the dict anyway (should be fine really)

// If there are issues with how the OS handles file directories (for example if the "/" does not work for whatever reason) please tell me! :O

// Made by your friend Remy :) (based on the usual script from Chris)

function Images() {
    //console.log(imageFileNames);
    let img;
    let imageDict = [];

    console.log("Initializing Images module.");

    for (let i = 0, len = imageFileNames.length; i < len; i++) {

        // Cuts up the path to extract the image name, and adds it in the dict
        let splitArray = imageFileNames[i].split("/");                           // images/table.png
        let imgName = splitArray[splitArray.length - 1].split(".")[0];

        img = document.createElement("img");
        imageDict[imgName] = img; //the spot is being kept by a dummy image; we will load it later

    }

    Images.loadImages = function () {

        for (let i = 0, len = imageFileNames.length; i < len; i++) {

            // We did this already above, but this time we are loading the images
            // (ie giving all placeholder images their .src)
            let splitArray = imageFileNames[i].split("/");
            let imgName = splitArray[splitArray.length - 1].split(".")[0];
            //console.log(imageFileNames[i]);
            imageDict[imgName].src = imageFileNames[i];

            //console.log("Added '" + imgName + "' with path: " + imageFileNames[i]); // uncomment for debug

            // The ordering of these lines might cause problems(?)
            img.onload = countLoadedImagesAndLaunchIfReady();

        }
    }

    Images.getImage = function (name) {

        try {
            let image = imageDict[name];
            if (typeof image === "undefined") {
                throw "Error: Did not find image with name '" + name + "'. Check that imageFileNames in Images module contains the correct file path!";
            }
        }
        catch (err) {
            console.log(err);
        }
        return imageDict[name];
    }

}

//////////////    Your file names go here!    ////////////////
let imageFileNames = [

    "images/openingMenuBackground.jpg",
    "images/openingmenubackground2.png",
    "images/gameplayinfoblurb.png",
    "images/gui_button_check.png",
    "images/gui_button_check_down.png",
    "images/arrow.png",
    "images/menu_button_empty_toggle.png",
    "images/toggle_circle.png",
    "images/toggle_circle_filler.png",
    "images/settings_menu_background.png",
    "images/menu_button_forward.png",
    "images/menu_button_forward_down",
    "images/table.png",
    "images/fly.png",
    "images/butterflies/blackNorange.png",
    "images/butterflies/bluebutterfly1.png",
    "images/butterflies/croppedpink1.png",
    "images/greensplat.png",
    "images/yellowgreensplat.png",
    "images/starsplat.png",
    "images/tablePhoto.png",
    "images/tableWithFilter.png",
    "images/bowlOfFruit.png",
    "images/honeycomb.png",
    "images/BabyRoomBG.png",
    "images/tree2.jpg",
    "images/purplecountertop.png",
    "images/capitalLetters/bigA.png",
    "images/capitalLetters/bigB.png",
    "images/capitalLetters/bigC.png",
    "images/capitalLetters/bigD.png",
    "images/capitalLetters/bigE.png",
    "images/capitalLetters/bigF.png",
    "images/capitalLetters/bigG.png",
    "images/capitalLetters/bigH.png",
    "images/capitalLetters/bigI.png",
    "images/capitalLetters/bigJ.png",
    "images/capitalLetters/bigK.png",
    "images/capitalLetters/bigL.png",
    "images/capitalLetters/bigM.png",
    "images/capitalLetters/bigN.png",
    "images/capitalLetters/bigO.png",
    "images/capitalLetters/bigP.png",
    "images/capitalLetters/bigQ.png",
    "images/capitalLetters/bigR.png",
    "images/capitalLetters/bigS.png",
    "images/capitalLetters/bigT.png",
    "images/capitalLetters/bigU.png",
    "images/capitalLetters/bigV.png",
    "images/capitalLetters/bigW.png",
    "images/capitalLetters/bigX.png",
    "images/capitalLetters/bigY.png",
    "images/capitalLetters/bigZ.png",
    "images/smallLetters/smalla.png",
    "images/smallLetters/smallb.png",
    "images/smallLetters/smallc.png",
    "images/smallLetters/smalld.png",
    "images/smallLetters/smalle.png",
    "images/smallLetters/smallf.png",
    "images/smallLetters/smallg.png",
    "images/smallLetters/smallh.png",
    "images/smallLetters/smalli.png",
    "images/smallLetters/smallj.png",
    "images/smallLetters/smallk.png",
    "images/smallLetters/smalll.png",
    "images/smallLetters/smallm.png",
    "images/smallLetters/smalln.png",
    "images/smallLetters/smallo.png",
    "images/smallLetters/smallp.png",
    "images/smallLetters/smallq.png",
    "images/smallLetters/smallr.png",
    "images/smallLetters/smalls.png",
    "images/smallLetters/smallt.png",
    "images/smallLetters/smallu.png",
    "images/smallLetters/smallv.png",
    "images/smallLetters/smallw.png",
    "images/smallLetters/smallx.png",
    "images/smallLetters/smally.png",
    "images/smallLetters/smallz.png",
    "images/fly_version_1.png",
    "images/fly_version_1b.png", // flap
    "images/flySwatter.png",
    "images/butterflyNet.png",
    "images/HoneyJar.png",
    "images/BabyHand.png",
    "images/cartoonFly.png",
    "images/cartoonFlyB.png",
    "images/cartoonFly-spritesheet.png",
    "images/dragon_bee_v1.png",
    "images/dragon_bee_b.png",
    "images/mobileOne.png",
    "images/mobileTwo.png",
    "images/mobileThree.png",
    "images/stringImage.png",
    "images/gui_button.png",
    "images/gui_button_down.png",
    "images/menu_button.png",
    "images/menu_button_down.png",
    "images/gui_button_purple.png",
    "images/gui_button_purple_down.png",
    "images/menu_button_purple.png",
    "images/menu_button_purple_down.png",
    "images/gui_button_play.png",
    "images/gui_button_play_down.png",
    "images/gui_button_settings.png",
    "images/gui_button_settings_down.png"

];

let soundFileNames = [
  "audio/flightOfTheABCs.mp3",
  "audio/splatsound.mp3",
  "audio/miss_woosh.mp3",
  "audio/miss_woosh_2.mp3",
  "audio/phonics/phonica.mp3",
  "audio/phonics/phonicb.mp3",
  "audio/phonics/phonicc.mp3",
  "audio/phonics/phonicd.mp3",
  "audio/phonics/phonice.mp3",
  "audio/phonics/phonicf.mp3",
  "audio/phonics/phonicg.mp3",
  "audio/phonics/phonich.mp3",
  "audio/phonics/phonici.mp3",
  "audio/phonics/phonicj.mp3",
  "audio/phonics/phonick.mp3",
  "audio/phonics/phonicl.mp3",
  "audio/phonics/phonicm.mp3",
  "audio/phonics/phonicn.mp3",
  "audio/phonics/phonico.mp3",
  "audio/phonics/phonicp.mp3",
  "audio/phonics/phonicq.mp3",
  "audio/phonics/phonicr.mp3",
  "audio/phonics/phonics.mp3",
  "audio/phonics/phonict.mp3",
  "audio/phonics/phonicu.mp3",
  "audio/phonics/phonicv.mp3",
  "audio/phonics/phonicw.mp3",
  "audio/phonics/phonicx.mp3",
  "audio/phonics/phonicy.mp3",
  "audio/phonics/phonicz.mp3",
  "audio/letternames/bigA.mp3",
  "audio/letternames/bigB.mp3",
  "audio/letternames/bigC.mp3",
  "audio/letternames/bigD.mp3",
  "audio/letternames/bigE.mp3",
  "audio/letternames/bigF.mp3",
  "audio/letternames/bigG.mp3",
  "audio/letternames/bigH.mp3",
  "audio/letternames/bigI.mp3",
  "audio/letternames/bigJ.mp3",
  "audio/letternames/bigK.mp3",
  "audio/letternames/bigL.mp3",
  "audio/letternames/bigM.mp3",
  "audio/letternames/bigN.mp3",
  "audio/letternames/bigO.mp3",
  "audio/letternames/bigP.mp3",
  "audio/letternames/bigQ.mp3",
  "audio/letternames/bigR.mp3",
  "audio/letternames/bigS.mp3",
  "audio/letternames/bigT.mp3",
  "audio/letternames/bigU.mp3",
  "audio/letternames/bigV.mp3",
  "audio/letternames/bigW.mp3",
  "audio/letternames/bigX.mp3",
  "audio/letternames/bigY.mp3",
  "audio/letternames/bigZ.mp3",
  "audio/letternames/smalla.mp3",
  "audio/letternames/smallb.mp3",
  "audio/letternames/smallc.mp3",
  "audio/letternames/smalld.mp3",
  "audio/letternames/smalle.mp3",
  "audio/letternames/smallf.mp3",
  "audio/letternames/smallg.mp3",
  "audio/letternames/smallh.mp3",
  "audio/letternames/smalli.mp3",
  "audio/letternames/smallj.mp3",
  "audio/letternames/smallk.mp3",
  "audio/letternames/smalll.mp3",
  "audio/letternames/smallm.mp3",
  "audio/letternames/smalln.mp3",
  "audio/letternames/smallo.mp3",
  "audio/letternames/smallp.mp3",
  "audio/letternames/smallq.mp3",
  "audio/letternames/smallr.mp3",
  "audio/letternames/smalls.mp3",
  "audio/letternames/smallt.mp3",
  "audio/letternames/smallu.mp3",
  "audio/letternames/smallv.mp3",
  "audio/letternames/smallw.mp3",
  "audio/letternames/smallx.mp3",
  "audio/letternames/smally.mp3",
  "audio/letternames/smallz.mp3"


];


let picsToLoad = imageFileNames.length
//console.log(soundFileNames.length);
let soundsToLoad = soundFileNames.length;
let assetsToLoad = picsToLoad + soundsToLoad;

function countLoadedImagesAndLaunchIfReady() {
    assetsToLoad--;
    if (assetsToLoad == 0) {

        launchGame();

    } else {
        // TODO render a progress bar
    }
    //console.log(assetsToLoad);
}

//Load images must be called in window.onload (Main.js)
Images();

let assignFlaps = () => {
    for (let i = 0; i < arrayOfFlies.length; i++) {
        if (arrayOfFlies[i].myImage === Images.getImage("fly_version_1")) {
            arrayOfFlies[i].myImageB = Images.getImage("fly_version_1b");
        } else if (arrayOfFlies[i].myImage === Images.getImage("cartoonFly")) {
            arrayOfFlies[i].myImageB = Images.getImage("cartoonFlyB");
        }
        else if (arrayOfFlies[i].myImage === Images.getImage("dragon_bee_v1")) {
            arrayOfFlies[i].myImageB = Images.getImage("dragon_bee_b");
        } else {
            arrayOfFlies[i].myImageB = arrayOfFlies[i].myImage;
          }
    }
}

let arrayOfBackgroundStrings = ["table", "purplecountertop", "honeycomb", "BabyRoomBG", "tree2"]; //"table", "tableWithFilter", "bowlOfFruit",
let chosenBackground;
let chooseBackground = () => {
    //chosenBackground = arrayOfBackgroundStrings[3]; return; // FIXME REMOVE this line is for debug only
    chosenBackground = arrayOfBackgroundStrings[getRandomInt(0, arrayOfBackgroundStrings.length - 1)];
    //console.log(chosenBackground);
}
