var Skill= Class.extend({
	force:0,
	precision:0,
	critique:0,
	name:"",
	init:function(name,force,precision)
	{
		this.name=name;
		this.force=force;
		this.precision=precision;
	},
	//Méthode abstraite de type ComportementSkill
	lancerSkill:function(cible)
	{
	}
});

var SkillAttack = Skill.extend({
	lancerSkill:function(cible)
	{
		var touchera=(Math.random()*100>>0);
		var touche= touchera < this.precision ? 1:0;
		// var isCritique=(Math.random()*100>>0)< this.critique ? 3:1;
		var dommages=touche*this.force*isCritique;
		console.log(touche,this.force,isCritique);
		if(cible.subiraDegat((this.precision-touchera)))
		{
			cible.recevoirDegat(dommages);
			alert("lance le visu");
		}
		else
		{
			alert("Echec");
		}
	}
});