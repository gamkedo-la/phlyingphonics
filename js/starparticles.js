var positions = [];


function starParticleClass(i) {
  this.starParticle1X = arrayOfFlies[i].leftEdge + arrayOfFlies[i].width/2;
  this.starParticle1Y = arrayOfFlies[i].topEdge + arrayOfFlies[i].height/2 - 20;
  this.starParticle2X = arrayOfFlies[i].leftEdge + arrayOfFlies[i].width/2;
  this.starParticle2Y = arrayOfFlies[i].topEdge + arrayOfFlies[i].height/2 - 20;
  this.starParticle3X = arrayOfFlies[i].leftEdge + arrayOfFlies[i].width/2;
  this.starParticle3Y = arrayOfFlies[i].topEdge + arrayOfFlies[i].height/2 - 20;

  this.starParticle1XVelocity = -3;
  this.starParticle3XVelocity = 3;
  this.starParticleYVelocity = -5;
  this.starParticleGravity = 0.5;

  this.width = 25;
  this.height = 25;
  this.widthGrowthSpeed = 2;
  this.heightGrowthSpeed = 2;

  this.move = function() {

    this.starParticle1X += this.starParticle1XVelocity;
    this.starParticle1Y += this.starParticleYVelocity;
    this.starParticle2Y += this.starParticleYVelocity;
    this.starParticle3X += this.starParticle3XVelocity;
    this.starParticle3Y += this.starParticleYVelocity;

    this.starParticleYVelocity += this.starParticleGravity;

    this.width += this.widthGrowthSpeed;
    this.height += this.heightGrowthSpeed;


  }

  if (chosenBackground == "BabyRoomBG") {
    this.myStarColor = Images.getImage("yellowstarparticle"); //changing source image
  } else if (chosenBackground == "honeycomb") {
    this.myStarColor = Images.getImage("bluestarparticle");
  } else if (chosenBackground == "tree2") {
    this.myStarColor = Images.getImage("purplestarparticle");
  } else if (chosenBackground == "purplecountertop") {
    this.myStarColor = Images.getImage("greenstarparticle"); //changing source image
  }

  this.draw = function() {
    canvasContext.drawImage(this.myStarColor, this.starParticle1X,this.starParticle1Y, this.width,this.height);
    canvasContext.drawImage(this.myStarColor, this.starParticle2X,this.starParticle2Y, this.width,this.height);
    canvasContext.drawImage(this.myStarColor, this.starParticle3X,this.starParticle3Y, this.width,this.height);

  }
  
}
