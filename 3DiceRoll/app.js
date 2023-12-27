const dice = document.querySelector(`.dice`);

const btnNew = document.querySelector(`.newGame`);

const btnRoll = document.querySelector(`.roll`);

const btnHold = document.querySelector(`.hold`);

//! For Changing Player UI
const pZero = document.querySelector(`.player--0`);
const pOne = document.querySelector(`.player--1`);

const msg = document.querySelector(`.message`);

const scores = [0, 0];

let play = true;

let activePlayer = 0;

let currScore = 0;

dice.classList.add(`hidden`);


function switchPlayers() {

    document.getElementById(`current--${activePlayer}`)
    .textContent = 0;

    currScore = 0;

    activePlayer = Number(!activePlayer);

    pZero.classList.toggle(`player--active`);

    pOne.classList.toggle(`player--active`);
}


function roll() {

    const value = Math.trunc(Math.random() * 6) + 1;

    console.log(value);

    dice.src = `./images/dice-${value}.png`;

    dice.classList.remove(`hidden`);


    if(value !== 1) {

        //! Roll Dice
        currScore += value;

        document.getElementById(`current--${activePlayer}`)
        .textContent = currScore;
        
    } else {
        
        //! Switch Players
        switchPlayers();
    }
}

function hold() {

    //! Display Total Score and Reset Current Score
    scores[activePlayer] += currScore;

    document.getElementById(
        
        `score--${activePlayer}`

    ).textContent = scores[activePlayer];

    //! Win Condition
    if(scores[activePlayer] >= 100) {

        play = false;

        document.querySelector(

            `.player--${activePlayer}`
        ).classList.add(`player--winner`);

        document.querySelector(

            `.player--${activePlayer}`
        ).classList.remove(`player--active`);

        dice.classList.add(`hidden`);

        msg.textContent = `🎉 Player ${activePlayer+1} won the match! 🎉`

        // msg.classList.remove(`hidden`);

    } else {

        //! Switch Players
        switchPlayers();
    }

}

function game(evt) {

    if(play) {

        if(evt.target.classList[1] === `roll`)
            roll();

        else if(evt.target.classList[1] === `hold`)
            hold();
    }
}

function reset() {

    document.querySelector(

        `.player--${activePlayer}`
        
    ).classList.remove(`player--winner`);

    document.getElementById(
        
        `score--0`
        
    ).textContent = 0;

    document.getElementById(
        
        `score--1`
        
    ).textContent = 0;

    document.getElementById(`current--${activePlayer}`)
        .textContent = 0;

    currScore = 0;
    
    activePlayer = 0;

    document.querySelector(

        `.player--${activePlayer}`

    ).classList.add(`player--active`);

    play = true;

    scores[0] = scores[1] = 0;
}



//! Roll Dice
btnRoll.addEventListener(`click`, game);

//! Hold Score
btnHold.addEventListener(`click`, game);

//! Reset 
btnNew.addEventListener(`click`, reset);


