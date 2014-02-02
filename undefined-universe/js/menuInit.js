function menuInit()
{
    p1Frame = new UIFrame({x: 0, y: 0, width: canvas.width, height: 175, backgroundColor: "rgb(255, 25, 25)"});
    p2Frame = new UIFrame({x: 0, y: (canvas.height-175), width: canvas.width, height: 175, backgroundColor: "rgb(25, 25, 255)"});
    classeNButtonFrame = new UIFrame({x: 125, y: 215, width: 455, height: 180, backgroundColor: "rgb(120, 120, 120)"});
    currentChooserFrame = new UIFrame({x: 10, y: 215, width: 100, height: 180, backgroundColor: "rgb(120, 120, 120)"});

    framesUI = [p1Frame , p2Frame, classeNButtonFrame, currentChooserFrame];

    p1Label = new UILabel({parent: currentChooserFrame, x: 8, y: 60, size: "18", text: "Player 1"});
    p2Label = new UILabel({parent: currentChooserFrame, x: 8, y: 135, size: "17", text: "Player 2", active: false});

    labels = [p1Label, p2Label];

    //Emplacements player1
    for(var i = 0; i < 4; i++)
    {
        placementsP1.push(new UIButton({x: 140+i*150, y: 50, width: 75, height: 75}, function(){console.log("Annulation data P1")}));
    }
    //Emplacements player2
    for(var i = 0; i < 4; i++)
    {
        placementsP2.push(new UIButton({x: 140+i*150, y: 535, width: 75, height: 75}, function(){console.log("Annulation data P2")}));
    }

    currentChooser = player1;

    //Boutons classes
    classeButtons.push(new UIButton({x: 175, y: 325, width: 60, height: 60, spriteNormal: guerrierImg, spriteHover: guerrierHoverImg, content: "Guerrier"}, function(){    //Guerrier
       if(tempWorldSelec != null)
        {
            if(currentChooser==player1)
            {
                currentChooser.push(new Guerrier(tempWorldSelec,[Foudre],matrix,{x:Math.random()*9>>0,y:Math.random()*9>>0},"joueur1"));
                render1.push(new RenderChar(player1[player1.length-1].render()));
                placementsP1[player1.length-1].spriteNormal = new Image();
                placementsP1[player1.length-1].spriteNormal.src = "assets/characters/joueur1_warrior_"+tempWorldSelec+".png";
                placementsP1[player1.length-1].currentSprite = placementsP1[player1.length-1].spriteNormal;
                placementsP1[player1.length-1].contextualContent = "Guerrier "+tempWorldSelec;
            }
            if(currentChooser==player2)
            {
                currentChooser.push(new Guerrier(tempWorldSelec,[Foudre],matrix,{x:Math.random()*9>>0,y:Math.random()*9>>0},"joueur2"));
                render2.push(new RenderChar(player2[player2.length-1].render()));

                placementsP2[player1.length-1].spriteNormal = new Image();
                placementsP2[player1.length-1].spriteNormal.src = "assets/characters/joueur2_warrior_"+tempWorldSelec+".png";
                placementsP2[player1.length-1].currentSprite = placementsP2[player1.length-1].spriteNormal;
                placementsP2[player1.length-1].contextualContent = "Guerrier "+tempWorldSelec;
            }
            changeChooser();
        }}));
  classeButtons.push(new UIButton({x: 175+75, y: 325, width: 60, height: 60, spriteNormal: archerImg, spriteHover: archerHoverImg, content: "Archer"}, function(){if(tempWorldSelec != null)

        {
            if(currentChooser==player1)
            {
                currentChooser.push(new Archer(tempWorldSelec,[Foudre],matrix,{x:Math.random()*9>>0,y:Math.random()*9>>0},"joueur1"));
                render1.push(new RenderChar(player1[player1.length-1].render()));

                placementsP1[player1.length-1].spriteNormal = new Image();
                placementsP1[player1.length-1].spriteNormal.src = "assets/characters/joueur1_archer_"+tempWorldSelec+".png";
                placementsP1[player1.length-1].currentSprite = placementsP1[player1.length-1].spriteNormal;
                placementsP1[player1.length-1].contextualContent = "Archer "+tempWorldSelec;
            }
            if(currentChooser==player2)
            {
                currentChooser.push(new Archer(tempWorldSelec,[Foudre],matrix,{x:Math.random()*9>>0,y:Math.random()*9>>0},"joueur2"));
                render2.push(new RenderChar(player2[player2.length-1].render()));

                placementsP2[player1.length-1].spriteNormal = new Image();
                placementsP2[player1.length-1].spriteNormal.src = "assets/characters/joueur2_archer_"+tempWorldSelec+".png";
                placementsP2[player1.length-1].currentSprite = placementsP2[player1.length-1].spriteNormal;
                placementsP2[player1.length-1].contextualContent = "Archer "+tempWorldSelec;
            }
            changeChooser();
        }}));
    classeButtons.push(new UIButton({x: 175+150, y: 325, width: 60, height: 60, spriteNormal: mageImg, spriteHover: mageHoverImg, content: "Mage"}, function(){if(tempWorldSelec != null)
        {
            if(currentChooser==player1)
            {
                currentChooser.push(new Mage(tempWorldSelec,[Foudre],matrix,{x:Math.random()*9>>0,y:Math.random()*9>>0},"joueur1"));
                render1.push(new RenderChar(player1[player1.length-1].render()));

                placementsP1[player1.length-1].spriteNormal = new Image();
                placementsP1[player1.length-1].spriteNormal.src = "assets/characters/joueur1_mage_"+tempWorldSelec+".png";
                placementsP1[player1.length-1].currentSprite = placementsP1[player1.length-1].spriteNormal;
                placementsP1[player1.length-1].contextualContent = "Mage "+tempWorldSelec;
            }
            if(currentChooser==player2)
            {
                currentChooser.push(new Mage(tempWorldSelec,[Foudre],matrix,{x:Math.random()*9>>0,y:Math.random()*9>>0},"joueur2"));
                render2.push(new RenderChar(player2[player2.length-1].render()));

                placementsP2[player1.length-1].spriteNormal = new Image();
                placementsP2[player1.length-1].spriteNormal.src = "assets/characters/joueur2_mage_"+tempWorldSelec+".png";
                placementsP2[player1.length-1].currentSprite = placementsP2[player1.length-1].spriteNormal;
                placementsP2[player1.length-1].contextualContent = "Mage "+tempWorldSelec;
            }
            changeChooser();
        }}));
    classeButtons.push(new UIButton({x: 175+225, y: 325, width: 60, height: 60, spriteNormal: cavalierImg, spriteHover: cavalierHoverImg, content: "Cavalier"}, function(){if(tempWorldSelec != null)
        {
            if(currentChooser==player1)
            {
                currentChooser.push(new Cavalier(tempWorldSelec,[Foudre],matrix,{x:Math.random()*9>>0,y:Math.random()*9>>0},"joueur1"));
                render1.push(new RenderChar(player1[player1.length-1].render()));

                placementsP1[player1.length-1].spriteNormal = new Image();
                placementsP1[player1.length-1].spriteNormal.src = "assets/characters/joueur1_cavalier_"+tempWorldSelec+".png";
                placementsP1[player1.length-1].currentSprite = placementsP1[player1.length-1].spriteNormal;
                placementsP1[player1.length-1].contextualContent = "Cavalier "+tempWorldSelec;
            }
            if(currentChooser==player2)
            {
                currentChooser.push(new Cavalier(tempWorldSelec,[Foudre],matrix,{x:Math.random()*9>>0,y:Math.random()*9>>0},"joueur2"));
                render2.push(new RenderChar(player2[player2.length-1].render()));

                placementsP2[player1.length-1].spriteNormal = new Image();
                placementsP2[player1.length-1].spriteNormal.src = "assets/characters/joueur2_cavalier_"+tempWorldSelec+".png";
                placementsP2[player1.length-1].currentSprite = placementsP2[player1.length-1].spriteNormal;
                placementsP2[player1.length-1].contextualContent = "Cavalier "+tempWorldSelec;
            }
            changeChooser();
        }}));
    classeButtons.push(new UIButton({x: 175+300, y: 325, width: 60, height: 60, spriteNormal: pretreImg, spriteHover: pretreHoverImg, content: "Pretre"}, function(){if(tempWorldSelec != null)
        {
            if(currentChooser==player1)
            {
                currentChooser.push(new Pretre(tempWorldSelec,[Foudre],matrix,{x:Math.random()*9>>0,y:Math.random()*9>>0},"joueur1"));
                render1.push(new RenderChar(player1[player1.length-1].render()));

                placementsP1[player1.length-1].spriteNormal = new Image();
                placementsP1[player1.length-1].spriteNormal.src = "assets/characters/joueur1_pretre_"+tempWorldSelec+".png";
                placementsP1[player1.length-1].currentSprite = placementsP1[player1.length-1].spriteNormal;
                placementsP1[player1.length-1].contextualContent = "Pretre "+tempWorldSelec;
            }
            if(currentChooser==player2)
            {
                currentChooser.push(new Pretre(tempWorldSelec,[Foudre],matrix,{x:Math.random()*9>>0,y:Math.random()*9>>0},"joueur2"));
                render2.push(new RenderChar(player2[player2.length-1].render()));

                placementsP2[player1.length-1].spriteNormal = new Image();
                placementsP2[player1.length-1].spriteNormal.src = "assets/characters/joueur2_pretre_"+tempWorldSelec+".png";
                placementsP2[player1.length-1].currentSprite = placementsP2[player1.length-1].spriteNormal;
                placementsP2[player1.length-1].contextualContent = "Pretre "+tempWorldSelec;
            }
            changeChooser();
        }}));
    //Boutons world
    for(var i = 0; i < 6; i++)
    {
        worldButtons.push(new UIButton({x: 135+i*75, y: 225, width: 60, height: 60, spriteNormal: worldButtonsImg[i], spriteHover: worldButtonsHoverImg[i], content: worldButton_data[i]}, function(){selecWorld(this.content.index, this)}));
        worldButtons[worldButtons.length-1].content.index = i;
    }


    buttons.push(classeButtons, worldButtons, placementsP1, placementsP2);
}