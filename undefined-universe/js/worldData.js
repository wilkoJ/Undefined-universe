var worldData = 
	[
		{
			type: "feu",
			effet: "Les zones enflamm�es infligent 1 d�g�t aux personnages", 
			specialCaseCount: 8,
			type:2    // type 0: case normale, 1: case infranchissable, 2: case sp�ciale
		},

		{
			type: "nature",
			effet: "les bosquets r�duisent le d�placement des personnages de 1 \n et les rends invuln�rables aux attaques � distance", 
			specialCaseCount: 8,
			type:2
		},
		
		{
			type: "desert",
			effet: "Les rochers tuent les personnages sur le coup � leur apparition et repr�sentent des zones infranchissables", 
			specialCaseCount: 6,
			type:1
		},
		
		{
			type: "glace",
			effet: "Les d�placement sur les zones de verglas ne consomment pas de d�placement", 
			specialCaseCount: 10,
			type:2
		},
		
		{
			type: "necro",
			effet: "Les personnages sur les zones de malediction infligent le double de d�gats, mais en subissent le double �galement", 
			specialCaseCount: 5,
			type:2
		},
		
		{
			type: "mystique",
			effet: "Les vortex t�l�portent les personnages al�atoirement sur le terrain", 
			specialCaseCount: 2,
			type:2
		},