/****************************
*
*   Gameloop
*
****************************/

function run()
{
	stats.begin();
    switch(state)
    {
        case "SELEC_PERSO":
            onSelectionPerso();
        break;
        case "IN_GAME":
            gameloop();
        break;
    }
	stats.end();
    requestAnimFrame(run);
}
function gameloop()
{
    context.clearRect(0, 0, canvas.width, canvas.height);
    myMap.buildmap();
	if(path)
	{
		var x;
		var y;
		var compare;
		if(player.deplacement+1>path.length)
			compare=path.length;
		else
			compare=player.deplacement+1;
		for(var i =0; i < compare;i++)
		{
		console.log(path);
			x=path[i][0];
			y=path[i][1];
			// console.log(x,y);
			context.fillStyle="rgb(255,0,0)";
			context.fillRect(0+x*66,0+y*66,65,65);
		}
	}
	for(var i = 0;i<render1.length;i++)
	{
		// console.log(matrix[player1[i].position.x][player1[i].position.y]);
		render1[i].startRender(player1[i]);
		matrix[player1[i].position.y][player1[i].position.x]=1;
	}
	for(var i = 0;i<render2.length;i++)
	{
		// console.log(render[i],player1[i]);
		render2[i].startRender(player2[i]);
		matrix[player2[i].position.y][player2[i].position.x]=1;
	}
	if(frame%60 === 0)
	{
		timerTurn.Update();
	}
	frame++;
}

function onSelectionPerso()
{
	context.fillStyle = "rgb(0, 0 ,0)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    for(var i=0; i<framesUI.length; i++)
        framesUI[i].update();

    for(var i = 0; i < buttons.length; i++)
    {
        for(var j = 0; j < buttons[i].length; j++)
        {
            buttons[i][j].update();
        }
    }

    for(var i = 0; i < labels.length; i++)
    {
        labels[i].update();
    }

    if(actualContextual != null)
        for(var i=0; i<actualContextual.length; i++)
            actualContextual[i].update();
}