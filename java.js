// Major, major, major, major, props to Wendy, Sam, and Bo. A large portion of the code (aside from win logic) for this project is a combination of their work. 

var tttApp = angular.module('tttApp',['firebase']);

tttApp.controller('tttController', function($scope,$firebase){


// Firebase board ================================================================================
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

// Firebase counter ================================================================================
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

// Firebase win ================================================================================
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

// Firebase Player ================================================================================
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


// // Test=========================================!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   var kevref= new Firebase('https://tictactoekevin.firebaseio.com/kev');
//   //Create AngularFire reference to data
//   var kevsync = $firebase(kevref);
//   //download the data into an array
//   $scope.kev=kevsync.$asArray();


//   $scope.kev.$loaded(function(){
//     if($scope.kev.length == 0 ){
//       for (var i = 0; i < 9; i++){
//         $scope.board.$add({playerMove: ''});
//       }
//     }

//   });
// // Test=========================================!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



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
        gameEnd();
      }
        else if((($scope.counter[0].numMoves % 2) == 1) && ($scope.players[0].playerTwo == true)){
        var symbol = "O";

        $scope.board[index].playerMove = symbol; 
        $scope.board.$save($scope.board[index]);
        $scope.counter[0].numMoves++;
        $scope.counter.$save(0);
        checkWinO();
        gameEnd();
      }

   }

}

//Win logic ===========================================
      function checkWinX() {

          if($scope.board[0].playerMove == "X" && $scope.board[1].playerMove == "X" && $scope.board[2].playerMove == "X"){
            alert("Winner")//Top horizontal win
          }
          if($scope.board[3].playerMove == "X" && $scope.board[4].playerMove == "X" && $scope.board[5].playerMove == "X"){
            alert("Winner")//Middle horizontal win
          }
          if($scope.board[6].playerMove == "X" && $scope.board[7].playerMove == "X" && $scope.board[8].playerMove == "X"){
            alert("Winner")//Bottom horizontal win
          }
          if($scope.board[0].playerMove == "X" && $scope.board[3].playerMove == "X" && $scope.board[6].playerMove == "X"){
            alert("Winner")//Left vertical win
          }
          if($scope.board[1].playerMove == "X" && $scope.board[4].playerMove == "X" && $scope.board[7].playerMove == "X"){
            alert("Winner")//Middle vertical win
          }
          if($scope.board[2].playerMove == "X" && $scope.board[5].playerMove == "X" && $scope.board[8].playerMove == "X"){
            alert("Winner")//Right vertical win
          }
          if($scope.board[0].playerMove == "X" && $scope.board[4].playerMove == "X" && $scope.board[8].playerMove == "X"){
            alert("Winner")//Right to left diagonal win
          }
          if($scope.board[2].playerMove == "X" && $scope.board[4].playerMove == "X" && $scope.board[6].playerMove == "X"){
            alert("Winner")//Left to right diagonal win
          }
      };

          function checkWinO() {

          if($scope.board[0].playerMove == "O" && $scope.board[1].playerMove == "O" && $scope.board[2].playerMove == "O"){
            alert("Winner")//Top horizontal win
          }
          if($scope.board[3].playerMove == "O" && $scope.board[4].playerMove == "O" && $scope.board[5].playerMove == "O"){
            alert("Winner")//Middle horizontal win
          }
          if($scope.board[6].playerMove == "O" && $scope.board[7].playerMove == "O" && $scope.board[8].playerMove == "O"){
            alert("Winner")//Bottom horizontal win
          }
          if($scope.board[0].playerMove == "O" && $scope.board[3].playerMove == "O" && $scope.board[6].playerMove == "O"){
            alert("Winner")//Left vertical win
          }
          if($scope.board[1].playerMove == "O" && $scope.board[4].playerMove == "O" && $scope.board[7].playerMove == "O"){
            alert("Winner")//Middle vertical win
          }
          if($scope.board[2].playerMove == "O" && $scope.board[5].playerMove == "O" && $scope.board[8].playerMove == "O"){
            alert("Winner")//Right vertical win
          }
          if($scope.board[0].playerMove == "O" && $scope.board[4].playerMove == "O" && $scope.board[8].playerMove == "O"){
            alert("Winner")//Right to left diagonal win
          }
          if($scope.board[2].playerMove == "O" && $scope.board[4].playerMove == "O" && $scope.board[6].playerMove == "O"){
            alert("Winner")//Left to right diagonal win
          }
      };
// Tie game function with refresh
      function gameEnd() {
        if($scope.counter[0].numMoves == 9) {
          alert("Tie game!")
          window.location.reload();
        }
      }
});