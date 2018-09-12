let isMainMenu = true;
let isProfileMenu = false;
let isShowingExistingProfiles = false;
const buttonWidth = 200;
const buttonHeight = 40;
let useStationaryMode;

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
    alert("No profiles exist, go back and create a new profile");
  }
  //console.log(existingProfilesMenuButtonList);
}

function showProfileMenu() {
  isProfileMenu = true;
  isShowingExistingProfiles = false;
}

let mainMenuButtonList = [
  {label: "kid mode", x:125,y:210, onClick: startKidMode},
  {label: "advanced mode", x:500,y:210, onClick: startAdvancedMode},
  {label: "stationary mode", x:310,y:300, onClick: toggleStationaryMode}
];

function drawMainMenu() {
  //colorRect(0,0 , canvas.width,canvas.height, "black");//add background image for menu
  canvasContext.drawImage(Images.getImage("openingMenuBackground"), 0,0, canvas.width, canvas.height);
  canvasContext.textAlign = "center";
  for (let i = 0; i<mainMenuButtonList.length; i++) {
    if (mainMenuButtonList[i].label === "stationary mode") {
      let stationaryButtonColor = useStationaryMode ? "green" : "red";
      colorRect(mainMenuButtonList[i].x,mainMenuButtonList[i].y, buttonWidth,buttonHeight, stationaryButtonColor);
    } else {
      colorRect(mainMenuButtonList[i].x,mainMenuButtonList[i].y, buttonWidth,buttonHeight, "blue");
    }
    colorText(mainMenuButtonList[i].label, mainMenuButtonList[i].x + buttonWidth/2,mainMenuButtonList[i].y + buttonHeight/2, "white", "18px papyrus");
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
  //colorRect(0,0 , canvas.width,canvas.height, "black");
  canvasContext.drawImage(Images.getImage("openingMenuBackground"), 0,0, canvas.width, canvas.height);
  canvasContext.textAlign = "center";
  for (let i = 0; i<profileMenuButtonList.length; i++) {
    colorRect(profileMenuButtonList[i].x,profileMenuButtonList[i].y, buttonWidth,buttonHeight, "blue");
    colorText(profileMenuButtonList[i].label, profileMenuButtonList[i].x + buttonWidth/2,profileMenuButtonList[i].y + buttonHeight/2, "white", "18px papyrus");
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
    //console.log("arrayOfProfiles", arrayOfProfiles);
  } else {
    arrayOfProfiles = JSON.parse(localStorage.getItem("storedArrayOfProfiles"));
    //console.log("arrayOfProfiles", arrayOfProfiles);
  }
}

function initializeExistingProfilesMenuButtonList() {
  for (let i = 0; i<arrayOfProfiles.length; i++) {
    //console.log(arrayOfProfiles[i].targetsToPractice);
    existingProfilesMenuButtonList.push({label: arrayOfProfiles[i].profileName, x:10 + buttonWidth*1.5,y:((i+1)*(buttonHeight + 20) + 130),
                                        onClick: loadProfileSettingsAndStartGame});
  }
}

function generateNewProfile() {
  let newProfile = {profileName: undefined, targetsToPractice: []};
  let newProfileName = prompt("What is your name?", "Type your name here");
  newProfile.profileName = newProfileName;
  //console.log(newProfile.profileName);
  if (newProfileName !== null) {
    arrayOfProfiles.push(newProfile);
    existingProfilesMenuButtonList.push({label:newProfileName,x:10 + buttonWidth*1.5,y:( (arrayOfProfiles.length)*(buttonHeight+40) + 80),
                                        onClick: loadProfileSettingsAndStartGame});
                                        localStorage.setItem("storedArrayOfProfiles", JSON.stringify(arrayOfProfiles));
                                        loadProfileSettingsAndStartGame(newProfileName);
  } else if (newProfileName === null) {
    console.log("newProfileName", newProfileName);
    console.log("isShowingExistingProfiles", isShowingExistingProfiles, "isProfileMenu", isProfileMenu);
    showProfileMenu();
  }
  //console.log("existingProfilesMenuButtonList", existingProfilesMenuButtonList);
  //console.log("arrayOfProfiles", arrayOfProfiles);
  //localStorage.setItem("storedArrayOfProfiles", JSON.stringify(arrayOfProfiles));
  //console.log("newProfileName", newProfileName);
  //loadProfileSettingsAndStartGame(newProfileName);
  //console.log(temporaryArrayOfQuestions);
}

let existingProfilesMenuButtonList = [
  {label: "back", x:800,y:10, onClick: showProfileMenu}
];

function drawExistingProfilesMenu() {
  canvasContext.clearRect(0,0, canvas.width, canvas.height);
  //canvasContext.fillStyle = "black";
  //canvasContext.fillRect(0,0, canvas.width,canvas.height);
  canvasContext.drawImage(Images.getImage("openingMenuBackground"), 0,0, canvas.width, canvas.height);
  canvasContext.textAlign = "center";
  for (let i = 0; i<existingProfilesMenuButtonList.length; i++) {
    colorRect(existingProfilesMenuButtonList[i].x,existingProfilesMenuButtonList[i].y, buttonWidth,buttonHeight, "blue");
    colorText(existingProfilesMenuButtonList[i].label, existingProfilesMenuButtonList[i].x + buttonWidth/2,existingProfilesMenuButtonList[i].y + buttonHeight/2, "white", "18px papyrus");
  }
  canvasContext.textAlign = "left";
}

let buttonLabel;
function handleExistingProfileMenuInput() {
  for (let i = 0; i<existingProfilesMenuButtonList.length; i++) {
    if (mouseX >= existingProfilesMenuButtonList[i].x && mouseX <= existingProfilesMenuButtonList[i].x + buttonWidth &&
      mouseY >= existingProfilesMenuButtonList[i].y && mouseY <= existingProfilesMenuButtonList[i].y + buttonHeight) {
        //console.log(existingProfilesMenuButtonList[i].onClick);
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
    console.log("temporaryArrayOfQuestions", temporaryArrayOfQuestions);
  } else {
    chunkArray(currentProfile.targetsToPractice, 2);
    customTrack = chunkArray(currentProfile.targetsToPractice, 2);
    currentTrack = customTrack;
    trackIndex = 0;
    temporarySubset = currentTrack[trackIndex];
    console.log("customTrack", customTrack);
    console.log("temporarySubset", temporarySubset);
  }
  initializeArrayOfFlies(temporarySubset);
  console.log("targetAudio", targetAudio);
  //console.log("temporarySubset", temporarySubset);
  //console.log("arrayOfFlies", arrayOfFlies);
  //console.log("currentProfile", currentProfile);
  //console.log("temporaryArrayOfQuestions", temporaryArrayOfQuestions);
}

function assignCurrentProfile(newProfileName, buttonLabel) {

  for (let i = 0; i<arrayOfProfiles.length; i++) {
      //console.log(arrayOfProfiles[i].profileName, buttonLabel);
      if (arrayOfProfiles[i].profileName === buttonLabel) {
        //console.log("hello world");
        //console.log("arrayOfProfiles[i].profileName", arrayOfProfiles[i].profileName);
        //console.log("buttonLabel", buttonLabel);
        //console.log("arrayOfProfiles[i]", arrayOfProfiles[i]);
        currentProfile = arrayOfProfiles[i];
        return currentProfile;
        //console.log("current profile", currentProfile);
      }
  }
}
