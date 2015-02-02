// Major, major, major, major, props to Wendy, Sam, and Bo. A large portion of the code for this project is a combination of their work. 



var tttApp = angular.module('tttApp',['firebase']);

tttApp.controller('tttController', function($scope,$firebase){



  var ref= new Firebase('https://tictactoekevin.firebaseio.com/board');
  //Create AngularFire reference to data
  var sync = $firebase(ref);
  //download the data into an array
  $scope.board=sync.$asArray();
  //the stuff here only happens after $scope.board is downloaded
  //Will generate board if it doesn't already exist.
  //Otherwise it'll reset all the values to blanks
  $scope.board.$loaded(function(){
    // console.log('Board length: ' + $scope.board.length);
    if ($scope.board.length==0){ //if board doesn't exist in current instance, generates it
      for (var i = 0; i < 9; i++){
        $scope.board.$add({playerMove: ''});
      }
    } else{             //if board exists, clears out all x's
      for (var i = 0; i<9; i++){
        $scope.board[i].playerMove='';
        $scope.board.$save(i);
      }
    }
  });


  var counterRef= new Firebase('https://tictactoekevin.firebaseio.com/counter');
  //Create AngularFire reference to data
  var counterSync = $firebase(counterRef);
  //download the data into an array
  $scope.counter= counterSync.$asArray();

   $scope.counter.$loaded(function(){
    if($scope.counter.length==0){ //creates counter variable if it doesn't already exist
      $scope.counter.$add({numMoves: 0});
    }
    else if($scope.counter[0].numMoves < 0){
      $scope.counter[0].numMoves = 0;
      $scope.counter.$save(0);
    }
    else{ //updates counter variable if it already exists in database
      $scope.counter[0].numMoves=0;
      $scope.counter.$save(0); //saves first element in counter
    }

  });


  var winRef= new Firebase('https://tictactoekevin.firebaseio.com/win');
  //Create AngularFire reference to data
  var winSync = $firebase(winRef);
  //download the data into an array
  $scope.win=winSync.$asArray();

  $scope.win.$loaded(function(){
      if($scope.win.length == 0){
      $scope.win.$add({message: ""});
    } else{
      $scope.win[0].message = "e";
      $scope.win.$save(0);
    }

  });


   var playerRef= new Firebase('https://tictactoekevin.firebaseio.com/player');
  //Create AngularFire reference to data
  var playerSync = $firebase(playerRef);
  //download the data into an array
  $scope.players=playerSync.$asArray();

  $scope.players.$loaded(function(){ //Setting up players
    if($scope.players.length == 0){
      $scope.players.$add({playerOne: false, playerTwo: true});
    }
    else{
      $scope.players[0].playerOne = false;
      $scope.players[0].playerTwo = true;
      $scope.players.$save(0);
    }

  });


// Test=========================================!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  var kevref= new Firebase('https://tictactoekevin.firebaseio.com/kev');
  //Create AngularFire reference to data
  var kevsync = $firebase(kevref);
  //download the data into an array
  $scope.kev=kevsync.$asArray();


  $scope.kev.$loaded(function(){
    if($scope.kev.length == 0 ){
      for (var i = 0; i < 9; i++){
        $scope.board.$add({playerMove: ''});
      }
    }

  });
// Test=========================================!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



function displayWinner(player){
  if(player == "X" ){
    $scope.win[0].message = "Player one Wins";
    $scope.win.$save(0);
  }
  else if(player == "O"){
    $scope.win[0].message = "player 2 wins";
  }
    $scope.win.$save(0);
    $scope.counter[0].makeMove= -2;
    $scope.counter.$save(0);
};



$scope.makeMove = function(index){


  if(($scope.board[0].playerMove == "") && ($scope.board[1].playerMove == "") && ($scope.board[2].playerMove == "") &&
      ($scope.board[3].playerMove == "") && ($scope.board[4].playerMove == "") && ($scope.board[5].playerMove == "") &&
      ($scope.board[6].playerMove == "") && ($scope.board[7].playerMove == "") && ($scope.board[8].playerMove == "")){
      $scope.players[0].playerOne = true;
      $scope.players[0].playerTwo = false;
    }//beginning of the game

    console.log("player 1 is " + $scope.players[0].playerOne);
    console.log("player 2 is " + $scope.players[0].playerTwo);

    if(($scope.board[index].playerMove == "") && ($scope.counter[0].numMoves >= 0)) {//if the spot on the board is empty and the number of moves is greater than 0
        console.log("going through makeMove");
        console.log("turn = " + $scope.counter[0].numMoves);

      if((($scope.counter[0].numMoves % 2) == 0) && ($scope.players[0].playerOne == true)){
        var symbol = "X";

        $scope.board[index].playerMove = symbol;  //symbol is equal to the place on the board. 
        $scope.board.$save($scope.board[index]); //Save the location of the board to firebase
        $scope.counter[0].numMoves++; //Increment the number of moves by one
        $scope.counter.$save(0); //Save the counter
        checkWinX();
      }
        else if((($scope.counter[0].numMoves % 2) == 1) && ($scope.players[0].playerTwo == true)){
        var symbol = "O";

        $scope.board[index].playerMove = symbol; 
        $scope.board.$save($scope.board[index]);
        $scope.counter[0].numMoves++;
        $scope.counter.$save(0);
        checkWin();
      }

   }

}
 // var win0 = [0, 1, 2]
 // var win1 = [3, 4, 5]
 // var win2 = [6, 7, 8]
 // var win3 = [0, 3, 6]
 // var win4 = [1, 4, 7]
 // var win5 = [2, 5, 8]    
 // var win6 = [0, 4, 8]
 // var win7 = [2, 4, 6]

         //Top Horizontal Win ===========================================
      function checkWinX() {

          if($scope.board[0].playerMove == "X" && $scope.board[1].playerMove == "X" && $scope.board[2].playerMove == "X"){
            alert("Winner")//Top horizontal win
          }
          else if($scope.board[3].playerMove == "X" && $scope.board[4].playerMove == "X" && $scope.board[5].playerMove == "X"){
            alert("Winner")//Middle horizontal win
          }
          else if($scope.board[6].playerMove == "X" && $scope.board[7].playerMove == "X" && $scope.board[8].playerMove == "X"){
            alert("Winner")//Bottom horizontal win
          }
          else if($scope.board[0].playerMove == "X" && $scope.board[3].playerMove == "X" && $scope.board[6].playerMove == "X"){
            alert("Winner")//Left vertical win
          }
          else if($scope.board[1].playerMove == "X" && $scope.board[4].playerMove == "X" && $scope.board[7].playerMove == "X"){
            alert("Winner")//Middle vertical win
          }
          else if($scope.board[2].playerMove == "X" && $scope.board[5].playerMove == "X" && $scope.board[8].playerMove == "X"){
            alert("Winner")//Right vertical win
          }
          else if($scope.board[0].playerMove == "X" && $scope.board[4].playerMove == "X" && $scope.board[8].playerMove == "X"){
            alert("Winner")//Right to left diagonal win
          }
          else if($scope.board[2].playerMove == "X" && $scope.board[4].playerMove == "X" && $scope.board[6].playerMove == "X"){
            alert("Winner")//Left to right diagonal win
          }

      };
          //Top Horizontal Win ===========================================

        // function checkWin() {
        //   if($scope.board[0].playerMove == "X"){
        //       alert("sadsd");
        //   }
        // };

});






















