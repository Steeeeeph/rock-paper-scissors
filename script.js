// (function(){

// figering out when button was clicked

function rockButton() {
    console.log('rock');
    return 'rock';
}
function paperButton() {
    console.log('paper');
    return 'paper';
}
function scissorsButton() {
    console.log('scissors');
    return 'scissors';
}

const weapon = ['rock', 'paper', 'scissors'];
const randomWeapon = weapon[Math.floor( Math.random () * weapon.length)];
console.log(randomWeapon);
// })();

/*
const months = ["January", "February", "March", "April", "May", "June", "July"];

const random = Math.floor(Math.random() * months.length);
console.log(random, months[random]);
*/