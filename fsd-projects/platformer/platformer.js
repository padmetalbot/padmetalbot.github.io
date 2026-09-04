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
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(150, 200, 20, 300, "purple");
createPlatform(150, 500, 200, 20, "purple");
createPlatform(330, 700, 50, 50, "purple");
createPlatform(500, 600, 50, 290, "purple");
createPlatform(500, 400, 200, 20, "purple");
createPlatform(750, 350, 150, 20, "purple");
createPlatform(950, 250, 200, 20, "purple");
createPlatform(630, 700, 50, 50, "purple");
createPlatform(1250, 150, 50, 50, "purple");
createPlatform(1000, 600, 200, 20, "purple");
createPlatform(900, 700, 50, 50, "purple");

createCollectable("star", 1300, 50,);
createCollectable("link", 750, 250,);
createCollectable("bot", 200, 170, 0.5, 0.7);
createCollectable("rock", 1055, 400, 0.5, 0.7);

createCannon("top", 800, 1200);
createCannon("top", 300, 1500);
createCannon("right", 300, 2000);
createCannon("right", 550, 2500);

    // TODO 3 - Create Collectables



    
    // TODO 4 - Create Cannons


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
