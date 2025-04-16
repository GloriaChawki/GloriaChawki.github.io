var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  var projectileHits = 
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
    function createObstacles(x, y, hitSize, damage, img, imgX, imgY, scaleX, scaleY){
      var hitZoneSize = hitSize;//defines hitzone size and assigns it to hitzone variable
      var damageFromObstacle = damage;//defines amount of damage and assigns it to variable
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);//creates obstacle hitzone using the size and damage parameters
      obstacleHitZone.x = x;//sets x coordinate of obstacle
      obstacleHitZone.y =  y;//sets y coord of obstacle
      game.addGameItem(obstacleHitZone);//adds the saw blad hitzone to game
      var obstacleImage = draw.bitmap("img/" + img );//draws image bitmap and adds to variable
      obstacleHitZone.addChild(obstacleImage);//adds image to game
      obstacleImage.x = imgX;//positon image on hitzone by moving it left 25 pixels
      obstacleImage.y = imgY//positon image on hitzone by moving it up 25 pixels
      obstacleHitZone.rotationalVelocity;//makes obstacle spin
      obstacleImage.scaleX = scaleX;
      obstacleImage.scaleY = scaleY;
      
    }

    //createObstacles(400, groundY-50, 25, 10);
    //createObstacles(600, groundY-50, 25, 20);
    //createObstacles(800, groundY-50, 25, 30);

    function createEnemy(x, y, speed, damage, img, imgX, imgY, scaleX, scaleY){
      var enemy = game.createGameItem("enemy", 25);//creates enemy and adds it to game
      var enemyImage = draw.bitmap("img/" + img );//creates red square and stores it in var enemyimage
      enemyImage.x = imgX;//offsets image from the hitzone by -25 pixels
      enemyImage.y = imgY;//offsets image from the hitzone by -25 pixels
      enemy.addChild(enemyImage);//add enemyimage as child to enemy var
      enemy.x = x;// sets enemy xpos
      enemy.y = y;//sets enemy ypos
      game.addGameItem(enemy);//adds enemy to game
      enemy.velocityX -= speed;//controls enemy speed by updating enemy xpos
      enemyImage.scaleX = scaleX;
      enemyImage.scaleY = scaleY;
      enemy.velocityY;//controls ypos
      enemy.rotationalVelocity;//controls rotational spin
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-damage);//subtracts 10 health from hallebots HUD
      };
      enemy.onProjectileCollision = function () {
        game.increaseScore(100);//increases score when halle shoots enemy
        enemy.fadeOut();//causes enemy to fade out when shot 
        //enemy.shrink
        //enemy.flyTo(0,0)
      };
    }

    function createBoss(x, y, speed, health, img, imgX, imgY, scaleX, scaleY){
      var hits = 0;// counts the # of times projecile hits boss
      var boss = game.createGameItem("boss", 25);//creates enemy and adds it to game
      var bossImage = draw.bitmap("img/" + img );//creates red square and stores it in var bossimage
      bossImage.x = imgX;//offsets image from the hitzone by -25 pixels
      bossImage.y = imgY;//offsets image from the hitzone by -25 pixels
      boss.addChild(bossImage);//add bossimage as child to boss var
      boss.x = x;// sets boss xpos
      boss.y = y;//sets boss ypos
      game.addGameItem(boss);//adds boss to game
      boss.velocityX -= speed;//controls boss speed by updating boss xpos
      bossImage.scaleX = scaleX;
      bossImage.scaleY = scaleY;
      boss.velocityY;//controls ypos
      boss.rotationalVelocity;//controls rotational spin
      boss.onPlayerCollision = function () {
        game.changeIntegrity(-100);//subtracts 100 health from hallebots HUD
      };

      boss.onProjectileCollision = function() {
        if (health === 0) {
            boss.shrink();
        }//checks if boss's health is zero and if so shrinks it
        else {
            hits = hits + 1;
            game.increaseScore(100);
            boss.shrink();
            createBoss(boss.x - 30, boss.y, speed+1, health - hits*25, img, imgX, imgY, scaleX, scaleY);
        }//if not then adds 1 to hits and increases score, gets rid of old boss with old health and makes a new one with less health
    }
    }
    //createBoss(400, groundY-50, 3, -10);
    //createEnemy(400, groundY-50, 3, -10);
    //createEnemy(400, groundY-50, 4, -10);
    //createEnemy(400, groundY-50, 5, -20);

    function createReward(x, y, speed, health, img, imgX, imgY, scaleX, scaleY){
      var reward = game.createGameItem("reward", 25);//creates reward and adds it to game
      var rewardImage = draw.bitmap("img/" + img );//creates blue square and stores it in var rewardimage
      rewardImage.x = imgX;//offsets image from the hitzone by -25 pixels
      rewardImage.y = imgY;//offsets image from the hitzone by -25 pixels
      reward.addChild(rewardImage);//add rewardimage as child to reward var
      reward.x = x;// sets reward xpos
      reward.y = y;//sets reward ypos
      game.addGameItem(reward);//adds reward to game
      reward.velocityX -= speed;//controls reward speed by updating reward xpos
      rewardImage.scaleX = scaleX;
      rewardImage.scaleY = scaleY;
      reward.velocityY;//controls ypos
      reward.rotationalVelocity;//controls rotational spin
      reward.onPlayerCollision = function () {
        game.increaseScore(50);//increases score
        game.changeIntegrity(health);//adds 10 health from hallebots HUD
        reward.fadeOut();//causes reward to fade out when shot 
        //reward.shrink
        //reward.flyTo(0,0)
      };
    }
    //createReward(500, groundY- 100, 3, 10);

    function createLevel(x, y, speed, img ){
      var level = game.createGameItem("level", 25);//creates level and adds it to game
      var levelImage = draw.bitmap("img/" + img );//creates yellow square and stores it in var levelimage
      levelImage.x = -165;//offsets image from the hitzone by -25 pixels
      levelImage.y = -220;//offsets image from the hitzone by -25 pixels
      level.addChild(levelImage);//add levelimage as child to level var
      level.x = x;// sets level xpos
      level.y = y;//sets level ypos
      game.addGameItem(level);//adds level to game
      level.velocityX -= speed;//controls level speed by updating level xpos
      levelImage.scaleX = 0.65;
      levelImage.scaleY =  0.65;
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

        if(element. type === "obstacle"){ // checks the type key:value of the gameItems objects to determine which object to manifest
          createObstacles(element.x, element.y, element.hitSize, element.damage, element.img, element.imgX, element.imgY, element.scaleX, element.scaleY); // if the condition is true it will call the relevant function
        }

        if(element. type === "enemy"){ // checks the type key:value of the gameItems objects to determine which object to manifest
          createEnemy(element.x, element.y, element.speed, element.damage, element.img, element.imgX, element.imgY, element.scaleX, element.scaleY); // if the condition is true it will call the relevant function
        }

        if(element. type === "reward"){ // checks the type key:value of the gameItems objects to determine which object to manifest
          createReward(element.x, element.y, element.speed, element.health, element.img, element.imgX, element.imgY, element.scaleX, element.scaleY); // if the condition is true it will call the relevant function
        }

        if(element. type === "level"){ // checks the type key:value of the gameItems objects to determine which object to manifest
          createLevel(element.x, element.y, element.speed, element.img); // if the condition is true it will call the relevant function
        }

        if(element. type === "boss"){ // checks the type key:value of the gameItems objects to determine which object to manifest
          createBoss(element.x, element.y, element.speed, element.health, element.img, element.imgX, element.imgY, element.scaleX, element.scaleY); // if the condition is true it will call the relevant function
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
