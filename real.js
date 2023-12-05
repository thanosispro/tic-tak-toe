var a,count,i,j,b,c,test;
var board=document.getElementsByClassName("fix");


var cells=
[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
];
console.log(cells[2][2]);
function checkdraw(){
    
if(board[0].innerHTML!=="" && board[1].innerHTML!=="" && board[2].innerHTML!=="" && board[3].innerHTML!=="" && board[4].innerHTML!=="" && board[5].innerHTML!=="" &&  board[6].innerHTML!=="" && board[7].innerHTML!=="" && board[8].innerHTML!==""){
    document.getElementById("winner").innerHTML=`The Game is Draw`;
    document.getElementById("gif").innerHTML='<img src="1.gif" alt="" width="200pt">';
document.getElementById("button").innerHTML='<button class="btn" onclick="restart()">Rematch?</button>'; 
}

    
}


function checkwin(){
   console.log("nice")
   for(j=0;j<=7;j++){
for(i=0;i<=0;i++){
    
  if(board[cells[j][i]].innerHTML=="X" && board[cells[j][i+1]].innerHTML=="X" && board[cells[j][i+2]].innerHTML=="X" || board[cells[j][i]].innerHTML=="O" && board[cells[j][i+1]].innerHTML=="O" && board[cells[j][i+2]].innerHTML=="O"){
    document.getElementById("winner").innerHTML=`The winner is ${board[cells[j][i]].innerHTML}`
board[cells[j][i]].style.backgroundColor= "lightblue";
board[cells[j][i+1]].style.backgroundColor= "lightblue";
board[cells[j][i+2]].style.backgroundColor= "lightblue";
document.getElementById("gif").innerHTML='<img src="1.gif" alt="" width="200pt">';
document.getElementById("button").innerHTML='<button class="btn" onclick="restart()">Rematch?</button>';
b=1;
}


}
   }
}


function play(that){
   
    if(that.innerHTML=="" && b!=1){

that.innerHTML=document.getElementById("turn").innerHTML;
if(that.innerHTML=="X"){
    document.getElementById("turn").innerHTML="O";
}
else{
    document.getElementById("turn").innerHTML="X";
}



}
checkwin();
test=0;
checkdraw();
}
function restart(){
    b=0;
    for(j=0;j<=8;j++){
       board[j].innerHTML="";
       board[j].style.backgroundColor="white";
    }
    document.getElementById("gif").innerHTML='';
    document.getElementById('winner').innerHTML='';
    document.getElementById('button').innerHTML='';
}
