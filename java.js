
//=========================================
//Setting boxes to variables
//=========================================
var box0 = document.getElementById("box0")
  console.log(box0)
var box1 = document.getElementById("box1")
  console.log(box1)
var box2 = document.getElementById("box2")
  console.log(box2)
var box3 = document.getElementById("box3")
  console.log(box3)
var box4 = document.getElementById("box4")
  console.log(box4)
var box5 = document.getElementById("box5")
  console.log(box5)
var box6 = document.getElementById("box6")
  console.log(box6)
var box7 = document.getElementById("box7")
  console.log(box7)
var box8 = document.getElementById("box8")
  console.log(box8)


//=========================================
//Adding click to each div
//=========================================
//Adding event listener vs onclick to be able to change what it is listening for (i.e keystroke)
//Added "X" to see if it would change the inner html 
document.getElementById("box0").addEventListener("click", function (){
	console.log("Box0 was clicked");
	box0.innerHTML = "X";
});
document.getElementById("box1").addEventListener("click", function (){
	console.log("Box1 was clicked");
	box1.innerHTML = "X";
});
document.getElementById("box2").addEventListener("click", function (){
	console.log("Box2 was clicked");
	box2.innerHTML = "X";
});
document.getElementById("box3").addEventListener("click", function (){
	console.log("Box3 was clicked");
	box3.innerHTML = "X";
});
document.getElementById("box4").addEventListener("click", function (){
	console.log("Box4 was clicked");
	box4.innerHTML = "X";
});
document.getElementById("box5").addEventListener("click", function (){
	console.log("Box5 was clicked");
	box5.innerHTML = "X";
});
document.getElementById("box6").addEventListener("click", function (){
	console.log("Box6 was clicked");
	box6.innerHTML = "X";
});
document.getElementById("box7").addEventListener("click", function (){
	console.log("Box7 was clicked");
	box7.innerHTML = "X";
});
document.getElementById("box8").addEventListener("click", function (){
	console.log("Box8 was clicked");
	box8.innerHTML = "X";
});