//====================================
//Angular
//====================================








// //=========================================
// //Setting boxes to variables
// //=========================================
//  var box0 = document.getElementById("box0")
//    // console.log(box0)
//  var box1 = document.getElementById("box1")
//    // console.log(box1)
//  var box2 = document.getElementById("box2")
//    // console.log(box2)
//  var box3 = document.getElementById("box3")
//    // console.log(box3)
//  var box4 = document.getElementById("box4")
//    // console.log(box4)
//  var box5 = document.getElementById("box5")
//    // console.log(box5)
//  var box6 = document.getElementById("box6")
//    // console.log(box6)
//  var box7 = document.getElementById("box7")
//    // console.log(box7)
//  var box8 = document.getElementById("box8")
//    // console.log(box8)



// //=========================================
// //Other Variables
// //=========================================
//  var player = 1; 
//  var turnCount = 0;

// //=========================================
// //Winning arrays
// //=========================================
 // var win0 = [0, 1, 2]
 // var win1 = [3, 4, 5]
 // var win2 = [6, 7, 8]
 // var win3 = [0, 3, 6]
 // var win4 = [1, 4, 7]
 // var win5 = [2, 5, 8]    
 // var win6 = [0, 4, 8]
 // var win7 = [2, 4, 6]

//  var playerOneArray = []
//  var playerTwoArray = []

