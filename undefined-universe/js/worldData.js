var worldData = 
	[
		{
			type: "feu",
			effet: "Les zones enflammées infligent 1 dégât aux personnages", 
			specialCaseCount: 8,
			type:2    // type 0: case normale, 1: case infranchissable, 2: case spéciale
		},

		{
			type: "nature",
			effet: "les bosquets réduisent le déplacement des personnages de 1 \n et les rends invulnérables aux attaques à distance", 
			specialCaseCount: 8,
			type:2
		},
		
		{
			type: "desert",
			effet: "Les rochers tuent les personnages sur le coup à leur apparition et représentent des zones infranchissables", 
			specialCaseCount: 6,
			type:1
		},
		
		{
			type: "glace",
			effet: "Les déplacement sur les zones de verglas ne consomment pas de déplacement", 
			specialCaseCount: 10,
			type:2
		},
		
		{
			type: "necro",
			effet: "Les personnages sur les zones de malediction infligent le double de dégats, mais en subissent le double également", 
			specialCaseCount: 5,
			type:2
		},
		
		{
			type: "mystique",
			effet: "Les vortex téléportent les personnages aléatoirement sur le terrain", 
			specialCaseCount: 2,
			type:2
		},