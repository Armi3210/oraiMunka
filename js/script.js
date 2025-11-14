var score = 0;
var scoreSpan = document.querySelector(".pont")
var gameArea = document.querySelector("section")
var gameInterval = null;
var timeLeft = 30;
var spawnrate = 1000

function updateScore(s){
    score+=s;
    scoreSpan.innerHTML = score;
}


document.querySelector(".start").addEventListener("click", () =>{
    score = 0;
    updateScore(0);
    if (!gameInterval){
        gameInterval = setInterval(()=>{
            var x = Math.random()* (gameArea.offsetWidth - 85);
            var y = Math.random()* (gameArea.offsetHeight - 85);
            new Mole(x, y, "section", 1000);
        }, spawnrate)
    }
})

document.querySelector(".start").addEventListener("click", () =>{
    timeLeft = 30;
    var timeInterval = setInterval(() => {
        timeLeft--;
        updateClock(timeLeft);
        if (timeLeft == 0){
            stop();
            alert("Lejárt az idő! Pont:"+score)
            clearInterval(timeInterval);
        }
    }, 1000);
})

document.querySelector(".stop").addEventListener("click", () => {
    stop();
});

function stop() {
    clearInterval(gameInterval);
    gameInterval = null;
    document.querySelectorAll(".mole").forEach(mole => mole.remove());
    document.querySelectorAll(".bomb").forEach(bomb => bomb.remove());
};

function updateClock(time){
    document.querySelector(".sec").innerHTML = time;
}