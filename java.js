
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
	var player = 1; 
	var turnCount = 0;

//=========================================
//Winning arrays
//=========================================
 var win0 = [0, 1, 2]
 var win1 = [3, 4, 5]
 var win2 = [6, 7, 8]
 var win3 = [0, 3, 6]
 var win4 = [1, 4, 7]
 var win5 = [2, 5, 8]    
 var win6 = [0, 4, 8]
 var win7 = [2, 4, 6]

 var playerOneArray = []
 var playerTwoArray = []

 //=========================================
//Win logic
//=========================================
var holdingArray = []
var p1Sorted = playerOneArray.sort()
var winner = false;



//=========================================
//Boxes with onclicks and player turns
//=========================================
//======== box0 ========
//======== box0 ========
//======== box0 ========
	document.getElementById("box0").addEventListener("click", function (){
		console.log("Box0 was clicked");
		   if(player == 1 && box0.innerHTML == ""){ //As long as value is not being filled 
		     box0.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		     playerOneArray.push(0)//Pushing the location to the array.
		     console.log("playerOneArray is currently: " + playerOneArray)//checking to see if it works	
//Win Logic ==========================================================================================
//Win Logic ==========================================================================================
           playerOneArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerOneArray[0]== 0 && (playerOneArray[1] == 1 || playerOneArray[2] == 1 || playerOneArray[3] == 1) && (playerOneArray[2] == 2 || playerOneArray[3] == 2 || playerOneArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerOneArray[0]== 3 || playerOneArray[1]== 3 || playerOneArray[2]== 3 || playerOneArray[3]== 3) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerOneArray[0]== 6 || playerOneArray[1]== 6 || playerOneArray[2]== 6 || playerOneArray[3]== 6) && (playerOneArray[1] == 7 || playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 3 || playerOneArray[2] == 3 || playerOneArray[3] == 3 || playerOneArray[4] == 3) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerOneArray[0]== 1 || playerOneArray[1]== 1 || playerOneArray[2]== 1 || playerOneArray[3]== 1) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 5 || playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================
           if(winner != 0 || winner != 1 || winner != 2 || winner != 3 || winner != 4 || winner != 5 || winner != 6 || winner != 7) {
           }           

//Win Logic ==========================================================================================
//Win Logic ==========================================================================================         
		   }//End of x function================
		   else if(player == 2 && box0.innerHTML == ""){
		   	 box0.innerHTML = "O"
		   	 player = 1
		     playerTwoArray.push(0)//Pushing the location to the array.
		     console.log("playerTwoArray is currently: " + playerTwoArray)//checking to see if it works	
// O Win Logic ==========================================================================================
// O Win Logic ==========================================================================================
           playerTwoArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerTwoArray[0]== 0 && (playerTwoArray[1] == 1 || playerTwoArray[2] == 1 || playerTwoArray[3] == 1) && (playerTwoArray[2] == 2 || playerTwoArray[3] == 2 || playerTwoArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerTwoArray[0]== 3 || playerTwoArray[1]== 3 || playerTwoArray[2]== 3 || playerTwoArray[3]== 3) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerTwoArray[0]== 6 || playerTwoArray[1]== 6 || playerTwoArray[2]== 6 || playerTwoArray[3]== 6) && (playerTwoArray[1] == 7 || playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 3 || playerTwoArray[2] == 3 || playerTwoArray[3] == 3 || playerTwoArray[4] == 3) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerTwoArray[0]== 1 || playerTwoArray[1]== 1 || playerTwoArray[2]== 1 || playerTwoArray[3]== 1) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 5 || playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================           

//O Win Logic ==========================================================================================
//O Win Logic ==========================================================================================	     
		   }//end of "o" player function===================
    });//End of box0 onclick function==========================
