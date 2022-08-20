let cards;

function start() {
    cards = prompt ('How many cards do you want to play with? (min. 4 max. 14)');
    
    if (cards < 4 || cards > 14) {
        while (cards < 4 || cards > 14) {
            alert("Você só pode jogar entre 4 a 14 cartas");
            start();
        }
    }
    if (cards %2 !== 0) {
        while (cards %2 !== 0) {
            alert("Favor digitar um numero par!")
            start();
        }
    }
}
start()

function addCards(){
    const game = document.querySelector(".game");
    game.innerHTML = "";

    for (let counter = 0; cards > counter; counter++) {
        let item = `
            <div class="cards" onclick="toTurn(this)">
                <img class="turned hide" src="./source/img/explodyparrot.gif">
                <img class="parrot" src="./source/img/front.png">
            </div>
        `;
        game.innerHTML = game.innerHTML + item;
    }
}
addCards()

function toTurn(card) {
    const selected = card;
    selected.classList.toggle("card-turned");    

    const turned = selected.querySelector (".cards .turned");
    const change = selected.querySelector (".parrot");

    turned.classList.toggle("hide");
    change.classList.toggle("hide");
}
