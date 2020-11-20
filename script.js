// (function(){

// figering out when button was clicked
let myWeapon;
function rockButton() {
    console.log('rock');
    myWeapon = 'rock';
}
function paperButton() {
    console.log('paper');
    myWeapon = 'paper';
}
function scissorsButton() {
    console.log('scissors');
    myWeapon = 'scissors';
}

document.getElementById("run").addEventListener('click', function takeAchance (event) {
    event.preventDefault();
// random weapon
    const weapon = ['rock', 'paper', 'scissors'];
    const randomWeapon = weapon[Math.floor( Math.random () * weapon.length)];
    console.log(randomWeapon)
// Conditions
    if (randomWeapon === myWeapon) {
        console.log('Draw');
        document.getElementById("outcome").innerHTML = 'Draw';
        document.body.style.backgroundColor = "yellow";
    }
    else if (randomWeapon === 'rock' && myWeapon === 'paper') {
        console.log('Win');
        document.getElementById("outcome").innerHTML = 'Win';
        document.body.style.backgroundColor = "green";
    }
    else if (randomWeapon === 'paper' && myWeapon === 'rock') {
        console.log('Lose');
        document.getElementById("outcome").innerHTML = 'Lose';
        document.body.style.backgroundColor = "red";
    }
    else if (randomWeapon === 'scissors' && myWeapon === 'paper') {
        console.log('Lose');
        document.getElementById("outcome").innerHTML = 'Lose';
        document.body.style.backgroundColor = "red";
    }
    else if (randomWeapon === 'paper' && myWeapon === 'scissors') {
        console.log('Win');
        document.getElementById("outcome").innerHTML = 'Win';
        document.body.style.backgroundColor = "green";
    }
    else if (randomWeapon === 'rock' && myWeapon === 'scissors') {
        console.log('Lose');
        document.getElementById("outcome").innerHTML = 'Lose';
        document.body.style.backgroundColor = "red";
    }
    else if (randomWeapon === 'scissors' && myWeapon === 'rock') {
        console.log('Win');
        document.getElementById("outcome").innerHTML = 'Win';
        document.body.style.backgroundColor = "green";
    } 
// after a game: trying again
/*
function removeEvent () {
    document.getElementById("run").removeEventListener('click', takeAchance(event));
}
    let result= confirm('Wanna try again?');
    if(result) {
       location.reload(console.clear());
    }
    else if (!result) {
        document.getElementById("outcome").innerHTML = 'Maybe Another time then!';    
        removeEvent();
    }*/
});


// })();

