
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
//Boxes with onclicks and player turns
//=========================================
//======== box0 ========
	document.getElementById("box0").addEventListener("click", function (){
		console.log("Box0 was clicked");
		   if(player == 1 && box0.innerHTML == ""){ //As long as value is not being filled 
		     box0.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		   }
		   else if(player == 2 && box0.innerHTML == ""){
		   	 box0.innerHTML = "O"
		   	 player = 1
		   }
    });
//======== box1 ========
	document.getElementById("box1").addEventListener("click", function (){
		console.log("Box1 was clicked");
		   if(player == 1 && box1.innerHTML == ""){ //As long as value is not being filled 
		     box1.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		   }
		   else if(player == 2 && box1.innerHTML == ""){
		   	 box1.innerHTML = "O"
		   	 player = 1
		   }
    });
//======== box2 ========
	document.getElementById("box2").addEventListener("click", function (){
		console.log("Box2 was clicked");
		   if(player == 1 && box2.innerHTML == ""){ //As long as value is not being filled 
		     box2.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		   }
		   else if(player == 2 && box2.innerHTML == ""){
		   	 box2.innerHTML = "O"
		   	 player = 1
		   }
    });
//======== box3 ========
	document.getElementById("box3").addEventListener("click", function (){
		console.log("Box3 was clicked");
		   if(player == 1 && box3.innerHTML == ""){ //As long as value is not being filled 
		     box3.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		   }
		   else if(player == 2 && box3.innerHTML == ""){
		   	 box3.innerHTML = "O"
		   	 player = 1
		   }
    });
//======== box4 ========
	document.getElementById("box4").addEventListener("click", function (){
		console.log("Box4 was clicked");
		   if(player == 1 && box4.innerHTML == ""){ //As long as value is not being filled 
		     box4.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		   }
		   else if(player == 2 && box4.innerHTML == ""){
		   	 box4.innerHTML = "O"
		   	 player = 1
		   }
    });
//======== box5 ========
	document.getElementById("box5").addEventListener("click", function (){
		console.log("Box5 was clicked");
		   if(player == 1 && box5.innerHTML == ""){ //As long as value is not being filled 
	       box5.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		   }
		   else if(player == 2 && box5.innerHTML == ""){
		   	 box5.innerHTML = "O"
		   	 player = 1
		   }
    });
//======== box6 ========
	document.getElementById("box6").addEventListener("click", function (){
		console.log("Box6 was clicked");
		   if(player == 1 && box6.innerHTML == ""){ //As long as value is not being filled 
		     box6.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		   }
		   else if(player == 2 && box6.innerHTML == ""){
		     box6.innerHTML = "O"
		   	 player = 1
		   }
    });
//======== box7 ========
	document.getElementById("box7").addEventListener("click", function (){
		console.log("Box7 was clicked");
		   if(player == 1 && box7.innerHTML == ""){ //As long as value is not being filled 
		     box7.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		   }
		   else if(player == 2 && box7.innerHTML == ""){
		   	 box7.innerHTML = "O"
		   	 player = 1
		   }
    });
//======== box8 ========
	document.getElementById("box8").addEventListener("click", function (){
		console.log("Box8 was clicked");
		   if(player == 1 && box8.innerHTML == ""){ //As long as value is not being filled 
		     box8.innerHTML= "X";
		     console.log("X works")
		     player = 2;
		   }
		   else if(player == 2 && box8.innerHTML == ""){
		     box8.innerHTML = "O"
		   	  player = 1
		   }
    });


	