// var clickArray= [0, 0, 0, 0, 0, 0, 0, 0, 0]
//  //=========================================
// //Win logic
// //=========================================
// var winChecker = function(){
// var counter = 0
// //Win0===================================
//   for(i = 0; i< win0.length; i++){
//    counter = counter + clickArray[win0[i]]
//   }
//   if(counter == 3 || counter == -3){
//    alert("Winner!")
//   }  
//   counter = 0
// //Win1===================================
//   for(i = 0; i< win1.length; i++){
//    counter = counter + clickArray[win1[i]]
//   }
//   if(counter == 3 || counter == -3){
//    alert("Winner!")
//   }
//   counter = 0
// //Win2===================================
//   for(i = 0; i< win2.length; i++){
//    counter = counter + clickArray[win2[i]]
//   }
//   if(counter == 3 || counter == -3){
//    alert("Winner!")
//   }
//   counter = 0
// //Win3===================================
//   for(i = 0; i< win3.length; i++){
//    counter = counter + clickArray[win3[i]]
//   }
//   if(counter == 3 || counter == -3){
//    alert("Winner!")
//   }
//   counter = 0
// //Win4===================================
//   for(i = 0; i< win4.length; i++){
//    counter = counter + clickArray[win4[i]]
//   }
//   if(counter == 3 || counter == -3){
//    alert("Winner!")
//   }
//   counter = 0
// //Win5===================================
//   for(i = 0; i< win5.length; i++){
//    counter = counter + clickArray[win5[i]]
//   }
//   if(counter == 3 || counter == -3){
//    alert("Winner!")
//   }
//   counter = 0
// //Win6===================================
//   for(i = 0; i< win6.length; i++){
//    counter = counter + clickArray[win6[i]]
//   }
//   if(counter == 3 || counter == -3){
//    alert("Winner!")
//   }
//   counter = 0
// //Win7===================================
//   for(i = 0; i< win7.length; i++){
//    counter = counter + clickArray[win7[i]]
//   }
//   if(counter == 3 || counter == -3){
//    alert("Winner!")
//   }
//   counter = 0





// }


// //=========================================
// //Boxes with onclicks and player turns
// //=========================================
// //======== box0 ========
// //======== box0 ========
// //======== box0 ========
//  document.getElementById("box0").addEventListener("click", function (){
//    console.log("Box0 was clicked");
//       if(player == 1 && box0.innerHTML == ""){ //As long as value is not being filled 
//         box0.innerHTML= "X";
//         console.log("X works")
//         player = 2;  
//         clickArray[0] = 1
//         winChecker()
//         }//End of x function================
//       else if(player == 2 && box0.innerHTML == ""){
//         box0.innerHTML = "O"
//         player = 1 
//         clickArray[0] = -1
//         winChecker()
//       }//end of "o" player function===================
//     });//End of box0 onclick function==========================

