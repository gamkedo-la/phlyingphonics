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
    let imageDict = [];
    console.log("Initializing Images module.");

    for (let i = 0, len = imageFileNames.length; i < len; i++) {

        // Cuts up the path to extract the image name, and adds it in the dict
        let splitArray = imageFileNames[i].split("/");                           // images/table.png
        let imgName = splitArray[splitArray.length - 1].split(".")[0];

        let img = document.createElement("img");
        imageDict[imgName] = img; //the spot is being kept by a dummy image; we will load it later

    }

    Images.loadImages = function () {

        for (let i = 0, len = imageFileNames.length; i < len; i++) {

            // We did this already above, but this time we are loading the images
            // (ie giving all placeholder images their .src)
            let splitArray = imageFileNames[i].split("/");
            let imgName = splitArray[splitArray.length - 1].split(".")[0];
            console.log(imageFileNames[i]);
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
    "images/tablePhoto.png",
    "images/tableWithFilter.png",
    "images/bowlOfFruit.png",
    "images/honeycomb.png",
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
    "images/fly_version_1.png"

];

let picsToLoad = imageFileNames.length;

function countLoadedImagesAndLaunchIfReady() {
    picsToLoad--;
    if (picsToLoad == 0) {

        launchGame();

    } else {
        // TODO render a progress bar
    }
}

//Load images must be called in window.onload (Main.js)
Images();
