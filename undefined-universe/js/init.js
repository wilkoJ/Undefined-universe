//Fonctions de synchronisation d'affichage
window.requestAnimFrame =     (
    function(){
        return  window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback, element){
            window.setTimeout(callback, 1000 / 5);
        };
    }
)();

/*******************************
*
*   Globals
*
*******************************/
var state = "SELEC_PERSO";
var Foudre;
var Feu;
var path;
var Coups;
var player1=[];
var player2=[];
var ennemie1;
var render1=[];
var render2=[];
var myMap;
var click1;
var click2;
var renderGuerrier;
var deplacement;
var pos2;
var canMoove=false;
var stats;
var Turn = 1;
var frame = 0;
var player;
var random1;
var random2;
var lololo;
var matrix = [
    [0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0]
];
var mapTest=[
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
var mouse;

/*******************************
*
*   Varibles d'UI
*
*******************************/
    /**********************
    *   Générale
    **********************/

  
    /**********************
    *   InGame
    **********************/

/******************************//******************************
*
*   Game Init
*
******************************/
window.onload = init;

function init() //Init général
{
    window.canvas  = document.getElementById("mainCanvas");
    window.context = canvas.getContext("2d");

    canvas.width  = 66*13;
    canvas.height = 660;

	createRandomMatrix();
	currentMap = matrix;
	for(var i =0;i<matrix.length;i++)
	{
		for(var j =0;j<matrix[i].length;j++)
		{
			if(matrix[i][j]==1)
				mapTest[i][j]=1;
		}
	}
	random1=Math.random()*mapTest.length>>0;
	random2=Math.random()*mapTest[0].length>>0;
	console.log(mapTest[random1][random2]);
	mapTest[random1][random2]=3;
	matrix[random1][random2]=0;
    menuInit();
    objectsInit();
    eventInit();
	addRender();
    run();
}

function objectsInit()
{
    //"Classique"
	timerTurn = new Chrono();
    mouse = new Mouse(canvas);
	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.left = '0px';
	stats.domElement.style.top = '0px';
	document.body.appendChild(stats.domElement);
    //"Héritiers"
	deplacement= new Mouvement()
    myMap=new MapVolcanique(mapTest);
    Foudre=new SkillAttack("foudre",2,100);
    Feu=new SkillAttack("feu",1,100);
    Coups=new SkillAttack("coups",1,100);
	// guerrier=new Guerrier("desert",[Foudre],matrix,{x:5,y:6});
	// player1.push(guerrier);
	// renderGuerrier= new RenderChar(guerrier.render());

    // ennemie1=new Player("Méchant",3,"feu",[Coups]);

}

function addRender()
{
	for (var i=0; i<player1.length;i++)
	{
		// render.push(new RenderChar(player1[i].render()));
	}
}
