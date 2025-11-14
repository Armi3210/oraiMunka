var score = 0;
var scoreSpan = document.querySelector(".pont")
var gameArea = document.querySelector("section")
var gameInterval = null;


var spawnrate = 100

function updateScore(s){
    score+=s;
    scoreSpan.innerHTML = score;
}


document.querySelector(".start").addEventListener("click", () =>{
    score = 0;
    
    updateScore(0);
    if (!gameInterval){
        gameInterval = setInterval(()=>{
            var x = Math.random()* (gameArea.offsetWidth - 50);
            var y = Math.random()* (gameArea.offsetHeight - 50);
            var mole = new Mole(x, y, "section");
        }, spawnrate)
    }
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