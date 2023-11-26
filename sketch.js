var selvapng;
var esqueletopng,esqueleto;
var ouropng,ouro;
var pedestalpng,pedestal;
var pedrapng,pedra;
var reiesqueletopng,reiesqueleto;
var rubipng,rubi;
var templopng;
var correndogif,correndo;
function preloud(){
      
 selvapng = loadImage("selva.png");
esqueletopng=loadImage("esqueleto.png");
ouropng=loadImage("ouro.png");
pedestalpng=loadImage("pedestal.png");
pedrapng=loadImage("pedra");
reiesqueletopng=loadImage("rei esqueleto.png");
rubipng=loadImage("rubi.png");
templopng=loadImage("templo.png");
correndogif=loadAnimation("correndo(1).gif");

}

function setap(){
createCanvas(600,600);

 ouro= createSprite(220,100,9,5);
 rubi= createSprite(360,360,6,4);
 esqueleto= createSprite(100,300,5,13);
 correndo= createSprite(200,100,5,10);
 reiesqueleto= createSprite(360,300,5,20);
 pedra= createSprite(150,400,6,9);
 pedestal = createSprite(360,380,8,10);

}

function draw(){
    background(0);

    drawSprites();
}