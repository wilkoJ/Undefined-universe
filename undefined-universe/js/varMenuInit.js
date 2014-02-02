    var framesUI = [];  //Tableau des cadres du jeu
    var labels = [];    //Tableau des labels du jeu
    var buttons = [];   //Tableau des boutons du jeu

    /**********************
    *   Menu selection
    *   units
    **********************/
    var actualContextual = null;
    var classeNButtonFrame; //Cadre contenant les boutons de selection des classes et mondes
    var currentChooserFrame;    //Cadre contenant les joueurs et indiquant le joueurs qui selectionne
    var p1Frame;    //Cadre contenant les unit choisies par le joueur1
    var p2Frame;    //Idem pour le joueur2

    var p1Label;    //Label contenu dans currentChooser pour savoir qui choisi (cap obvious)
    var p2Label;    //Idem

    var classeButtons = []; //Boutons des classes
    var worldButtons = [];  //Boutons des mondes

    var placementsP1 = [];  //Emplacements des unitées choisies par le joueur1
    var placementsP2 = [];  //Idem pour le joueur2
    var guerrierImg = new Image();
    guerrierImg.src = "assets/touches personnages/button_warrior_idle.png";
    var guerrierHoverImg = new Image();
    guerrierHoverImg.src = "assets/touches personnages/button_warrior_over.png";
    var guerrierToken = new Image();
    guerrierToken.src = "assets/characters/joueur1_warrior_feu.png";
    
    var archerImg = new Image();
    archerImg.src = "assets/touches personnages/button_archer_idle.png";
    var archerHoverImg = new Image();
    archerHoverImg.src = "assets/touches personnages/button_archer_over.png";
    
    var mageImg = new Image();
    mageImg.src = "assets/touches personnages/button_mage_idle.png";
    var mageHoverImg = new Image();
    mageHoverImg.src = "assets/touches personnages/button_mage_over.png";
    
    var cavalierImg = new Image();
    cavalierImg.src = "assets/touches personnages/button_cavalier_idle.png";
    var cavalierHoverImg = new Image();
    cavalierHoverImg.src = "assets/touches personnages/button_cavalier_over.png";
    
    var pretreImg = new Image();
    pretreImg.src = "assets/touches personnages/button_pretre_idle.png";
    var pretreHoverImg = new Image();
    pretreHoverImg.src = "assets/touches personnages/button_pretre_over.png";

    var worldButtonsImg = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];
    worldButtonsImg[0].src = "assets/touches univers/button_desert_idle.png";
    worldButtonsImg[1].src = "assets/touches univers/button_feu_idle.png";
    worldButtonsImg[2].src = "assets/touches univers/button_glace_idle.png";
    worldButtonsImg[3].src = "assets/touches univers/button_mystique_idle.png";
    worldButtonsImg[4].src = "assets/touches univers/button_nature_idle.png";
    worldButtonsImg[5].src = "assets/touches univers/button_necro_idle.png";

    var worldButtonsHoverImg = [new Image(), new Image(), new Image(), new Image(), new Image(), new Image()];
    worldButtonsHoverImg[0].src = "assets/touches univers/button_desert_over.png";
    worldButtonsHoverImg[1].src = "assets/touches univers/button_feu_over.png";
    worldButtonsHoverImg[2].src = "assets/touches univers/button_glace_over.png";
    worldButtonsHoverImg[3].src = "assets/touches univers/button_mystique_over.png";
    worldButtonsHoverImg[4].src = "assets/touches univers/button_nature_over.png";
    worldButtonsHoverImg[5].src = "assets/touches univers/button_necro_over.png";