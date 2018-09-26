let isSettingsMenu = false;
let customLevelsToggleCircleX;
let glowToggleCircleX;

function drawSettingsMenu() {

  //background
  canvasContext.drawImage(Images.getImage("settings_menu_background"),canvas.width/4,0, canvas.width/2,canvas.height);

  //custom levels
  colorText("Custom Levels", canvas.width/4 + 35,50, "#EF1300", "30px papyrus");
  //toggle button
  canvasContext.drawImage(Images.getImage("menu_button_empty_toggle"), canvas.width/4 + canvas.width/2 - 125,25, 75,25);
  canvasContext.drawImage(Images.getImage("toggle_circle"), customLevelsToggleCircleX + 26,28, 19,19);

  //glow
  colorText("Glow", canvas.width/4 + 35,105, "#EF1300", "30px papyrus");
  //toggle button
  canvasContext.drawImage(Images.getImage("menu_button_empty_toggle"), canvas.width/4 + canvas.width/2 - 125,83, 75,25);
  canvasContext.drawImage(Images.getImage("toggle_circle"), glowToggleCircleX + 26,85, 19,19);

  //stationary
  colorText("Stationary", canvas.width/4 + 35,160, "#EF1300", "30px papyrus");
  //toggle button
  canvasContext.drawImage(Images.getImage("menu_button_empty_toggle"), canvas.width/4 + canvas.width/2 - 125,141, 75,25);
  canvasContext.drawImage(Images.getImage("toggle_circle"), glowToggleCircleX + 26,143, 19,19);

  //profiles
    colorText("Profiles", canvas.width/4 + 35,215, "#EF1300", "30px papyrus");





}

function handleSettingsMenuInput() {

}
