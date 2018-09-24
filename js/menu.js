let isOpeningLanguageSelector = false;
let isMainMenu = false;
let isProfileMenu = false;
let isShowingExistingProfiles = false;
const buttonWidth = 200;
const buttonHeight = 40;
let useStationaryMode;
const MENU_BUTTON_TXT_OFFSET_Y = 6; // nudge the text inside the buttons down a little
let mouseDown = false;
let mouseUp = true;

function goToMainMenu() {
  isOpeningLanguageSelector = false;
  isMainMenu = true;
}



function startKidMode() {
  isMainMenu = false;
  isProfileMenu = true;
}

function startAdvancedMode() {
  isMainMenu = false;
  isProfileMenu = true;
}

function toggleStationaryMode() {
  useStationaryMode = !useStationaryMode;
}

function showExistingProfiles() {
  isProfileMenu = false;
  isShowingExistingProfiles = true;
  if (arrayOfProfiles.length === 0) {
    alert(language.noProfilesExist);
  }
}

function showProfileMenu() {
  isProfileMenu = true;
  isShowingExistingProfiles = false;
}

//language selector button list is in languages.js as a work around for defining variables
let glowTransparency = 0.1;
let glowSpeed = 0.025;

function drawOpeningLanguageSelector() {
  canvasContext.drawImage(Images.getImage("openingmenubackground2"), 0,0, canvas.width, canvas.height);
  canvasContext.textAlign = "center";
  for (let i = 0; i<languageSelectorButtonList.length; i++) {
    //check if mouse or finger is pressed for drawing button pressed image
    if ( (mousePressed || fingerPressed) && ( (mouseX >= languageSelectorButtonList[i].x && mouseX <= languageSelectorButtonList[i].x + buttonWidth &&
      mouseY >= languageSelectorButtonList[i].y && mouseY <= languageSelectorButtonList[i].y + buttonHeight) || (fingerX >= languageSelectorButtonList[i].x && fingerX <= languageSelectorButtonList[i].x + buttonWidth &&
        fingerY >= languageSelectorButtonList[i].y && fingerY <= languageSelectorButtonList[i].y + buttonHeight ) ) ) {
        canvasContext.drawImage(Images.getImage("menu_button_down"), languageSelectorButtonList[i].x, languageSelectorButtonList[i].y)
      } else {//if mouse is not down draw up image
    canvasContext.drawImage(Images.getImage("menu_button"), languageSelectorButtonList[i].x, languageSelectorButtonList[i].y);
    }
    colorText(languageSelectorButtonList[i].label, languageSelectorButtonList[i].x + buttonWidth/2,languageSelectorButtonList[i].y + buttonHeight/2 + MENU_BUTTON_TXT_OFFSET_Y, "white", "18px papyrus");
  }
  canvasContext.textAlign = "left";
}

function handleOpeningLanguageSelectorInput(mouseX,mouseY) {

  for (let i = 0; i<languageSelectorButtonList.length; i++) {
    if ( (mouseX >= languageSelectorButtonList[i].x && mouseX <= languageSelectorButtonList[i].x + buttonWidth &&
      mouseY >= languageSelectorButtonList[i].y && mouseY <= languageSelectorButtonList[i].y + buttonHeight) ||
      (fingerX >= languageSelectorButtonList[i].x && fingerX <= languageSelectorButtonList[i].x + buttonWidth &&
        fingerY >= languageSelectorButtonList[i].y && fingerY <= languageSelectorButtonList[i].y + buttonHeight) ) {
        languageSelectorButtonList[i].onClick();
        fingerX = 0;
        fingerY = 0;
        fanflap.play();
        language = languageSelectorButtonList[i].language;
        //console.log("language", language);
        mainMenuButtonList[0].label = language.kidMode;
        mainMenuButtonList[1].label = language.advancedMode;
        mainMenuButtonList[2].label = language.stationaryMode;
        profileMenuButtonList[0].label = language.newStudent;
        profileMenuButtonList[1].label = language.returningStudent;
        existingProfilesMenuButtonList[0].label = language.previous;

        JSON.stringify(localStorage.setItem("language", language));
    }
  }
}