//======== box1 ========
//======== box1 ========
//======== box1 ========
	document.getElementById("box1").addEventListener("click", function (){
		console.log("Box1 was clicked");
		   if(player == 1 && box1.innerHTML == ""){ //As long as value is not being filled 
		     box1.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		     playerOneArray.push(1)//Pushing the location to the array.
		     console.log("playerOneArray is currently: " + playerOneArray)//checking to see if it works
//Win Logic ==========================================================================================
//Win Logic ==========================================================================================
           playerOneArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerOneArray[0]== 0 && (playerOneArray[1] == 1 || playerOneArray[2] == 1 || playerOneArray[3] == 1) && (playerOneArray[2] == 2 || playerOneArray[3] == 2 || playerOneArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerOneArray[0]== 3 || playerOneArray[1]== 3 || playerOneArray[2]== 3 || playerOneArray[3]== 3) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerOneArray[0]== 6 || playerOneArray[1]== 6 || playerOneArray[2]== 6 || playerOneArray[3]== 6) && (playerOneArray[1] == 7 || playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 3 || playerOneArray[2] == 3 || playerOneArray[3] == 3 || playerOneArray[4] == 3) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerOneArray[0]== 1 || playerOneArray[1]== 1 || playerOneArray[2]== 1 || playerOneArray[3]== 1) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 5 || playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================

//Win Logic ==========================================================================================
//Win Logic ==========================================================================================      
		   }//End of x function==========
		   else if(player == 2 && box1.innerHTML == ""){
		   	 box1.innerHTML = "O"
		   	 player = 1
		     playerTwoArray.push(1)//Pushing the location to the array.
		     console.log("playerTwoArray is currently: " + playerTwoArray)//checking to see if it works	
// O Win Logic ==========================================================================================
// O Win Logic ==========================================================================================
           playerTwoArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerTwoArray[0]== 0 && (playerTwoArray[1] == 1 || playerTwoArray[2] == 1 || playerTwoArray[3] == 1) && (playerTwoArray[2] == 2 || playerTwoArray[3] == 2 || playerTwoArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerTwoArray[0]== 3 || playerTwoArray[1]== 3 || playerTwoArray[2]== 3 || playerTwoArray[3]== 3) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerTwoArray[0]== 6 || playerTwoArray[1]== 6 || playerTwoArray[2]== 6 || playerTwoArray[3]== 6) && (playerTwoArray[1] == 7 || playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 3 || playerTwoArray[2] == 3 || playerTwoArray[3] == 3 || playerTwoArray[4] == 3) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerTwoArray[0]== 1 || playerTwoArray[1]== 1 || playerTwoArray[2]== 1 || playerTwoArray[3]== 1) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 5 || playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================           

//O Win Logic ==========================================================================================
//O Win Logic ==========================================================================================
		   }//end of "o" player function===================
    });//End of box1 onclick function==========================
//======== box2 ========
//======== box2 ========
//======== box2 ========
	document.getElementById("box2").addEventListener("click", function (){
		console.log("Box2 was clicked");
		   if(player == 1 && box2.innerHTML == ""){ //As long as value is not being filled 
		     box2.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		     playerOneArray.push(2)//Pushing the location to the array.
		     console.log("playerOneArray is currently: " + playerOneArray)//checking to see if it works 
//Win Logic ==========================================================================================
//Win Logic ==========================================================================================
           playerOneArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerOneArray[0]== 0 && (playerOneArray[1] == 1 || playerOneArray[2] == 1 || playerOneArray[3] == 1) && (playerOneArray[2] == 2 || playerOneArray[3] == 2 || playerOneArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerOneArray[0]== 3 || playerOneArray[1]== 3 || playerOneArray[2]== 3 || playerOneArray[3]== 3) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerOneArray[0]== 6 || playerOneArray[1]== 6 || playerOneArray[2]== 6 || playerOneArray[3]== 6) && (playerOneArray[1] == 7 || playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 3 || playerOneArray[2] == 3 || playerOneArray[3] == 3 || playerOneArray[4] == 3) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerOneArray[0]== 1 || playerOneArray[1]== 1 || playerOneArray[2]== 1 || playerOneArray[3]== 1) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 5 || playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================
           if(winner != 0 || winner != 1 || winner != 2 || winner != 3 || winner != 4 || winner != 5 || winner != 6 || winner != 7) {
           }           

//Win Logic ==========================================================================================
//Win Logic ========================================================================================== 
		   }//End of x function ==========================
		   else if(player == 2 && box2.innerHTML == ""){
		   	 box2.innerHTML = "O"
		   	 player = 1
		     playerTwoArray.push(2)//Pushing the location to the array.
		     console.log("playerTwoArray is currently: " + playerTwoArray)//checking to see if it works	
// O Win Logic ==========================================================================================
// O Win Logic ==========================================================================================
           playerTwoArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerTwoArray[0]== 0 && (playerTwoArray[1] == 1 || playerTwoArray[2] == 1 || playerTwoArray[3] == 1) && (playerTwoArray[2] == 2 || playerTwoArray[3] == 2 || playerTwoArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerTwoArray[0]== 3 || playerTwoArray[1]== 3 || playerTwoArray[2]== 3 || playerTwoArray[3]== 3) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerTwoArray[0]== 6 || playerTwoArray[1]== 6 || playerTwoArray[2]== 6 || playerTwoArray[3]== 6) && (playerTwoArray[1] == 7 || playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 3 || playerTwoArray[2] == 3 || playerTwoArray[3] == 3 || playerTwoArray[4] == 3) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerTwoArray[0]== 1 || playerTwoArray[1]== 1 || playerTwoArray[2]== 1 || playerTwoArray[3]== 1) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 5 || playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================           

