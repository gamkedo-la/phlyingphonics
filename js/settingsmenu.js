let isSettingsMenu = false;
let customLevelsToggleCircleX;
let glowToggleCircleX;
let stationaryToggleCircleX;
let toggleOffX;
let toggleOnX;
let toggleXSpeed = 1;
let customLevelsOnOffTransparency = 0;
let onOffToggleTransparencySpeed = 0.1;


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
    if (customLevelsOnOffTransparency > 0) {
      customLevelsOnOffTransparency -= onOffToggleTransparencySpeed;
    }
    if (customLevelsOnOffTransparency < 0) {
      customLevelsOnOffTransparency = 0;
    }
    canvasContext.globalAlpha = customLevelsOnOffTransparency;
    canvasContext.drawImage(Images.getImage("toggle_circle_filler"), customLevelsToggleCircleX + 1.1,28, 17.5,17.5);
    canvasContext.globalAlpha = 1;
  } else if (!customLevelsShowing && customLevelsToggleCircleX <= toggleOffX) {
    customLevelsToggleCircleX = toggleOffX;
    customLevelsOnOffTransparency = 0;
    canvasContext.drawImage(Images.getImage("toggle_circle"), customLevelsToggleCircleX,28, 19,19);
    canvasContext.globalAlpha = customLevelsOnOffTransparency;
    canvasContext.drawImage(Images.getImage("toggle_circle_filler"),customLevelsToggleCircleX + 1.1,28, 17.5,17.5);
    canvasContext.globalAlpha = 1;
  } else if (customLevelsShowing && customLevelsToggleCircleX < toggleOnX) {
    customLevelsToggleCircleX += toggleXSpeed;
    canvasContext.drawImage(Images.getImage("toggle_circle"), customLevelsToggleCircleX,28, 19,19);
    if (customLevelsOnOffTransparency < 1) {
      customLevelsOnOffTransparency += onOffToggleTransparencySpeed;
    }
    if (customLevelsOnOffTransparency > 1) {
      customLevelsOnOffTransparency = 1;
    }
    canvasContext.globalAlpha = customLevelsOnOffTransparency;
    canvasContext.drawImage(Images.getImage("toggle_circle_filler"), customLevelsToggleCircleX + 1.1,28, 17.5,17.5);
    canvasContext.globalAlpha = 1;
  } else if (customLevelsShowing && customLevelsToggleCircleX >= toggleOnX) {
    customLevelsToggleCircleX = toggleOnX;
    customLevelsOnOffTransparency = 1;
    canvasContext.drawImage(Images.getImage("toggle_circle"), customLevelsToggleCircleX,28, 19,19);
    canvasContext.globalAlpha = customLevelsOnOffTransparency;
    canvasContext.drawImage(Images.getImage("toggle_circle_filler"), customLevelsToggleCircleX + 1.1,28, 17.5,17.5);
    canvasContext.globalAlpha = 1;
  }

  //glow
  colorText("Glow", canvas.width/4 + 35,105, "#EF1300", "30px papyrus");
  //toggle button
  canvasContext.drawImage(Images.getImage("menu_button_empty_toggle"), canvas.width/4 + canvas.width/2 - 125,83, 75,25);
  if (!showGlow && glowToggleCircleX > toggleOffX) {
    glowToggleCircleX -= toggleXSpeed;
    canvasContext.drawImage(Images.getImage("toggle_circle"), glowToggleCircleX,85, 19,19);
    if (glowOnOffTransparency > 0) {
      glowOnOffTransparency -= onOffToggleTransparencySpeed;
    }
    if (glowOnOffTransparency < 0) {
      glowOnOffTransparency = 0;
    }
    canvasContext.globalAlpha = glowOnOffTransparency;
    canvasContext.drawImage(Images.getImage("toggle_circle_filler"), glowToggleCircleX + 1.1,85, 17.5,17.5);
    canvasContext.globalAlpha = 1;
  } else if (!showGlow && glowToggleCircleX <= toggleOffX) {
    glowToggleCircleX = toggleOffX;
    glowOnOffTransparency = 0;
    canvasContext.drawImage(Images.getImage("toggle_circle"), glowToggleCircleX,85, 19,19);
    canvasContext.globalAlpha = glowOnOffTransparency;
    canvasContext.drawImage(Images.getImage("toggle_circle_filler"), glowToggleCircleX + 1.1,85, 17.5,17.5);
    canvasContext.globalAlpha = 1;
  } else if (showGlow && glowToggleCircleX < toggleOnX) {
    glowToggleCircleX += toggleXSpeed;
    canvasContext.drawImage(Images.getImage("toggle_circle"), glowToggleCircleX,85, 19,19);
    if (glowOnOffTransparency < 1) {
      glowOnOffTransparency += onOffToggleTransparencySpeed;
    }
    if (glowOnOffTransparency > 1) {
      glowOnOffTransparency = 1;
    }
    canvasContext.globalAlpha = glowOnOffTransparency;
    canvasContext.drawImage(Images.getImage("toggle_circle_filler"), glowToggleCircleX + 1.1,85, 17.5,17.5);
    canvasContext.globalAlpha = 1;
  } else if (showGlow && glowToggleCircleX >= toggleOnX) {
    glowToggleCircleX = toggleOnX;
    glowOnOffTransparency = 1;
    canvasContext.drawImage(Images.getImage("toggle_circle"), glowToggleCircleX,85, 19,19);
    canvasContext.globalAlpha = glowOnOffTransparency;
    canvasContext.drawImage(Images.getImage("toggle_circle_filler"), glowToggleCircleX + 1.1,85, 17.5,17.5);
    canvasContext.globalAlpha = 1;
  }
  if (showGlow) {
    colorCircleWithTransparency(canvas.width/4 + canvas.width/2 - 175,95, 25, "gray", glowTransparency);
  }
  console.log("glowOnOffTransparency", glowOnOffTransparency);

  //stationary
  colorText("Stationary", canvas.width/4 + 35,160, "#EF1300", "30px papyrus");
  //toggle button
  canvasContext.drawImage(Images.getImage("menu_button_empty_toggle"), canvas.width/4 + canvas.width/2 - 125,141, 75,25);
  if (!stationaryMode && stationaryToggleCircleX > toggleOffX) {
    stationaryToggleCircleX -= toggleXSpeed;
    canvasContext.drawImage(Images.getImage("toggle_circle"), stationaryToggleCircleX,144, 19,19);
    if (stationaryOnOffTransparency > 0) {
      stationaryOnOffTransparency -= onOffToggleTransparencySpeed;
    }
    if (stationaryOnOffTransparency < 0) {
      stationaryOnOffTransparency = 0;
    }
    canvasContext.globalAlpha = stationaryOnOffTransparency;
    canvasContext.drawImage(Images.getImage("toggle_circle_filler"), stationaryToggleCircleX + 1.1,144, 17.5,17.5);
    canvasContext.globalAlpha = 1;
  } else if (!stationaryMode && stationaryToggleCircleX <= toggleOffX) {
    stationaryToggleCircleX = toggleOffX;
    stationaryOnOffTransparency = 0;
    canvasContext.drawImage(Images.getImage("toggle_circle"), stationaryToggleCircleX,144, 19,19);
    canvasContext.globalAlpha = stationaryOnOffTransparency;
    canvasContext.drawImage(Images.getImage("toggle_circle_filler"), stationaryToggleCircleX + 1.1,144, 17.5,17.5);
    canvasContext.globalAlpha = 1;
  } else if (stationaryMode && stationaryToggleCircleX < toggleOnX) {
    stationaryToggleCircleX += toggleXSpeed;
    canvasContext.drawImage(Images.getImage("toggle_circle"), stationaryToggleCircleX,144, 19,19);
    if (stationaryOnOffTransparency < 1) {
      stationaryOnOffTransparency += onOffToggleTransparencySpeed;
    }
    if (stationaryOnOffTransparency > 1) {
      stationaryOnOffTransparency = 1;
    }
    canvasContext.globalAlpha = stationaryOnOffTransparency;
    canvasContext.drawImage(Images.getImage("toggle_circle_filler"), stationaryToggleCircleX + 1.1,144, 17.5,17.5);
    canvasContext.globalAlpha = 1;
  } else if (stationaryMode && stationaryToggleCircleX >= toggleOnX) {
    stationaryToggleCircleX = toggleOnX;
    stationaryOnOffTransparency = 1;
    canvasContext.drawImage(Images.getImage("toggle_circle"), stationaryToggleCircleX,144, 19,19);
    canvasContext.globalAlpha = stationaryOnOffTransparency;
    canvasContext.drawImage(Images.getImage("toggle_circle_filler"), stationaryToggleCircleX + 1.1,144, 17.5,17.5);
    canvasContext.globalAlpha = 1;
  }
  canvasContext.drawImage(Images.getImage("cartoonFly"), settingsMenuFlyX, 130, 40,40);

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
let settingsMenuFlyXSpeed = 1;
let settingsMenuFlyX;
//let useStationaryMode = false;

