let cards;
let type = [];
let cardsCounter = 0;
let card1;
let card2;
let hits = 0;
let game;

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

    for (let counter = 0; cards/2 > counter; counter++) {
        type.push(`${counter}`);
        type.push(`${counter}`);
        type.sort(comparador);
    }
}
start()

function comparador() { 
	return Math.random() - 0.5; 
}

function addCards(){
    game = document.querySelector(".game");
    game.innerHTML = "";

    for (let counter = 0; cards > counter; counter++) {
        let item = `
            <div class="cards" onclick="toTurn(this, ${type[counter]})">
                <img class="turned hide" src="./source/img/${type[counter]}.gif">
                <img class="parrot" src="./source/img/front.png">
            </div>
        `;
        game.innerHTML = game.innerHTML + item;
    }
}
addCards()

let turned1;
let change1;
let turned2;
let change2;

function toTurn(card) {
       
    if (card1 === undefined && card2 === undefined) {
        card1 = card;
        card1.classList.add("card-turned");
        turned1 = card1.querySelector (".cards .turned");
        change1 = card1.querySelector (".parrot");
        turned1.classList.remove("hide");
        change1.classList.add("hide");

    } else if (card2 === undefined) {
        card2 = card;
        card2.classList.add("card-turned");
        turned2 = card2.querySelector (".cards .turned");
        change2 = card2.querySelector (".parrot");
        turned2.classList.remove("hide");
        change2.classList.add("hide");
        cardsCounter++;
        const myTimeout = setTimeout(check, 1000);
    }
}

function check() {

    if (card1.innerHTML !== card2.innerHTML) {
        const virar1 = card1;
        virar1.classList.remove("card-turned");
        const virar2 = card2;
        virar2.classList.remove("card-turned");
        turned1.classList.add("hide");
        change1.classList.remove("hide");
        turned2.classList.add("hide");
        change2.classList.remove("hide");
        card1 = undefined;
        card2 = undefined;
    } else if (card1.innerHTML === card2.innerHTML) {
        hits++;
        card1 = undefined;
        card2 = undefined;
        end();
    }
    
}

function end() {
    if (hits === cards/2) {
        alert(`You won in ${cardsCounter} moves!`);
        const endGame = prompt ("Do you want to play again?")
    }
    if (endGame === "yes" || "sim") {
        reset();
    }
}

function reset() {
    cards = null;
    game.innerHTML = "";
    start();
}