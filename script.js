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

const location=[
    {
       name: 'town square' ,
       buttontext:["go store","go cave", "fight dragon"],
       buttonfunction:[gostore,gocave, fightdragon],
       text:'You are in the town sqare. You see a sign that says\"store\"'
    }
    ,{
        name: 'store' ,
        buttontext:['buy 10 health(10 gold)','buy weapon(30gold)','go to town square'],
        buttonfunction:[buyhealth,buyweapon, gotown],
        text:"you are in the store"
     }
];

function update(location){
  
    button1.innerText=location[buttontext][0];
    button2.innerText=location[buttontext][1];
    button3.innerText=location[buttontext][2];
    button1.onclick= location[buttonfunction][0];
    button2.onclick= location[buttonfunction][1];
    button3.onclick= location[buttonfunction][2];
    text.innerText= location.text;  



}
function gostore(){
    update(location[1]);    
}

function gotown(){
    update(location[0]);
}
function fightdragon(){

}
function buyhealth(){

}
function buyweapon(){

}

function gocave(){

}
console.log('hi');