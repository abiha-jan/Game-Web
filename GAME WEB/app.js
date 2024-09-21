let inputDir={x:0,y:0};
let musicSound=new Audio('./background.wav');
let foodSound=new Audio('./food sound.mp3');
let gameOverSound=new Audio('./cursh voice.mp3');
let moveSound=new Audio('./left right.wav');
let speed=2;
let score=0;
let lastPainTime=0;
let snakeArr=[ 
    {x:13, y:15}
    
]
food = {x: 6, y: 7};

function main(ctime){
    window.requestAnimationFrame(main);
    console.log(ctime)
    if((ctime-lastPainTime)/1000<1/speed){
        return;
    }
    lastPainTime=ctime;
    gameEngine();
}

function isCollide(snake){
    for(let i = 1; i < snakeArr.length; index++){
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
        if(snake [0].x >=18 || snake[0].x<=0 || snake [0].y>=18 || snake[0].y<=0){

        }
    
        }


    function gameEngine(){
        // part1:update the snack
        if(isCollide(snakeArr)){
            gameOverSound.play();
            musicSound.pause();
            inputDir ={x:0 , y:0};
            alert("Game Over . Press ant key to Play Again");
            snakeArr = [{x:13,y:15 }];
            musicSound.play();
            score =0;
        }



        if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
            foodSound.play();
            score +=1;
            score.innerHtml="Score:"+ score            
            snakeArr.unshift({x:snakeArr[0].x + inputDir.x , y:snakeArr[0].y + inputDir.y})
            let a = 2 ;
            let b = 16 ;

            food = {x:2 + Math.round(a+(b-a)*Math.random()),y:2 + Math.round(a+(b-a)*Math.random())}
        }

        for (let i = snakeArr.length -2; i >=0; i --){
            snakeArr[i+1]= {...snakeArr[i]};
        }
        snakeArr[0].x += inputDir.x;
        snakeArr[0].y += inputDir.y;


        // part2 Display the sancke and food
        board.innerHtml=""
        snakeArr.forEach((e ,index)=>{
        snakeElement =document.createElement('div')
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;


        if(index === 0){
            foodElement.classList.add('head');
        }
        else{
            snakeElement.classList.add('snake');
            
        }
        board.appendChild(snakeElement);
        
        // if(index === 0){
        //     foodElement.classList.add('head');
        // }
        // else{
        //     snakeElement.classList.add('snacke');
            
        // }
        // board.appendChild(snakeElement);
});
// Disply the food

    foodElement =document.createElement('div')
    foodElement.style.gridRowStart=food.y;
    foodElement.style.gridColumnStart=food.x;
    foodElement.classList.add('food')
    board.appendChild(foodElement);


    }
    

    



window.requestAnimationFrame(main);
window.addEventListener('keydown', e=>{
    inputDir ={x:0 , y: 1}
    moveSound.play();
    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x=0;
            inputDir.y=-1;
            break;

            case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x=0;
            inputDir.y=-1;
            break;


            case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x=-1;
            inputDir.y=-0;
            break;

            case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x=0;
            inputDir.y=-1;
            break;

        
            default:
                break;
    }
});