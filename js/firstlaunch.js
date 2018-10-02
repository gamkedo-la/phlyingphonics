let firstLaunch;

function checkForFirstLaunch() {
  //console.log("checkForFirstLaunch");
  var fl = localStorage.getItem("firstLaunch");
  //console.log(fl);
  if (fl === null) {
    firstLaunch = true;
    localStorage.setItem("firstLaunch", firstLaunch);
  } else {
    firstLaunch = false;
  }
}

let infoBlurbTransparency = 0.1;
let infoBlurbTransparencySpeed = 0.02;
let gamePlayInfoRead = false;
let settingsButtonBlurbRead = false;

function drawFirstLaunchGamePlayInfoBlurb() {
  if (!gamePlayInfoRead) {
  canvasContext.globalAlpha = infoBlurbTransparency;
  canvasContext.drawImage(Images.getImage("gameplayinfoblurb"), 0,canvas.height - canvas.height/3, canvas.width, canvas.height/3);
  if ( ( (mousePressed || fingerPressed) && ( (mouseX >= canvas.width - buttonWidth - buttonWidth/3 + 75 && mouseX <= canvas.width - buttonWidth - buttonWidth/3 + 175)  &&
    (mouseY >= canvas.height - (canvas.height/3) + canvas.height/8) && (mouseY <= canvas.height - (canvas.height/3) + canvas.height/8) + 50) ) ||
    ( (fingerX >= canvas.width - buttonWidth - buttonWidth/3 +75) && (fingerX <= canvas.width - buttonWidth - buttonWidth/3 + 175)  &&
      (fingerY >= canvas.height - (canvas.height/3) + canvas.height/8) && (fingerY <= canvas.height - (canvas.height/3) + canvas.height/8 + 50) ) ) {
      canvasContext.drawImage(Images.getImage("gui_button_check_down"), canvas.width - buttonWidth - buttonWidth/3 + 75,canvas.height - (canvas.height/3) + canvas.height/8, 100,50);
      console.log("click inside game play info coordinates");
      fingerX = 0;
      fingerY = 0;
      fanflap.play();
      gamePlayInfoRead = true;
      infoBlurbTransparency = 0.1;
    } else {
  canvasContext.drawImage(Images.getImage("gui_button_check"), canvas.width - buttonWidth - buttonWidth/3 + 75,canvas.height - (canvas.height/3) + canvas.height/8, 100, 50);
  }
  colorText(language.gamePlayInfoLine1, canvas.width/2 - 300, canvas.height - canvas.height/3 + canvas.height/9, "#FC5800", "20px papyrus");
  colorText(language.gamePlayInfoLine2, canvas.width/2 - 325, canvas.height - canvas.height/3 + canvas.height/9 + 25, "#FC5800", "20px papyrus");
  colorText(language.gamePlayInfoLine3, canvas.width/2 - 315, canvas.height - canvas.height/3 + canvas.height/9 + 50, "#FC5800", "20px papyrus");
  colorText(language.gamePlayInfoLine4, canvas.width/2 - 50, canvas.height - canvas.height/3 + canvas.height/9 + 75, "#FC5800", "20px papyrus");
  infoBlurbTransparency += infoBlurbTransparencySpeed;
  canvasContext.globalAlpha = 1;
  }
}

let statsInfoRead = false;
let tutorial = true;

function drawFirstLaunchStatsInfoBlurb() {

  if (gamePlayInfoRead && !statsInfoRead) {

  canvasContext.globalAlpha = infoBlurbTransparency;
  canvasContext.drawImage(Images.getImage("gameplayinfoblurb"), 0,canvas.height/3, canvas.width, canvas.height/3);
  if ( ( (mousePressed || fingerPressed) && ( (mouseX >= canvas.width - buttonWidth - buttonWidth/3 + 75) && (mouseX <= canvas.width - buttonWidth - buttonWidth/3 + 175)  &&
    (mouseY >= canvas.height/3 + canvas.height/8) && (mouseY <= canvas.height/3 + canvas.height/8 + 50) ) ||
    ( (fingerX >= canvas.width - buttonWidth - buttonWidth/3 +75) && (fingerX <= canvas.width - buttonWidth - buttonWidth/3 + 175)  &&
      (fingerY >= canvas.height/3 + canvas.height/8) && (fingerY <= canvas.height/3 + canvas.height/8 + 50) ) ) ) {
      canvasContext.drawImage(Images.getImage("gui_button_check_down"), canvas.width - buttonWidth - buttonWidth/3 + 75,(canvas.height/3) + canvas.height/8, 100,50);
      fingerX = 0;
      fingerY = 0;
      fanflap.play();
      statsInfoRead = true;
      infoBlurbTransparency = 0.1;
      settingsBlurbStartTime = new Date();
    } else {
  canvasContext.drawImage(Images.getImage("gui_button_check"), canvas.width - buttonWidth - buttonWidth/3 + 75,(canvas.height/3) + canvas.height/8, 100, 50);
  }
  colorText(language.statsInfoLine1, canvas.width/2 - 150, canvas.height/3 + canvas.height/9 - 15, "#FC5800", "20px papyrus");
  colorText(language.statsInfoLine2, canvas.width/2 - 150, canvas.height/3 + canvas.height/9 + 10, "#FC5800", "20px papyrus");
  colorText(language.statsInfoLine3, canvas.width/2 - 250, canvas.height/3 + canvas.height/9 + 35, "#FC5800", "20px papyrus");
  colorText(language.statsInfoLine4, canvas.width/2 - 210, canvas.height/3 + canvas.height/9 + 60, "#FC5800", "20px papyrus");
  infoBlurbTransparency += infoBlurbTransparencySpeed;
  canvasContext.globalAlpha = 1;
  }
}

