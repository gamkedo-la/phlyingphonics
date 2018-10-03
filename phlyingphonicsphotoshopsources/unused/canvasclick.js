function handleCanvasClick(evt) {
  console.log(evt.pageX,evt.pageY,phonic.src);
  for (let i = 0; i<arrayOfFlies.length; i++) {
    if (evt.pageX >= arrayOfFlies[i].leftEdge + 30 && evt.pageX<=arrayOfFlies[i].rightEdge - 30 && evt.pageY >= arrayOfFlies[i].topEdge + 30 && //reasonable clicking coordinates

        evt.pageY <= arrayOfFlies[i].bottomEdge - 30 && arrayOfFlies[i].myPhonic === phonic.src) {
          //console.log(arrayOfFlies[i], arrayOfFlies[i].myPhonic, phonic.src);
      arrayOfFlies[i].myImage = greensplat; //changing source image

        evt.pageY <= arrayOfFlies[i].bottomEdge - 30) {
      arrayOfFlies[i].myImage = Images.getImage("greensplat"); //changing source image

      arrayOfFlies[i].xSpeed = 0; //stops movement
      arrayOfFlies[i].ySpeed = 0;
      splat.play(); //plays splat audio tag

    }
  }
//arrayOfFlies[i].myPhonic === phonic.src
}
