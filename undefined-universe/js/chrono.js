var Chrono = function()
{
	this.maxTime = 10;
	this.currentTime = 10;
	
	this.Update = function(){
	
	if(this.currentTime > 0)
	{
		this.currentTime -=1;
		document.getElementById("timer").innerHTML = this.currentTime;
	}
	else
	{
		this.currentTime = this.maxTime;
		if(Turn < player1.length * 2)
		{
			Turn += 1;
		}
		else
		{
			Turn = 1;
		}
			document.getElementById("characterTurn"+Turn).style.backgroundImage = "url('assets/UI/currentCharacterTurnsUI.png')";
		
		if(Turn === 1)
		{
			document.getElementById("characterTurn"+player1.length*2).style.backgroundImage = "url('assets/UI/CharacterTurnsUI.png')";
		}
		else{
			document.getElementById("characterTurn"+(Turn-1)).style.backgroundImage = "url('assets/UI/CharacterTurnsUI.png')";
		}
	}
	}

}