let showSettingsButtonBlurbSeen = false;
let arrowX; //defined in initialize in main.js

function drawSettingsButtonBlurb() {
  if (gamePlayInfoRead && statsInfoRead && !showSettingsButtonBlurbSeen) {
    settingsBlurbElapsedTime = settingsBlurbStartTime + currentTime;
    canvasContext.globalAlpha = infoBlurbTransparency;
    canvasContext.drawImage(Images.getImage("gameplayinfoblurb"), canvas.width - 600,0, 500, 50);
    canvasContext.drawImage(Images.getImage("arrow"), arrowX, 13, 100, 25);
    colorText(language.showSettingsButtonBlurbText, canvas.width - 550, 30, "#FC5800", "20px papyrus");
    infoBlurbTransparency += infoBlurbTransparencySpeed;
    canvasContext.globalAlpha = 1;
  }
}

let settingsMenuInfoSeen = false;
let customLevelsArrowSeen = false;
let glowArrowSeen = false;
let stationaryArrowSeen = false;
let profilesArrowSeen = false;
let tutorialArrowSeen = false;
let playArrowSeen = false;

function drawSettingsMenuBlurbs() {
  if (customLevelsArrowSeen === false) {
    canvasContext.globalAlpha = infoBlurbTransparency;
    canvasContext.drawImage(Images.getImage("gameplayinfoblurb"), canvas.width/4 + canvas.width/2,17, 150,35);
    canvasContext.drawImage(Images.getImage("left_arrow"), leftArrowX, 22, 105, 25);
    canvasContext.globalAlpha = 1;
  }
  infoBlurbTransparency += infoBlurbTransparencySpeed;
  if (!glowArrowSeen && customLevelsArrowSeen) {
    canvasContext.globalAlpha = infoBlurbTransparency;
    canvasContext.drawImage(Images.getImage("gameplayinfoblurb"), canvas.width/4 + canvas.width/2,78, 150,35);
    canvasContext.drawImage(Images.getImage("left_arrow"), leftArrowX, 83, 105, 25);
    canvasContext.globalAlpha = 1;
  }
  if (glowArrowSeen && !stationaryArrowSeen) {
    canvasContext.globalAlpha = infoBlurbTransparency;
    canvasContext.drawImage(Images.getImage("gameplayinfoblurb"), canvas.width/4 + canvas.width/2,139, 150,35);
    canvasContext.drawImage(Images.getImage("left_arrow"), leftArrowX, 144, 105, 25);
    canvasContext.globalAlpha = 1;
  }
  if (!profilesArrowSeen && stationaryArrowSeen) {
    canvasContext.globalAlpha = infoBlurbTransparency;
    canvasContext.drawImage(Images.getImage("gameplayinfoblurb"), canvas.width/4 + canvas.width/2,190, 150,35);
    canvasContext.drawImage(Images.getImage("left_arrow"), leftArrowX, 195, 105, 25);
    canvasContext.globalAlpha = 1;
  }
  if (profilesArrowSeen && !tutorialArrowSeen) {
    canvasContext.globalAlpha = infoBlurbTransparency;
    canvasContext.drawImage(Images.getImage("gameplayinfoblurb"), canvas.width/4 + canvas.width/2,243, 150,35);
    canvasContext.drawImage(Images.getImage("left_arrow"), leftArrowX, 248, 105, 25);
    canvasContext.globalAlpha = 1;
  }

}
