class Mole{
    #x;
    #y;
    #container;
    #isMole;
    #element;
    #interval;

    constructor(x,y,container, interval){
        this.setX(x);
        this.setY(y);
        this.setContainer(container);
        this.cElement();
        this.setInterval(interval)
    }

    setX(x) {
        this.#x =x;
    }

    setY(y) {
        this.#y =y;
    }

    setContainer(container){
        this.#container = document.querySelector(container);
    }

    setInterval(interval){
        this.#interval = interval;
    }

    cElement(){
        this.#element = document.createElement("div");
        this.#element.style.left = this.#x + "px";
        this.#element.style.top = this.#y + "px";
        var timeleft = 1000;
        const r = Math.random()*10;

        
        this.#isMole = parseInt(Math.random()*10)
        

        if (this.#isMole < 8){
            this.#element.classList.add("mole")
        } else {
            this.#element.classList.add("bomb")
        }

        this.#container.appendChild(this.#element);
        this.#element.addEventListener('click', () => this.collect());

        setTimeout(() => {
            this.#element.remove();
        }, timeleft)
    }

    remove(){
        this.#element.remove();
    };

    collect(){
        this.remove();
        updateScore((this.#isMole<8)?1:-5)
    }

    
    
}