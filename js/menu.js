let isMenu = true;
const buttonWidth = 200;
const buttonHeight = 40;

function startKidMode() {
  isMenu = false;
}

function startAdvancedMode() {
  isMenu = false;
}

function toggleStationaryMode() {
  useStationaryMode = !useStationaryMode;
}

let buttonList = [
  {label: "kid mode", x:50,y:70, onClick: startKidMode},
  {label: "advanced mode", x:400,y:70, onClick: startAdvancedMode},
  {label: "stationary mode", x:250,y:140, onClick: toggleStationaryMode}
];

function drawMenu() {
  colorRect(0,0 , canvas.width,canvas.height, "black");//add background image for menu
  canvasContext.textAlign = "center";
  for (let i = 0; i<buttonList.length; i++) {
    if (buttonList[i].label === "stationary mode") {
      let stationaryButtonColor = useStationaryMode ? "green" : "red";
      colorRect(buttonList[i].x,buttonList[i].y, buttonWidth,buttonHeight, stationaryButtonColor);
    } else {
      colorRect(buttonList[i].x,buttonList[i].y, buttonWidth,buttonHeight, "blue");
    }
    colorText(buttonList[i].label, buttonList[i].x + buttonWidth/2,buttonList[i].y + buttonHeight/2, "white", "18px papyrus");
  }
  canvasContext.textAlign = "left";
}

function handleMenuInput(mouseX,mouseY) {
  for (let i = 0; i<buttonList.length; i++) {
    if (mouseX >= buttonList[i].x && mouseX <= buttonList[i].x + buttonWidth &&
      mouseY >= buttonList[i].y && mouseY <= buttonList[i].y + buttonHeight) {
        buttonList[i].onClick();
        if (buttonList[i].label !== "stationary mode") {
          if (arrayOfTargetsToPractice.length < 1) {
            alert("Phlying Phonics suggests you practice whatever you want.");
          } else {
            alert("Phlying Phonics suggests you practice " + arrayOfTargetsToPractice);
          }
        }
      }
  }
}
