

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

async function colliding()
{
    player.collide(path1);
    player.collide(path2);
    player.collide(path3);
    player.collide(path4);
    player.collide(path5);
    player.collide(path6);
    player.collide(path7);
    player.collide(path8);
    player.collide(path9);
    player.collide(path10);
}

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

async function movement()
{
    if(keyDown("d") || keyDown("RIGHT_ARROW"))
        {
            player.changeAnimation("Run",playerRun);
            player.velocityX = 5;
        }else{
            player.velocityX = 0;
            player.changeAnimation("Idle",playerIdle);
        }
    
        if(keyWentDown("SPACE") || keyWentDown("UP_ARROW") )
        {        
            player.velocityY = -12;
        }
}

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

async function cameraMovement()
{
    camera.x = player.x+4800;
}

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

async function gravity()
{
    player.velocityY = player.velocityY + 0.8;
}

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

async function Enemies1()
{
    enemy1 = createSprite(path3.x , -180 , 50,50);
    enemy1.debug = true;
    enemy1.setCollider("rectangle" , 0 , 0 , path3.width , 900);

    

    if(player.isTouching(enemy1))
    {
        if(frameCount%40 === 0)            
        {
            bullet1 = createSprite(player.x , -200 , 20 ,20);
            bullet1.setVelocity(0,5)
            bullet1.lifetime = 200
        }
    }

    bullet1Group.add(bullet1)
}



async function Enemies2()
{
    enemy2 = createSprite(path5.x , -180 , 50,50);
    enemy2.debug = true;
    enemy2.setCollider("rectangle" , 0 , 0 , path5.width , 900);

    

    if(player.isTouching(enemy2))
    {
        if(frameCount%40 === 0)            
        {
            bullet2 = createSprite(player.x , -200 , 20 ,20);
            bullet2.setVelocity(0,6)
            bullet2.lifetime = 200
        }
    }

    bullet2Group.add(bullet2)
}

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

async function Enemies3()
{
    enemy3 = createSprite(path8.x , -180 , 50,50);
    enemy3.debug = true;
    enemy3.setCollider("rectangle" , 0 , 0 , path8.width , 900);

    

    if(player.isTouching(enemy3))
    {
        if(frameCount%30 === 0)            
        {
            bullet3 = createSprite(player.x , -200 , 20 ,20);
            bullet3.setVelocity(0,7)
            bullet3.lifetime = 200
        }
    }

    bullet3Group.add(bullet3)
}

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

async function Enemies4()
{
    enemy4 = createSprite(path10.x , -180 , 50,50);
    enemy4.debug = true;
    enemy4.setCollider("rectangle" , 0 , 0 , path10.width , 900);

    

    if(player.isTouching(enemy4))
    {
        if(frameCount%30 === 0)            
        {
            bullet4 = createSprite(player.x , -200 , 20 ,20);
            bullet4.setVelocity(0,7)
            bullet4.lifetime = 200
        }
    }

    bullet4Group.add(bullet4)
}

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

async function bulletDamage()
{
    if(player.isTouching(bullet1Group))
    {
        playerHealth = playerHealth - 10;
        bullet1Group.destroyEach();
    }

    if(player.isTouching(bullet2Group))
    {
        playerHealth = playerHealth - 20;
        bullet2Group.destroyEach()
    }

    if(player.isTouching(bullet3Group))
    {
        playerHealth = playerHealth - 30;
        bullet3Group.destroyEach()
    }

    if(player.isTouching(bullet4Group))
    {
        playerHealth = playerHealth - 35;
        bullet4Group.destroyEach()
    }    
}


//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

function death()
{
    if(playerHealth <= 0 || player.y > 500)
    {
        player.x = -4000
        player.y = 150
        playerHealth = 100
    }
}