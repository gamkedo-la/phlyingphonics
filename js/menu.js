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

function goToMainMenu(i) {
  isOpeningLanguageSelector = false;
  language = languageSelectorButtonList[i].language;
  localStorage.setItem("language", JSON.stringify(language));
  loadProfileSettingsAndStartGame();
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
  canvasContext.drawImage(Images.getImage("openingmenubackground3"), 0,0, canvas.width, canvas.height);
  canvasContext.textAlign = "center";
  for (let i = 0; i<languageSelectorButtonList.length; i++) {

    if (mouseX >= languageSelectorButtonList[i].x && mouseX <= languageSelectorButtonList[i].x + buttonWidth &&
      mouseY >= languageSelectorButtonList[i].y && mouseY <= languageSelectorButtonList[i].y + buttonHeight) {
        canvasContext.drawImage(Images.getImage("menu_button_down"), languageSelectorButtonList[i].x, languageSelectorButtonList[i].y)
      } else {
    canvasContext.drawImage(Images.getImage("menu_button"), languageSelectorButtonList[i].x, languageSelectorButtonList[i].y);
    }
    colorText(languageSelectorButtonList[i].label, languageSelectorButtonList[i].x + buttonWidth/2,languageSelectorButtonList[i].y + buttonHeight/2 + MENU_BUTTON_TXT_OFFSET_Y, "white", "18px papyrus");
  }
  canvasContext.textAlign = "left";
}

function handleOpeningLanguageSelectorInput(mouseX,mouseY) {

  for (let i = 0; i<languageSelectorButtonList.length; i++) {
    if (mouseX >= languageSelectorButtonList[i].x && mouseX <= languageSelectorButtonList[i].x + buttonWidth &&
      mouseY >= languageSelectorButtonList[i].y && mouseY <= languageSelectorButtonList[i].y + buttonHeight) {
        languageSelectorButtonList[i].onClick(i);
        fanflap.play();
    }
  }

}

let profileMenuButtonList;

function showSettingsMenu() {
  isProfileMenu = false;
  isSettingsMenu = true;
}

function drawProfileMenu() {
  canvasContext.drawImage(Images.getImage("settings_menu_background2"),canvas.width/4,0, canvas.width/2,canvas.height);
  colorText(language.profiles, canvas.width/2 - 85, 60, "#FC5800", "50px papyrus");
  canvasContext.textAlign = "center";
  for (let i = 0; i<profileMenuButtonList.length; i++) {
    //check for mousedown, if so draw menu down button
    if ( mousePressed && (mouseX >= profileMenuButtonList[i].x && mouseX <= profileMenuButtonList[i].x + buttonWidth &&
      mouseY >= profileMenuButtonList[i].y && mouseY <= profileMenuButtonList[i].y + buttonHeight) ) {
        canvasContext.drawImage(Images.getImage("menu_button_down"), profileMenuButtonList[i].x, profileMenuButtonList[i].y);
        colorText(profileMenuButtonList[i].label, profileMenuButtonList[i].x + buttonWidth/2,profileMenuButtonList[i].y + buttonHeight/2/* + MENU_BUTTON_TXT_OFFSET_Y*/, "white", "18px papyrus");
      } else { //if mouse is up, draw up button
    canvasContext.drawImage(Images.getImage("menu_button"), profileMenuButtonList[i].x,profileMenuButtonList[i].y);
    colorText(profileMenuButtonList[i].label, profileMenuButtonList[i].x + buttonWidth/2,profileMenuButtonList[i].y + buttonHeight/2/* + MENU_BUTTON_TXT_OFFSET_Y*/, "white", "18px papyrus");
  }
  canvasContext.textAlign = "left";
}
  drawExistingProfilesMenu();
}

