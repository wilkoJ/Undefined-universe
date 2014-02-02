var Mouvement = Class.extend({
	init:function()
	{
	},
	mouveChar:function(entitee,path)
	{
			for(var i=0 ; i<path.length; i++)
			{	
				matrix[entitee.position.y][entitee.position.x]=0;
				entitee.position.x=path[i][0];
				entitee.position.y=path[i][1];
				matrix[entitee.position.y][entitee.position.x]=1;
			}
	entitee.isFocus=false;
	}
})