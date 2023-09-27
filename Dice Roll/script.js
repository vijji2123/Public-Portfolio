function roll(){
 var player1 = document.getElementById("p1").innerHTML;
 var player2 = document.getElementById("p2").innerHTML;
// 
// 
var dice1= document.getElementById('dice6');
var dice2 = document.getElementById('dice5');
// 
let result= document.getElementById('wins');
// 
let randomNumber1= Math.floor(Math.random() * 6)+1;
let randomNumber2= Math.floor(Math.random() * 6)+1;
// 
dice1.setAttribute('src', `./dice images/dice${randomNumber1}.jpg`);
dice2.setAttribute('src',`./dice images/dice${randomNumber2}.jpg`);

// 
if(randomNumber1 === randomNumber2){
    result.innerHTML="DRAW !!!"
}else if(randomNumber1<randomNumber2){
    result.innerHTML=(player2 +" " + 'WINS !!!')
}else{
    result.innerHTML=(player1 +" " +'WINS !!!')
}
};