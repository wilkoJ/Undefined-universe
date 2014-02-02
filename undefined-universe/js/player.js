var player_data = {
    limitTeam: 3
};
/***************************/
var Player = function(data)
{
    //Propriétés
    this.team = []; //tableau de l'équipe

    //Selection d'une unit
    this.pickAUnit = function(unit)
    {
        if(this.team.length < data.limitTeam)
             this.team.push();
    }
}