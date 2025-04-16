var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Shiny",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 800, y: groundY-125, hitSize: 25, damage: 10, img: "fireball.png", imgX: -45, imgY: -70 , scaleX:0.375 , scaleY:0.375 }, 
          { type: "obstacle", x: 1200, y: groundY-125, hitSize: 25, damage: 10, img: "fireball.png", imgX: -45, imgY: -70 , scaleX:0.375 , scaleY:0.375 },
          { type: "obstacle", x: 1800, y: groundY-125, hitSize: 25, damage: 10, img: "fireball.png", imgX: -45, imgY: -70 , scaleX:0.375 , scaleY:0.375 },

          { type: "enemy", x: 1000, y: groundY-70, speed: 5, damage: 10, img: "firefairy.png", imgX: -85, imgY: -100 , scaleX:0.34 , scaleY:0.34 },
          { type: "enemy", x: 7000, y: groundY-70, speed: 7, damage: 10, img: "firefairy.png", imgX: -85, imgY: -100 , scaleX:0.34 , scaleY:0.34 },

          { type: "reward", x: 1550, y: groundY-100, speed: 2, health: 10, img: "starlight.png", imgX: -72, imgY: -70 , scaleX:0.35 , scaleY:0.35 },

          { type: "reward", x: 2750, y: groundY-100, speed: 2, health: 10, img: "obsidian.png", imgX: -70, imgY: -70 , scaleX:0.375 , scaleY:0.375 },
          

          { type: "level", x: 3400, y: groundY -110, speed: 2, img: "suntotem.png"},
        ],
      },
      {
        name: "Blistering",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 600, y: groundY-1, hitSize: 25, damage: 10, img: "lavapit.png", imgX: -85, imgY: -80 , scaleX: 0.3 , scaleY: 0.3 },
          { type: "obstacle", x: 2000, y: groundY-1, hitSize: 25, damage: 10, img: "lavapit.png", imgX: -85, imgY: -80 , scaleX: 0.3 , scaleY: 0.3 },

          { type: "obstacle", x: 850, y: groundY-125, hitSize: 25, damage: 10, img: "fireball.png", imgX: -45, imgY: -70 , scaleX:0.375 , scaleY:0.375 },
          { type: "obstacle", x: 1700, y: groundY-125, hitSize: 25, damage: 10, img: "fireball.png", imgX: -45, imgY: -70 , scaleX:0.375 , scaleY:0.375 },
          { type: "obstacle", x: 2300, y: groundY-125, hitSize: 25, damage: 10, img: "fireball.png", imgX: -45, imgY: -70 , scaleX:0.375 , scaleY:0.375 },

          { type: "enemy", x: 2700, y: groundY-70, speed: 5, damage: 10, img: "firefairy.png", imgX: -85, imgY: -100 , scaleX:0.34 , scaleY:0.34 },
          { type: "enemy", x: 8700 , y: groundY-70, speed: 7, damage: 10, img: "firefairy.png", imgX: -85, imgY: -100 , scaleX:0.34 , scaleY:0.34 },

          { type: "reward", x: 1350, y: groundY-100, speed: 2, health: 10, img: "starlight.png", imgX: -72, imgY: -70 , scaleX:0.35 , scaleY:0.35 },
          { type: "reward", x: 2800, y: groundY-100, speed: 2, health: 10, img: "starlight.png", imgX: -72, imgY: -70 , scaleX:0.35 , scaleY:0.35 },

          { type: "reward", x: 3200, y: groundY-100, speed: 2, health: 10, img: "obsidian.png", imgX: -70, imgY: -70 , scaleX:0.375 , scaleY:0.375 },

          { type: "level", x: 3800, y: groundY -110, speed: 2, img: "suntotem.png"},
        ],
      },
      {
        name: "Ashes",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 600, y: groundY-1, hitSize: 25, damage: 10, img: "lavapit.png", imgX: -85, imgY: -80 , scaleX: 0.3 , scaleY: 0.3 },
          { type: "obstacle", x: 1000, y: groundY-1, hitSize: 25, damage: 10, img: "lavapit.png", imgX: -85, imgY: -80 , scaleX: 0.3 , scaleY: 0.3 },
          { type: "obstacle", x: 2000, y: groundY-1, hitSize: 25, damage: 10, img: "lavapit.png", imgX: -85, imgY: -80 , scaleX: 0.3 , scaleY: 0.3 },

          { type: "obstacle", x: 350, y: groundY-125, hitSize: 25, damage: 10, img: "fireball.png", imgX: -45, imgY: -70 , scaleX:0.375 , scaleY:0.375 },
          { type: "obstacle", x: 1300, y: groundY-125, hitSize: 25, damage: 10, img: "fireball.png", imgX: -45, imgY: -70 , scaleX:0.375 , scaleY:0.375 },
          { type: "obstacle", x: 2300, y: groundY-125, hitSize: 25, damage: 10, img: "fireball.png", imgX: -45, imgY: -70 , scaleX:0.375 , scaleY:0.375 },

          { type: "enemy", x: 2700, y: groundY-70, speed: 5, damage: 10, img: "firefairy.png", imgX: -85, imgY: -100 , scaleX:0.34 , scaleY:0.34 },
          { type: "enemy", x: 8700 , y: groundY-70, speed: 7, damage: 10, img: "firefairy.png", imgX: -85, imgY: -100 , scaleX:0.34 , scaleY:0.34 },

          { type: "reward", x: 1550, y: groundY-100, speed: 2, health: 10, img: "starlight.png", imgX: -72, imgY: -70 , scaleX:0.35 , scaleY:0.35 },
          { type: "reward", x: 2800, y: groundY-100, speed: 2, health: 10, img: "starlight.png", imgX: -72, imgY: -70 , scaleX:0.35 , scaleY:0.35 },

          { type: "reward", x: 3200, y: groundY-100, speed: 2, health: 10, img: "obsidian.png", imgX: -70, imgY: -70 , scaleX:0.375 , scaleY:0.375 },
           
          {type: "boss", x: 8000, y: groundY-60, speed: 4, health: 150, img: "volcanogod.png", imgX : -250, imgY: -450 , scaleX: 1.05, scaleY: 1.05 },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
