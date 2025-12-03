// SOUND VARIABLES
let sfxFire;
let sfxHitAsteroid;
let sfxLoseLife;
let sfxGameOver;
let musicGameScene;
let sfxWinner;
let musicGameSceneLevel2;
let musicGameSceneLevel3;
let sfxBuy;
let dotFont;

function preload() {
    soundFormats('mp3', 'wav');
    sfxFire = loadSound('assets/sounds/fire.wav');
    sfxHitAsteroid = loadSound('assets/sounds/hitAstroid.wav');
    sfxLoseLife = loadSound('assets/sounds/loseLife.wav');
    sfxGameOver = loadSound('assets/sounds/gameOver.wav');
    musicGameScene = loadSound('assets/sounds/gameScene.mp3');
    musicGameSceneLevel2 = loadSound('assets/sounds/gameSceneLevel2.mp3');
    musicGameSceneLevel3 = loadSound('assets/sounds/gameSceneLevel3.mp3');
    sfxWinner = loadSound('assets/sounds/winner.mp3');
    sfxBuy = loadSound('assets/sounds/chaChing.wav');

    dotFont = loadFont ('assets/fonts/Doto/static/Doto-ExtraBold.ttf')
}