//O Win Logic ==========================================================================================
//O Win Logic ==========================================================================================
		   }//end of "o" player function===================
    });//End of box2 onclick function==========================
//======== box3 ========
//======== box3 ========
//======== box3 ========
	document.getElementById("box3").addEventListener("click", function (){
		console.log("Box3 was clicked");
		   if(player == 1 && box3.innerHTML == ""){ //As long as value is not being filled 
		     box3.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		     playerOneArray.push(3)//Pushing the location to the array.
		     console.log("playerOneArray is currently: " + playerOneArray)//checking to see if it works	
//Win Logic ==========================================================================================
//Win Logic ==========================================================================================
           playerOneArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerOneArray[0]== 0 && (playerOneArray[1] == 1 || playerOneArray[2] == 1 || playerOneArray[3] == 1) && (playerOneArray[2] == 2 || playerOneArray[3] == 2 || playerOneArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerOneArray[0]== 3 || playerOneArray[1]== 3 || playerOneArray[2]== 3 || playerOneArray[3]== 3) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerOneArray[0]== 6 || playerOneArray[1]== 6 || playerOneArray[2]== 6 || playerOneArray[3]== 6) && (playerOneArray[1] == 7 || playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 3 || playerOneArray[2] == 3 || playerOneArray[3] == 3 || playerOneArray[4] == 3) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerOneArray[0]== 1 || playerOneArray[1]== 1 || playerOneArray[2]== 1 || playerOneArray[3]== 1) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 5 || playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================
           if(winner != 0 || winner != 1 || winner != 2 || winner != 3 || winner != 4 || winner != 5 || winner != 6 || winner != 7) {
           }           

//Win Logic ==========================================================================================
//Win Logic ========================================================================================== 
		   }//End of x function=================
		   else if(player == 2 && box3.innerHTML == ""){
		   	 box3.innerHTML = "O"
		   	 player = 1
		     playerTwoArray.push(3)//Pushing the location to the array.
		     console.log("playerTwoArray is currently: " + playerTwoArray)//checking to see if it works
// O Win Logic ==========================================================================================
// O Win Logic ==========================================================================================
           playerTwoArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerTwoArray[0]== 0 && (playerTwoArray[1] == 1 || playerTwoArray[2] == 1 || playerTwoArray[3] == 1) && (playerTwoArray[2] == 2 || playerTwoArray[3] == 2 || playerTwoArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerTwoArray[0]== 3 || playerTwoArray[1]== 3 || playerTwoArray[2]== 3 || playerTwoArray[3]== 3) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerTwoArray[0]== 6 || playerTwoArray[1]== 6 || playerTwoArray[2]== 6 || playerTwoArray[3]== 6) && (playerTwoArray[1] == 7 || playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 3 || playerTwoArray[2] == 3 || playerTwoArray[3] == 3 || playerTwoArray[4] == 3) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerTwoArray[0]== 1 || playerTwoArray[1]== 1 || playerTwoArray[2]== 1 || playerTwoArray[3]== 1) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 5 || playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================           

