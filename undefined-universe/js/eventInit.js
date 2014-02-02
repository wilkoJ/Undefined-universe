function eventInit()
{
    //****Mouse****//
        //OnClick
    canvas.addEventListener("click", function(e){
		if(state == "IN_GAME")
		{
			if(!click1)
			{
				click1=mouse.findCase(e.clientX, e.clientY)
				for(var i=0;i<player1.length;i++)
				{
					if(player1[i].position.x==click1.x && player1[i].position.y==click1.y)
					{
						player=player1[i];
						player.isFocus=true;
					}
				}
				for(var i=0;i<player2.length;i++)
				{
					if(player2[i].position.x==click1.x && player2[i].position.y==click1.y)
					{
						player=player2[i];
						player.isFocus=true;
					}
				}
				if (!player)
					click1=0;
			}
			else if(click1 && !click2)
			{
				click2=mouse.findCase(e.clientX, e.clientY)
				findPath();
				for(var i=0;i<player1.length;i++)
				{
					if(player1[i].isFocus)
					{
						console.log(player2[i].position);
						deplacement.mouveChar(player1[i],path);
					}
				}
				for(var i=0;i<player2.length;i++)
				{
					if(player2[i].isFocus)
					{
						// console.log(player1[i].position);
						deplacement.mouveChar(player2[i],path);
					}
				}
				click1=0;
				click2=0;
				player=0;
				path=0;
			}
		}
		else if(state == "SELEC_PERSO")
		{
			mouse.findButton(e.clientX, e.clientY);
		}		
	});
        //MouseMove
    canvas.addEventListener("mousemove", function(e){
	if(click1)
	{
		pos2=mouse.updatePos(e.clientX, e.clientY)
		drawPath();
	}
	for(var i=0; i<buttons.length; i++)
        {
            for(var j=0; j<buttons[i].length; j++)
            {
                if(buttons[i][j].checkHover(e.clientX, e.clientY) && buttons[i][j].contextualContent != null)
                {
                    var _content = buttons[i][j].contextualContent; //String

                    var frameWidth = (buttons[i][j].contextualContent.length+1)*12;

                    actualContextual = [];
                    actualContextual.push(new UIFrame({x: mouse.pos.x, y: mouse.pos.y - 20, width: frameWidth, height: 35, backgroundColor: "rgb(25, 25, 25)"}));
                    actualContextual.push(new UILabel({parent: actualContextual[0], x: 3, y: 25, size: "18", text: _content}));

                    return;
                }
                else
                {
                    actualContextual = null;
                }
            }
        }
	});
}
