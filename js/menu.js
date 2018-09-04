let isMainMenu = true;
let isProfileMenu = false;
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

let mainMenuButtonList = [
  {label: "kid mode", x:50,y:70, onClick: startKidMode},
  {label: "advanced mode", x:400,y:70, onClick: startAdvancedMode},
  {label: "stationary mode", x:250,y:140, onClick: toggleStationaryMode}
];

function drawMainMenu() {
  colorRect(0,0 , canvas.width,canvas.height, "black");//add background image for menu
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
          if (arrayOfTargetsToPractice.length < 1) {
            alert("Phlying Phonics suggests you practice whatever you want.");
          } else {
            alert("Phlying Phonics suggests you practice " + arrayOfTargetsToPractice);
          }
        }
      }
  }
}

let profileMenuButtonList = [
  {label: "new student", x:50,y:70, onClick: generateNewProfile},
  {label: "savedProfile1", x:400,y:70/*, onClick: loadSavedProfile1*/},
  {label: "savedProfile2", x:250,y:140/*, onClick: loadSavedProfile2*/}
];

function drawProfileMenu() {
  colorRect(0,0 , canvas.width,canvas.height, "black");
  canvasContext.textAlign = "center";
  for (let i = 0; i<profileMenuButtonList.length; i++) {
    colorRect(profileMenuButtonList[i].x,profileMenuButtonList[i].y, buttonWidth,buttonHeight, "blue");
    colorText(profileMenuButtonList[i].label, profileMenuButtonList[i].x + buttonWidth/2,profileMenuButtonList[i].y + buttonHeight/2, "white", "18px papyrus");
  }
  canvasContext.textAlign = "left";
}

function handleProfileMenuInput(mouseX,mouseY) {
  console.log(mouseX,mouseY);
  for (let i = 0; i<profileMenuButtonList.length; i++) {
    if (mouseX >= profileMenuButtonList[i].x && mouseX <= profileMenuButtonList[i].x + buttonWidth &&
      mouseY >= profileMenuButtonList[i].y && mouseY <= profileMenuButtonList[i].y + buttonHeight) {
        profileMenuButtonList[i].onClick();
    }
  }
}

let arrayOfProfiles = [];

function generateNewProfile() {
  let newProfileName = prompt("What is your name?", "Type your name here");
  arrayOfProfiles.push(newProfileName);
  alert(arrayOfProfiles);
  localStorage.setItem("arrayOfProfiles", arrayOfProfiles);
  alert(localStorage.getItem("arrayOfProfiles"));
}
