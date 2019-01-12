JustRun.carga_nivelDesierto = function(game){
	
}
JustRun.carga_nivelDesierto.prototype = {
	preload: function(){
		game.load.image('fondo', 'assets/fondos/FondoDesierto.png');
		game.load.image('ground', 'assets/tiles/desierto/arena.png');
		game.load.image('arena', 'assets/tiles/desierto/arenaSombra.png');
		game.load.image('ledge', 'assets/tiles/desierto/SandStone.png');
		game.load.image('plataforma', 'assets/tiles/desierto/plataforma.png');
		game.load.image('bala', 'assets/sprites/Desierto/bala.png');
		game.load.image('vaquero', 'assets/sprites/Desierto/vaquero.png');
		game.load.spritesheet('tweed', 'assets/sprites/Desierto/TumbleWeed128x192.png', 128, 192, 8);
		game.load.spritesheet('buitre', 'assets/sprites/Desierto/buitre200x70.png', 200, 70, 4);
		game.load.image('cactus', 'assets/sprites/Desierto/Cactus.png');
		game.load.image('vaquero', 'assets/sprites/Desierto/vaquero.png');
		game.load.image('beTW', 'assets/sprites/Desierto/TWON.png');
		game.load.image('baTW', 'assets/sprites/Desierto/TWOFF.png');
		game.load.image('bebuitre', 'assets/sprites/Desierto/BuitreON.png');
		game.load.image('babuitre', 'assets/sprites/Desierto/BuitreOFF.png');
		game.load.image('bevaquero', 'assets/sprites/Desierto/VaqueroON.png');
		game.load.image('bavaquero', 'assets/sprites/Desierto/VaqueroOFF.png');		
		game.load.audio('song', 'assets/music/desierto.mp3');		
    },
    create: function(){	
        game.state.start('desierto');
    }
}