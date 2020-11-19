// (function(){

// figering out when button was clicked
let myWeapon;
function rockButton() {
    console.log('rock');
    let myWeapon = 'rock';
}
function paperButton() {
    console.log('paper');
    myWeapon = 'paper';
}
function scissorsButton() {
    console.log('scissors');
    myWeapon = 'scissors';
}

document.getElementById("run").addEventListener('click', function (event) {
    event.preventDefault();
// random weapon
    const weapon = ['rock', 'paper', 'scissors'];
    const randomWeapon = weapon[Math.floor( Math.random () * weapon.length)];
    console.log(randomWeapon)
// Conditions
    if (randomWeapon === myWeapon) {
        console.log('Draw');
        document.getElementById("outcome").innerHTML = 'Draw';
    }
    else if (randomWeapon === 'rock' && myWeapon === 'paper') {
        console.log('Win');
        document.getElementById("outcome").innerHTML = 'Win';
    }
    else if (randomWeapon === 'paper' && myWeapon === 'rock') {
        console.log('Lose');
        document.getElementById("outcome").innerHTML = 'Lose';

    }
    else if (randomWeapon === 'scissors' && myWeapon === 'paper') {
        console.log('Lose');
        document.getElementById("outcome").innerHTML = 'Lose';

    }
    else if (randomWeapon === 'paper' && myWeapon === 'scissors') {
        console.log('Win');
        document.getElementById("outcome").innerHTML = 'Win';

    }
    else if (randomWeapon === 'rock' && myWeapon === 'scissors') {
        console.log('Lose');
        document.getElementById("outcome").innerHTML = 'Lose';

    }
    else if (randomWeapon === 'scissors' && myWeapon === 'rock') {
        console.log('Win');
        document.getElementById("outcome").innerHTML = 'Win';

    } 
});


// })();

