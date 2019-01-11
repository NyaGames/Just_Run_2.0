JustRun.carga_nivelOceano = function(game){
	
}
JustRun.carga_nivelOceano.prototype = {
	preload: function(){
		game.load.image('sea', 'assets/fondos/oceano.png');
		game.load.image('ground', 'assets/tiles/oceano/arena.png');
		game.load.image('bubble', 'assets/sprites/Oceano/Burbuja.png');
		game.load.image('piedra', 'assets/tiles/oceano/piedra.png');
		game.load.spritesheet('shark', 'assets/sprites/Oceano/Tiburon.png', 104, 42, 4);
		game.load.image('ancla', 'assets/sprites/Oceano/Ancla.png');
		game.load.image('erizo', 'assets/sprites/Oceano/ErizoCerrado.png');
		game.load.image('erizoa', 'assets/sprites/Oceano/ErizoAbierto.png');
		game.load.image('betiburon', 'assets/sprites/Oceano/TiburonON.png');
		game.load.image('batiburon', 'assets/sprites/Oceano/TiburonOFF.png');
		game.load.image('beancla', 'assets/sprites/Oceano/AnclaON.png');
		game.load.image('baestalactita', 'assets/sprites/Oceano/AnclaOFF.png');
		game.load.image('beerizo', 'assets/sprites/Oceano/ErizoON.png');
		game.load.image('baerizo', 'assets/sprites/Oceano/ErizoOFF.png');
		game.load.audio('song', 'assets/music/oceano.mp3');	
    },
    create: function(){	
        game.state.start('desierto');
    }
}