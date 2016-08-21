// TicTacToe RationalScripts

$(document).ready(function(){

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
		$('.tic-block').show();
		$('.tic-head').html('Single Player Tic-Tac-Toe');
		ticBoard(3);
		TicTacToe();
	});
	$('#s4').on('click',function(){
		$('.tic-block').show();
		$('.tic-head').html('Single Player Tic-Tac-Toe');
		ticBoard(4);
		TicTacToe();
		
	});
	$('#s5').on('click',function(){
		$('.tic-block').show();
		$('.tic-head').html('Single Player Tic-Tac-Toe');
		ticBoard(5);
		TicTacToe();
	});
	$('#m3').on('click',function(){
		$('.tic-block').show();
		$('.tic-head').html('Multi Player Tic-Tac-Toe');
		ticBoard(3);
		TicTacToe();

	});
	$('#m4').on('click',function(){
		$('.tic-block').show();
		$('.tic-head').html('Multi Player Tic-Tac-Toe');
		ticBoard(4);
		TicTacToe();
	});
	$('#m5').on('click',function(){
		$('.tic-block').show();
		$('.tic-head').html('Multi Player Tic-Tac-Toe');
		ticBoard(5);
		TicTacToe();
	});
	// $('.tic-item').on('click',function(){
	// 	var id = $(this).attr('id');
	// 	Game(id);
	// });
});

// Board Calling creation is done on view as well for evaluation part

var board;
function ticBoard(size){
	var content = ''
	// Creating a board
	board = new Array(size);
	for(var i=0;i<size;i++){
		content = content+'<div class="tic-row" id="tr'+i+'">'
		board[i] = new Array(size);
		for(var j=0;j < size;j++){
			content = content + '<div class="tic-item" id="r'+i+'c'+j+'"></div>';
			board[i][j] = '_';
		}
		content = content+'</div>'
	}
	$('.tic-body').html(content);
	console.log(board);
}

// Code for MultiPlayer

// Tic Tac Toe Start Function 
var current_player;

function TicTacToe(){
	// Initialising the First Player as X
	current_player = 'X';
	var output = current_player+"'s Turn ";
	$('.tic-output').html("Game Started , "+output);
}
// Game Functionality

function Game(id){
	var no = parseInt(id[1]);
	if(board[no] == ' '){
		board[no] = current_player;
		$('#'+id).html(current_player);
		if(current_player == 'X'){
			$('#'+id).addClass('royal');
		}
		if(!GameOver()){
			swapPlayer();
		}
	}else{
		var output = current_player+"'s Turn ";
		$('.tic-output').html(output+"<br/> Insert in Positions where pieces are not inserted");	
	}
}
function swapPlayer(){
	if(current_player == 'X'){
		current_player  = 'O';
	}else{
		current_player = 'X';
	}
	var output = current_player+"'s Turn ";
	$('.tic-output').html(output);
}
// Board Functionality
function GameOver(){
	return (FoundWinner()||NoMovesLeft());
}
function NoMovesLeft(){
	for(id in board){
		if(board[id] == ' '){
			return 0;
		}
	}
	$('.tic-output').css('background-color','tan');
	$('.tic-output').html("Pchh, No moves left :(");
	return 1;
}
function FoundWinner(){
	for(id in winPositions){
		if((board[winPositions[id][0]] != ' ' ) &&( board[winPositions[id][0]] == board[winPositions[id][1]]) && (board[winPositions[id][1]] == board[winPositions[id][2]]))
		{
			$('.tic-output').css('background-color','yellowgreen');
			$('.tic-output').html("Hurray, "+current_player+" is the winner");	
			return 1;
		}
	}
	return 0;
}



