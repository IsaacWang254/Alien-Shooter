var backdrop = createSprite(200,200);
backdrop.scale=0.9;
var alien = createSprite(100,360);
alien.setAnimation("alienBeige_walk_1");
alien.scale = 0.45;
var enemy = createSprite(360,360);
enemy.setAnimation("spike_bot_walk_1");
enemy.scale = 0.3;
var brick = createSprite(200,250);
brick.setAnimation("ground_stone_broken_1");
brick.scale = 0.4;
var alienhealth = 20;
var multi = 0.5;
var count = 20;

function draw() {
  backdrop.setAnimation("background");
  //colliding with the platform
  alien.collide(brick);
  alien.collide(enemy);

  //borders
  if (alien.y > 360){
    alien.y = 360;
    }
  if (alien.y < 0){
    alien.y=0;
    }
  if (alien.x<0){
    alien.x = 0;
    }
  if (alien.x>400){
    alien.x = 400;
    }
  //Movement and stopping
   if (alien.velocityX > 7 * multi) {
    alien.velocityX = 7 * multi;
    }
  if (alien.velocityX < -7 * multi) {
    alien.velocityX = -7 * multi;
    }
  if (keyDown("right")) {
  alien.velocityX = alien.velocityX + 3*multi;
  alien.setAnimation("alienBeige_walk_1");
    }
  if (keyDown("left")) {
    alien.velocityX = alien.velocityX - 3*multi;
    alien.setAnimation("alienBeige_walk_2");
    }
   if (!keyDown("right") && alien.velocityX > 0) {
    alien.velocityX = alien.velocityX - 3.0*multi;
    alien.setAnimation("alienBeige_walk_1");
    }
  if (!keyDown("left") && alien.velocityX < 0) {
    alien.velocityX = alien.velocityX + 3.0*multi;
    alien.setAnimation("alienBeige_walk_2");
    }
  if (!keyDown("right") && alien.velocityX > 0.00 && alien.velocityX < 3.00) {
    alien.velocityX = 0;
    alien.setAnimation("alienBeige_walk_1");
    }
  if (!keyDown("left") && alien.velocityX < 0.00 && alien.velocityX > -3.00) {
    alien.velocityX = 0;
    alien.setAnimation("alienBeige_walk_2");
    }
  // setting animation to neutral when the keys aren't pressed
  if (!keyDown("right") && !keyDown("left")) {
    alien.setAnimation("alienBeige_1");
    }
  //flight with different velocities, gravity, and a fuel counter
  if (count >= 0){
    if (keyDown("up")) {
      alien.velocityY = -7.15;
      alien.setAnimation("alienBeige_jump_1");
      count = count-1;
          } else {
       alien.velocityY = 4;
       count = count+0.5;
    } 
  }else{
    alien.velocityY = 6;
    alien.setAnimation("alienBeige_duck_1");
    count = count+0.5;
  }
  if (count >= 20) {
    count = 20;
  }
  drawSprites();
  //health display
  fill("red");
  textSize(20);
  text("Health:", 280, 30);
  text (alienhealth, 350, 30);
  //jetpack fuel display
  fill("green");
  textSize(20);
  text("Jetpack Fuel:",10,30);
  text(count,130,30);
  //game over screen
  if (alienhealth <= 0) {
    background("black");
    fill("red");
    textSize(50);
    text("Game Over!" , 40, 200);
  }
}
