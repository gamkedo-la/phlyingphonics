// globals that change over time
var screenshakeX = 0;
var screenshakeY = 0;

var screen_shakes = 0; // frames of screenshake used as player feedback for when we take damage
var screen_shake_pivot_x = 0;
var screen_shake_pivot_y = 0;

var MAX_SCREEN_SHAKES = 30;
var MAX_SCREEN_SHAKE_SIZE_PX = 20;

function screenShake(howmany) {
    //console.log('screenshake ' + howmany);
    screen_shakes += howmany;
    // max out at a reasonable value to avoid infini-shake in tight loops
    if (screen_shakes > MAX_SCREEN_SHAKES)
        screen_shakes = MAX_SCREEN_SHAKES;
}

function updateScreenshake() {
    if (screen_shakes > 0) {

        var shakesize = screen_shakes / 2;
        if (shakesize > MAX_SCREEN_SHAKE_SIZE_PX)
            shakesize = MAX_SCREEN_SHAKE_SIZE_PX;

        // shake around a pivot point
        screenshakeX = (Math.round((Math.random() * shakesize) - shakesize / 2) * 2);
        screenshakeY = (Math.round((Math.random() * shakesize) - shakesize / 2) * 2);

        screen_shakes--;
        //console.log('screen_shakes:'+screen_shakes);

        // about to finish? return to where we were when we started
        if (screen_shakes < 1) {
            //console.log('screenshakes done. going back to original position.')
            screenshakeX = 0;
            screenshakeY = 0;
        }
    }
}

function resetScreenShake() {
    screen_shakes = 0; // frames of screenshake used as player feedback for when we take damage
    screen_shake_pivot_x = 0;
    screen_shake_pivot_y = 0;
    screen_shake_me = document.getElementById('gameCanvas');
}

resetScreenShake(); // immediately init