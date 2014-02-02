function checkRange(attackingChar, Cible)// prend en paramètre le perso attaquant, et l'ennemi cliqué avec sa souris
{
	
	var projectileX = attackingChar.position.x; // les variables projectile représentent le chemin en cases parcourue de l'attanquant jusqu'à la cible
	var projectileY = attackingChar.position.y;// l'attaque commence aux coordonnées du perso attaquant
	var cibleX = Cible.position.x;	// on récupère la position de la cible
	var cibleY = Cible.position.y;
	
	for(i=0; i<attackingChar.range+1; i++)// On lance une boucle qui va s'effectuer une fois par range de l'attaquant +1
	{
		if(projectileX < cibleX)	// a chaque boucle, le projectile va se rapprocher d'une case de la cible
		{
			projectileX += 1;
		}
		else if(projectileX > cibleX)
		{
			projectileX -=1;
		}
		else if(projectileX == cibleX)	// si le x du projectile et de la cible est le meme, on va rapprocher le projectile en y
		{
			if(projectileY < cibleY)
			{
				projectileY +=1;
			}
			else if(projectileY > cibleY)
			{
				projectileY -=1;
			}
			else if(projectileY === cibleY)	
			{
				console.Log("cible à portée!")//// ennemi à portée de tir, on peut lancer la fonction d'attaque.
			}
		}
	}


}