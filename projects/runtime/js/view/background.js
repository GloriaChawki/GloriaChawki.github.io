var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var buildings = [];
        var elementNames = [];


        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth, groundY, "black");//draws a rectangle and sets its width and groundY as height to the same as the canvas's and colors it yellow and stores it in the var background fill
            background.addChild(backgroundFill);//adds the var holding the background size and color and adds it to the background

            function backgroundElement(elementName, x, y, scaleX, scaleY){
                var elementName = draw.bitmap("img/" + elementName + ".png");
                elementName.x = x;
                elementName.y = groundY-y;
                elementName.scaleX= scaleX;
                elementName.scaleY= scaleY;
                background.addChild(elementName);
                elementNames.push(elementName);
            }

            // TODO 2: - Add a moon and starfield
            for(var i = 0; i < 100; i++){
                var circle = draw.circle(2, "white", "white", 2);// create a circle with a specfied radius, border color and fill color, alpha and stores it all in the variable circle
                circle.x = canvasWidth * Math.random();// sets the circle's xpos by taking canvas width and multiplying by random to keep it within canvas
                circle.y = groundY * Math.random();// sets the circle's xpos by taking groundY and multiplying by random to keep it above ground
                background.addChild(circle);//adds all attributes of circle to background
            }

            /* var moon = draw.bitmap("img/moon.png");//creates a bitmap object using the moon image and stores it in moon var
            moon.x = canvas.width-600; // sets xpos
            moon.y = groundY- 300; // sets ypos
            moon.scaleX = 0.5;// scales the moons width
            moon.scaleY = 0.5;// scales the moons height
            background.addChild(moon);// add the moon to the background container
            
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 5; i++) {
                var buildingColors = ["red", "blue", "pink", "cyan", "purple"]
                var buildingHeight = 300;//assigns 300 to building height var
                var building = draw.rect(75, buildingHeight, buildingColors[i], "Black", 1);//draws a rectangle assiging the listed attributes to it (width, height, color, border color, border color thickness)
                building.x = 200 * i;//multiply 200 by current i value and stores it as the xpos for building to spread em apart
                building.y = groundY - buildingHeight;//sets buildings above ground and adjusts it for building height and stores as y value
                background.addChild(building);//adds building to background
                buildings.push(building);//adds building attribute to buildings array
            }
            
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png");//creates a bitmap for the image tree and stores it in var tree
            tree.x = canvasWidth - 500;// sets tree's xpos by subtracting 500 from canvas width to keep it on screen
            tree.y = groundY - 225;//places tree on ground adjsuted for tree height
            background.addChild(tree);//adds tree to background */

            backgroundElement("flatvolcano", 50, 360, 1.3, 1.3);//0
            backgroundElement("pointyvolcano", 1500, 350, 1.1, 1.1);//1
            backgroundElement("pointyvolcano", 1200, 400, 1.1, 1.1);//2
            backgroundElement("lavaground", 2000 , 725, 2, 2);//3
            backgroundElement("lavaground", 0 , 725, 2, 2);//4
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            var objectInstance;


           function elementMove (arrayIndex, speed, xLimit){
                objectInstance = elementNames[arrayIndex];
                objectInstance.x = objectInstance.x - speed;
                if(objectInstance.x < xLimit){
                    objectInstance.x = canvas.width;
                }
            }
            elementMove(0, 1.5, -950);
            elementMove(1, 1.5, -950);
            elementMove(2, 1.5, -950);
            elementMove(3, 1.9, -2093);
            elementMove(4, 1.9, -2093); 
            

          /*  // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 3;//updates tree xpos to move -1 pixel 
            if (tree.x < -200) {
                tree.x = canvasWidth - 100;
            }//if tree goes off screen its resest to the right
            
            // TODO 4: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++) {
                var building = buildings[i];//individual elements of buildings array is stored in building var 
                building.x -= 1;//updates xpos to animate to left
                if (building.x < -75){//checks if xpos is off the left side of the canvas
                    building.x = canvasWidth//if its off canvas it resets to canvas width
                }//makes buildings loop around 
              }
                */

            
        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
