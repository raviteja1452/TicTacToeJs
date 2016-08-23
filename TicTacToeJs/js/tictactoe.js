// TicTacToe RationalScripts

$(document).ready(function(){
	$(document).on('click','.tic-item-m',function(){
		if(!Evaluation()){
			var id = $(this).attr('id');
			Game(id);
		}else{
			initiateGame(Size,2);
		}
	});
	$(document).on('click','tic-item-s',function(){
		if(!EvaluationSingle()){
			var id = $(this).attr('id');
			GameSinge(id);
		}else{
			initiateGame(Size,1);
		}
	});
	$('#ttt').on('click',function(){
		$('#single').css('display','inline-block');
		$('#multi').css('display','inline-block');
		$('#v1').css('display','inline-block');
		$('#h1').css('display','inline-block');
		$('#h2').css('display','inline-block');
		$('#r1').css('display','inline-block');

	});
	$('#single').on('click',function(){
		$('#v2').css('display','inline-block');
		$('#v4').css('display','inline-block');
		$('#v6').css('display','inline-block');
		$('#v7').css('display','inline-block');
		$('#h3').css('display','inline-block');
		$('#h4').css('display','inline-block');
		$('#r2').css('display','inline-block');
		$('#s3').css('display','inline-block');
		$('#s4').css('display','inline-block');
		$('#s5').css('display','inline-block');

	});
	$('#multi').on('click',function(){
		$('#v3').css('display','inline-block');
		$('#v5').css('display','inline-block');
		$('#v8').css('display','inline-block');
		$('#v9').css('display','inline-block');
		$('#h5').css('display','inline-block');
		$('#h6').css('display','inline-block');
		$('#r3').css('display','inline-block');
		$('#m3').css('display','inline-block');
		$('#m4').css('display','inline-block');
		$('#m5').css('display','inline-block');
	});
	$('#s3').on('click',function(){
		initiateGame(3,1)
	});
	$('#s4').on('click',function(){
		initiateGame(4,1)
	});
	$('#s5').on('click',function(){
		initiateGame(5,1)
	});
	$('#m3').on('click',function(){
		initiateGame(3,2)

	});
	$('#m4').on('click',function(){
		initiateGame(4,2)
	});
	$('#m5').on('click',function(){
		initiateGame(5,2)
	});
	$('#play-again').on('click',function(){
		initiateGame(Size,Type);
	});
});

var board = 0;
var Size = 0;
var Type = 0;
function initiateGame(s,type){
	Type = type;
	$('.tic-block').show();
	var word = '';
	if(type == 1){
		word+='Single Player';
	}else{
		word+='Multi Player';
	}
	$('.tic-head').html(word+' Tic-Tac-Toe');
	ticBoard(s,type);
	TicTacToe();
}
// Board Calling creation is done on view as well for evaluation part


function ticBoard(size,type){
	Size = size;
	var content = ''
	// Creating a board
	board = new Array(size);
	for(var i=0;i<size;i++){
		content = content+'<div class="tic-row" id="tr'+i+'">'
		board[i] = new Array(size);
		for(var j=0;j < size;j++){
			if(type == 1){
				content = content + '<div class="tic-item-s" id="r'+i+'c'+j+'"></div>';
			}else{
				content = content + '<div class="tic-item-m" id="r'+i+'c'+j+'"></div>';
			}
			board[i][j] = '_';
		}
		content = content+'</div>'
	}
	$('.tic-body').html(content);
}
// ---------------------- Common Code -----------------------//

// Tic Tac Toe Start Function 
var current_player;

function TicTacToe(){
	// Initialising the First Player as X
	current_player = 'X';
	var output = current_player+"'s Turn ";
	$('.tic-output').css('background-color','white');
	$('.tic-output').html("Game Started , "+output);
}

function swapPlayer(){
	if(current_player == 'X'){
		current_player  = 'O';
	}else{
		current_player = 'X';
	}
	var output = current_player+"'s Turn ";
	$('.tic-output').css('background-color','white');
	$('.tic-output').html(output);
}

function NoMovesLeft(){
	//console.log(Size);
	for(i = 0 ; i < Size ; i++){
		for(j = 0;j< Size;j++){
			if(board[i][j] == '_'){
				return 0;
			}
		}
	}
	$('.tic-output').css('background-color','tan');
	$('.tic-output').html("Pchh, No moves left :(");
	return 1;
}
// Game Functionality



// ----------------------- Code for MultiPlayer -------------------- //


