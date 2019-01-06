JustRun.carga_nivelCastillo = function(game){
	
}
JustRun.carga_nivelCastillo.prototype = {
	preload: function(){
		//carga de los sprites usados en el mundo de la nieve	
		    game.load.image('castle', 'assets/fondos/castillo.png');
			game.load.image('ground', 'assets/tiles/castillo/tierra.png');
			game.load.image('grass', 'assets/tiles/castillo/hierba.png');	
			game.load.image('carpet', 'assets/tiles/castillo/alfombra.png');	
			game.load.image('ledge', 'assets/tiles/castillo/wood.png');
			game.load.image('pared', 'assets/tiles/castillo/ladrillos.png');
			game.load.image('water', 'assets/tiles/castillo/agua.png');
			game.load.image('coco', 'assets/sprites/Castillo/Cocodrilo.png');
			game.load.spritesheet('horse', 'assets/sprites/Castillo/caballo96x78.png', 96, 78, 10);
			game.load.image('aceite', 'assets/sprites/Castillo/Aceite.png');
			game.load.image('flecha', 'assets/sprites/Castillo/Arrow.png');
			game.load.image('puerta', 'assets/sprites/Castillo/animacionPuerta.png');
			game.load.image('becaballero', 'assets/sprites/Castillo/CaballeroON.png');
			game.load.image('bacaballero', 'assets/sprites/Castillo/CaballeroOFF.png');
			game.load.image('beaceite', 'assets/sprites/Castillo/AceiteON.png');
			game.load.image('baaceite', 'assets/sprites/Castillo/AceiteOFF.png');
			game.load.image('beelfo', 'assets/sprites/Castillo/ElfoON.png');
			game.load.image('baelfo', 'assets/sprites/Castillo/ElfoOFF.png');		
			game.load.audio('song', 'assets/music/castillo.mp3');
    },
    create: function(){	
        game.state.start('castillo');
    }
}