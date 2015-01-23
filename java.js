
//=========================================
//Setting boxes to variables
//=========================================
	var box0 = document.getElementById("box0")
	  // console.log(box0)
	var box1 = document.getElementById("box1")
	  // console.log(box1)
	var box2 = document.getElementById("box2")
	  // console.log(box2)
	var box3 = document.getElementById("box3")
	  // console.log(box3)
	var box4 = document.getElementById("box4")
	  // console.log(box4)
	var box5 = document.getElementById("box5")
	  // console.log(box5)
	var box6 = document.getElementById("box6")
	  // console.log(box6)
	var box7 = document.getElementById("box7")
	  // console.log(box7)
	var box8 = document.getElementById("box8")
	  // console.log(box8)

//=========================================
//Other Variables
//=========================================
	var playerOne = true;
	var playerTwo = true; 

	var turnCount = 0;

    var playerIcon = " ";

//======================== Settign up the turns ========================
  if(turnCount = 0){
  	playerTwo = false
  	console.log("player One Slected")
    playerIcon = "X"

  }
  if(turnCount < 1){
  	playerOne = false
  	console.log("player Two Slected") 
  	playerIcon = "O" 
  }
  if(turnCount < 2){
  	playerTwo = false
    console.log("player One Slected")
    playerIcon = "X"
  }
  if(turnCount < 3){
  	playerOne = false
  	console.log("player Two Slected") 
  	playerIcon = "O"  	   
  }
  if(turnCount < 4){
  	playerTwo = false
    console.log("player One Slected")
    playerIcon = "X"
  }
  if(turnCount < 5){
  	playerOne = false
  	console.log("player Two Slected") 
  	playerIcon = "O"   	   	
  }
  if(turnCount < 6){
  	playerTwo = false
  	console.log("player One Slected")
  	playerIcon = "X"  
  }
  if(turnCount < 7){
  	playerOne = false
  	console.log("player Two Slected")  	
  	playerIcon = "O" 
  }
  if(turnCount < 8){
  	playerTwo = false
  	console.log("player One Slected")
  	playerIcon = "X"
  }

//=========================================
//Adding click to each div
//=========================================
//Adding event listener vs onclick to be able to change what it is listening for (i.e keystroke)


//======================== Boxes on click... with turns ========================

	document.getElementById("box0").addEventListener("click", function (){
		console.log("Box0 was clicked");
		   if(playerOne == true){      //If playerOne is true then change the inner html to "X"
		       box0.innerHTML = "X";
		   }
		   else{
		   	   box0.innerHTML = "O"    //Else make the inner html an "O"
		   }
	});
	document.getElementById("box1").addEventListener("click", function (){
		console.log("Box1 was clicked");
		box1.innerHTML == playerIcon;
		 if(playerOne == false){       //playerOne is false so do else 
		       box1.innerHTML = "X";
		   }
		   else{
		   	   box1.innerHTML = "O"
		   }
	});
	document.getElementById("box2").addEventListener("click", function (){
		console.log("Box2 was clicked");
		box2.innerHTML == playerIcon;
		   if(playerOne == true){
		       box2.innerHTML = "X";
		   }
		   else{
		   	   box2.innerHTML = "O"
		   }
	});
	document.getElementById("box3").addEventListener("click", function (){
		console.log("Box3 was clicked");
		box3.innerHTML = playerIcon;
		   if(playerOne == false){
		       box3.innerHTML = "X";
		   }
		   else{
		   	   box3.innerHTML = "O"
		   }
	});
	document.getElementById("box4").addEventListener("click", function (){
		console.log("Box4 was clicked");
		box4.innerHTML = playerIcon;
		if(playerOne == true){
		       box4.innerHTML = "X";
		   }
		   else{
		   	   box4.innerHTML = "O"
		   }
	});
	document.getElementById("box5").addEventListener("click", function (){
		console.log("Box5 was clicked");
		box5.innerHTML = playerIcon;
		if(playerOne == false){
		       box5.innerHTML = "X";
		   }
		   else{
		   	   box5.innerHTML = "O"
		   }
	});
	document.getElementById("box6").addEventListener("click", function (){
		console.log("Box6 was clicked");
		box6.innerHTML = playerIcon;
		if(playerOne == true){
		       box6.innerHTML = "X";
		   }
		   else{
		   	   box6.innerHTML = "O"
		   }
	});
	document.getElementById("box7").addEventListener("click", function (){
		console.log("Box7 was clicked");
		box7.innerHTML = playerIcon;
		if(playerOne == false){      
		       box7.innerHTML = "X";
		   }
		   else{
		   	   box7.innerHTML = "O"
		   }
	});
	document.getElementById("box8").addEventListener("click", function (){
		console.log("Box8 was clicked");
		box8.innerHTML = playerIcon;
		if(playerOne == true){
		       box8.innerHTML = "X";
		   }
		   else{
		   	   box8.innerHTML = "O"
		   }
	});


// Possibility 1: while playerTurn1 is equal to true allow them to pick a square and once it is clicked turn them to false. 
//Possibility 2: If turn count is less than one, allow for some one to click. Once they click they turn false. Then after they select something then they turn false and I turn true. then add one to turn count. 






// if(turnCount = 0){
// 	console.log(turnCount)
// 	playerTurn1 = true	
// 	playerTurn2 = false
// 	turnCount = turnCount + 1

// }

