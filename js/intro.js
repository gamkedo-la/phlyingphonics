let intro = true;

let introTransparency = 0.0;
let introTransparencySpeed = 0.0075;

let introPhonics = new Audio();
introPhonics.src = "audio/phonics/phonica.mp3";

let introPhonicATransparency = 0.1;
let introPhonicATransparencySpeed = 0.025;

let introFlySwatterX;
let introFlySwatterXSpeed = 3;

function drawIntro(inputX,inputY) {//, inputX,inputY

  if (deltaTime < 1100) {
    canvasContext.drawImage(Images.getImage("openingmenubackground3"), 50,0, 380,180, 0,0, canvas.width/2,canvas.height/3);
  }
  if (deltaTime > 1100) {
    canvasContext.clearRect(0,0, canvas.width,canvas.height);
    canvasContext.drawImage(Images.getImage("openingmenubackground3"), 405,0, 435,180, canvas.width/2,0, canvas.width/2,canvas.height/3);
  }
  if (deltaTime > 2200) {
    canvasContext.clearRect(0,0, canvas.width,canvas.height);
    introTransparency += introTransparencySpeed;
    canvasContext.globalAlpha = introTransparency;
    canvasContext.drawImage(Images.getImage("openingmenubackground3"), 0,0, canvas.width,canvas.height);
    if (deltaTime > 5900 && deltaTime < 8350) {
      introPhonics.volumeOverride = 0.3;
      introPhonics.volume = masterVolume*introPhonics.volumeOverride;
      introPhonics.play();
    }
    if (deltaTime > 6200 && deltaTime < 8400) {
      introPhonicATransparency += introPhonicATransparencySpeed;
      colorCircleWithTransparency(152,240, 90, "gray", introPhonicATransparency);
      if (introFlySwatterX > 105) {
        introFlySwatterX -= introFlySwatterXSpeed;
      }
    }

    if (deltaTime > 2200 && deltaTime < 8350) {
      canvasContext.drawImage(Images.getImage("mobileThree"), 50,155, 200,150);
    } else {
      canvasContext.drawImage(Images.getImage("yellowstarsplat"), 50,155, 200,150);
    }
    if (deltaTime > 8350 && deltaTime < 8400) {
      correctSound.src = "audio/VOX_Sofia_Yay.mp3";
      correctSound.volOverride = 0.3;
      correctSound.volume = masterVolume*correctSound.volOverride;
      correctSound.play();
      introPhonics.pause();
      introPhonics.src = "audio/phonics/phonicb.mp3";
      introPhonicATransparency = 0;
    }
    if (deltaTime > 9000) {
      introPhonics.volOverride = 0.3;
      introPhonics.volume = masterVolume*introPhonics.volOverride;
      introPhonics.play();
      introPhonicATransparency += introPhonicATransparencySpeed;
      colorCircleWithTransparency(canvas.width/4 + 361,235, 90, "gray", introPhonicATransparency);
      if (introFlySwatterX < canvas.width/4 + 300) {
        introFlySwatterX += introFlySwatterXSpeed;
      }
    }
    if (deltaTime > 9500 && deltaTime < 9600) {
      correctSound.src = "audio/VOX_Sofia_Hurray.mp3";
    }
    if (deltaTime > 15000) {
      introPhonics.pause();
      correctSound.volOverride = 0.3;
      correctSound.volume = masterVolume*correctSound.volOverride;
      correctSound.play();
    }
    if (deltaTime > 16000) {
      correctSound.pause();
    }
    canvasContext.drawImage(Images.getImage("smalla"), 125,215, 50,50);
    if (deltaTime < 15000) {
      canvasContext.drawImage(Images.getImage("mobileTwo"), canvas.width/4 + 260,155, 200,150);
    } else {
      canvasContext.drawImage(Images.getImage("yellowstarsplat"), canvas.width/4 + 255,155, 200,150);
    }
    canvasContext.drawImage(Images.getImage("smallb"), canvas.width/4 + 332,207, 50,50);
    canvasContext.drawImage(Images.getImage("BabyHand"), introFlySwatterX,205, 300,150);

    //play button
    if  ( inputPressed && (inputX >= canvas.width - 340) && (inputX <= canvas.width - 40)  &&
           (inputY >= 150) && (inputY <= 300) )  {
             console.log("inputPressed",inputPressed);
        canvasContext.drawImage(Images.getImage("gui_button_play_down"), canvas.width - 340,150, 300,150);
      } else {
          canvasContext.drawImage(Images.getImage("gui_button_play"), canvas.width - 340,150, 300,150);
        }

    //settings button
    //added check for first launch because the settings button would be logically confusing for tutorial/walkthrough purposes on first launch
    if (!firstLaunch) {
      if ( (inputPressed && inputX >= canvas.width - 290 && inputX <= canvas.width - 90 && inputY >= 310 && inputY <= 385) ) {
          console.log("inputPressed", inputPressed);
          console.log("inputPressed", inputPressed);
          canvasContext.drawImage(Images.getImage("gui_button_settings_down"), canvas.width - 290,310, 200,75);
        } else {
            canvasContext.drawImage(Images.getImage("gui_button_settings"), canvas.width - 290,310, 200,75);
          }
      }
    }
}


function handleIntroInput(inputX,inputY) {
  console.log(inputX,inputY);

  //play button
    if ( (inputX >= canvas.width - 350) && (inputX <= canvas.width - 50)  &&
         (inputY >= 200) && (inputY <= 350) ) {
        introPlayButton.onClick();
    }

  //settings button
    if ( (inputX >= canvas.width - 290) && (inputX <= canvas.width - 90) &&
         (inputY >= 310) && (inputY <= 385) ) {
           console.log("inputX/Y", inputX,inputY);
         introSettingsButton.onClick();
       }
}

let introPlayButton = {onClick: introPlayButtonOnClick};
let introSettingsButton = {onClick: introSettingsButtonOnClick};

function introPlayButtonOnClick() {
  console.log("hello intro play button click");
  canvasContext.globalAlpha = 1;
  if (firstLaunch) {
    intro = false;
    isSettingsMenu = false;
    isOpeningLanguageSelector = true;
  } else {
    intro = false;
    var gotLang = localStorage.getItem("language");
    if (gotLang == null) {
      gotLang = englishButtonAndTextStrings;
    }
    fanFlap.volOverride = 0.3;
    fanFlap.volume = masterVolume*fanFlap.volOverride;
    fanflap.play();
    loadProfileSettingsAndStartGame();
  }
}

function introSettingsButtonOnClick() {
  console.log("hello intro settings button click");
  intro = false;
  isSettingsMenu = true;
  fanFlap.volOverride = 0.3;
  fanFlap.volume = masterVolume*fanFlap.volOverride;
  fanflap.play();
}
