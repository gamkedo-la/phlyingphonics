let isSettingsMenu = false;
let customLevelsToggleCircleX;
let glowToggleCircleX;
let stationaryToggleCircleX;
let toggleOffX;
let toggleOnX;
let toggleXSpeed = 1;
let customLevelsOnOffTransparency = 0;
let onOffToggleTransparencySpeed = 0.1;


function drawSettingsMenu(mouseX,mouseY) {


  canvasContext.drawImage(Images.getImage(chosenBackground), canvasLeftEdge - 16, canvasTopEdge - 16, canvasRightEdge + 16, canvasBottomEdge + 16);
  drawSwattedFlies();
  drawFlies();

  //background
  canvasContext.drawImage(Images.getImage("settings_menu_background"),canvas.width/4,0, canvas.width/2,canvas.height);

  //custom levels
  colorText("Custom Levels", canvas.width/4 + 35,50, "#FC5800", "30px papyrus");
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
  colorText("Glow", canvas.width/4 + 35,105, "#FC5800", "30px papyrus");
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


  //stationary
  colorText("Stationary", canvas.width/4 + 35,160, "#FC5800", "30px papyrus");
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
    if ( (mousePressed || fingerPressed) && (mouseX >= canvas.width/4 + canvas.width/2 - 125 && mouseX <= canvas.width/4 + canvas.width/2 - 50 &&
          mouseY >= 193 && mouseY <= 218) ) {
            canvasContext.drawImage(Images.getImage("menu_button_forward_down"), canvas.width/4 + canvas.width/2 - 125,193, 75,25);
          } else {
    canvasContext.drawImage(Images.getImage("menu_button_forward"), canvas.width/4 + canvas.width/2 - 125,193, 75,25);
    }
    colorText("Profiles", canvas.width/4 + 35,215, "#FC5800", "30px papyrus");

    //tutorial
    colorText("Tutorial", canvas.width/4 + 35,270, "#FC5800", "30px papyrus");
    if ( (mousePressed || fingerPressed) && (mouseX >= canvas.width/4 + canvas.width/2 - 125 && mouseX <= canvas.width/4 + canvas.width/2 - 50 &&
          mouseY >= 247 && mouseY <= 272) ) {
            canvasContext.drawImage(Images.getImage("menu_button_forward_down"), canvas.width/4 + canvas.width/2 - 125,247, 75,25);
          } else {
            canvasContext.drawImage(Images.getImage("menu_button_forward"), canvas.width/4 + canvas.width/2 - 125,247, 75,25);
          }

    //play
    if ( (mousePressed || fingerPressed) && (mouseX >= canvas.width/3 + 130 && mouseX <= canvas.width/3 + 280 &&
          mouseY >= 325 && mouseY <= 425) ) {
          canvasContext.drawImage(Images.getImage("gui_button_play_down"), canvas.width/3 + 130,325, 150,100);
        } else {
          canvasContext.drawImage(Images.getImage("gui_button_play"), canvas.width/3 + 130,325, 150,100);
        }

}

let showGlow = true;
let customLevelsShowing = false;
let stationaryMode = false;
let settingsMenuFlyXSpeed = 1;
let settingsMenuFlyX;
//let useStationaryMode = false;

function handleSettingsMenuInput(mouseX,mouseY) {
  //check for Custom Levels toggle click
  if (mouseX >= canvas.width/4 + canvas.width/2 - 125 && mouseX <= canvas.width/4 + canvas.width/2 - 50 &&
      mouseY >= 25 && mouseY <= 50) {
        if (customLevelsShowing) {
          customLevelsShowing = false;
          toggleOff.play();
        } else {
          customLevelsShowing = true;
          toggleOn.play();
        }
        console.log("customLevelsShowing", customLevelsShowing);
        customLevelsArrowSeen = true;
        infoBlurbTransparency = 0.1;
      }
  //check for glow toggle click
  if (mouseX >= canvas.width/4 + canvas.width/2 - 125 && mouseX <= canvas.width/4 + canvas.width/2 - 50 &&
      mouseY >= 83 && mouseY <= 108) {
        if (showGlow) {
          showGlow = false;
          toggleOff.play();
        } else {
          showGlow = true;
          toggleOn.play();
        }
        glowArrowSeen = true;
        infoBlurbTransparency = 0.1;
      }
  //check for stationary mode toggle click
  if (mouseX >= canvas.width/4 + canvas.width/2 - 125 && mouseX <= canvas.width/4 + canvas.width/2 - 50 &&
      mouseY >= 141 && mouseY <= 166) {
        if (stationaryMode) {
          stationaryMode = false;
          toggleOff.play();
        } else {
          stationaryMode = true;
          toggleOn.play();
        }
        stationaryArrowSeen = true;
        infoBlurbTransparency = 0.1;
      }

      //profiles click canvas.width/4 + canvas.width/2 - 125,193, 75,25
      if (mouseX >= canvas.width/4 + canvas.width/2 - 125 && mouseX <= canvas.width/4 + canvas.width/2 - 50 &&
            mouseY >= 193 && mouseY <= 218) {
              fanflap.play();
              isProfileMenu = true;
              isSettingsMenu = false;
              customLevelsArrowSeen = true;
              infoBlurbTransparency = 0.1;
              profilesArrowSeen = true;
            }

      //tutorial click canvas.width/4 + canvas.width/2 - 125,247, 75,25
      if (mouseX >= canvas.width/4 + canvas.width/2 - 125 && mouseX <= canvas.width/4 + canvas.width/2 - 50 &&
            mouseY >= 247 && mouseY <= 272) {
              fanflap.play();
              showSettingsButtonBlurbSeen = false;
              gamePlayInfoRead = false;
              isSettingsMenu = false;
              console.log("showSettingsButtonBlurbSeen", showSettingsButtonBlurbSeen);
              console.log("gamePlayInfoRead", gamePlayInfoRead);
              tutorialArrowSeen = true;
              customLevelsArrowSeen = false;
              glowArrowSeen = false;
              stationaryArrowSeen = false;
              profilesArrowSeen = false;
              infoBlurbTransparency = 0.1;
            }

  //check for play button click
  if (mouseX >= canvas.width/3 + 130 && mouseX <= canvas.width/3 + 280 && mouseY >= 325 && mouseY <= 425) {
    isSettingsMenu = false;
    playTargetAudio();
    fanflap.play();
    console.log("showSettingsButtonBlurbSeen", showSettingsButtonBlurbSeen);
    console.log("gamePlayInfoRead", gamePlayInfoRead);
    customLevelsArrowSeen = true;
    infoBlurbTransparency = 0.1;
  }
}

let toggleOn = new Audio();
toggleOn.src = "audio/toggleon.mp3";
let toggleOff = new Audio();
toggleOff.src = "audio/toggleoff.mp3";
