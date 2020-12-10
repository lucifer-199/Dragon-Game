score=0;
cross =true;
audio = new Audio('gameStart.mp3');
setTimeout(()=>{
    audio.play();
},);


document.onkeydown = function(e){
    console.log("Key code is : ", e.keyCode)
    if(e.keyCode == 38){
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino');
        },700);
    }
    if(e.keyCode==39){
        dino = document.querySelector('.dino');
        dinoX=  parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if(e.keyCode==37){
        dino = document.querySelector('.dino');
        dinoX=  parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}

setInterval(()=>{
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    dx= parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy= parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
    ox= parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy =parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));

    offsetX= Math.abs(dx-ox);
    offsetY= Math.abs(dy-oy);
    if(offsetX <113 && offsetY<52){
        gameOver.style.visibility= 'visible';
        obstacle.classList.remove('obstacleAni');
    }
    else if(offsetX<145 && cross){
        score+=1;
        updatescore(score);
        cross=false;
        setTimeout(()=>{
            cross=true;
        },1000);
        setTimeout(()=>{
            aniDur =parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue('animation-duration'));
            newDur= aniDur - 0.8;
            obstacle.style.animationDuration= newDur + 's';
        },500);
       

    }
    // console.log(score);


},10);


function updatescore(score){
    scoreCont.innerHTML= "Your Score: " + score;
}
