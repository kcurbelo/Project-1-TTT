
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

var clickArray= [0, 0, 0, 0, 0, 0, 0, 0, 0]
 //=========================================
//Win logic
//=========================================
var winChecker = function(){
var counter = 0
//Win0===================================
  for(i = 0; i< win0.length; i++){
	  counter = counter + clickArray[win0[i]]
  }
  if(counter == 3 || counter == -3){
	  alert("Winner!")
  }
  counter = 0
//Win1===================================
  for(i = 0; i< win1.length; i++){
	  counter = counter + clickArray[win1[i]]
  }
  if(counter == 3 || counter == -3){
	  alert("Winner!")
  }
  counter = 0
//Win2===================================
  for(i = 0; i< win2.length; i++){
	  counter = counter + clickArray[win2[i]]
  }
  if(counter == 3 || counter == -3){
	  alert("Winner!")
  }
  counter = 0
//Win3===================================
  for(i = 0; i< win3.length; i++){
	  counter = counter + clickArray[win3[i]]
  }
  if(counter == 3 || counter == -3){
	  alert("Winner!")
  }
  counter = 0
//Win4===================================
  for(i = 0; i< win4.length; i++){
	  counter = counter + clickArray[win4[i]]
  }
  if(counter == 3 || counter == -3){
	  alert("Winner!")
  }
  counter = 0
//Win5===================================
  for(i = 0; i< win5.length; i++){
	  counter = counter + clickArray[win5[i]]
  }
  if(counter == 3 || counter == -3){
	  alert("Winner!")
  }
  counter = 0
//Win6===================================
  for(i = 0; i< win6.length; i++){
	  counter = counter + clickArray[win6[i]]
  }
  if(counter == 3 || counter == -3){
	  alert("Winner!")
  }
  counter = 0
//Win7===================================
  for(i = 0; i< win7.length; i++){
	  counter = counter + clickArray[win7[i]]
  }
  if(counter == 3 || counter == -3){
	  alert("Winner!")
  }
  counter = 0





}


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
		     clickArray[0] = 1
		     winChecker()
		     }//End of x function================
		   else if(player == 2 && box0.innerHTML == ""){
		   	 box0.innerHTML = "O"
		   	 player = 1	
		   	 clickArray[0] = -1
		   	 winChecker()
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
		     clickArray[1] = 1
		     winChecker()
		   }//End of x function==========
		   else if(player == 2 && box1.innerHTML == ""){
		   	 box1.innerHTML = "O"
		   	 player = 1	  
		   	 clickArray[1] = -1 
		   	 winChecker()      
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
		     clickArray[2] = 1
		     winChecker()
		   }//End of x function ==========================
		   else if(player == 2 && box2.innerHTML == ""){
		   	 box2.innerHTML = "O"
		   	 player = 1	 
		   	 clickArray[2] = -1 
		   	 winChecker()       
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
		     clickArray[3] = 1
		     winChecker()	
		   }//End of x function=================
		   else if(player == 2 && box3.innerHTML == ""){
		   	 box3.innerHTML = "O"
		   	 player = 1  
		   	 clickArray[3] = -1 
		   	 winChecker()      	
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
		     clickArray[4] = 1	
		     winChecker()
		   }//end of x function =====================
		   else if(player == 2 && box4.innerHTML == ""){
		   	 box4.innerHTML = "O"
		   	 player = 1	 
		   	 clickArray[4] = -1 
		   	 winChecker()       
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
		     clickArray[5] = 1	
		     winChecker()
		   }//end of x fuction =========================
		   else if(player == 2 && box5.innerHTML == ""){
		   	 box5.innerHTML = "O"
		   	 player = 1 
		   	 clickArray[5] = -1 
		   	 winChecker()       
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
		     clickArray[6] = 1
		     winChecker()	
		   }//end of x fuction =========================
		   else if(player == 2 && box6.innerHTML == ""){
		     box6.innerHTML = "O"
		   	 player = 1	
		   	 clickArray[6] = -1 
		   	 winChecker()        
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
		     clickArray[7] = 1	
		     winChecker()
		   }//end of x fuction =========================
		   else if(player == 2 && box7.innerHTML == ""){
		   	 box7.innerHTML = "O"
		   	 player = 1  
		   	 clickArray[7] = -1  
		   	 winChecker()     
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
		     clickArray[8] = 1
		     winChecker()
	       }//end of x fuction =========================        
		   else if(player == 2 && box8.innerHTML == ""){
		     box8.innerHTML = "O"
		   	  player = 1
		   	  clickArray[8] = -1	 
		   	  winChecker()        	
		   }//end of "o" player function===================
 
    });//End of box8 onclick function==========================




