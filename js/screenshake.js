// current offsets for the game camera
let screenshakeX = 0;
let screenshakeY = 0;

let screen_shakes = 0; // frames of screenshake used as player feedback for when we take damage
let MAX_SCREEN_SHAKES = 20;
let MAX_SCREEN_SHAKE_SIZE_PX = 16;

function screenShake(howmany) {
    screen_shakes += howmany;
    // max out at a reasonable value to avoid infini-shake in tight loops
    if (screen_shakes > MAX_SCREEN_SHAKES)
        screen_shakes = MAX_SCREEN_SHAKES;
}

function updateScreenshake() {
    if (screen_shakes > 0) {

        let shakesize = screen_shakes * 1.5;
        if (shakesize > MAX_SCREEN_SHAKE_SIZE_PX)
            shakesize = MAX_SCREEN_SHAKE_SIZE_PX;

        // shake around a pivot point
        screenshakeX = (Math.round((Math.random() * shakesize) - shakesize / 2) * 2);
        screenshakeY = (Math.round((Math.random() * shakesize) - shakesize / 2) * 2);

        screen_shakes--;

        // about to finish? return to where we were when we started
        if (screen_shakes < 1) {
            screenshakeX = 0;
            screenshakeY = 0;
        }
    }
}
