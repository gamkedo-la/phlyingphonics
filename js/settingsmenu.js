const SETTINGS_MENU_TEXT_COLOR = "#300914";
const SETTINGS_MENU_TEXT_FONT = "30px papyrus";

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
  canvasContext.drawImage(Images.getImage("settings_menu_background2"),canvas.width/4,0, canvas.width/2,canvas.height);

  //custom levels
  colorText(language.customLevels, canvas.width/4 + 35,50, SETTINGS_MENU_TEXT_COLOR, SETTINGS_MENU_TEXT_FONT);
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

  colorText(language.glow, canvas.width/4 + 35,105, SETTINGS_MENU_TEXT_COLOR, SETTINGS_MENU_TEXT_FONT);

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
  canvasContext.drawImage(Images.getImage("fly_version_1"), canvas.width/4 + canvas.width/2 - 195,75, 40,40);


  //stationary
  colorText(language.stationary, canvas.width/4 + 35,160, SETTINGS_MENU_TEXT_COLOR, SETTINGS_MENU_TEXT_FONT);
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
    colorText(language.profiles, canvas.width/4 + 35,215, SETTINGS_MENU_TEXT_COLOR, SETTINGS_MENU_TEXT_FONT);
    canvasContext.textAlign = "left";


    //tutorial
    colorText(language.tutorial, canvas.width/4 + 35,270, SETTINGS_MENU_TEXT_COLOR, SETTINGS_MENU_TEXT_FONT);
    if ( (mousePressed || fingerPressed) && (mouseX >= canvas.width/4 + canvas.width/2 - 125 && mouseX <= canvas.width/4 + canvas.width/2 - 50 &&
          mouseY >= 247 && mouseY <= 272) ) {
            canvasContext.drawImage(Images.getImage("menu_button_forward_down"), canvas.width/4 + canvas.width/2 - 125,247, 75,25);
          } else {
            canvasContext.drawImage(Images.getImage("menu_button_forward"), canvas.width/4 + canvas.width/2 - 125,247, 75,25);
          }

    //credits
    colorText(language.credits, canvas.width/4 + 35,325, SETTINGS_MENU_TEXT_COLOR, SETTINGS_MENU_TEXT_FONT);
    if ( (mousePressed || fingerPressed) && (mouseX >= canvas.width/3 - 38 && mouseY >= 335 && mouseX <= canvas.width/3 + 37 && mouseY <= 385) ) {
          canvasContext.drawImage(Images.getImage("menu_button_forward_down"), canvas.width/3 - 38,335, 75,50);
          tutorial = false;
        } else {
          canvasContext.drawImage(Images.getImage("menu_button_forward"), canvas.width/3 - 38,335, 75,50);
        }

    //play
    if ( (mousePressed || fingerPressed) && (mouseX >= canvas.width/3 + 130 && mouseX <= canvas.width/3 + 280 &&
          mouseY >= 325 && mouseY <= 425) ) {
          canvasContext.drawImage(Images.getImage("gui_button_play_down"), canvas.width/3 + 130,290, 150,100);
          tutorial = false;
        } else {
          canvasContext.drawImage(Images.getImage("gui_button_play"), canvas.width/3 + 130,290, 150,100);
        }

        //older kids Mode
        colorText(language.olderKids, canvas.width/3 + 290,325, SETTINGS_MENU_TEXT_COLOR, SETTINGS_MENU_TEXT_FONT);
        if ( (mousePressed || fingerPressed) && (mouseX >= canvas.width/3 + 290 && mouseX <= canvas.width/3 + 132.5 &&
              mouseY >= 340 && mouseY <= 357.5) ) {
              canvasContext.drawImage(Images.getImage("menu_button_empty_toggle"), canvas.width/3 + 325,340, 75,25);
              tutorial = false;
            } else {
              canvasContext.drawImage(Images.getImage("menu_button_empty_toggle"), canvas.width/3 + 325,340, 75,25);
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

        if (stationaryMode && !rotateFlies) {
          stationaryMode = false;
          rotateFlies = true;
          toggleOff.play();
        } else {
          stationaryMode = true;
          rotateFlies = false;
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
              tutorial = false;
              customLevelsArrowSeen = true;
              infoBlurbTransparency = 0.1;
              profilesArrowSeen = true;
              //should be in languages.js, avoiding hoisting/loading issues
              profileMenuButtonList = [
                {label: language.newStudent,  x:325,y:185, onClick: generateNewProfile},
                {label: language.previous, x:450,y:350, onClick: showSettingsMenu}
              ];
            }

      //tutorial click canvas.width/4 + canvas.width/2 - 125,247, 75,25
      if (mouseX >= canvas.width/4 + canvas.width/2 - 125 && mouseX <= canvas.width/4 + canvas.width/2 - 50 &&
            mouseY >= 247 && mouseY <= 272) {
              fanflap.play();
              tutorial = true;
              showSettingsButtonBlurbSeen = false;
              gamePlayInfoRead = false;
              statsInfoRead = false;
              isSettingsMenu = false;

              tutorialArrowSeen = true;
              customLevelsArrowSeen = false;
              glowArrowSeen = false;
              stationaryArrowSeen = false;
              profilesArrowSeen = false;
              infoBlurbTransparency = 0.1;
            }

            //credits click
            if (mouseX >= canvas.width/3 - 38 && mouseY >= 335 && mouseX <= canvas.width/3 + 37 && mouseY <= 385) {
                    isCreditsMenu = true;
                    isSettingsMenu = false;
                  }

  //check for play button click
  if (mouseX >= canvas.width/3 + 130 && mouseX <= canvas.width/3 + 280 && mouseY >= 325 && mouseY <= 425) {
    isSettingsMenu = false;
    playTargetAudio();
    fanflap.play();

    customLevelsArrowSeen = true;
    infoBlurbTransparency = 0.1;
  }
}

