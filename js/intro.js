let intro = true;

let introTransparency = 0.0;
let introTransparencySpeed = 0.0075;

let introPhonics = new Audio();
introPhonics.src = "audio/phonics/phonica.mp3";

let introPhonicATransparency = 0.1;
let introPhonicATransparencySpeed = 0.025;
//console.log("introPhonics.src", introPhonics.src);

let introFlySwatterX;
let introFlySwatterXSpeed = 3;

function drawIntro(mouseX,mouseY) {

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
      introPhonics.play();
    }
    if (deltaTime > 6200 && deltaTime < 8400) {
      introPhonicATransparency += introPhonicATransparencySpeed;
      colorCircleWithTransparency(152,240, 90, "gray", introPhonicATransparency);
      if (introFlySwatterX > 105) {
        introFlySwatterX -= introFlySwatterXSpeed;
      }
    }
    /*if (rotateFlies)

      let scale = 200 / Images.getImage("cartoonFly").width;

      //point in the direction we are moving
      let angle = Math.atan2(this.ySpeed, this.xSpeed) - 90 * (180 / Math.PI); // degrees away from east

      // look back and forth a little
      let wobble = Math.sin(performance.now() / 500) * 0.5;

      // centered at x,y? no in this game x,y is the top left corner of the sprite
      //drawBitmapCenteredWithRotationScale(this.myImage, this.x, this.y, angle + wobble, scale);

      // this would rotate by the corner pivot
      // drawBitmapWithRotationScale(this.myImage, this.x, this.y, angle + wobble, scale);

      this.drawCount++;

      drawBitmapCenteredWithRotationScale(this.drawCount % 3 > 0 ? this.myImage : this.myImageB,
        this.x + this.width / 2, this.y + this.width / 2, angle + wobble, scale);

    }*/
    if (deltaTime > 2200 && deltaTime < 8350) {
      canvasContext.drawImage(Images.getImage("mobileThree"), 50,155, 200,150);
    } else {
      canvasContext.drawImage(Images.getImage("starsplat"), 50,155, 200,150);
    }
    if (deltaTime > 8350 && deltaTime < 8400) {
      correctSound.src = "audio/VOX_Sofia_Yay.mp3";
      correctSound.play();
      introPhonics.pause();
      introPhonics.src = "audio/phonics/phonicb.mp3";
      introPhonicATransparency = 0;
    }
    if (deltaTime > 9000) {
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
      correctSound.play();
    }
    if (deltaTime > 16000) {
      correctSound.pause();
    }
    canvasContext.drawImage(Images.getImage("smalla"), 125,215, 50,50);
    if (deltaTime < 15000) {
      canvasContext.drawImage(Images.getImage("mobileTwo"), canvas.width/4 + 260,155, 200,150);
    } else {
      canvasContext.drawImage(Images.getImage("starsplat"), canvas.width/4 + 255,155, 200,150);
    }
    canvasContext.drawImage(Images.getImage("smallb"), canvas.width/4 + 332,207, 50,50);
    canvasContext.drawImage(Images.getImage("BabyHand"), introFlySwatterX,205, 300,150);

    //play button
    if  ( (mousePressed || fingerPressed)
        && ( (mouseX >= canvas.width - 340 && mouseX <= canvas.width - 40  && mouseY >= 150 && mouseY <= 300) ||
      (fingerX >= canvas.width - 340 && fingerX <= canvas.width - 40  && fingerY >= 150 && fingerY <= canvas.width - 100) )
    ) {
        canvasContext.drawImage(Images.getImage("gui_button_play_down"), canvas.width - 340,150, 300,150);
        fingerX = 0;
        fingerY = 0;
        fanflap.play();
      } else {
          canvasContext.drawImage(Images.getImage("gui_button_play"), canvas.width - 340,150, 300,150);
        }

    //settings button
    //added check for first launch because the settings button would be logically confusing for tutorial/walkthrough purposes on first launch
    if (!firstLaunch) {
      if ( (mousePressed || fingerPressed) && ( (mouseX >= canvas.width - 290 && mouseX <= canvas.width - 90  &&
        mouseY >= 310 && mouseY <= 385) ||
        (fingerX >= canvas.width - 290 && fingerX <= canvas.width - 90  &&
          fingerY >= 310 && fingerY <= canvas.width - 385) ) ) {
          canvasContext.drawImage(Images.getImage("gui_button_settings_down"), canvas.width - 290,310, 200,75);
          fingerX = 0;
          fingerY = 0;
          fanflap.play();
        } else {
            canvasContext.drawImage(Images.getImage("gui_button_settings"), canvas.width - 290,310, 200,75);
          }
      }
    }
}


function handleIntroInput(mouseX,mouseY) {

  //play button
  if ( ( (mouseX >= canvas.width - 350 && mouseX <= canvas.width - 50  && mouseY >= 200 && mouseY <= 350) ||
         (fingerX >= canvas.width - 350 && fingerX <= canvas.width - 50  && fingerY >= 200 && fingerY <= canvas.width - 50) )
    ) {
      introPlayButton.onClick();
      }

  //settings button
    if  ( (mouseX >= canvas.width - 290 && mouseX <= canvas.width - 90  &&  mouseY >= 310 && mouseY <= 385) ||
       (fingerX >= canvas.width - 290 && fingerX <= canvas.width - 90  && fingerY >= 310 && fingerY <= canvas.width - 385) ) {
         introSettingsButton.onClick();
       }
}

let introPlayButton = {onClick: introPlayButtonOnClick};
let introSettingsButton = {onClick: introSettingsButtonOnClick};

function introPlayButtonOnClick() {
  //console.log("firstLaunch", firstLaunch);

  canvasContext.globalAlpha = 1;
  if (firstLaunch) {
    intro = false;
    isOpeningLanguageSelector = true;
    fingerPressed = false;
    fingerX = 0;
    fingerY = 0;

  } else {
    intro = false;
    fingerPressed = false;
    fingerX = 0;
    fingerY = 0;

    var gotLang = localStorage.getItem("language");
    //console.log(gotLang);
    if (gotLang == null) {
      gotLang = englishButtonAndTextStrings;
      //console.log("found no gotLang");
    }
    //console.log("isOpeningLanguageSelector", isOpeningLanguageSelector);
    language = JSON.parse(gotLang);
    loadProfileSettingsAndStartGame();

  }
}

function introSettingsButtonOnClick() {
  intro = false;
  isSettingsMenu = true;
}
