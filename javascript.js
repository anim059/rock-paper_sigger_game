
function rpsgame(mychoice){
	console.log(mychoice.id);
	var humanchoice=mychoice.id;
	var computerchoice=pickrandomvalue(Math.floor(Math.random()*3));
	console.log(computerchoice);
    var massage=decidewinner(humanchoice,computerchoice)
    console.log(massage);
     resultshow(humanchoice,computerchoice,massage)
}

function pickrandomvalue(comchoice){
    var pickvalue={0:'rock',1:'paper',2:'scizzer'};
return pickvalue[comchoice];
}
function decidewinner(humanchoice,computerchoice){
	if(humanchoice=='paper' && computerchoice=='rock')
		return 'You Win';
	if(humanchoice=='paper' && computerchoice=='scizzer')
		return 'You lost';
	if(humanchoice=='paper' && computerchoice=='paper')
		return 'Game Tie';
	if(humanchoice=='rock' && computerchoice=='scizzer')
		return 'You Win';
	if(humanchoice=='rock' && computerchoice=='paper')
		return 'You lost';
	if(humanchoice=='rock' && computerchoice=='rock')
		return 'Game Tie';
	if(humanchoice=='scizzer' && computerchoice=='paper')
		return 'You Win';
	if(humanchoice=='scizzer' && computerchoice=='rock')
		return 'You lost';
	if(humanchoice=='scizzer' && computerchoice=='scizzer')
		return 'Game Tie';
}
function resultshow(humanchoice,computerchoice,massage){
    
   var imgdata={
     'rock':document.getElementById('rock').src,
     'paper':document.getElementById('paper').src,
     'scizzer':document.getElementById('scizzer').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scizzer').remove();

    
    var humandiv=document.createElement('div')
    var botdiv=document.createElement('div')
    var massagediv=document.createElement('div')
    humandiv.setAttribute('id','humandiv')
    humandiv.innerHTML="<img src='"+ imgdata[humanchoice] + "' width=100px height=100px><h3>your choice</h3>"
     massagediv.setAttribute('id','massagediv')
    massagediv.innerHTML="<h1 style=font-size:50px;>"+massage+"</h1>"
     botdiv.setAttribute('id','botdiv')
    botdiv.innerHTML="<img src='"+ imgdata[computerchoice] + "' width=100px height=100px><h3>bot choice</h3"

      document.getElementById('flex-container').appendChild(botdiv);
     document.getElementById('flex-container').appendChild(massagediv);
       document.getElementById('flex-container').appendChild(humandiv);
     
	
}