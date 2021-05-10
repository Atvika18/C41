class Player{
    constructor()
    {
        this.distance = 0
        this.name = null
        this.index = null
        this.rank = 0
    }


    getCount()
    {
        var playerCountRef = db.ref('playerCount')
        playerCountRef.on("value", function(value)
    {
         playerCount = value.val()
    })
    }

    getFinishedPlayersCount()
    {
        var finishedPlayersCountRef = db.ref('finishedPlayersCount')
        finishedPlayersCountRef.on("value", function(value)
    {
         finishedPlayersCount = value.val()
    })
    }


    updateCount(count)
    {
        db.ref("/").update({playerCount:count})
    }

   static updateFinishedPlayers()
   {
       db.ref("/").update({finishedPlayersCount: finishedPlayersCount+1})
       this.rank+=1;
   }

    updatePlayer()
    {
        var playerIndex = "players/player"+this.index
        db.ref(playerIndex).set(
            {
                name:this.name, 
                distance:this.distance,
                rank:this.rank,
            })
    }

   static allPlayerInfo()
    {
        var playerInfoRef = db.ref("players")
        playerInfoRef.on("value", (data)=> {
            allPlayers = data.val()
        }) 
    } 
}