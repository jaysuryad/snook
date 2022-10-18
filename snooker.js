let score=0;
console.log(score);
var redball = document.querySelector("#red");
var yellowball=document.querySelector("#yellow");
var greenball=document.querySelector("#green");
var brownball=document.querySelector("#brown");
var blueball=document.querySelector("#blue");
var pinkball=document.querySelector("#pink");
var blackball=document.querySelector("#black");
var resett=document.querySelector("#reset");
var foull=document.querySelector("#four");
var foull5= document.querySelector("#bluef");
var foull6= document.querySelector("#pinkf");
var foull7= document.querySelector("#blackf");

var skore= document.querySelector("#initialscore");
redball.addEventListener('click', function(){
    score= score+1;
    skore.innerHTML=score;
});
console.log(redball);
yellowball.addEventListener("click", function(){
    score=score+2;
    skore.innerHTML=score;
} )
 greenball.addEventListener("click", function(){
    score=score+3;
    skore.innerHTML=score;
 })
 brownball.addEventListener("click", function(){
    score=score+4;
    skore.innerHTML=score;
 })
 blueball.addEventListener("click", function(){
    score=score+5;
    skore.innerHTML=score;
 })
 pinkball.addEventListener("click", function(){
    score=score+6;
    skore.innerHTML=score;
 })
 blackball.addEventListener("click", function(){
    score=score+7;
    skore.innerHTML=score;
 })
 resett.addEventListener("click", function(){
    score=0;
    skore.innerHTML=score;
 })
 foull.addEventListener("click", function(){
    score= score-4;
    skore.innerHTML=score;
 })
 foull5.addEventListener("click", function(){
    score=score-5;
    skore.innerHTML=score;
 })
 foull6.addEventListener("click", function(){
    score=score-6;
    skore.innerHTML=score;
 })
 foull7.addEventListener("click", function(){
    score=score-7;
    skore.innerHTML=score;
 })