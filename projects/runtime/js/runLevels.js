var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createObstacles(x, y, hitSize, damage){
      var hitZoneSize = hitSize;//defines hitzone size and assigns it to hitzone variable
      var damageFromObstacle = damage;//defines amount of damage and assigns it to variable
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//creates obstacle hitzone using the size and damage parameters
      obstacleHitZone.x = x;//sets x coordinate of obstacle
      obstacleHitZone.y =  y;//sets y coord of obstacle
      game.addGameItem(obstacleHitZone);//adds the saw blad hitzone to game
      var obstacleImage = draw.bitmap("img/sawblade.png");//draws image bitmap and adds to variable
      obstacleHitZone.addChild(obstacleImage);//adds image to game
      obstacleImage.x = -25;//positon image on hitzone by moving it left 25 pixels
      obstacleImage.y = -25//positon image on hitzone by moving it up 25 pixels
      obstacleHitZone.rotationalVelocity = 10;//makes obstacle spin
      
    }

    //createObstacles(400, groundY-50, 25, 10);
    //createObstacles(600, groundY-50, 25, 20);
    //createObstacles(800, groundY-50, 25, 30);

    function createEnemy(x, y, speed, health){
      var enemy = game.createGameItem("enemy", 25);//creates enemy and adds it to game
      var redSquare = draw.rect(50, 50, "red");//creates red square and stores it in var redsquare
      redSquare.x = -25;//offsets image from the hitzone by -25 pixels
      redSquare.y = -25;//offsets image from the hitzone by -25 pixels
      enemy.addChild(redSquare);//add redsquare as child to enemy var
      enemy.x = x;// sets enemy xpos
      enemy.y = y;//sets enemy ypos
      game.addGameItem(enemy);//adds enemy to game
      enemy.velocityX -= speed;//controls enemy speed by updating enemy xpos
      enemy.velocityY;//controls ypos
      enemy.rotationalVelocity;//controls rotational spin
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(health);//subtracts 10 health from hallebots HUD
      };
      enemy.onProjectileCollision = function () {
        game.increaseScore(100);//increases score when halle shoots enemy
        enemy.fadeOut();//causes enemy to fade out when shot 
        //enemy.shrink
        //enemy.flyTo(0,0)
      };
    }

    //createEnemy(400, groundY-50, 3, -10);
    //createEnemy(400, groundY-50, 4, -10);
    //createEnemy(400, groundY-50, 5, -20);

    function createReward(x, y, speed, health){
      var reward = game.createGameItem("reward", 25);//creates reward and adds it to game
      var blueSquare = draw.rect(50, 50, "blue");//creates blue square and stores it in var bluesquare
      blueSquare.x = -25;//offsets image from the hitzone by -25 pixels
      blueSquare.y = -25;//offsets image from the hitzone by -25 pixels
      reward.addChild(blueSquare);//add bluesquare as child to reward var
      reward.x = x;// sets reward xpos
      reward.y = y;//sets reward ypos
      game.addGameItem(reward);//adds reward to game
      reward.velocityX -= speed;//controls reward speed by updating reward xpos
      reward.velocityY;//controls ypos
      reward.rotationalVelocity;//controls rotational spin
      reward.onPlayerCollision = function () {
        game.increaseScore(50);//increases score
        game.changeIntegrity(health);//subtracts 10 health from hallebots HUD
        reward.fadeOut();//causes reward to fade out when shot 
        //reward.shrink
        //reward.flyTo(0,0)
      };
    }
    //createReward(500, groundY- 100, 3, 10);

    function createLevel(x, y, speed){
      var level = game.createGameItem("level", 25);//creates level and adds it to game
      var yellowSquare = draw.rect(50, 50, "yellow");//creates yellow square and stores it in var yellowsquare
      yellowSquare.x = -25;//offsets image from the hitzone by -25 pixels
      yellowSquare.y = -25;//offsets image from the hitzone by -25 pixels
      level.addChild(yellowSquare);//add yellowsquare as child to level var
      level.x = x;// sets level xpos
      level.y = y;//sets level ypos
      game.addGameItem(level);//adds level to game
      level.velocityX -= speed;//controls level speed by updating level xpos
      level.velocityY;//controls ypos
      level.rotationalVelocity;//controls rotational spin
      level.onPlayerCollision = function () {
        startLevel();
        level.fadeOut();//causes level to fade out when shot 
        //level.shrink
        //level.flyTo(0,0)
      }
    }
    //createLevel(1500, groundY - 50, 3)
      
    function startLevel() {
      // TODO 13 goes below here

      var level = levelData[currentLevel]; // fetches the current level from the levelData array and stores it in var level
      var levelObjects = level.gameItems // retrieve the array of gameItems and stores it in levelObjects
      for(var i = 0; i < levelObjects.length; i++){
        var element = levelObjects[i];

        if(element. type === "sawblade"){ // checks the type key:value of the gameItems objects to determine which object to manifest
          createObstacles(element.x, element.y, element.hitSize, element.damage); // if the condition is true it will call the relevant function
        }

        if(element. type === "enemy"){ // checks the type key:value of the gameItems objects to determine which object to manifest
          createEnemy(element.x, element.y, element.speed, element.health); // if the condition is true it will call the relevant function
        }

        if(element. type === "reward"){ // checks the type key:value of the gameItems objects to determine which object to manifest
          createReward(element.x, element.y, element.speed, element.health); // if the condition is true it will call the relevant function
        }

        if(element. type === "level"){ // checks the type key:value of the gameItems objects to determine which object to manifest
          createLevel(element.x, element.y, element.speed); // if the condition is true it will call the relevant function
        }
      }
    
      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
