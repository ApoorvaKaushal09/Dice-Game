
var a= Math.floor(Math.random()*6 + 1);
var b= Math.floor(Math.random()*6 + 1);
var diceimg1="images/dice" + a + ".png";
var diceimg2="images/dice"+b+".png";
document.querySelectorAll("img")[0].setAttribute("src", diceimg1);
document.querySelectorAll("img")[1].setAttribute("src", diceimg2);
if(a>b)
document.querySelector("h1").innerHTML="Player 1 wins!"
else if(b>a)
document.querySelector("h1").innerHTML="Player 2 wins!"
else
document.querySelector("h1").innerHTML="It's a draw!"