//O Win Logic ==========================================================================================
//O Win Logic ==========================================================================================	
		   }//end of "o" player function===================
    });//End of box3 onclick function==========================
//======== box4 ========
//======== box4 ========
//======== box4 ========
	document.getElementById("box4").addEventListener("click", function (){
		console.log("Box4 was clicked");
		   if(player == 1 && box4.innerHTML == ""){ //As long as value is not being filled 
		     box4.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		     playerOneArray.push(4)//Pushing the location to the array.
		     console.log("playerOneArray is currently: " + playerOneArray)//checking to see if it works	
//Win Logic ==========================================================================================
//Win Logic ==========================================================================================
           playerOneArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerOneArray[0]== 0 && (playerOneArray[1] == 1 || playerOneArray[2] == 1 || playerOneArray[3] == 1) && (playerOneArray[2] == 2 || playerOneArray[3] == 2 || playerOneArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerOneArray[0]== 3 || playerOneArray[1]== 3 || playerOneArray[2]== 3 || playerOneArray[3]== 3) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerOneArray[0]== 6 || playerOneArray[1]== 6 || playerOneArray[2]== 6 || playerOneArray[3]== 6) && (playerOneArray[1] == 7 || playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 3 || playerOneArray[2] == 3 || playerOneArray[3] == 3 || playerOneArray[4] == 3) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerOneArray[0]== 1 || playerOneArray[1]== 1 || playerOneArray[2]== 1 || playerOneArray[3]== 1) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 5 || playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================
           if(winner != 0 || winner != 1 || winner != 2 || winner != 3 || winner != 4 || winner != 5 || winner != 6 || winner != 7) {
           }           

//Win Logic ==========================================================================================
//Win Logic ========================================================================================== 
		   }//end of x function =====================
		   else if(player == 2 && box4.innerHTML == ""){
		   	 box4.innerHTML = "O"
		   	 player = 1
		     playerTwoArray.push(4)//Pushing the location to the array.
		     console.log("playerTwoArray is currently: " + playerTwoArray)//checking to see if it works	
// O Win Logic ==========================================================================================
// O Win Logic ==========================================================================================
           playerTwoArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerTwoArray[0]== 0 && (playerTwoArray[1] == 1 || playerTwoArray[2] == 1 || playerTwoArray[3] == 1) && (playerTwoArray[2] == 2 || playerTwoArray[3] == 2 || playerTwoArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerTwoArray[0]== 3 || playerTwoArray[1]== 3 || playerTwoArray[2]== 3 || playerTwoArray[3]== 3) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerTwoArray[0]== 6 || playerTwoArray[1]== 6 || playerTwoArray[2]== 6 || playerTwoArray[3]== 6) && (playerTwoArray[1] == 7 || playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 3 || playerTwoArray[2] == 3 || playerTwoArray[3] == 3 || playerTwoArray[4] == 3) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerTwoArray[0]== 1 || playerTwoArray[1]== 1 || playerTwoArray[2]== 1 || playerTwoArray[3]== 1) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 5 || playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================           

//O Win Logic ==========================================================================================
//O Win Logic ==========================================================================================
		   }//end of "o" player function===================
    });//End of box4 onclick function==========================
