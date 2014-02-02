var Personnage = Class.extend({
	name:"",
	hp:0,
	camp:"",
	isFocus:false,
	init:function(hp,camp,player,deplacement)
	{
		this.hp = hp;
		this.camp = camp;
		this.player=player;
		this.deplacement=deplacement;
	}
});

var Guerrier = Personnage.extend({
	attack:[],
	esquive:50,
	deplacement:2,
	range:0,
	hp:5,
	position:{
	},
	init:function(camp,attack,map,position,player,deplacement){
		this._super(this.hp,camp,player,this.deplacement);
		this.attack=attack
		this.map=map;
		this.position=position;
	},
	subiraDegat:function(touchera){
		var subir=touchera-this.esquive>0?true:false;
		return subir;
	},
	recevoirDegat:function(dommages){
		this.hp-=dommages
	},
	render:function(image){
		var myImage=new Image();
		myImage.src="assets/characters/"+this.player+"_warrior_"+this.camp+".png";
		return myImage;
	}
});

var Mage = Personnage.extend({
	attack:[],
	esquive:50,
	deplacement:3,
	range:0,
	hp:5,
	position:{
	},
	init:function(camp,attack,map,position,player,deplacement){
		this._super(this.hp,camp,player,this.deplacement);
		this.attack=attack
		this.map=map;
		this.position=position;
	},
	subiraDegat:function(touchera){
		var subir=touchera-this.esquive>0?true:false;
		return subir;
	},
	recevoirDegat:function(dommages){
		this.hp-=dommages
	},
	render:function(image){
		var myImage=new Image();
		myImage.src="assets/characters/"+this.player+"_mage_"+this.camp+".png";
		return myImage;
	}
});

var Cavalier = Personnage.extend({
	attack:[],
	esquive:50,
	deplacement:5,
	range:0,
	hp:5,
	position:{
	},
	init:function(camp,attack,map,position,player,deplacement){
		this._super(this.hp,camp,player,this.deplacement);
		this.attack=attack
		this.map=map;
		this.position=position;
	},
	subiraDegat:function(touchera){
		var subir=touchera-this.esquive>0?true:false;
		return subir;
	},
	recevoirDegat:function(dommages){
		this.hp-=dommages
	},
	render:function(image){
		var myImage=new Image();
		myImage.src="assets/characters/"+this.player+"_cavalier_"+this.camp+".png";
		return myImage;
	}
});

var Archer = Personnage.extend({
	attack:[],
	esquive:50,
	deplacement:3,
	range:0,
	hp:5,
	position:{
	},
	init:function(camp,attack,map,position,player,deplacement){
		this._super(this.hp,camp,player,this.deplacement);
		this.attack=attack
		this.map=map;
		this.position=position;
	},
	subiraDegat:function(touchera){
		var subir=touchera-this.esquive>0?true:false;
		return subir;
	},
	recevoirDegat:function(dommages){
		this.hp-=dommages
	},
	render:function(image){
		var myImage=new Image();
		myImage.src="assets/characters/"+this.player+"_archer_"+this.camp+".png";
		return myImage;
	}
});

var Pretre = Personnage.extend({
	attack:[],
	esquive:50,
	deplacement:3,
	range:0,
	hp:5,
	position:{
	},
	init:function(camp,attack,map,position,player,deplacement){
		this._super(this.hp,camp,player,this.deplacement);
		this.attack=attack
		this.map=map;
		this.position=position;
	},
	subiraDegat:function(touchera){
		var subir=touchera-this.esquive>0?true:false;
		return subir;
	},
	recevoirDegat:function(dommages){
		this.hp-=dommages
	},
	render:function(image){
		var myImage=new Image();
		myImage.src="assets/characters/"+this.player+"_pretre_"+this.camp+".png";
		return myImage;
	}
});