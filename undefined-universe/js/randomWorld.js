function createRandomCharacterWorld(whichCharacter, wichWorld) //cette fonction va creer un tableau de world random pour le perso en paramètre, 
													// wichworld = index du monde selectionné dans worldData permet de savoir combien de cases 
													//speciales poperont sur la map
{
	var randomLine;
	var randomColumn;
	var maxSpecialCase = worldData[wichWorld].specialCaseCount;
	var baseWorld = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],	// les 2 premières et 2 dernières lignes du monde ne pourront pas accueillir de case speciale
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	];

	for ( i = 0; i < maxSpecialCase; i +=1) // on va executer cette boucle une fois par case speciale 
	{	
		randomLine= Math.floor(Math.random()*(baseWorld.length-4)); 
		randomColumn=	Math.floor(Math.random()*(9));
		
		//on tire une ligne au hasard et une colonne puis on assigne à cette case le numero 1 dans baseworld
		baseWorld[randomLine+2][randomColumn] = worldData[wichWorld].type; // 2 = case spéciale
	}
	
	whichCharacter.world = baseWorld;	//(ex wichCharacter = player1.team[2])
}

function createRandomMatrix() 
{
	var randomLine;
	var randomColumn;
	var maxSpecialCase = 12;
	var baseWorld = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],	// les 2 premières et 2 dernières lignes du monde ne pourront pas accueillir de case speciale
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	];

	for ( i = 0; i < maxSpecialCase; i +=1) // on va executer cette boucle une fois par case speciale 
	{	
		randomLine = Math.floor(Math.random()*(baseWorld.length-4)); 
		randomColumn = Math.floor(Math.random()*(13));
		
		
		baseWorld[randomLine+2][randomColumn] = 1;
	}
	
	 return matrix = baseWorld;	
}

function createNewMap(matrix, characterWorld) // createNewMap va comparer la matrix de base et le monde du personnage pour creer le mélange final des 2
{
	var baseWorld = [				//on créé un monde de base sur lequel on va construire petit à petit la map finale
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],	
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
	];
	
	for(i=0; i<baseWorld.length; i+=1) // on parcours les lignes 
	{
		for(j=0; j<9; j+=1) // on parcours les lignes
		{
			if(matrix[i][j] === characterWorld[i][j])
			{
				baseWorld[i][j] = matrix[i][j];
			}
			else
			{
				if(matrix[i][j] === 0 && characterWorld[i][j] === 2)
				{
					baseWorld[i][j] = characterWorld[i][j];
				}
				else if(matrix[i][j] === 0 && characterWorld[i][j] === 1)
				{
					baseWorld[i][j] = characterWorld[i][j];
				}
				else if(matrix[i][j] === 1 && characterWorld[i][j] === 0)
				{
					baseWorld[i][j] = matrix[i][j];
				}
				else if(matrix[i][j] === 1 && characterWorld[i][j] === 2)
				{
					baseWorld[i][j] = matrix[i][j];
				}
			}
		}
	}

	 return currentMap = baseWorld;	

}