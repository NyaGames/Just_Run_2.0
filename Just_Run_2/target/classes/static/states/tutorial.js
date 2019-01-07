JustRun.tutorialState = function(game){
	
}
let Tutorial = new Nivel("Tutorial");
JustRun.tutorialState.prototype = {
		//crea la pantalla que se muestra y el control para inciiar con la barra espaciadora
		create: function(){
			//muestra la pantalla del tutorial hasta que se pulse el espacio
			Tutorial.crear(Tutorial);
		},
		update: function(){
			if(entrada.EnterInputIsActive(5)){
				this.start();
			}
		},
		start: function(){
			game.state.start('matchmaking');
		},	
}