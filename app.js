document.addEventListener('DOMContentLoaded', ()=>{ 
    const bird = document.querySelector('.bird');
    const gameDisplay = document.querySelector('.game-container');
    const ground = document.querySelector('.ground');
    const start = document.querySelector(".Start")

    let birdLeft = 220;
    let birdBottom = 100;
    let gravity = 2;
    let isGameOver = false;
    let letsGo = false;
    let gap = 430;


    start.addEventListener('click', pressGo)
    function pressGo(){ 
        letsGo = true; 
        start.style.opacity = 0;
    } 

    function startGame(){ 
        if (letsGo) { 
            birdBottom -= gravity
            bird.style.bottom = birdBottom + 'px';
            bird.style.left = birdLeft + 'px'

        }
    }

     
    let  gameTimerID = setInterval(startGame, 20);
    //clearInterval(timerId);

     function control(e){ 
        if(e.keyCode = 32 || 87|| 38){ 
            jump()
        }
     }

     function jump(){ 
        if(birdBottom <500) birdBottom += 50;
        bird.style.bottom = birdBottom + 'px';
        console.log(birdBottom);
     }

     document.addEventListener('keydown', control);

     function generateObstacle(){ 
        let obstacleLeft = 500;
        let ramdomHeight = Math.random() * 60
        let obstacleBottom = ramdomHeight;
        const obstacle = document.createElement('div');
        const topObstacle = document.createElement('div');
        if (!isGameOver){
            obstacle.classList.add('obstacle');
            topObstacle.classList.add('topObstacle');
        }
        gameDisplay.appendChild(obstacle);
        gameDisplay.appendChild(topObstacle);
        obstacle.style.left = obstacleLeft + 'px';
        obstacle.style.bottom = obstacleBottom + 'px';
        topObstacle.style.left = obstacleLeft + 'px';
        topObstacle.style.bottom = obstacleBottom + gap +  'px';

        function moveObstacle(){ 
            if(letsGo){ 
                obstacleLeft-=2
                obstacle.style.left = obstacleLeft + 'px';
                topObstacle.style.left = obstacleLeft + 'px'

            }

            if (obstacleLeft === -60){ 
                clearInterval(timeId);
                gameDisplay.removeChild(obstacle);
                gameDisplay.removeChild(topObstacle);
            }

            if (
                obstacleLeft > 200 && obstacleLeft < 280 
                && birdLeft === 220 && (birdBottom < obstacleBottom + 153 || birdBottom > obstacleBottom + gap -200) ||
                birdBottom  === 0
                ) { 
                gameOver()
                clearInterval(timeId );
            }
          
        }
 
        let timeId = setInterval(moveObstacle,20);
        if (!isGameOver) setTimeout(generateObstacle, 3000);


     }

     generateObstacle()

     function gameOver(){ 
        clearInterval(gameTimerID);
         isGameOver = true;
         document.removeEventListener('keydown', control);
         letsGo = false;
         alert("Gamer-Over");
         document. location. reload() 
     }
})






