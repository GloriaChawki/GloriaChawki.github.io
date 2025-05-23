$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    
    createPlatform(400,500,600,30);//long btm pftm
    createPlatform(200,600,600,30);//long mid ptfm
    createPlatform(600,300,400,30);//long  top ptfm
    createPlatform(600,650,600,30);//long mid 2 ptfm
    createPlatform(1200,300,40,500);//long standing ptfm
    createPlatform(1170,600,40,30);//outside btm peg
    createPlatform(1150,420,70,30);//outside mid peg
    createPlatform(1170,300,40,30);//outside top peg
    createPlatform(1230,670,40,30);//inside btm peg
    createPlatform(1230,530,40,20);//inside mid peg
    createPlatform(1230,390,40,20);//inside top peg
    createPlatform(200,200,600,30);//almost last ptfm
    createPlatform(100,100,200,30);//final ptfm


    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable('bDiamond',1300, 650,0,0);
    createCollectable('mDiamond', 150, 40, 0, 0);
    createCollectable('pDiamond',1180, 235,0,0);
    createCollectable('gDiamond', 300, 515,0,0);
    createCollectable('diamond', 1100,600,0,0);

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon('right', 635, 4000, 50, 50);
    createCannon('left', 200, 4000, 50, 50);
    createCannon('top', 1000, 4000, 50, 50);
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
