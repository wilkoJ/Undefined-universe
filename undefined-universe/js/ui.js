/********************************
*
*   Classes d'UI
*
********************************/
var UIFrame = function(params)
{
    this.x = params.x;
    this.y = params.y;

    this.width = params.width;
    this.height = params.height;

    this.spriteNormal = params.sprite || null;
    this.spriteHover = params.spriteHover || null;

    this.backgroundColor = params.backgroundColor || null;

    this.parent = params.parent || {x: 0, y:0};

    this.update = function()
    {
        if(this.sprite != null)
        {
            //Render avec image..
        }
        else if(this.backgroundColor != null)
        {
            context.fillStyle = this.backgroundColor;
            context.fillRect(this.x + this.parent.x, this.y + this.parent.y, this.width, this.height);
        }
        else    //Si aucun background on fait un cadre
        {
            context.fillStyle = "rbg(255, 255, 255)";
            context.fillRect(this.x + this.parent.x, this.y + this.parent.y, this.width, this.height);
        }
    }
}

var UIButton = function(params, callback)
{
    this.x = params.x;
    this.y = params.y;

    this.width = params.width;
    this.height = params.height;

    this.parent = params.parent || {x: 0, y: 0};

    this.spriteNormal = params.spriteNormal || null;    //Tableau des sprites
    this.spriteHover = params.spriteHover || null;

    this.currentSprite = this.spriteNormal;

    this.hover = false;

    this.content = {};

    this.contextualContent = params.content || null;
    this.contextualFrame;

    this.update= function()
    {
        if(this.currentSprite != null)
        {
            context.drawImage(this.currentSprite, 0, 0, 500, 500, this.x, this.y, this.width, this.height);
        }
        else
        {
            context.fillStyle = "rgb(200, 200, 200)";
            context.fillRect(this.x + this.parent.x, this.y + this.parent.y, this.width, this.height);
        }
        
    }

    this.checkHover = function(x, y, callback)
    {
        var _pos = mouse.checkPosPx(x, y);

        if((_pos.x < (this.x+this.parent.x) + this.width) && (_pos.x > (this.x+this.parent.x)) && (_pos.y < (this.y+this.parent.y) + this.height) && (_pos.y > (this.y+this.parent.y)))
        {
            return true;
        }

        return false;
    }

    this.callback = callback;

}

var UILabel = function(params)
{
    this.x = params.x;
    this.y = params.y;

    this.width = params.width;
    this.height = params.height;

    this.text = params.text;

    this.size = params.size + "pt" || "40pt";

    this.fonts = params.fonts || "Arial";

    this.active = params.active;    //Sale de pas mettre || true mais sinon ça met true quoi qu'il arrive, vieux bug

    this.color = params.color || "rgb(255, 255, 255)";

    this.parent = params.parent || {x: 0, y: 0};    //Le parent doit avoir un x et y

    this.update = function()
    {
        context.font = this.size +" "+ this.fonts;

        if(this.active === false)
        {
            context.strokeStyle = this.color;
            context.strokeText(this.text, this.x + this.parent.x, this.y + this.parent.y);
        }
        else
        {
            context.fillStyle = this.color;
            context.fillText(this.text, this.x + this.parent.x, this.y + this.parent.y);
        }
    }
}

/********************************************/
/*********************************************
*
*   Menu de selection du perso
*
*********************************************/
    /*****************************
    *   Variables
    *****************************/
    var tempWorldSelec; //Variable temporaire pour le stockage du monde
    var worldButton_data = ["desert", "feu", "glace", "mystique", "nature", "necro"];

    var tempButton = null;

    var currentChooser = player1;
    /*****************************
    *   Méthodes
    *****************************/
    function selecWorld(index, button)  //Appelé lors de la selection du monde
    {
        if(tempButton == null)
        {
            tempButton = button;
            tempButton.currentSprite = tempButton.spriteHover;
        }
        else
        {
            tempButton.currentSprite = tempButton.spriteNormal;
            tempButton = button;
            tempButton.currentSprite = tempButton.spriteHover;
        }

        tempWorldSelec = worldButton_data[index];
        console.log(index);
    }

    function changeChooser()    //Pour switch le selectionneur
    {
        if(currentChooser == player1)
        {
            currentChooser = player2;
            p1Label.active = false;
            p2Label.active = undefined;
        }
        else if(currentChooser == player2)
        {
            if(player2.length == 4)
            {
                state = "IN_GAME";
                return;
            }

            currentChooser = player1;
            p2Label.active = false;
            p1Label.active = undefined;
        }

        tempButton.currentSprite = tempButton.spriteNormal;
        tempWorldSelec = null;
    }