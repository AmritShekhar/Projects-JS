let ans = Math.floor(Math.random() * 20) + 1;

let guess, score = 20, highScore = 0;

const guessCases = (str, color = `#FFFFFF`, valid = true) => {

    document.querySelector(`.message`)
    .textContent = str;

    document.querySelector(`.message`)
    .style.color = color;

    document.querySelector(`.between`)
    .style.color = color;

    if(valid)  {

        --score;

        if(!score)
            guessCases(`😭 You Lost!!!`, undefined, false);
    }
    document.querySelector(`.score`)
    .textContent = score;
}

document.querySelector(`.again`) 
.addEventListener(

    `click`,

    function() {

        ans = Math.floor(Math.random() * 20) + 1;

        score = 20;

        document.querySelector(`body`)
        .style.backgroundColor = `#222`;

        document.querySelector(`.number`)
        .style.width = `15rem`;

        document.querySelector(`.number`)
        .style.height = `12rem`;

        guessCases(`Start guessing...`, undefined, false);


        document.querySelector(`.number`)
        .textContent = `?`;

        document.querySelector(`.score`)
        .textContent = score;

        document.querySelector(`.guess`)
        .value = ``;
    }
);

document.querySelector(`.check`)
.addEventListener(

    `click`,

    function()  {

        if(!score || guess === ans) 
            return;

        guess = document.querySelector(`.guess`).value;

        if(guess === ``)
            guessCases(`⛔ Input A Number`, `#FF0000`, false);

        else {

            guess = Number(guess);
            
            if(guess < 1 || guess > 20) 
                guessCases(`Input A Valid Number`, `#FF0000`, false);
    
            else if(guess === ans) {
    
    
                document.querySelector(`.number`)
                .textContent = ans;
    
                document.querySelector(`body`)
                .style.backgroundColor = `#60b347`;
    
                document.querySelector(`.number`)
                .style.width = `30rem`;
                
                document.querySelector(`.number`)
                .style.height = `14rem`;
    
                guessCases(`🎉 Correct 🎉`, undefined);
    
                highScore = score > highScore ? score : highScore;
    
                document.querySelector(`.highscore`)
                .textContent = highScore;
    
    
            } else if(guess > ans + 5) 
                guessCases(`❌ Wrong, Too High`, undefined);
    
            else if(guess > ans) 
                guessCases(`👎, Guess is High`, undefined);
    
            else if(guess < ans - 5) 
                guessCases(`❌ Wrong, Too Low`, undefined);
    
            else if(guess < ans) 
                guessCases(`👎, Guess is Low`, undefined);
        }
        
    }
);