let toggleOn = new Audio();
toggleOn.src = "audio/toggleon.mp3";
toggleOn.volOverride = 0.3;
toggleOn.volume = masterVolume*toggleOn.volOverride;
let toggleOff = new Audio();
toggleOff.src = "audio/toggleoff.mp3";
toggleOff.volOverride = 0.3;
toggleOff.volume = masterVolume*toggleOff.volOverride;

let isCreditsMenu = false;

function drawCreditsMenu(mouseX,mouseY) {
  canvasContext.drawImage(Images.getImage("settings_menu_background2"),0,0, canvas.width,canvas.height);
  colorText("Stebs - Project lead, original concept, core functionality, ", 35,25, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");
  colorText("user profile storage, adaptive difficulty, language player profiles,  ", 35,55, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");
  colorText("voices, music, table backgrounds, asset integration, bug motion, ", 35,85, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");
  colorText("letter art, letter grouping, tutorial, glow effect, intro, settings menu ", 35,115, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");

  colorText("Christer \"McFunkypants\" Kaitila - Fly swatter sprite, screenshake", 35,155, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");
  colorText("flies face direction of motion, flap animations, mobile strings", 35,185, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");
  colorText("butterfly net, custom button art", 35,205, SETTINGS_MENU_TEXT_COLOR, "20px papyrus");

  colorText("Randy Tan Shaoxian - Chinese and Japanese language fixes,", 35,255, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");
  colorText("canvas scaling with aspect preservation, refactoring and comments", 35,285, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");

  colorText("Charlene A. - Opening screen art, added Bahasa Malaysia language,", 35,325, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");
  colorText("cartoon fly, baby room background/hand, honey jar art and implementation,", 35,355, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");
  colorText("stars splat effect, Chineses and Japanese editing, Chinese letter fixes", 35,385, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");

  //right side
  colorText("Chris Markle - VO for right/wrong answers,",canvas.width/2 + 135,25, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");
  colorText("correct/missed sound hookups",canvas.width/2 + 135,55, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");

  colorText("Abdulaziz - Dragon bee, fly to fly collisions improved", canvas.width/2 + 135,95, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");

  colorText("Jaime Rivas - Fly art, two woosh sound effects", canvas.width/2 + 135,135, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");

  colorText("Jeremy Jackson - Stationary mode hookup", canvas.width/2 + 135,175, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");

  colorText("Barış Köklü - Phonics class project", canvas.width/2 + 135,215, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");

  colorText("Rémy Lapointe - Images module implemented", canvas.width/2 + 135,255, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");

  colorText("pseudoLudo - Honeycomb background", canvas.width/2 + 135,295, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");

  colorText("Kise - Additional Japanese translations", canvas.width/2 + 135,335, SETTINGS_MENU_TEXT_COLOR, "17px papyrus");

  if ( (mousePressed || fingerPressed) && (mouseX >= canvas.width/3 + 165 && mouseX <= canvas.width/3 + 290 &&
        mouseY >= 165 && mouseY <= 265) ) {
        canvasContext.drawImage(Images.getImage("gui_button_check_down"), canvas.width/3 + 165,165, 125,100);
        console.log("hello check button mouseover");
      } else {
        canvasContext.drawImage(Images.getImage("gui_button_check"), canvas.width/3 + 165,165, 125,100);
      }
}

function handleCreditsMenuInput(mouseX,mouseY) {
  if (mouseX >= canvas.width/3 + 165 && mouseX <= canvas.width/3 + 290 && mouseY >= 165 && mouseY <= 265) {
    isCreditsMenu = false;
    isSettingsMenu = true;
    fanflap.play();
  }
}
