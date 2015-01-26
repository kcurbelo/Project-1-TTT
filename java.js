
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



//=========================================
//Boxes with onclicks and player turns
//=========================================
//======== box0 ========
	document.getElementById("box0").addEventListener("click", function (){
		console.log("Box0 was clicked");
		   if(player == 1 && box0.innerHTML == ""){ //As long as value is not being filled 
		     box0.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		     playerOneArray.push(0)//Pushing the location to the array.
		     console.log("playerOneArray is currently: " + playerOneArray)//checking to see if it works	
		     //Sending the variable to the holding array 
		     // var poppedIndex = playerOneArray.pop()
		     // console.log(playerOneArray) 
		     // holdingArray.push(poppedIndex)
		     // console.log(holdingArray)

		   }
		   else if(player == 2 && box0.innerHTML == ""){
		   	 box0.innerHTML = "O"
		   	 player = 1
		     playerTwoArray.push(0)//Pushing the location to the array.
		     console.log("playerTwoArray is currently: " + playerTwoArray)//checking to see if it works	
		   }
    });
//======== box1 ========
	document.getElementById("box1").addEventListener("click", function (){
		console.log("Box1 was clicked");
		   if(player == 1 && box1.innerHTML == ""){ //As long as value is not being filled 
		     box1.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		     playerOneArray.push(1)//Pushing the location to the array.
		     console.log("playerOneArray is currently: " + playerOneArray)//checking to see if it works		     
		   }
		   else if(player == 2 && box1.innerHTML == ""){
		   	 box1.innerHTML = "O"
		   	 player = 1
		     playerTwoArray.push(1)//Pushing the location to the array.
		     console.log("playerTwoArray is currently: " + playerTwoArray)//checking to see if it works	
		   }
    });
//======== box2 ========
	document.getElementById("box2").addEventListener("click", function (){
		console.log("Box2 was clicked");
		   if(player == 1 && box2.innerHTML == ""){ //As long as value is not being filled 
		     box2.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		     playerOneArray.push(2)//Pushing the location to the array.
		     console.log("playerOneArray is currently: " + playerOneArray)//checking to see if it works	
		   }
		   else if(player == 2 && box2.innerHTML == ""){
		   	 box2.innerHTML = "O"
		   	 player = 1
		     playerTwoArray.push(2)//Pushing the location to the array.
		     console.log("playerTwoArray is currently: " + playerTwoArray)//checking to see if it works	
		   }
    });
//======== box3 ========
	document.getElementById("box3").addEventListener("click", function (){
		console.log("Box3 was clicked");
		   if(player == 1 && box3.innerHTML == ""){ //As long as value is not being filled 
		     box3.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		     playerOneArray.push(3)//Pushing the location to the array.
		     console.log("playerOneArray is currently: " + playerOneArray)//checking to see if it works	
		   }
		   else if(player == 2 && box3.innerHTML == ""){
		   	 box3.innerHTML = "O"
		   	 player = 1
		     playerTwoArray.push(3)//Pushing the location to the array.
		     console.log("playerTwoArray is currently: " + playerTwoArray)//checking to see if it works	
		   }
    });
//======== box4 ========
	document.getElementById("box4").addEventListener("click", function (){
		console.log("Box4 was clicked");
		   if(player == 1 && box4.innerHTML == ""){ //As long as value is not being filled 
		     box4.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		     playerOneArray.push(4)//Pushing the location to the array.
		     console.log("playerOneArray is currently: " + playerOneArray)//checking to see if it works	
		   }
		   else if(player == 2 && box4.innerHTML == ""){
		   	 box4.innerHTML = "O"
		   	 player = 1
		     playerTwoArray.push(4)//Pushing the location to the array.
		     console.log("playerTwoArray is currently: " + playerTwoArray)//checking to see if it works	
		   }
    });
