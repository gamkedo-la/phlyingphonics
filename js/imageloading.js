//declarations of image tags

let tablePic = new Image();
let fly = new Image();
let greensplat = new Image();


let imagesToLoad = 0; //counter needed to ensure all images are loaded before launching game
let imageList = []; //array of images that need to be loaded

let loadImages;
let beginLoadingImage;
let subtractLoadedImageAndLaunchGameIfAllAreImagesAreLoaded;

loadImages = () => {
  imageList = [ //list of images to load with variable names and file paths
    {variableName: tablePic, fileName: "table.png"},
    {variableName: fly, fileName: "fly.png"},
    {variableName: greensplat, fileName: "greensplat.png"}
  ]

//counter used to ensure all images are loaded before launching game
  imagesToLoad = imageList.length;

//loops through the image list and begins loading each image
  for ( let imageIndex = 0; imageIndex < imageList.length; imageIndex++) {
    beginLoadingImage(imageList[imageIndex].variableName, "images/" + imageList[imageIndex].fileName);
  }
}

//subtracts loaded images from counter total, starts game when everything is loaded
subtractLoadedImageAndLaunchGameIfAllImagesAreLoaded = () => {
  imagesToLoad--;
  if (imagesToLoad === 0) {
    launchGame();
  }
}

//once the image loads it calls the subtracter function, also sets the source for the tags
beginLoadingImage = (variableName, fileName) => {
  variableName.onload = subtractLoadedImageAndLaunchGameIfAllImagesAreLoaded;
  variableName.src = fileName;
}