//======== box5 ========
//======== box5 ========
//======== box5 ========
	document.getElementById("box5").addEventListener("click", function (){
		console.log("Box5 was clicked");
		   if(player == 1 && box5.innerHTML == ""){ //As long as value is not being filled 
	       box5.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		     playerOneArray.push(5)//Pushing the location to the array.
		     console.log("playerOneArray is currently: " + playerOneArray)//checking to see if it works	
//Win Logic ==========================================================================================
//Win Logic ==========================================================================================
           playerOneArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerOneArray[0]== 0 && (playerOneArray[1] == 1 || playerOneArray[2] == 1 || playerOneArray[3] == 1) && (playerOneArray[2] == 2 || playerOneArray[3] == 2 || playerOneArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerOneArray[0]== 3 || playerOneArray[1]== 3 || playerOneArray[2]== 3 || playerOneArray[3]== 3) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerOneArray[0]== 6 || playerOneArray[1]== 6 || playerOneArray[2]== 6 || playerOneArray[3]== 6) && (playerOneArray[1] == 7 || playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 3 || playerOneArray[2] == 3 || playerOneArray[3] == 3 || playerOneArray[4] == 3) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerOneArray[0]== 1 || playerOneArray[1]== 1 || playerOneArray[2]== 1 || playerOneArray[3]== 1) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 5 || playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================           

//Win Logic ==========================================================================================
//Win Logic ==========================================================================================
		   }//end of x fuction =========================
		   else if(player == 2 && box5.innerHTML == ""){
		   	 box5.innerHTML = "O"
		   	 player = 1
		     playerTwoArray.push(5)//Pushing the location to the array.
		     console.log("playerTwoArray is currently: " + playerTwoArray)//checking to see if it works
// O Win Logic ==========================================================================================
// O Win Logic ==========================================================================================
           playerTwoArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerTwoArray[0]== 0 && (playerTwoArray[1] == 1 || playerTwoArray[2] == 1 || playerTwoArray[3] == 1) && (playerTwoArray[2] == 2 || playerTwoArray[3] == 2 || playerTwoArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerTwoArray[0]== 3 || playerTwoArray[1]== 3 || playerTwoArray[2]== 3 || playerTwoArray[3]== 3) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerTwoArray[0]== 6 || playerTwoArray[1]== 6 || playerTwoArray[2]== 6 || playerTwoArray[3]== 6) && (playerTwoArray[1] == 7 || playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 3 || playerTwoArray[2] == 3 || playerTwoArray[3] == 3 || playerTwoArray[4] == 3) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerTwoArray[0]== 1 || playerTwoArray[1]== 1 || playerTwoArray[2]== 1 || playerTwoArray[3]== 1) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 5 || playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================           

//O Win Logic ==========================================================================================
//O Win Logic ==========================================================================================	
		   }//end of "o" player function===================
    });//End of box5 onclick function==========================
//======== box6 ========
//======== box6 ========
//======== box6 ========
	document.getElementById("box6").addEventListener("click", function (){
		console.log("Box6 was clicked");
		   if(player == 1 && box6.innerHTML == ""){ //As long as value is not being filled 
		     box6.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		     playerOneArray.push(6)//Pushing the location to the array.
		     console.log("playerOneArray is currently: " + playerOneArray)//checking to see if it works	
//Win Logic ==========================================================================================
//Win Logic ==========================================================================================
           playerOneArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerOneArray[0]== 0 && (playerOneArray[1] == 1 || playerOneArray[2] == 1 || playerOneArray[3] == 1) && (playerOneArray[2] == 2 || playerOneArray[3] == 2 || playerOneArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerOneArray[0]== 3 || playerOneArray[1]== 3 || playerOneArray[2]== 3 || playerOneArray[3]== 3) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerOneArray[0]== 6 || playerOneArray[1]== 6 || playerOneArray[2]== 6 || playerOneArray[3]== 6) && (playerOneArray[1] == 7 || playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 3 || playerOneArray[2] == 3 || playerOneArray[3] == 3 || playerOneArray[4] == 3) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerOneArray[0]== 1 || playerOneArray[1]== 1 || playerOneArray[2]== 1 || playerOneArray[3]== 1) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 5 || playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================           

//Win Logic ==========================================================================================
//Win Logic ==========================================================================================
		   }//end of x fuction =========================
		   else if(player == 2 && box6.innerHTML == ""){
		     box6.innerHTML = "O"
		   	 player = 1
		     playerTwoArray.push(6)//Pushing the location to the array.
		     console.log("playerTwoArray is currently: " + playerTwoArray)//checking to see if it works	
// O Win Logic ==========================================================================================
// O Win Logic ==========================================================================================
           playerTwoArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerTwoArray[0]== 0 && (playerTwoArray[1] == 1 || playerTwoArray[2] == 1 || playerTwoArray[3] == 1) && (playerTwoArray[2] == 2 || playerTwoArray[3] == 2 || playerTwoArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerTwoArray[0]== 3 || playerTwoArray[1]== 3 || playerTwoArray[2]== 3 || playerTwoArray[3]== 3) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerTwoArray[0]== 6 || playerTwoArray[1]== 6 || playerTwoArray[2]== 6 || playerTwoArray[3]== 6) && (playerTwoArray[1] == 7 || playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 3 || playerTwoArray[2] == 3 || playerTwoArray[3] == 3 || playerTwoArray[4] == 3) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerTwoArray[0]== 1 || playerTwoArray[1]== 1 || playerTwoArray[2]== 1 || playerTwoArray[3]== 1) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 5 || playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================           

