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

    "images/table.png",
    "images/fly.png",
    "images/greensplat.png",
    "images/yellowgreensplat.png",
    "images/tablePhoto.png",
    "images/tableWithFilter.png",
    "images/bowlOfFruit.png",
    "images/honeycomb.png",
    "images/BabyRoomBG.png",
    "images/purplecountertop.png",
    "images/capitalLetters/A.png",
    "images/capitalLetters/B.png",
    "images/capitalLetters/C.png",
    "images/capitalLetters/D.png",
    "images/capitalLetters/E.png",
    "images/capitalLetters/F.png",
    "images/capitalLetters/G.png",
    "images/capitalLetters/H.png",
    "images/capitalLetters/I.png",
    "images/capitalLetters/J.png",
    "images/capitalLetters/K.png",
    "images/capitalLetters/L.png",
    "images/capitalLetters/M.png",
    "images/capitalLetters/N.png",
    "images/capitalLetters/O.png",
    "images/capitalLetters/P.png",
    "images/capitalLetters/Q.png",
    "images/capitalLetters/R.png",
    "images/capitalLetters/S.png",
    "images/capitalLetters/T.png",
    "images/capitalLetters/U.png",
    "images/capitalLetters/V.png",
    "images/capitalLetters/W.png",
    "images/capitalLetters/X.png",
    "images/capitalLetters/Y.png",
    "images/capitalLetters/Z.png",
    "images/smallLetters/a.png",
    "images/smallLetters/b.png",
    "images/smallLetters/c.png",
    "images/smallLetters/d.png",
    "images/smallLetters/e.png",
    "images/smallLetters/f.png",
    "images/smallLetters/g.png",
    "images/smallLetters/h.png",
    "images/smallLetters/i.png",
    "images/smallLetters/j.png",
    "images/smallLetters/k.png",
    "images/smallLetters/l.png",
    "images/smallLetters/m.png",
    "images/smallLetters/n.png",
    "images/smallLetters/o.png",
    "images/smallLetters/p.png",
    "images/smallLetters/q.png",
    "images/smallLetters/r.png",
    "images/smallLetters/s.png",
    "images/smallLetters/t.png",
    "images/smallLetters/u.png",
    "images/smallLetters/v.png",
    "images/smallLetters/w.png",
    "images/smallLetters/x.png",
    "images/smallLetters/y.png",
    "images/smallLetters/z.png",
    "images/fly_version_1.png",
    "images/fly_version_1b.png", // flap
    "images/flySwatter.png",
    "images/cartoonFly.png",
    "images/cartoonFlyB.png",
    "images/cartoonFly-spritesheett.png",
    "images/dragon_bee_v1.png",
    "images/dragon_bee_b.png"

];

let soundFileNames = [
  "audio/flightOfTheABCs.mp3",
  "audio/splatsound.mp3",
  "audio/phonics/a.mp3",
  "audio/phonics/b.mp3",
  "audio/phonics/c.mp3",
  "audio/phonics/d.mp3",
  "audio/phonics/e.mp3",
  "audio/phonics/f.mp3",
  "audio/phonics/g.mp3",
  "audio/phonics/h.mp3",
  "audio/phonics/i.mp3",
  "audio/phonics/j.mp3",
  "audio/phonics/k.mp3",
  "audio/phonics/l.mp3",
  "audio/phonics/m.mp3",
  "audio/phonics/n.mp3",
  "audio/phonics/o.mp3",
  "audio/phonics/p.mp3",
  "audio/phonics/q.mp3",
  "audio/phonics/r.mp3",
  "audio/phonics/s.mp3",
  "audio/phonics/t.mp3",
  "audio/phonics/u.mp3",
  "audio/phonics/v.mp3",
  "audio/phonics/w.mp3",
  "audio/phonics/x.mp3",
  "audio/phonics/y.mp3",
  "audio/phonics/z.mp3",
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
  "audio/letternames/smallA.mp3",
  "audio/letternames/smallB.mp3",
  "audio/letternames/smallC.mp3",
  "audio/letternames/smallD.mp3",
  "audio/letternames/smallE.mp3",
  "audio/letternames/smallF.mp3",
  "audio/letternames/smallG.mp3",
  "audio/letternames/smallH.mp3",
  "audio/letternames/smallI.mp3",
  "audio/letternames/smallJ.mp3",
  "audio/letternames/smallK.mp3",
  "audio/letternames/smallL.mp3",
  "audio/letternames/smallM.mp3",
  "audio/letternames/smallN.mp3",
  "audio/letternames/smallO.mp3",
  "audio/letternames/smallP.mp3",
  "audio/letternames/smallQ.mp3",
  "audio/letternames/smallR.mp3",
  "audio/letternames/smallS.mp3",
  "audio/letternames/smallT.mp3",
  "audio/letternames/smallU.mp3",
  "audio/letternames/smallV.mp3",
  "audio/letternames/smallW.mp3",
  "audio/letternames/smallX.mp3",
  "audio/letternames/smallY.mp3",
  "audio/letternames/smallZ.mp3"


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
      if ( arrayOfFlies[i].myImage === Images.getImage("fly_version_1") ) {
        arrayOfFlies[i].myImageB = Images.getImage("fly_version_1b");
      } else if ( arrayOfFlies[i].myImage === Images.getImage("cartoonFly") ) {
          arrayOfFlies[i].myImageB = Images.getImage("cartoonFlyB");
        }
        else if ( arrayOfFlies[i].myImage === Images.getImage("dragon_bee_v1") ) {
          arrayOfFlies[i].myImageB = Images.getImage("dragon_bee_b");
        }
      }
}

let arrayOfBackgroundStrings = ["table","purplecountertop","honeycomb", "BabyRoomBG"]; //"table", "tableWithFilter", "bowlOfFruit",
let chosenBackground;
let chooseBackground = () => {
  chosenBackground = arrayOfBackgroundStrings[getRandomInt(0, arrayOfBackgroundStrings.length - 1)];
  //console.log(chosenBackground);
}
