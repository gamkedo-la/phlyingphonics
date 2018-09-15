let isOpeningLanguageSelector = true;
let isMainMenu = false;
let isProfileMenu = false;
let isShowingExistingProfiles = false;
const buttonWidth = 200;
const buttonHeight = 40;
let useStationaryMode;
const MENU_BUTTON_TXT_OFFSET_Y = 6; // nudge the text inside the buttons down a little

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

function drawOpeningLanguageSelector() {
  canvasContext.drawImage(Images.getImage("openingMenuBackground"), 0,0, canvas.width, canvas.height);
  canvasContext.textAlign = "center";
  for (let i = 0; i<languageSelectorButtonList.length; i++) {
    //colorRect(languageSelectorButtonList[i].x,languageSelectorButtonList[i].y, buttonWidth,buttonHeight, "blue");
    canvasContext.drawImage(Images.getImage("menu_button"), languageSelectorButtonList[i].x, languageSelectorButtonList[i].y);
    colorText(languageSelectorButtonList[i].label, languageSelectorButtonList[i].x + buttonWidth/2,languageSelectorButtonList[i].y + buttonHeight/2 + MENU_BUTTON_TXT_OFFSET_Y, "white", "18px papyrus");
  }
  canvasContext.textAlign = "left";
}

function handleOpeningLanguageSelectorInput(mouseX,mouseY) {
  for (let i = 0; i<languageSelectorButtonList.length; i++) {
    if (mouseX >= languageSelectorButtonList[i].x && mouseX <= languageSelectorButtonList[i].x + buttonWidth &&
      mouseY >= languageSelectorButtonList[i].y && mouseY <= languageSelectorButtonList[i].y + buttonHeight) {
        languageSelectorButtonList[i].onClick();
        language = languageSelectorButtonList[i].language;
        console.log("language", language);
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
  canvasContext.drawImage(Images.getImage("openingMenuBackground"), 0,0, canvas.width, canvas.height);
  canvasContext.textAlign = "center";
  for (let i = 0; i<mainMenuButtonList.length; i++) {
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

function handleMainMenuInput(mouseX,mouseY) {
  for (let i = 0; i<mainMenuButtonList.length; i++) {
    if (mouseX >= mainMenuButtonList[i].x && mouseX <= mainMenuButtonList[i].x + buttonWidth &&
      mouseY >= mainMenuButtonList[i].y && mouseY <= mainMenuButtonList[i].y + buttonHeight) {
        mainMenuButtonList[i].onClick();
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
  canvasContext.drawImage(Images.getImage("openingMenuBackground"), 0,0, canvas.width, canvas.height);
  canvasContext.textAlign = "center";
  for (let i = 0; i<profileMenuButtonList.length; i++) {
    //colorRect(profileMenuButtonList[i].x,profileMenuButtonList[i].y, buttonWidth,buttonHeight, "blue");
    canvasContext.drawImage(Images.getImage("menu_button"), profileMenuButtonList[i].x,profileMenuButtonList[i].y);
    colorText(profileMenuButtonList[i].label, profileMenuButtonList[i].x + buttonWidth/2,profileMenuButtonList[i].y + buttonHeight/2 + MENU_BUTTON_TXT_OFFSET_Y, "white", "18px papyrus");
  }
  canvasContext.textAlign = "left";
}

function handleProfileMenuInput(mouseX,mouseY) {
  for (let i = 0; i<profileMenuButtonList.length; i++) {
    if (mouseX >= profileMenuButtonList[i].x && mouseX <= profileMenuButtonList[i].x + buttonWidth &&
      mouseY >= profileMenuButtonList[i].y && mouseY <= profileMenuButtonList[i].y + buttonHeight) {
        profileMenuButtonList[i].onClick();

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
  canvasContext.drawImage(Images.getImage("openingMenuBackground"), 0,0, canvas.width, canvas.height);
  canvasContext.textAlign = "center";
  for (let i = 0; i<existingProfilesMenuButtonList.length; i++) {
    //colorRect(existingProfilesMenuButtonList[i].x,existingProfilesMenuButtonList[i].y, buttonWidth,buttonHeight, "blue");
    canvasContext.drawImage(Images.getImage("menu_button"), existingProfilesMenuButtonList[i].x,existingProfilesMenuButtonList[i].y);
    colorText(existingProfilesMenuButtonList[i].label, existingProfilesMenuButtonList[i].x + buttonWidth/2 + MENU_BUTTON_TXT_OFFSET_Y, existingProfilesMenuButtonList[i].y + buttonHeight/2, "white", "18px papyrus");
  }
  canvasContext.textAlign = "left";
}

let buttonLabel;
function handleExistingProfileMenuInput() {
  for (let i = 0; i<existingProfilesMenuButtonList.length; i++) {
    if (mouseX >= existingProfilesMenuButtonList[i].x && mouseX <= existingProfilesMenuButtonList[i].x + buttonWidth &&
      mouseY >= existingProfilesMenuButtonList[i].y && mouseY <= existingProfilesMenuButtonList[i].y + buttonHeight) {
        buttonLabel = existingProfilesMenuButtonList[i].label;
        existingProfilesMenuButtonList[i].onClick(buttonLabel);
    }
  }
}

let chunkedCustomLevel;
function loadProfileSettingsAndStartGame(buttonLabel, newProfileName, i) {
  isMainMenu = false;
  isProfileMenu = false;
  isShowingExistingProfiles = false;
  currentProfile = assignCurrentProfile(newProfileName, buttonLabel);
  if (currentProfile.targetsToPractice.length === 0) {
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
