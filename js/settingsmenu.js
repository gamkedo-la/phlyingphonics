let isSettingsMenu = false;
let customLevelsToggleCircleX;
let glowToggleCircleX;
let stationaryToggleCircleX;
let toggleOffX;
let toggleOnX;
let toggleXSpeed = 3;


function drawSettingsMenu() {

  //background
  canvasContext.drawImage(Images.getImage("settings_menu_background"),canvas.width/4,0, canvas.width/2,canvas.height);

  //custom levels
  colorText("Custom Levels", canvas.width/4 + 35,50, "#EF1300", "30px papyrus");
  //toggle button
  canvasContext.drawImage(Images.getImage("menu_button_empty_toggle"), canvas.width/4 + canvas.width/2 - 125,25, 75,25);
  if (!customLevelsShowing && customLevelsToggleCircleX > toggleOffX) {
    customLevelsToggleCircleX -= toggleXSpeed;
    canvasContext.drawImage(Images.getImage("toggle_circle"), customLevelsToggleCircleX,28, 19,19);
  } else if (!customLevelsShowing && customLevelsToggleCircleX <= toggleOffX) {
    customLevelsToggleCircleX = toggleOffX;
    canvasContext.drawImage(Images.getImage("toggle_circle"), customLevelsToggleCircleX,28, 19,19);
  } else if (customLevelsShowing && customLevelsToggleCircleX < toggleOnX) {
    customLevelsToggleCircleX += toggleXSpeed;
    canvasContext.drawImage(Images.getImage("toggle_circle"), customLevelsToggleCircleX,28, 19,19);
  } else if (customLevelsShowing && customLevelsToggleCircleX >= toggleOnX) {
    customLevelsToggleCircleX = toggleOnX;
    canvasContext.drawImage(Images.getImage("toggle_circle"), customLevelsToggleCircleX,28, 19,19);
  }

  //glow
  colorText("Glow", canvas.width/4 + 35,105, "#EF1300", "30px papyrus");
  //toggle button
  canvasContext.drawImage(Images.getImage("menu_button_empty_toggle"), canvas.width/4 + canvas.width/2 - 125,83, 75,25);
  if (!showGlow && glowToggleCircleX > toggleOffX) {
    glowToggleCircleX -= toggleXSpeed;
    canvasContext.drawImage(Images.getImage("toggle_circle"), glowToggleCircleX,85, 19,19);
  } else if (!showGlow && glowToggleCircleX <= toggleOffX) {
    glowToggleCircleX = toggleOffX;
    canvasContext.drawImage(Images.getImage("toggle_circle"), glowToggleCircleX,85, 19,19);
  } else if (showGlow && glowToggleCircleX < toggleOnX) {
    glowToggleCircleX += toggleXSpeed;
    canvasContext.drawImage(Images.getImage("toggle_circle"), glowToggleCircleX,85, 19,19);
  } else if (showGlow && glowToggleCircleX >= toggleOnX) {
    glowToggleCircleX = toggleOnX;
    canvasContext.drawImage(Images.getImage("toggle_circle"), glowToggleCircleX,85, 19,19);
  }


  //stationary
  colorText("Stationary", canvas.width/4 + 35,160, "#EF1300", "30px papyrus");
  //toggle button
  canvasContext.drawImage(Images.getImage("menu_button_empty_toggle"), canvas.width/4 + canvas.width/2 - 125,141, 75,25);
  if (!stationaryMode && stationaryToggleCircleX > toggleOffX) {
    stationaryToggleCircleX -= toggleXSpeed;
    canvasContext.drawImage(Images.getImage("toggle_circle"), stationaryToggleCircleX,144, 19,19);
  } else if (!stationaryMode && stationaryToggleCircleX <= toggleOffX) {
    stationaryToggleCircleX = toggleOffX;
    canvasContext.drawImage(Images.getImage("toggle_circle"), stationaryToggleCircleX,144, 19,19);
  } else if (stationaryMode && stationaryToggleCircleX < toggleOnX) {
    stationaryToggleCircleX += toggleXSpeed;
    canvasContext.drawImage(Images.getImage("toggle_circle"), stationaryToggleCircleX,144, 19,19);
  } else if (stationaryMode && stationaryToggleCircleX >= toggleOnX) {
    stationaryToggleCircleX = toggleOnX;
    canvasContext.drawImage(Images.getImage("toggle_circle"), stationaryToggleCircleX,144, 19,19);
  }

  //profiles
    colorText("Profiles", canvas.width/4 + 35,215, "#EF1300", "30px papyrus");
    canvasContext.drawImage(Images.getImage("menu_button_forward"), canvas.width/4 + canvas.width/2 - 125,193, 75,25);

    //tutorial
    colorText("Tutorial", canvas.width/4 + 35,270, "#EF1300", "30px papyrus");
    canvasContext.drawImage(Images.getImage("menu_button_forward"), canvas.width/4 + canvas.width/2 - 125,247, 75,25);

    //play
    canvasContext.drawImage(Images.getImage("gui_button_play"), canvas.width/4 + 160,325, 150,100);

}

let showGlow = true;
let customLevelsShowing = false;
let stationaryMode = false;
//let useStationaryMode = false;

function handleSettingsMenuInput() {

}
