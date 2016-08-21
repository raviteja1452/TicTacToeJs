// TicTacToe RationalScripts

$(document).ready(function(){
	$(document).on('click','.tic-item',function(){
		var id = $(this).attr('id');
		console.log(id);
		Game(id);
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
});

// Board Calling creation is done on view as well for evaluation part

var board,size;
function ticBoard(size){
	size = size;
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
	return (Evaluation()||NoMovesLeft());
}
function NoMovesLeft(){
	for(i = 0 ; i < size ; i++){
		for(j = 0;j<size;j++){
			if(board[i][j] == '_'){
				return false;
			}
		}
	}
	$('.tic-output').css('background-color','tan');
	$('.tic-output').html("Pchh, No moves left :(");
	return 1;
}
function Evaluation(){
	// Row Checking
	for(i = 0;i < size ;i++){
		if(board[i][0] != '_'){
			var j = 1;
			for(j = 1 ; j < size ; j++){
				if(board[i][j] != board[i][j-1]){
					break;
				}
			}
			if(j == size){
				return 1;
			}
		}
	}
	// Coloumn Checking
	for(i = 0;i < size ;i++){
		if(board[0][i] != '_'){
			var j = 1;
			for(j = 1 ; j < size ; j++){
				if(board[j][i] != board[j-1][i]){
					break;
				}
			}
			if(j == size){
				return 1;
			}
		}
	}
	// Diagonal 1 
	if(board[0][0]!='_'){
		var i = 0;
		for(i = 1; i< size; i++){
			if(board[i][i] != board[i-1][i-1]){
				break;
			}
		}
		if(i == size){
			return 1;
		}
	}
	// Diagonal 2
	if(board[0][size-1]!='_'){
		var i = 0;
		for(i = 1; i < size; i++){
			if(board[i][size-1 - i] != board[i-1][size - i]){
				break;
			}
		}
		if(i == size){
			return 1;
		}
	}
	return 0;
}



