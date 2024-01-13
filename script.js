let xp=0;
let health=100;
let gold=50;
let currentWeapon=0;
let fighting;
let monsterhealth;

const button1 = document.querySelector('.store');
const button2 = document.querySelector('.cave');
const button3 = document.querySelector('.dragon');
const text = document.querySelector('.description');
const xpvalue = document.querySelector('#xpvalue');
const healthvalue = document.querySelector('#healthvalue');
const goldvalue = document.querySelector('#goldvalue');



button1.onclick= gostore;
button2.onclick= gocave;
button3.onclick= fightdragon;


function gostore(){
    
    button1.innerText='buy 10 health(10 gold)';
    button2.innerText='buy weapon(30gold)';
    button3.innerText='go to town square';
    text.innerText= "you are in the store";  
}

function gotown(){
}
function fightdragon(){

}
function buyhealth(){

}
function buyweapon(){

}

function gocave(){

};