function drawMainMenu() {
  canvasContext.drawImage(Images.getImage("openingmenubackground2"), 0,0, canvas.width, canvas.height);
  canvasContext.textAlign = "center";
  for (let i = 0; i<mainMenuButtonList.length; i++) {
    //check for mouse or finger down, if so draw menu button down
    if ( (mousePressed || fingerPressed) && ( (mouseX >= mainMenuButtonList[i].x && mouseX <= mainMenuButtonList[i].x + buttonWidth &&
      mouseY >= mainMenuButtonList[i].y && mouseY <= mainMenuButtonList[i].y + buttonHeight) ) ||
      (fingerX >= mainMenuButtonList[i].x && fingerX <= mainMenuButtonList[i].x + buttonWidth &&
        fingerY >= mainMenuButtonList[i].y && fingerY <= mainMenuButtonList[i].y + buttonHeight ) ) {
        canvasContext.drawImage(Images.getImage("menu_button_down"), mainMenuButtonList[i].x, mainMenuButtonList[i].y);
        colorText(mainMenuButtonList[i].label, mainMenuButtonList[i].x + buttonWidth/2,mainMenuButtonList[i].y + buttonHeight/2 + MENU_BUTTON_TXT_OFFSET_Y, "white", "18px papyrus");

      } else { //if mouse is up, draw up button
      if (mainMenuButtonList[i].label === "stationary mode") {
        let stationaryButtonColor = useStationaryMode ? "green" : "red";
        //colorRect(mainMenuButtonList[i].x,mainMenuButtonList[i].y, buttonWidth,buttonHeight, stationaryButtonColor);
        canvasContext.drawImage(Images.getImage("menu_button"), mainMenuButtonList[i].x,mainMenuButtonList[i].y);
      } else {
        //colorRect(mainMenuButtonList[i].x,mainMenuButtonList[i].y, buttonWidth,buttonHeight, "blue");
        canvasContext.drawImage(Images.getImage("menu_button"), mainMenuButtonList[i].x,mainMenuButtonList[i].y);
        }
    colorText(mainMenuButtonList[i].label, mainMenuButtonList[i].x + buttonWidth/2,mainMenuButtonList[i].y + buttonHeight/2 + MENU_BUTTON_TXT_OFFSET_Y, "white", "18px papyrus");
      }
  canvasContext.textAlign = "left";
  }
}

function handleMainMenuInput(mouseX,mouseY) {
  for (let i = 0; i<mainMenuButtonList.length; i++) {
    if ( (mouseX >= mainMenuButtonList[i].x && mouseX <= mainMenuButtonList[i].x + buttonWidth &&
      mouseY >= mainMenuButtonList[i].y && mouseY <= mainMenuButtonList[i].y + buttonHeight) ||
      (fingerX >= mainMenuButtonList[i].x && fingerX <= mainMenuButtonList[i].x + buttonWidth &&
        fingerY >= mainMenuButtonList[i].y && fingerY <= mainMenuButtonList[i].y + buttonHeight) ) {
        mainMenuButtonList[i].onClick();
        fingerX = 0;
        fingerY = 0;
        fanflap.play();
        if (mainMenuButtonList[i].label !== "stationary mode") {
        }
      }
  }
}

let profileMenuButtonList = [
  {label: "new student",  x:125,y:210, onClick: generateNewProfile},
  {label: "returning student", x:500,y:210, onClick: showExistingProfiles}
];