//======== box5 ========
	document.getElementById("box5").addEventListener("click", function (){
		console.log("Box5 was clicked");
		   if(player == 1 && box5.innerHTML == ""){ //As long as value is not being filled 
	       box5.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		     playerOneArray.push(5)//Pushing the location to the array.
		     console.log("playerOneArray is currently: " + playerOneArray)//checking to see if it works	
		   }
		   else if(player == 2 && box5.innerHTML == ""){
		   	 box5.innerHTML = "O"
		   	 player = 1
		     playerTwoArray.push(5)//Pushing the location to the array.
		     console.log("playerTwoArray is currently: " + playerTwoArray)//checking to see if it works	
		   }
    });
//======== box6 ========
	document.getElementById("box6").addEventListener("click", function (){
		console.log("Box6 was clicked");
		   if(player == 1 && box6.innerHTML == ""){ //As long as value is not being filled 
		     box6.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		     playerOneArray.push(6)//Pushing the location to the array.
		     console.log("playerOneArray is currently: " + playerOneArray)//checking to see if it works	
		   }
		   else if(player == 2 && box6.innerHTML == ""){
		     box6.innerHTML = "O"
		   	 player = 1
		     playerTwoArray.push(6)//Pushing the location to the array.
		     console.log("playerTwoArray is currently: " + playerTwoArray)//checking to see if it works	
		   }
    });
//======== box7 ========
	document.getElementById("box7").addEventListener("click", function (){
		console.log("Box7 was clicked");
		   if(player == 1 && box7.innerHTML == ""){ //As long as value is not being filled 
		     box7.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		     playerOneArray.push(7)//Pushing the location to the array.
		     console.log("playerOneArray is currently: " + playerOneArray)//checking to see if it works	
		   }
		   else if(player == 2 && box7.innerHTML == ""){
		   	 box7.innerHTML = "O"
		   	 player = 1
		     playerTwoArray.push(7)//Pushing the location to the array.
		     console.log("playerTwoArray is currently: " + playerTwoArray)//checking to see if it works	
		   }
    });
//======== box8 ========
	document.getElementById("box8").addEventListener("click", function (){
		console.log("Box8 was clicked");
		   if(player == 1 && box8.innerHTML == ""){ //As long as value is not being filled 
		     box8.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		     playerOneArray.push(8)//Pushing the location to the array.
		     console.log("playerOneArray is currently: " + playerOneArray)//checking to see if it works
//Win logic using if statements ===============================================================================================	
//currently x can only win in a diagonal and if it is sequential 
		         if(playerOneArray[0] == 2 || playerOneArray[0] == 0 || playerOneArray[0] == 1 || playerOneArray[0] == 3){
	           console.log("Fun times!")
                 if(playerOneArray[1] == 1 || playerOneArray[1] == 4 || playerOneArray[1] == 3 || playerOneArray[1] == 6 || playerOneArray[1] == 7 || playerOneArray[1] == 35){
                 console.log("funner times!")
                 	    if(playerOneArray[2] == 2 || playerOneArray[2] == 5 || playerOneArray[2] == 8 || playerOneArray[2] == 6 || playerOneArray[2] == 7){
                 	    alert("x wins!")
                      }
                 }
             }
		   }
//=====================================================================================================================================
		   else if(player == 2 && box8.innerHTML == ""){
		     box8.innerHTML = "O"
		   	  player = 1
		     playerTwoArray.push(8)//Pushing the location to the array.
		     console.log("playerTwoArray is currently: " + playerTwoArray)//checking to see if it works	
		   }

    });



// if(playerOneArray[0] == 0) {
// 	// holdingArray.push(0)
// 	console.log("Push worked!")
// }
	   // for (var i = playerOneArray.length; i < 5; i++) {
	   //       if(playerOneArray[0] == 2 || playerOneArray[0] == 0 || playerOneArray[0] == 1 || playerOneArray[0] == 3){
    //          console.log("Or statement work")
    //           }
    //         }


// if(playerOneArray[0] == 2 || playerOneArray[0] == 0 || playerOneArray[0] == 1 || playerOneArray[0] == 3){
// 	console.log("Fun times!")
// }






