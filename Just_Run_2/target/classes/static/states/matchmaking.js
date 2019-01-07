JustRun.matchmakingState = function(game){

}
JustRun.matchmakingState.prototype = {
		//carga la imagen de busqueda
		preload: function(){		
			//carga de lo qu se usara en el menú principal
			game.load.image('buscando','assets/fondos/Buscando.png')
		},
		create: function(){
			//crea un jugador al conectarse, y dice que jugador es cada cliente mediante un ID	
			var buscando = game.add.sprite(0,0,'buscando');
			//animacion pantalla carga
		    var pantallacarga = game.add.sprite(660, 238, 'carga');
		    pantallacarga.scale.setTo(0.2,0.2);
			var loading = pantallacarga.animations.add('load');
			pantallacarga.animations.play('load', 26, true);
		},
		update: function(){
			data = {
			        type: 'GET'
			    }
			ws.send(JSON.stringify(data))
		}	
}