var player , playerImage , playerJump , playerRun , playerDead , playerHealth = 100;
var path1 , path2 , path3 , path4 , path5 , path6 , path7 , path8 , path9 , path10 , path11;
var bullet1 , bullet1Group , bullet2 , bullet2Group , bullet3 , bullet3Group , bullet4 , bullet4Group
var gameState ;
var enemy1 , enemy1Health = 100;
var enemy2 , enemy2Health = 100;
var enemy3 , enemy3Health = 100;
var enemy4 , enemy4Health = 100;
var gun , gunPickup = 0 , gun2 , gunImage;
var gameSound;
var cloudImage;


function preload()
{
        playerImage = loadImage("Images/Hero/Idle (1).png");
        playerRun = loadAnimation("Images/Hero/Run (1).png","Images/Hero/Run (2).png", "Images/Hero/Run (3).png","Images/Hero/Run (4).png","Images/Hero/Run (5).png","Images/Hero/Run (6).png","Images/Hero/Run (7).png","Images/Hero/Run (8).png");
        playerIdle = loadAnimation("Images/Hero/Idle (1).png");
        gameSound=loadSound("sound/chill_jungle_mastered.mp3")
        cloudImage = loadImage("Images/cloud.png")
}

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

function setup()
{
        createCanvas(10000 , 700);
        
        
        player = createSprite(-4000,150,10,10);
        player.addImage(playerImage);
        player.addAnimation("Run",playerRun);
        player.addAnimation("Idle",playerIdle);
        player.scale = 0.2;
        camera.y = player.y;
        
        player.debug = true;
        player.setCollider("rectangle",50,0,300,450)

        path1 = createSprite(-4000,random(230,160),500,50);
        path2 = createSprite(path1.x+600,random(230,160),500,50);
        path3 = createSprite(path2.x+600,random(230,160),500,50);
        path4 = createSprite(path3.x+600,random(230,160),500,50);
        path5 = createSprite(path4.x+600,random(230,160),500,50);
        path6 = createSprite(path5.x+600,random(230,160),500,50);
        path7 = createSprite(path6.x+600,random(230,160),500,50);
        path8 = createSprite(path7.x+600,random(230,160),500,50);
        path9 = createSprite(path8.x+600,random(230,160),500,50);
        path10 = createSprite(path9.x+600,random(230,160),500,50);
        fill("red")
        path11 = createSprite(path10.x+600,random(230,160),500,50)
        path11.shapeColor = "red"

       
        

        bullet1Group = createGroup()
        bullet2Group = createGroup()
        bullet3Group = createGroup()
        bullet4Group = createGroup()

       
        gameState = "start"

}


function draw()
{   
        background(135,206,235);
        

        if(gameState==="start")
        {
                textSize(80)
                text("Press SPACE to start",-5000, 200)
        }

        if(keyWentDown("SPACE") && gameState==="start")
        {
                gameState = "story";
        }

        if(gameState === "story")
        {
                textSize(20)
                fill("black")
                text("Rahul was watching the dream and the there somthing happened that was really bad." , -5000,100)
                text("Try to save Rahul from his own dream." , -5000,150)
                fill("red")
                textSize(40)
                text("Press S to continue the game" , -5000,350)
        }

        if(keyWentDown("S") && gameState==="story")
        {
                gameState = "instruction1";
        }

        if(gameState ==="instruction1")
        {
                textSize(20)
                fill("black")
                text("Help Rahul to Escape his Dream and try saving Him" , -5000,-100)
                text("*You can use D to move rahul ahead" , -5000,-70)
                text("*You can use SPACE BAR or W to jump" , -5000,-40)
                text("*You need to make rahul keep running so there is no way you can come back." , -5000,-10)
                text("*The RED color block is the last block." , -5000,20)
                text("*Be carefull the enemy might drop something to end you" , -5000,50)
                text("*Your health is shown down side." , -5000,80)
                text("*So Best of luck..." , -5000,110)

                fill("red")
                textSize(40)
                text("Press D to continue the game" , -5000,350)
        }

        if(keyWentDown("D") && gameState==="instruction1")
        {
                gameState = "play";
        }
        
        if(gameState === "play")
        {
        
        textSize(20)
        text("Health : "+ playerHealth , player.x , 400)
        bulletDamage();
        Enemies1();
        Enemies2();
        Enemies3();
        Enemies4();
        gravity();
        cameraMovement();
        movement();
        colliding();
        drawSprites();
        death();
        textSize(30)
        fill("black")
        text("FINISH",path11.x - 50,path11.y + 20)
        image(cloudImage , -4250 , path1.y - 80 , 550 , 150)
        image(cloudImage , -4250 + 600 , path2.y - 80 , 550 , 150)
        image(cloudImage , -4250 + 1200 , path3.y - 80 , 550 , 150)
        image(cloudImage , -4250 + 1800 , path4.y - 80 , 550 , 150)
        image(cloudImage , -4250 + 2400 , path5.y - 80 , 550 , 150)
        image(cloudImage , -4250 + 3000 , path6.y - 80 , 550 , 150)
        image(cloudImage , -4250 + 3600 , path7.y - 80 , 550 , 150)
        image(cloudImage , -4250 + 4200 , path8.y - 80 , 550 , 150)
        image(cloudImage , -4250 + 4800 , path9.y - 80 , 550 , 150)
        image(cloudImage , -4250 + 5400 , path10.y - 80 , 550 , 150)

        path1.shapeColor = rgb(135,206,235);
        path2.shapeColor = rgb(135,206,235);
        path3.shapeColor = rgb(135,206,235);
        path4.shapeColor = rgb(135,206,235);
        path5.shapeColor = rgb(135,206,235);
        path6.shapeColor = rgb(135,206,235);
        path7.shapeColor = rgb(135,206,235);
        path8.shapeColor = rgb(135,206,235);
        path9.shapeColor = rgb(135,206,235);
        path10.shapeColor = rgb(135,206,235);


        }

        if(player.isTouching(path11))
        {
                gameState = "end";
        }

        if(gameState === "end")
        {
                createCanvas(1000,500)
                textSize(30)
                fill("blue")
                text("VOILA ! , You saved Rahul ...." , 100 , 200)
        }

        
}

