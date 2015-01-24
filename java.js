
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
	var player = true; 

	var turnCount = 0;


    

    

//======================== Settign up the turns ========================

//=========================================
//Adding click to each div
//=========================================
//Adding event listener vs onclick to be able to change what it is listening for (i.e keystroke)


//======================== Boxes on click... with turns ========================

	document.getElementById("box0").addEventListener("click", function (){
		console.log("Box0 was clicked");
		   if(player == true){
		       box0.innerHTML= "X"
		       player = false
		           if (box0 == "X") {
		           	box0.removeEventListener("click")
		           };
		   }

		   else if(player == false){
		   	box0.innerHTML = "O"
		   	player = true
		   }
    });
    document.getElementById("box1").addEventListener("click", function (){
		console.log("Box1 was clicked");
		   if(player == true){
		       box1.innerHTML= "X"
		   }
		   else if(player == false){
		   	box1.innerHTML = "O"
		   	player = true
		   }
    });
	document.getElementById("box2").addEventListener("click", function (){
		console.log("Box2 was clicked");
		   if(player == true){
		       box2.innerHTML= "X"
		       player = false
		   }
		   else if(player == false){
		   	box2.innerHTML = "O"
		   	player = true
		   }
    });
    document.getElementById("box3").addEventListener("click", function (){
		console.log("Box3 was clicked");
		   if(player == true){
		       box3.innerHTML= "X"
		   }
		   else if(player == false){
		   	box3.innerHTML = "O"
		   	player = true
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

