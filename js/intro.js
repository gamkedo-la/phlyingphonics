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
    canvasContext.drawImage(Images.getImage("openingmenubackground2"), 0,0, 365,180, 0,0, canvas.width/2,canvas.height/3);
  }
  if (deltaTime > 1100) {
    canvasContext.clearRect(0,0, canvas.width,canvas.height);
    canvasContext.drawImage(Images.getImage("openingmenubackground2"), 365,0, 435,180, canvas.width/2,0, canvas.width/2,canvas.height/3);
  }
  if (deltaTime > 2200) {
    canvasContext.clearRect(0,0, canvas.width,canvas.height);
    introTransparency += introTransparencySpeed;
    canvasContext.globalAlpha = introTransparency;
    canvasContext.drawImage(Images.getImage("openingmenubackground2"), 0,0, canvas.width,canvas.height);
    if (deltaTime > 5900 && deltaTime < 8350) {
      introPhonics.play();
    }
    if (deltaTime > 6200 && deltaTime < 8400) {
      introPhonicATransparency += introPhonicATransparencySpeed;
      colorCircleWithTransparency(152,335, 100, "gray", introPhonicATransparency);
      if (introFlySwatterX > 115) {
        introFlySwatterX -= introFlySwatterXSpeed;
      }
    }
    if (deltaTime > 2200 && deltaTime < 8350) {
      canvasContext.drawImage(Images.getImage("cartoonFly"), 50,250, 200,150);
    } else {
      canvasContext.drawImage(Images.getImage("yellowgreensplat"), 50,250, 200,150);
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
      colorCircleWithTransparency(canvas.width/4 + 407,325, 100, "gray", introPhonicATransparency);
      if (introFlySwatterX < canvas.width/4 + 350) {
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
    canvasContext.drawImage(Images.getImage("smalla"), 125,300, 50,50);
    if (deltaTime < 15000) {
      canvasContext.drawImage(Images.getImage("fly_version_1"), canvas.width/4 + 300,250, 200,150);
    } else {
      canvasContext.drawImage(Images.getImage("yellowgreensplat"), canvas.width/4 + 300,250, 200,150);
    }
    canvasContext.drawImage(Images.getImage("smallb"), canvas.width/4 + 380,300, 50,50);
    canvasContext.drawImage(Images.getImage("flySwatter"), introFlySwatterX,300, 300,150);
    if  ( (mousePressed || fingerPressed)
        && ( (mouseX >= canvas.width - 350 && mouseX <= canvas.width - 50  && mouseY >= 200 && mouseY <= 350) ||
      (fingerX >= canvas.width - 350 && fingerX <= canvas.width - 50  && fingerY >= 200 && fingerY <= canvas.width - 50) )
    ) {
        canvasContext.drawImage(Images.getImage("gui_button_play_down"), canvas.width - 350,200, 300,150);
        console.log("mouseX/Y", mouseX,mouseY);
        fingerX = 0;
        fingerY = 0;
        fanflap.play();
      } else {
          canvasContext.drawImage(Images.getImage("gui_button_play"), canvas.width - 350,200, 300,150);
        }
    if ( (mousePressed || fingerPressed) && ( (mouseX >= canvas.width - 300 && mouseX <= canvas.width - 100  &&
      mouseY >= 400 && mouseY <= 475) ||
      (fingerX >= canvas.width - 300 && fingerX <= canvas.width - 100  &&
        fingerY >= 400 && fingerY <= canvas.width - 475) ) ) {
        canvasContext.drawImage(Images.getImage("gui_button_settings_down"), canvas.width - 300,400, 200,75);
        fingerX = 0;
        fingerY = 0;
        fanflap.play();
      } else {
          canvasContext.drawImage(Images.getImage("gui_button_settings"), canvas.width - 300,400, 200,75);
        }
  }
}


function handleIntroInput(mouseX,mouseY) {

    if ( (mousePressed || fingerPressed) && ( (mouseX >= canvas.width/4 - 350 && mouseX <= canvas.width/4 - 50  &&
      mouseY >= 200 && mouseY <= 350) ||
      (fingerX >= canvas.width/4 - 350 && fingerX <= canvas.width/4 - 50  &&
        fingerY >= 200 && fingerY <= canvas.width/4 - 50) ) ) {

        fingerX = 0;
        fingerY = 0;
        fanflap.play();
      }
}