//O Win Logic ==========================================================================================
//O Win Logic ==========================================================================================
		   }//end of "o" player function===================
    });//End of box6 onclick function==========================
//======== box7 ========
//======== box7 ========
//======== box7 ========
	document.getElementById("box7").addEventListener("click", function (){
		console.log("Box7 was clicked");
		   if(player == 1 && box7.innerHTML == ""){ //As long as value is not being filled 
		     box7.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		     playerOneArray.push(7)//Pushing the location to the array.
		     console.log("playerOneArray is currently: " + playerOneArray)//checking to see if it works	
//Win Logic ==========================================================================================
//Win Logic ==========================================================================================
           playerOneArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerOneArray[0]== 0 && (playerOneArray[1] == 1 || playerOneArray[2] == 1 || playerOneArray[3] == 1) && (playerOneArray[2] == 2 || playerOneArray[3] == 2 || playerOneArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerOneArray[0]== 3 || playerOneArray[1]== 3 || playerOneArray[2]== 3 || playerOneArray[3]== 3) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerOneArray[0]== 6 || playerOneArray[1]== 6 || playerOneArray[2]== 6 || playerOneArray[3]== 6) && (playerOneArray[1] == 7 || playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 3 || playerOneArray[2] == 3 || playerOneArray[3] == 3 || playerOneArray[4] == 3) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerOneArray[0]== 1 || playerOneArray[1]== 1 || playerOneArray[2]== 1 || playerOneArray[3]== 1) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 5 || playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================           

//Win Logic ==========================================================================================
//Win Logic ==========================================================================================
		   }//end of x fuction =========================
		   else if(player == 2 && box7.innerHTML == ""){
		   	 box7.innerHTML = "O"
		   	 player = 1
		     playerTwoArray.push(7)//Pushing the location to the array.
		     console.log("playerTwoArray is currently: " + playerTwoArray)//checking to see if it works
// O Win Logic ==========================================================================================
// O Win Logic ==========================================================================================
           playerTwoArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerTwoArray[0]== 0 && (playerTwoArray[1] == 1 || playerTwoArray[2] == 1 || playerTwoArray[3] == 1) && (playerTwoArray[2] == 2 || playerTwoArray[3] == 2 || playerTwoArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerTwoArray[0]== 3 || playerTwoArray[1]== 3 || playerTwoArray[2]== 3 || playerTwoArray[3]== 3) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerTwoArray[0]== 6 || playerTwoArray[1]== 6 || playerTwoArray[2]== 6 || playerTwoArray[3]== 6) && (playerTwoArray[1] == 7 || playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 3 || playerTwoArray[2] == 3 || playerTwoArray[3] == 3 || playerTwoArray[4] == 3) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerTwoArray[0]== 1 || playerTwoArray[1]== 1 || playerTwoArray[2]== 1 || playerTwoArray[3]== 1) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 5 || playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================           

//O Win Logic ==========================================================================================
//O Win Logic ==========================================================================================	
		   }//end of "o" player function===================
    });//End of box7 onclick function==========================
