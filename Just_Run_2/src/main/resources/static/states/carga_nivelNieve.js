JustRun.carga_nivelNieve = function(game){
	
}
JustRun.carga_nivelNieve.prototype = {
	preload: function(){
		//carga de los sprites usados en el mundo de la nieve	
		game.load.spritesheet('chaser', 'assets/sprites/rojo/Rojo64pxl.png', 48, 48, 178);
		game.load.spritesheet('escapist', 'assets/sprites/verde/verde64pxl.png', 48, 48, 155);	
			game.load.image('snowfield', 'assets/fondos/nieveoscuro.png');
			game.load.image('ground', 'assets/tiles/nieve/tierra.png');
			game.load.image('snow', 'assets/tiles/nieve/nieve.png');		
			game.load.image('water', 'assets/tiles/nieve/agua.png');
			game.load.image('waters', 'assets/tiles/nieve/agua_sin nieve.png');
			game.load.image('ledge', 'assets/tiles/nieve/ledge.png');
			game.load.image('particulas', 'assets/tiles/nieve/particulasnieve.png');
			game.load.image('ledges', 'assets/tiles/nieve/hielo_sin.png');
			game.load.spritesheet('snowball', 'assets/sprites/nieve/bola de nieve/BolaNieve.png', 106, 106, 12);
			game.load.image('chuzo', 'assets/sprites/nieve/Estalactita.png');
			game.load.image('pinguino', 'assets/sprites/nieve/pinguino.png');
			game.load.image('bebola', 'assets/sprites/nieve/bbola.png');
			game.load.image('babola', 'assets/sprites/nieve/bolaapagado.png');
			game.load.image('bestalactita', 'assets/sprites/nieve/bestalactita.png');
			game.load.image('baestalactita', 'assets/sprites/nieve/estalactitaapagado.png');
			game.load.image('bepinguino', 'assets/sprites/nieve/bpinguino.png');
			game.load.image('bapinguino', 'assets/sprites/nieve/pinguinoapagado.png');	
			game.load.audio('song', 'assets/music/nieve.mp3');	
    },
    create: function(){	
        game.state.start('nieve');
    }
}