function handleProfileMenuInput(mouseX,mouseY) {
  //new student and back buttons
  for (let i = 0; i<profileMenuButtonList.length; i++) {
    if (mouseX >= profileMenuButtonList[i].x && mouseX <= profileMenuButtonList[i].x + buttonWidth &&
      mouseY >= profileMenuButtonList[i].y && mouseY <= profileMenuButtonList[i].y + buttonHeight) {
        profileMenuButtonList[i].onClick();
        fanflap.play();
    }
  }
  //previously made profiles
  handleExistingProfileMenuInput();
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
    existingProfilesMenuButtonList.push({label: arrayOfProfiles[i].profileName, x:270 + buttonWidth*1.5,y:((i+1)*(buttonHeight + 20) + buttonHeight*1.5 + 5),
                                        onClick: loadProfileSettingsAndStartGame});
  }
}

function generateNewProfile() {
  let newProfile = {profileName: undefined, targetsToPractice: []};
  let newProfileName = prompt(language.whatIsYourName, language.typeYourNameHere);
  newProfile.profileName = newProfileName;
  if (newProfileName !== null) {
    arrayOfProfiles.push(newProfile);
    existingProfilesMenuButtonList.push({label:newProfileName,x:270 + buttonWidth*1.5,y:( (arrayOfProfiles.length)*(buttonHeight+40) + 25),
                                        onClick: loadProfileSettingsAndStartGame});
                                        localStorage.setItem("storedArrayOfProfiles", JSON.stringify(arrayOfProfiles));
                                        arrayOfFlies = [];
                                        arrayOfSwattedFlies = [];
                                        currentTrack = vowelTrackLevels;
                                        trackIndex = 0;
                                        loadProfileSettingsAndStartGame(newProfileName);
  } else if (newProfileName === null) {
    showProfileMenu();
  }
}

let existingProfilesMenuButtonList = [
  //{label: "back", x:800,y:10, onClick: showProfileMenu}
];

function drawExistingProfilesMenu() {
  canvasContext.textAlign = "center";
  for (let i = 0; i<existingProfilesMenuButtonList.length; i++) {

    if (mouseX >= existingProfilesMenuButtonList[i].x && mouseX <= existingProfilesMenuButtonList[i].x + buttonWidth &&
      mouseY >= existingProfilesMenuButtonList[i].y && mouseY <= existingProfilesMenuButtonList[i].y + buttonHeight) {
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
    if (mouseX >= existingProfilesMenuButtonList[i].x && mouseX <= existingProfilesMenuButtonList[i].x + buttonWidth &&
      mouseY >= existingProfilesMenuButtonList[i].y && mouseY <= existingProfilesMenuButtonList[i].y + buttonHeight) {
        buttonLabel = existingProfilesMenuButtonList[i].label;
        existingProfilesMenuButtonList[i].onClick(buttonLabel);
        fanflap.play();
    }
  }
}

let chunkedCustomLevel;
function loadProfileSettingsAndStartGame(buttonLabel, newProfileName, i) {
  if (firstLaunch && tutorial) {
    currentTrack = vowelTrackLevels;
    trackIndex = 0;
  } else {
    isMainMenu = false;
    isProfileMenu = false;
    isShowingExistingProfiles = false;
    tutorial = false;
    currentProfile = assignCurrentProfile(newProfileName, buttonLabel);
    if (currentProfile === undefined) {
      currentProfile = "placeholder profile";
      currentProfile.targetsToPractice = ["e","o"];
      currentTrack = vowelTrackLevels;
      trackIndex = 0;
    } else if (currentProfile.targetsToPractice.length === 0) {
      currentTrack = vowelTrackLevels;
      trackIndex = 0;
      temporarySubset = currentTrack[trackIndex];
    } else {
      chunkArray(currentProfile.targetsToPractice, 2);
      customTrack = chunkArray(currentProfile.targetsToPractice, 2);
      currentTrack = customTrack;
      trackIndex = 0;
      temporarySubset = currentTrack[trackIndex];
    }
  }
  //console.log("currentProfile.targetsToPractice", currentProfile.targetsToPractice);
  arrayOfFlies = [];
  arrayOfSwattedFlies = [];
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