//======== box8 ========
//======== box8 ========
//======== box8 ========
	document.getElementById("box8").addEventListener("click", function (){
		console.log("Box8 was clicked");
		   if(player == 1 && box8.innerHTML == ""){ //As long as value is not being filled 
		     box8.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		     playerOneArray.push(8)//Pushing the location to the array.
		     console.log("playerOneArray is currently: " + playerOneArray)//checking to see if it works
//Win Logic ==========================================================================================
//Win Logic ==========================================================================================
           playerOneArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerOneArray[0]== 0 && (playerOneArray[1] == 1 || playerOneArray[2] == 1 || playerOneArray[3] == 1) && (playerOneArray[2] == 2 || playerOneArray[3] == 2 || playerOneArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerOneArray[0]== 3 || playerOneArray[1]== 3 || playerOneArray[2]== 3 || playerOneArray[3]== 3) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerOneArray[0]== 6 || playerOneArray[1]== 6 || playerOneArray[2]== 6 || playerOneArray[3]== 6) && (playerOneArray[1] == 7 || playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 3 || playerOneArray[2] == 3 || playerOneArray[3] == 3 || playerOneArray[4] == 3) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerOneArray[0]== 1 || playerOneArray[1]== 1 || playerOneArray[2]== 1 || playerOneArray[3]== 1) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 5 || playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================           

//Win Logic ==========================================================================================
//Win Logic ==========================================================================================
	       }//end of x fuction =========================        
		   else if(player == 2 && box8.innerHTML == ""){
		     box8.innerHTML = "O"
		   	  player = 1
		     playerTwoArray.push(8)//Pushing the location to the array.
		     console.log("playerTwoArray is currently: " + playerTwoArray)//checking to see if it works	
// O Win Logic ==========================================================================================
// O Win Logic ==========================================================================================
           playerTwoArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerTwoArray[0]== 0 && (playerTwoArray[1] == 1 || playerTwoArray[2] == 1 || playerTwoArray[3] == 1) && (playerTwoArray[2] == 2 || playerTwoArray[3] == 2 || playerTwoArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerTwoArray[0]== 3 || playerTwoArray[1]== 3 || playerTwoArray[2]== 3 || playerTwoArray[3]== 3) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerTwoArray[0]== 6 || playerTwoArray[1]== 6 || playerTwoArray[2]== 6 || playerTwoArray[3]== 6) && (playerTwoArray[1] == 7 || playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 3 || playerTwoArray[2] == 3 || playerTwoArray[3] == 3 || playerTwoArray[4] == 3) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerTwoArray[0]== 1 || playerTwoArray[1]== 1 || playerTwoArray[2]== 1 || playerTwoArray[3]== 1) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 5 || playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================           

//O Win Logic ==========================================================================================
//O Win Logic ==========================================================================================
		   }//end of "o" player function===================

    });//End of box8 onclick function==========================






