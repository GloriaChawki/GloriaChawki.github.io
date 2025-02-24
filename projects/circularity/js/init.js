var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM SETUP ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle;//holds value for cirle
        var circles = [];//holds circle values for many circles


        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2);//creates a random cirlce on screen
            physikz.addRandomVelocity(circle, canvas, 5, 5);//applies random speed to circle and physics
            view.addChild(circle);//adds circle to app's view to make it visible on canvas
            circles.push(circle);//pushes the circle's value to the circle array
        }

        // TODO 3 / 7 : Call the drawCircle() function 
        /*
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        drawCircle();
        */
        for (var i = 0; i < 100; i++) {
            drawCircle();
        }//calls drawCircle(); until calling 100 times (even though it is less index is 0)
        

        ////////////////////////////////////////////////////////////
        ///////////////// PROGRAM LOGIC ////////////////////////////
        ////////////////////////////////////////////////////////////
        
        /* 
        This Function is called 60 times/second producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update() {
            // TODO 4 : Update the circle's position //
            /*
            physikz.updatePosition(circles[0]);
            physikz.updatePosition(circles[1]);
            physikz.updatePosition(circles[2]);
            physikz.updatePosition(circles[3]);
            physikz.updatePosition(circles[4]); */

            // TODO 5 / 10 : Call game.checkCirclePosition() on your circles.
            /*
            game.checkCirclePosition(circles[0]);
            game.checkCirclePosition(circles[1]);
            game.checkCirclePosition(circles[2]);
            game.checkCirclePosition(circles[3]);
            game.checkCirclePosition(circles[4]); */
           

            // TODO 9 : Iterate over the array
            for(var i = 0; i < 100; i++){
                physikz.updatePosition(circles[i]);
                game.checkCirclePosition(circles[i]);
            }//updates postion for all 100 circles and the second line checks for location of all circles to insure all circles stay on screen
           
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }//circle goes to the right side and is sent to the left
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if ( circle.x < 0) {
                circle.x = canvas.width;
            }//if the circle goes off left side of the screen it will move to the right
            if(circle.y > canvas.width){
                circle.y = 0;
            }//goes off bottom of screen it sends it back to the top
            if(circle.y < 0){
                circle.y = canvas.width;
            }//goes off top of screen is sent to the bottom

            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
