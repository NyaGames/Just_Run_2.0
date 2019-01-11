JustRun.opcionesState = function(game){
	
}
let opcion = 0;
let Opciones = new Nivel("Opciones");
JustRun.opcionesState.prototype = {
		preload: function(){
			game.load.image('OFF', 'assets/fondos/OpcionesOff.png');
			game.load.image('ON', 'assets/fondos/OpcionesOn.png');
		},
		//crea todas las pantalla de ayuda fuera de la cámara
		create: function(){
			//muestra la pantalla del tutorial hasta que se pulse el espacio
			Opciones.crear(Opciones);
			Opciones.crearmundo(Opciones);
			Opciones.imagen = game.add.image(0,0,'ON');
		},
		//actualiza la posición de las pantallas en función de cual se muestra, se controla con las teclas
		update: function(){
			this.moverAyuda();
			if(entrada.EscapeInputIsActive(5)){
				game.state.start('cargaMenu');
			}
			if(entrada.EnterInputIsActive(5)){
				opcion++;
				if(opcion > 1){
					opcion = 0;
				}
			}
		},
		moverAyuda: function(){
			switch(opcion){
				case 0:
					game.sound.mute = false;
					Opciones.imagen.destroy();
					Opciones.background = game.add.image(0,0,'OFF');
				break;
				case 1:	
					game.sound.mute = true;
					Opciones.imagen = game.add.sprite(0, 0, 'ON');
				break;
			}
		},
}