function handleSettingsMenuInput(mouseX,mouseY) {
  //check for Custom Levels toggle click
  if (mouseX >= canvas.width/4 + canvas.width/2 - 125 && mouseX <= canvas.width/4 + canvas.width/2 + 50 &&
      mouseY >= 25 && mouseY <= 50) {
        if (customLevelsShowing) {
          customLevelsShowing = false;
          toggleOff.play();
        } else {
          customLevelsShowing = true;
          toggleOn.play();
        }
        console.log("customLevelsShowing", customLevelsShowing);
      }
  //check for glow toggle click
  if (mouseX >= canvas.width/4 + canvas.width/2 - 125 && mouseX <= canvas.width/4 + canvas.width/2 + 50 &&
      mouseY >= 83 && mouseY <= 108) {
        if (showGlow) {
          showGlow = false;
          toggleOff.play();
        } else {
          showGlow = true;
          toggleOn.play();
        }
      }
  //check for stationary mode toggle click
  if (mouseX >= canvas.width/4 + canvas.width/2 - 125 && mouseX <= canvas.width/4 + canvas.width/2 + 50 &&
      mouseY >= 141 && mouseY <= 166) {
        if (stationaryMode) {
          stationaryMode = false;
          toggleOff.play();
        } else {
          stationaryMode = true;
          toggleOn.play();
        }
      }
}

let toggleOn = new Audio();
toggleOn.src = "audio/toggleon.mp3";
let toggleOff = new Audio();
toggleOff.src = "audio/toggleoff.mp3";
