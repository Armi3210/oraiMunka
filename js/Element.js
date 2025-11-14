class Element{
    #x;
    #y;
    #container;
    #isMole;
    #element;
    #interval;

    constructor(x,y,container){

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

    createelement(){
        this.#element = document.createElement(this.#container);
        this.#element.style.left = this.#x + "px";
        this.#element.style.top = this.#y + "px";

        const r = Math.random()*5;

        if (r>3){
            this.#isMole = 2;
        }
        else{
            this.#isMole = parseInt(Math.random()*2)
        }

        if (this.#isMole === 0){
            this.#element.classList.add("mole")
        } else if (this.#isMole === 1){
            this.#element.classList.add("bomb")
        }

        this.#container.appendChild(this.#element);
        this.#element.addEventListener('click', () => this.collect());
    }

    remove(){
        this.#element.remove();
    };

    collect(){
        thios.remove();
        updateScore((this.#isMole))
    }
}