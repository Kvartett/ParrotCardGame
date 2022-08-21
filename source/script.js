let cards;
let type = [ "1", "2", "3", "4", "5", "6", "7", "1", "2", "3", "4", "5", "6", "7"];
let cardsCounter = 0;
let card1;
let card2;
let hits = 0;

type.sort(comparador);

function comparador() { 
	return Math.random() - 0.5; 
}

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
            <div class="cards" onclick="toTurn(this, ${type[counter]})">
                <img class="turned hide" src="./source/img/${type[counter]}.gif">
                <img class="parrot" src="./source/img/front.png">
            </div>
        `;
        game.innerHTML = game.innerHTML + item;
    }
}
addCards()

let turned;
let change;

function toTurn(card) {
       
    if (card1 === undefined && card2 === undefined) {
        card1 = card;
        card1.classList.add("card-turned");
        turned = card1.querySelector (".cards .turned");
        change = card1.querySelector (".parrot");
        turned.classList.remove("hide");
        change.classList.add("hide");
        cardsCounter++;

    } else if (card2 === undefined) {
        card2 = card;
        card2.classList.add("card-turned");
        turned = card2.querySelector (".cards .turned");
        change = card2.querySelector (".parrot");
        turned.classList.remove("hide");
        change.classList.add("hide");
        cardsCounter++;       

        if (card1 !== card2) {
            card1.classList.remove("card-turned");
            
        } else {

        }
    } 
    console.log(cardsCounter);
    console.log(card1);
    console.log(card2);
    check();
}

function check() {
    const selectedCards = document.querySelectorAll(".card-turned");

    
}