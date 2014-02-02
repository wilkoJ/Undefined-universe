var Render = Class.extend({
	image:"",
	init:function(image)
	{
		this.image=image;
	},
	//methode abstraite;
	startRender:function(entitee)
	{
	
	}
})
var RenderChar = Render.extend({
	
	startRender:function(entitee)
	{
		context.drawImage(this.image,entitee.position.x*66,entitee.position.y*66,66,66);
		context.fillStyle="rgb(255,0,0)";
		// context.fillRect(entitee.position.x*66,entitee.position.y*66,66,66);
	}
})