function drawProfileMenu() {
  canvasContext.drawImage(Images.getImage("openingmenubackground2"), 0,0, canvas.width, canvas.height);
  canvasContext.textAlign = "center";
  for (let i = 0; i<profileMenuButtonList.length; i++) {
    //check for mouse or finger down, if so draw menu down button
    if ( (mousePressed || fingerPressed) && ( (mouseX >= profileMenuButtonList[i].x && mouseX <= profileMenuButtonList[i].x + buttonWidth &&
      mouseY >= profileMenuButtonList[i].y && mouseY <= profileMenuButtonList[i].y + buttonHeight) ||
      (fingerX >= profileMenuButtonList[i].x && fingerX <= profileMenuButtonList[i].x + buttonWidth &&
        fingerY >= profileMenuButtonList[i].y && fingerY <= profileMenuButtonList[i].y + buttonHeight ) ) ) {
        canvasContext.drawImage(Images.getImage("menu_button_down"), profileMenuButtonList[i].x, profileMenuButtonList[i].y);
        colorText(profileMenuButtonList[i].label, profileMenuButtonList[i].x + buttonWidth/2,profileMenuButtonList[i].y + buttonHeight/2 + MENU_BUTTON_TXT_OFFSET_Y, "white", "18px papyrus");
      } else { //if mouse is up, draw up button
    canvasContext.drawImage(Images.getImage("menu_button"), profileMenuButtonList[i].x,profileMenuButtonList[i].y);
    colorText(profileMenuButtonList[i].label, profileMenuButtonList[i].x + buttonWidth/2,profileMenuButtonList[i].y + buttonHeight/2 + MENU_BUTTON_TXT_OFFSET_Y, "white", "18px papyrus");
  }
  canvasContext.textAlign = "left";
}
}

function handleProfileMenuInput(mouseX,mouseY) {
  for (let i = 0; i<profileMenuButtonList.length; i++) {
    if ( (mouseX >= profileMenuButtonList[i].x && mouseX <= profileMenuButtonList[i].x + buttonWidth &&
      mouseY >= profileMenuButtonList[i].y && mouseY <= profileMenuButtonList[i].y + buttonHeight) ||
      (fingerX >= profileMenuButtonList[i].x && fingerX <= profileMenuButtonList[i].x + buttonWidth &&
        fingerY >= profileMenuButtonList[i].y && fingerY <= profileMenuButtonList[i].y + buttonHeight) ) {
        profileMenuButtonList[i].onClick();
        fanflap.play();
        fingerX = 0;
        fingerY = 0;
    }
  }
}

let arrayOfProfiles = [];

function initializeArrayOfProfiles() {
  if (localStorage.getItem("storedArrayOfProfiles") === null) {
    arrayOfProfiles = [];
  } else {
    arrayOfProfiles = JSON.parse(localStorage.getItem("storedArrayOfProfiles"));
  }
}

function initializeExistingProfilesMenuButtonList() {
  for (let i = 0; i<arrayOfProfiles.length; i++) {
    existingProfilesMenuButtonList.push({label: arrayOfProfiles[i].profileName, x:10 + buttonWidth*1.5,y:((i+1)*(buttonHeight + 20) + 130),
                                        onClick: loadProfileSettingsAndStartGame});
  }
}

function generateNewProfile() {
  let newProfile = {profileName: undefined, targetsToPractice: []};
  let newProfileName = prompt(language.whatIsYourName, language.typeYourNameHere);
  newProfile.profileName = newProfileName;
  if (newProfileName !== null) {
    arrayOfProfiles.push(newProfile);
    existingProfilesMenuButtonList.push({label:newProfileName,x:10 + buttonWidth*1.5,y:( (arrayOfProfiles.length)*(buttonHeight+40) + 80),
                                        onClick: loadProfileSettingsAndStartGame});
                                        localStorage.setItem("storedArrayOfProfiles", JSON.stringify(arrayOfProfiles));
                                        loadProfileSettingsAndStartGame(newProfileName);
  } else if (newProfileName === null) {
    showProfileMenu();
  }
}

let existingProfilesMenuButtonList = [
  {label: "back", x:800,y:10, onClick: showProfileMenu}
];