// //======== box1 ========
// //======== box1 ========
// //======== box1 ========
//  document.getElementById("box1").addEventListener("click", function (){
//    console.log("Box1 was clicked");
//       if(player == 1 && box1.innerHTML == ""){ //As long as value is not being filled 
//         box1.innerHTML= "X";
//         console.log("X works")
//         player = 2;
//         clickArray[1] = 1
//         winChecker()
//       }//End of x function==========
//       else if(player == 2 && box1.innerHTML == ""){
//         box1.innerHTML = "O"
//         player = 1   
//         clickArray[1] = -1 
//         winChecker()      
//       }//end of "o" player function===================
//     });//End of box1 onclick function==========================
// //======== box2 ========
// //======== box2 ========
// //======== box2 ========
//  document.getElementById("box2").addEventListener("click", function (){
//    console.log("Box2 was clicked");
//       if(player == 1 && box2.innerHTML == ""){ //As long as value is not being filled 
//         box2.innerHTML= "X";
//         console.log("X works")
//         player = 2; 
//         clickArray[2] = 1
//         winChecker()
//       }//End of x function ==========================
//       else if(player == 2 && box2.innerHTML == ""){
//         box2.innerHTML = "O"
//         player = 1  
//         clickArray[2] = -1 
//         winChecker()       
//       }//end of "o" player function===================
//     });//End of box2 onclick function==========================
// //======== box3 ========
// //======== box3 ========
// //======== box3 ========
//  document.getElementById("box3").addEventListener("click", function (){
//    console.log("Box3 was clicked");
//       if(player == 1 && box3.innerHTML == ""){ //As long as value is not being filled 
//         box3.innerHTML= "X";
//         console.log("X works")
//         player = 2;
//         clickArray[3] = 1
//         winChecker() 
//       }//End of x function=================
//       else if(player == 2 && box3.innerHTML == ""){
//         box3.innerHTML = "O"
//         player = 1  
//         clickArray[3] = -1 
//         winChecker()       
//       }//end of "o" player function===================
//     });//End of box3 onclick function==========================
// //======== box4 ========
// //======== box4 ========
// //======== box4 ========
//  document.getElementById("box4").addEventListener("click", function (){
//    console.log("Box4 was clicked");
//       if(player == 1 && box4.innerHTML == ""){ //As long as value is not being filled 
//         box4.innerHTML= "X";
//         console.log("X works")
//         player = 2;
//         clickArray[4] = 1  
//         winChecker()
//       }//end of x function =====================
//       else if(player == 2 && box4.innerHTML == ""){
//         box4.innerHTML = "O"
//         player = 1  
//         clickArray[4] = -1 
//         winChecker()       
//       }//end of "o" player function===================
//     });//End of box4 onclick function==========================
// //======== box5 ========
// //======== box5 ========
// //======== box5 ========
//  document.getElementById("box5").addEventListener("click", function (){
//    console.log("Box5 was clicked");
//       if(player == 1 && box5.innerHTML == ""){ //As long as value is not being filled 
//         box5.innerHTML= "X";
//         console.log("X works")
//         player = 2;
//         clickArray[5] = 1  
//         winChecker()
//       }//end of x fuction =========================
//       else if(player == 2 && box5.innerHTML == ""){
//         box5.innerHTML = "O"
//         player = 1 
//         clickArray[5] = -1 
//         winChecker()       
//       }//end of "o" player function===================
//     });//End of box5 onclick function==========================
// //======== box6 ========
// //======== box6 ========
// //======== box6 ========
//  document.getElementById("box6").addEventListener("click", function (){
//    console.log("Box6 was clicked");
//       if(player == 1 && box6.innerHTML == ""){ //As long as value is not being filled 
//         box6.innerHTML= "X";
//         console.log("X works")
//         player = 2;
//         clickArray[6] = 1
//         winChecker() 
//       }//end of x fuction =========================
//       else if(player == 2 && box6.innerHTML == ""){
//         box6.innerHTML = "O"
//         player = 1 
//         clickArray[6] = -1 
//         winChecker()        
//       }//end of "o" player function===================
//     });//End of box6 onclick function==========================
// //======== box7 ========
// //======== box7 ========
// //======== box7 ========
//  document.getElementById("box7").addEventListener("click", function (){
//    console.log("Box7 was clicked");
//       if(player == 1 && box7.innerHTML == ""){ //As long as value is not being filled 
//         box7.innerHTML= "X";
//         console.log("X works")
//         player = 2;
//         clickArray[7] = 1  
//         winChecker()
//       }//end of x fuction =========================
//       else if(player == 2 && box7.innerHTML == ""){
//         box7.innerHTML = "O"
//         player = 1  
//         clickArray[7] = -1  
//         winChecker()     
//       }//end of "o" player function===================
//     });//End of box7 onclick function==========================
// //======== box8 ========
// //======== box8 ========
// //======== box8 ========
//  document.getElementById("box8").addEventListener("click", function (){
//    console.log("Box8 was clicked");
//       if(player == 1 && box8.innerHTML == ""){ //As long as value is not being filled 
//         box8.innerHTML= "X";
//         console.log("X works")
//         player = 2;
//         clickArray[8] = 1
//         winChecker()
//         }//end of x fuction =========================        
//       else if(player == 2 && box8.innerHTML == ""){
//         box8.innerHTML = "O"
//          player = 1
//          clickArray[8] = -1   
//          winChecker()          
//       }//end of "o" player function===================
 
//     });//End of box8 onclick function==========================


//Win Logic ==========================================================================================
//Win Logic ==========================================================================================
           // playerOneArray.sort()

          //Top Horizontal Win ===========================================
          // if($scope.board[0]== "X") {
          //     alert("Winner")
          //  }

        
           //Top Horizontal Win ===========================================
          //  //Middle Horizontal Win ===========================================
          // if(($scope.board[0].playerMove[0]== 3 || $scope.board[0].playerMove[1]== 3 || $scope.board[0].playerMove[2]== 3 || $scope.board[0].playerMove[3]== 3) && ($scope.board[0].playerMove[1] == 4 || $scope.board[0].playerMove[2] == 4 || $scope.board[0].playerMove[3] == 4 || $scope.board[0].playerMove[4] == 4) && ($scope.board[0].playerMove[2] == 5 || $scope.board[0].playerMove[3] == 5 || $scope.board[0].playerMove[4] == 5)){
          // alert("Winner")
          //  }
          //  //Middle Horizontal Win ===========================================
          
//Win Logic ==========================================================================================
//Win Logic ==========================================================================================