function Evaluation(){
	// Row Checking
	//console.log("Evaluate :"+Size);
	for(i = 0;i < Size ;i++){
		if(board[i][0] != '_'){
			var j = 1;
			for(j = 1 ; j < Size ; j++){
				if(board[i][j] != board[i][j-1]){
					break;
				}
			}
			if(j == Size){
				return 1;
			}
		}
	}
	// Coloumn Checking
	for(i = 0;i < Size ;i++){
		if(board[0][i] != '_'){
			var j = 1;
			for(j = 1 ; j < Size ; j++){
				if(board[j][i] != board[j-1][i]){
					break;
				}
			}
			if(j == Size){
				return 1;
			}
		}
	}
	// Diagonal 1 
	if(board[0][0]!='_'){
		var i = 0;
		for(i = 1; i< Size; i++){
			if(board[i][i] != board[i-1][i-1]){
				break;
			}
		}
		if(i == Size){
			return 1;
		}
	}
	// Diagonal 2
	if(board[0][Size-1]!='_'){
		var i = 0;
		for(i = 1; i < Size; i++){
			if(board[i][Size-1 - i] != board[i-1][Size - i]){
				break;
			}
		}
		if(i == Size){
			return 1;
		}
	}
	return 0;
}

function Game(id){
	var rno = parseInt(id[1]);
	var cno = parseInt(id[3]);
	if(board[rno][cno] == '_'){
		board[rno][cno] = current_player;
		$('#'+id).html(current_player);
		if(current_player == 'X'){
			$('#'+id).addClass('royal');
		}
		if(!GameOver()){
			swapPlayer();
		}
	}else{
		$('.tic-output').css('background-color','white');
		var output = current_player+"'s Turn ";
		$('.tic-output').html(output+"<br/> Already Filled");	
	}
}




// Board Functionality
function GameOver(){
	if(Evaluation() == 1){
		$('.tic-output').css('background-color','#d3f18e');
		$('.tic-output').html(current_player+" is the Winner :) ");
	}
	//console.log(NoMovesLeft());
	return (Evaluation()||NoMovesLeft());
}

// ------------------- Code for the Single Player ------------------- //

// Evaluation With Scores

function EvaluationSingle(){
	// Row Checking
	//console.log("Evaluate :"+Size);
	for(i = 0;i < Size ;i++){
		if(board[i][0] != '_'){
			var j = 1;
			for(j = 1 ; j < Size ; j++){
				if(board[i][j] != board[i][j-1]){
					break;
				}
			}
			if(j == Size){
				if(board[i][0] == 'X'){
					return 10;
				}else{
					return -10;
				}
			}
		}
	}
	// Coloumn Checking
	for(i = 0;i < Size ;i++){
		if(board[0][i] != '_'){
			var j = 1;
			for(j = 1 ; j < Size ; j++){
				if(board[j][i] != board[j-1][i]){
					break;
				}
			}
			if(j == Size){
				if(board[0][i] == 'X'){
					return 10;
				}else{
					return -10;
				}
			}
		}
	}
	// Diagonal 1 
	if(board[0][0]!='_'){
		var i = 0;
		for(i = 1; i< Size; i++){
			if(board[i][i] != board[i-1][i-1]){
				break;
			}
		}
		if(i == Size){
			if(board[0][0] == 'X'){
				return 10;
			}else{
				return -10;
			}
		}
	}
	// Diagonal 2
	if(board[0][Size-1]!='_'){
		var i = 0;
		for(i = 1; i < Size; i++){
			if(board[i][Size-1 - i] != board[i-1][Size - i]){
				break;
			}
		}
		if(i == Size){
			if(board[0][size -1 ] == 'X'){
				return 10;
			}else{
				return -10;
			}
		}
	}
	return 0;
}

function GameSingle(id){
	var rno = parseInt(id[1]);
	var cno = parseInt(id[3]);
	if(board[rno][cno] == '_'){
		board[rno][cno] = current_player;
		if(current_player == 'X'){
			$('#'+id).addClass('royal');
		}
		if(!GameOverSingle()){
			swapPlayer();
		}
	}else{
		$('.tic-output').css('background-color','white');
		var output = current_player+"'s Turn ";
		$('.tic-output').html(output+"<br/> Already Filled");
	}
}


function GameOverSingle(){
	if(EvaluationSingle() == 10){
		$('.tic-output').css('background-color','#d3f18e');
		$('.tic-output').html("You are the Winner :) ");
	}else if(EvaluationSingle() == -10){
		$('.tic-output').css('background-color','#efc1d1');
		$('.tic-output').html("Computer is the Winner :) ");
	}
	//console.log(NoMovesLeft());
	return (EvaluationSingle()||NoMovesLeft());
}