function drawExistingProfilesMenu() {
  canvasContext.clearRect(0,0, canvas.width, canvas.height);
  canvasContext.drawImage(Images.getImage("openingmenubackground2"), 0,0, canvas.width, canvas.height);
  canvasContext.textAlign = "center";
  for (let i = 0; i<existingProfilesMenuButtonList.length; i++) {
    //check if finger or mouse pressed, if so draw button down image
    if ( (mousePressed || fingerPressed) && ( (mouseX >= existingProfilesMenuButtonList[i].x && mouseX <= existingProfilesMenuButtonList[i].x + buttonWidth &&
      mouseY >= existingProfilesMenuButtonList[i].y && mouseY <= existingProfilesMenuButtonList[i].y + buttonHeight) ||
      (fingerX >= existingProfilesMenuButtonList[i].x && fingerX <= existingProfilesMenuButtonList[i].x + buttonWidth &&
        fingerY >= existingProfilesMenuButtonList[i].y && fingerY <= existingProfilesMenuButtonList[i].y + buttonHeight ) ) ) {
        canvasContext.drawImage(Images.getImage("menu_button_down"), existingProfilesMenuButtonList[i].x, existingProfilesMenuButtonList[i].y);
        colorText(existingProfilesMenuButtonList[i].label, existingProfilesMenuButtonList[i].x + buttonWidth/2 + MENU_BUTTON_TXT_OFFSET_Y, existingProfilesMenuButtonList[i].y + buttonHeight/2, "white", "18px papyrus");
      } else { //if mouse is up, draw up button
    canvasContext.drawImage(Images.getImage("menu_button"), existingProfilesMenuButtonList[i].x,existingProfilesMenuButtonList[i].y);
    colorText(existingProfilesMenuButtonList[i].label, existingProfilesMenuButtonList[i].x + buttonWidth/2 + MENU_BUTTON_TXT_OFFSET_Y, existingProfilesMenuButtonList[i].y + buttonHeight/2, "white", "18px papyrus");
  }
  canvasContext.textAlign = "left";
}
}

let buttonLabel;
function handleExistingProfileMenuInput() {
  for (let i = 0; i<existingProfilesMenuButtonList.length; i++) {
    if ( (mouseX >= existingProfilesMenuButtonList[i].x && mouseX <= existingProfilesMenuButtonList[i].x + buttonWidth &&
      mouseY >= existingProfilesMenuButtonList[i].y && mouseY <= existingProfilesMenuButtonList[i].y + buttonHeight) ||
      (fingerX >= existingProfilesMenuButtonList[i].x && fingerX <= existingProfilesMenuButtonList[i].x + buttonWidth &&
        fingerY >= existingProfilesMenuButtonList[i].y && fingerY <= existingProfilesMenuButtonList[i].y + buttonHeight) ) {
        buttonLabel = existingProfilesMenuButtonList[i].label;
        existingProfilesMenuButtonList[i].onClick(buttonLabel);
        fanflap.play();
        fingerX = 0;
        fingerY = 0;
    }
  }
}

let chunkedCustomLevel;
function loadProfileSettingsAndStartGame(buttonLabel, newProfileName, i) {
  isMainMenu = false;
  isProfileMenu = false;
  isShowingExistingProfiles = false;
  currentProfile = assignCurrentProfile(newProfileName, buttonLabel);
  if (currentProfile === undefined) {
    currentTrack = vowelTrackLevels;
    trackIndex = 0;
  } else if (currentProfile.targetsToPractice.length === 0) {
    currentTrack = vowelTrackLevels;
    trackIndex = 0;
  } else {
    chunkArray(currentProfile.targetsToPractice, 2);
    customTrack = chunkArray(currentProfile.targetsToPractice, 2);
    currentTrack = customTrack;
    trackIndex = 0;
    temporarySubset = currentTrack[trackIndex];
  }
  initializeArrayOfFlies(temporarySubset);
}

function assignCurrentProfile(newProfileName, buttonLabel) {

  for (let i = 0; i<arrayOfProfiles.length; i++) {
      if (arrayOfProfiles[i].profileName === buttonLabel) {
        currentProfile = arrayOfProfiles[i];
        return currentProfile;
      }
  }
}
