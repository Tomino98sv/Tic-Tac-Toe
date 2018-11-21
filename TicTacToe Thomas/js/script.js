let board=[
			[0,0,0,0,0,0,0,0,0],	
			[0,0,0,0,0,0,0,0,0]
		  ];

$(document).ready(function() {

});

let countTurn=1;
let x;
function imgClick(index){
  	x=document.getElementsByName('image')[index];
  	checkingTurn(index);
}

let currentPlayer;
function checkingTurn(index){

	if(countTurn==2){								//player two
  					if(board[1][index]==0 &&board[0][index]==0){

  					x.setAttribute("src","img/x.png");
  					currentPlayer=document.getElementsByName('nameP1')[0];
  					currentPlayer.setAttribute("bgcolor","white");
  					currentPlayer=document.getElementsByName('nameP2')[0];
  					currentPlayer.setAttribute("bgcolor","red");


						board[1][index]=1;
						countTurn=1;
						checkResulPtwo();

					}else{
						alert("Acces denied!!!");
					}
  	}else{											//player one
  					if(board[0][index]==0 &&board[1][index]==0){

  					x.setAttribute("src","img/o.png");
  					currentPlayer=document.getElementsByName('nameP2')[0];
  					currentPlayer.setAttribute("bgcolor","white");
  					currentPlayer=document.getElementsByName('nameP1')[0];
  					currentPlayer.setAttribute("bgcolor","red");

						board[0][index]=1;
						countTurn=2;
						checkResulPone();

					}else{
						alert("Acces denied!!!");
					}
  	}

}

let scorePlayerOne=0;

function checkResulPone(){
	if(!(board[0][0]!=1 || board[0][1]!=1 || board[0][2]!=1)){
		playerOneWin();
	}
	if(!(board[0][3]!=1 || board[0][4]!=1 || board[0][5]!=1)){
		playerOneWin();
	}
	if(!(board[0][6]!=1 || board[0][7]!=1 || board[0][8]!=1)){
		playerOneWin();
	}

	if(!(board[0][0]!=1 || board[0][3]!=1 || board[0][6]!=1)){
		playerOneWin();
	}
	if(!(board[0][1]!=1 || board[0][4]!=1 || board[0][7]!=1)){
		playerOneWin();
	}
	if(!(board[0][2]!=1 || board[0][5]!=1 || board[0][8]!=1)){
		playerOneWin();
	}

	if(!(board[0][0]!=1 || board[0][4]!=1 || board[0][8]!=1)){
		playerOneWin();
	}
	if(!(board[0][2]!=1 || board[0][4]!=1 || board[0][6]!=1)){
		playerOneWin();
	}
}

function playerOneWin(){
	scorePlayerOne++;
	alert("This game win "+Player1Name);
	document.getElementsByName('scoreP1')[0].innerHTML=scorePlayerOne;
	board=[
			[0,0,0,0,0,0,0,0,0],	
			[0,0,0,0,0,0,0,0,0]
		  ];

	for(i=0;i<board[0].length;i++){
		let x=document.getElementsByName('image')[i];
		x.setAttribute("src","img/empty.png");
	}
}

let scorePlayerTwo=0;

function checkResulPtwo(){
	if(!(board[1][0]!=1 || board[1][1]!=1 || board[1][2]!=1)){
		playerTwoWin();
	}
	if(!(board[1][3]!=1 || board[1][4]!=1 || board[1][5]!=1)){
		playerTwoWin();
	}
	if(!(board[1][6]!=1 || board[1][7]!=1 || board[1][8]!=1)){
		playerTwoWin();
	}

	if(!(board[1][0]!=1 || board[1][3]!=1 || board[1][6]!=1)){
		playerTwoWin();
	}
	if(!(board[1][1]!=1 || board[1][4]!=1 || board[1][7]!=1)){
		playerTwoWin();
	}
	if(!(board[1][2]!=1 || board[1][5]!=1 || board[1][8]!=1)){
		playerTwoWin();
	}

	if(!(board[1][0]!=1 || board[1][4]!=1 || board[1][8]!=1)){
		playerTwoWin();
	}
	if(!(board[1][2]!=1 || board[1][4]!=1 || board[1][6]!=1)){
		playerTwoWin();
	}
}

function playerTwoWin(){
	scorePlayerTwo++;
	alert("This game win "+Player2Name);
	document.getElementsByName('scoreP2')[0].innerHTML=scorePlayerTwo;
	board=[
			[0,0,0,0,0,0,0,0,0],	
			[0,0,0,0,0,0,0,0,0]
		  ];

	for(i=0;i<board[0].length;i++){
		let x=document.getElementsByName('image')[i];
		x.setAttribute("src","img/empty.png");
	}
	
}

function start(){										//vstup pre mena hracov
	var h1 = document.createElement("INPUT");
	h1.setAttribute("type","text");
	h1.setAttribute("name","nameP");
	h1.setAttribute("placeholder","Player1 name");
	document.getElementById('newGame').appendChild(h1);
	h1 = document.createElement("INPUT");
	h1.setAttribute("type","text");
	h1.setAttribute("name","nameP");
	h1.setAttribute("placeholder","Player2 name");
	document.getElementById('newGame').appendChild(h1);
	document.getElementById('newGame').disabled=true;
	document.getElementById('apply').disabled=false;
}

let Player1Name;
let Player2Name;

function apply(){										//Ulozit mena hracov

Player1Name=document.getElementsByName('nameP')[0].value;
document.getElementsByName('nameP1')[0].innerHTML="1. "+ Player1Name + " O ";
Player2Name=document.getElementsByName('nameP')[1].value;
document.getElementsByName('nameP2')[0].innerHTML="2. "+ Player2Name + " X ";
}

function restart(){      					//pre vynulovanie bodov a prazdnych policok

	board=[
			[0,0,0,0,0,0,0,0,0],	
			[0,0,0,0,0,0,0,0,0]
		  ];

	for(i=0;i<board[0].length;i++){
		let x=document.getElementsByName('image')[i];
		x.setAttribute("src","img/empty.png");
		document.getElementsByName('nameP1')[0].innerHTML= "";
		document.getElementsByName('nameP2')[0].innerHTML= "";
	}

	document.getElementsByName('nameP')[0].value="";
	document.getElementsByName('nameP')[1].value="";
}

