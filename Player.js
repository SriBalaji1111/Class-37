class Player {
  constructor(){
	  
	  this.index = 0;
	  this.distance = 0;
	  this.name = null;
	  
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).update({
      name:this.name,
	  distance:this.disatnce
    });
  }
  static getPlayerInfo(){
	  
	var playerInfoRef = database.ref('players');
	playerInfoRef.on("value" , (data)=>{
		allPlayers = data.val();
	})
	 
  }
  
  
}