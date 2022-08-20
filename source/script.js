let cards;

function start() {
    //cards = prompt ('How many cards do you want to play with? (min. 4 max. 14)');
    
    if (cards < 4 || cards > 14) {
        while (cards < 4 || cards > 14) {
            alert("Você só pode jogar entre 4 a 14 cartas");
            //cards = prompt ('How many cards do you want to play with? (min. 4 max. 14)');
        }
    }
}
start()

function toTurn() {
    const front = document.querySelector (".cards");
    const turned = document.querySelector (".cards .turned");
    const change = document.querySelector ('.parrot');

    front.classList.toggle("card-turned");
    turned.classList.toggle("hide");
    change.classList.toggle("hide");
}