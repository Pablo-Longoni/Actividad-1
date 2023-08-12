// Create a new Phaser config object
import Game from "./game.js"; 
const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 500,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
      min: {
        width: 600,
        height: 500,
      },
      max: {
        width: 600,
        height: 500,
      },
    },
    physics: {
      default: "arcade",
      arcade: {
        gravity: { y: 200 },
        debug: false,
      },
    },
    // List of scenes to load
    // Only the first scene will be shown
    // Remember to import the scene before adding it to the list
    scene: [Game],
  };
  
  // Create a new Phaser game instance
  window.game = new Phaser.Game(config);