//Player one X
//Win Logic ==========================================================================================
//Win Logic ==========================================================================================
           playerOneArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerOneArray[0]== 0 && (playerOneArray[1] == 1 || playerOneArray[2] == 1 || playerOneArray[3] == 1) && (playerOneArray[2] == 2 || playerOneArray[3] == 2 || playerOneArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerOneArray[0]== 3 || playerOneArray[1]== 3 || playerOneArray[2]== 3 || playerOneArray[3]== 3) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerOneArray[0]== 6 || playerOneArray[1]== 6 || playerOneArray[2]== 6 || playerOneArray[3]== 6) && (playerOneArray[1] == 7 || playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 3 || playerOneArray[2] == 3 || playerOneArray[3] == 3 || playerOneArray[4] == 3) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerOneArray[0]== 1 || playerOneArray[1]== 1 || playerOneArray[2]== 1 || playerOneArray[3]== 1) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 7 || playerOneArray[3] == 7 || playerOneArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 5 || playerOneArray[2] == 5 || playerOneArray[3] == 5 || playerOneArray[4] == 5) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerOneArray[0]== 0 || playerOneArray[1]== 0 || playerOneArray[2]== 0 || playerOneArray[3]== 0) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 8 || playerOneArray[3] == 8 || playerOneArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerOneArray[0]== 2 || playerOneArray[1]== 2 || playerOneArray[2]== 2 || playerOneArray[3]== 2) && (playerOneArray[1] == 4 || playerOneArray[2] == 4 || playerOneArray[3] == 4 || playerOneArray[4] == 4) && (playerOneArray[2] == 6 || playerOneArray[3] == 6 || playerOneArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================           

//Win Logic ==========================================================================================
//Win Logic ==========================================================================================




//Player Two O
//Win Logic ==========================================================================================
//Win Logic ==========================================================================================
           playerTwoArray.sort()

		       //Top Horizontal Win ===========================================
		       if(playerTwoArray[0]== 0 && (playerTwoArray[1] == 1 || playerTwoArray[2] == 1 || playerTwoArray[3] == 1) && (playerTwoArray[2] == 2 || playerTwoArray[3] == 2 || playerTwoArray[4] == 2)){
	         alert("Winner")
           }
           //Top Horizontal Win ===========================================
           //Middle Horizontal Win ===========================================
		       if((playerTwoArray[0]== 3 || playerTwoArray[1]== 3 || playerTwoArray[2]== 3 || playerTwoArray[3]== 3) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5)){
	         alert("Winner")
           }
           //Middle Horizontal Win ===========================================
           //Bottom Horizontal Win ===========================================
		       if((playerTwoArray[0]== 6 || playerTwoArray[1]== 6 || playerTwoArray[2]== 6 || playerTwoArray[3]== 6) && (playerTwoArray[1] == 7 || playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Bottom Horizontal Win ===========================================
           
           //Left Vertical Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 3 || playerTwoArray[2] == 3 || playerTwoArray[3] == 3 || playerTwoArray[4] == 3) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Left Vertical Win ===========================================
           //Middle Vertical Win ===========================================
		       if((playerTwoArray[0]== 1 || playerTwoArray[1]== 1 || playerTwoArray[2]== 1 || playerTwoArray[3]== 1) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 7 || playerTwoArray[3] == 7 || playerTwoArray[4] == 7)){
	         alert("Winner")
           }
           //Middle Vertical Win ===========================================
           //Right Vertical Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 5 || playerTwoArray[2] == 5 || playerTwoArray[3] == 5 || playerTwoArray[4] == 5) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Right Vertical Win ===========================================
           //Left to Right Diagonal Win ===========================================
		       if((playerTwoArray[0]== 0 || playerTwoArray[1]== 0 || playerTwoArray[2]== 0 || playerTwoArray[3]== 0) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 8 || playerTwoArray[3] == 8 || playerTwoArray[4] == 8)){
	         alert("Winner")
           }
           //Left to Right Diagonal Win ===========================================
           //Right to Left Diagonal Win ===========================================
		       if((playerTwoArray[0]== 2 || playerTwoArray[1]== 2 || playerTwoArray[2]== 2 || playerTwoArray[3]== 2) && (playerTwoArray[1] == 4 || playerTwoArray[2] == 4 || playerTwoArray[3] == 4 || playerTwoArray[4] == 4) && (playerTwoArray[2] == 6 || playerTwoArray[3] == 6 || playerTwoArray[4] == 6)){
	         alert("Winner")
           }
           //Right to Left Diagonal Win ===========================================           

//Win Logic ==========================================================================================
//Win Logic ==========================================================================================


















// if(playerOneArray[0]== 0 && (playerOneArray[1] == 1 || playerOneArray[2] == 1 || playerOneArray[3] == 1) && (playerOneArray[2] == 2 || playerOneArray[3] == 2 || playerOneArray[4] == 2)){
// 	console.log("Winner")
// }




//=======================================================
//=======================================================
//=======================================================
       //   playerOneArray.sort()
       //   if(playerOneArray[0] == 0){
	      //    if(playerOneArray[1] == 4) {
		     //     if (playerOneArray[2] == 8) {
			    //    alert("Winner")
			    //  }
			    //  else if(playerOneArray[3] == 8){
       //             alert("Winner")
			    //  }
			     	     
       //       } 
	      //   else if(playerOneArray[2] == 4){
	      //   	playerOneArray.sort()
       //          if(playerOneArray[3] == 8){ 
       //          alert("Winner")
       //          }
       //          else if(playerOneArray[4] == 8){
       //          alert("WInner")
       //          }
       //      }
	      //   else if(playerOneArray[3] == 4){
	      //   	playerOneArray.sort()
	      //  	    if(playerOneArray[4] == 8) {
	      //  	    alert("winner")
	      //  	    }
	      //  	}
	      //   else if(playerOneArray[4] == 4){
	      //   	playerOneArray.sort()
	      //  	    if(playerOneArray[5] == 8) {
	      //  	    alert("winner")
	      //  	    }
	      //   }
	      // }// End of 0 if 


