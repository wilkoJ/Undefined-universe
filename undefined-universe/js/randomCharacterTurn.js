function randomizeCharacterTurns() // la fonction randomizeCharacterTurns donne à chaque personnage de la bataille un ordre de passage 
{
	var res;
var totalCharacters = new Array();			// tableau avec tous les personnages selectionnés
	totalCharacters[0] = player1[0];
	totalCharacters[1] = player1[1];
	totalCharacters[2] = player1[2];
	totalCharacters[3] = player1[3];
	totalCharacters[4] = player2[0];
	totalCharacters[5] = player2[1];
	totalCharacters[6] = player2[2];
	totalCharacters[7] = player2[3];
	
	for ( i = 0; i < totalCharacters.length; i +=1) 
	{
	res= Math.floor(Math.random()*(totalCharacters.length));
	totalCharacters[res].turn = i+1;
	document.getElementById("characterTurn1").style.backgroundImage = "url('assets/UI/currentCharacterTurnsUI.png')";
	totalCharacters.splice(res,1);
	}



}