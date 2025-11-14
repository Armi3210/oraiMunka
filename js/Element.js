class Mole{
    #x;
    #y;
    #container;
    #isMole;
    #element;
    #interval;

    constructor(x,y,container){
        this.setX(x);
        this.setY(y);
        this.setContainer(container);
        this.cElement();

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

    cElement(){
        this.#element = document.createElement("div");
        this.#element.style.left = this.#x + "px";
        this.#element.style.top = this.#y + "px";

        const r = Math.random()*10;

        if (r>8){
            this.#isMole = 2;
        }
        else{
            this.#isMole = parseInt(Math.random()*2)
        }

        if (this.#isMole === 0){
            this.#element.classList.add("bomb")
        } else if (this.#isMole === 1){
            this.#element.classList.add("mole")
        }

        this.#container.appendChild(this.#element);
        this.#element.addEventListener('click', () => this.collect());
    }

    remove(){
        this.#element.remove();
    };

    collect(){
        this.remove();
        updateScore((this.#isMole==1)?1:-1)
    }
}