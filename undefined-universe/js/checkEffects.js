function checkAllCharacterPosition() // cette fonction va vérifier la position de tous les personnages sur la map pour vérifier s'ils sont sur une case
									// spéciale. Cette fonction est à appeller à chaque changement d'univers.
{
	
		for(j=0; j<4; j++)// check persos du player1
		{
			if(currentWorld[player1.team[j].position_y][player1.team[j].position_x] === 1) 
			// si le player se trouve sur une case infranchissable, on le bute
			{
				player1.team[j].life = 0;
			}
			else if(currentWorld[player1.team[j].position_y][player1.team[j].position_x] === 2)
			// si il est sur une case speciale, on lance la fonction applySpecialEffect
			{
				applySpecialEffect(player1.team[j]);
			}
		}
		
		for(j=0; j<4; j++)// check persos du player2
		{
			if(currentWorld[player2.team[j].position_y][player2.team[j].position_x] === 1) 
			{
				player2.team[j].life = 0;
			}
			else if(currentWorld[player2.team[j].position_y][player2.team[j].position_x] === 2)
			{
				applySpecialEffect(player2.team[j]);
			}
		}
	

}

function applySpecialEffect(hittenCharacter)
// cette fonction va checker le type du currentWorld (feu, nature, glace...) pour savoir quel effet appliquer au paramètre hittenCharacter
{
	



}