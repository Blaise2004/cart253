// SOUND VARIABLES
let sfxFire;
let sfxHitAsteroid;
let sfxLoseLife;
let sfxGameOver;
let musicGameScene;
let sfxWinner;

function preload() {
    soundFormats('mp3', 'wav');

    sfxFire = loadSound('assets/sounds/fire.wav');
    sfxHitAsteroid = loadSound('assets/sounds/hitAstroid.wav');
    sfxLoseLife = loadSound('assets/sounds/loseLife.wav');
    sfxGameOver = loadSound('assets/sounds/gameOver.wav');
    musicGameScene = loadSound('assets/sounds/gameScene.mp3');
    sfxWinner = loadSound('assets/sounds/winner.mp3');
}
