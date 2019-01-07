JustRun.ayudaState = function(game){
	
}
let pantalla = 0;
let Ayuda = new Nivel("Ayuda");
JustRun.ayudaState.prototype = {
		//crea todas las pantalla de ayuda fuera de la cámara
		create: function(){
			//muestra la pantalla del tutorial hasta que se pulse el espacio
			Ayuda.crear(Ayuda);
			Ayuda.crearmundo(Ayuda);
		},
		//actualiza la posición de las pantallas en función de cual se muestra, se controla con las teclas
		update: function(){
			this.moverAyuda();
			if(entrada.EscapeInputIsActive(5)){
				game.state.start('cargaMenu');
			}
			if(entrada.SInputIsActive(5)){
				pantalla++;
				console.log(pantalla);
				if(pantalla > 5){
					pantalla = 0;	
				}
			}
			if(entrada.WInputIsActive(5)){
				pantalla--;
				console.log(pantalla)
				if(pantalla < 0){
					pantalla = 5;
				}
			}
		},
		moverAyuda: function(){
			switch(pantalla){
				case 0:
					Ayuda.infonieve.position.x = -2000;
					Ayuda.infocastillo.position.x = -2000;
					Ayuda.infodesierto.position.x = -2000;
					Ayuda.infooceano.position.x = -2000;
					Ayuda.infovolcan.position.x = -2000;
				break;
				case 1:	
					Ayuda.infonieve.position.x = 0;
					Ayuda.infocastillo.position.x = -2000;
					Ayuda.infodesierto.position.x = -2000;
					Ayuda.infooceano.position.x = -2000;
					Ayuda.infovolcan.position.x = -2000;
				break;
				case 2:
					Ayuda.infonieve.position.x = -2000;	
					Ayuda.infocastillo.position.x = -0;
					Ayuda.infodesierto.position.x = -2000;
					Ayuda.infooceano.position.x = -2000;
					Ayuda.infovolcan.position.x = -2000;
				break;
				case 3:
					Ayuda.infonieve.position.x = -2000;
					Ayuda.infocastillo.position.x = -2000;
					Ayuda.infodesierto.position.x = -0;
					Ayuda.infooceano.position.x = -2000;
					Ayuda.infovolcan.position.x = -2000;
				break;
				case 4:
					Ayuda.infonieve.position.x = -2000;
					Ayuda.infocastillo.position.x = -2000;
					Ayuda.infodesierto.position.x = -2000;
					Ayuda.infooceano.position.x = -0;
					Ayuda.infovolcan.position.x = -2000;
				break;
				case 5:
					Ayuda.infonieve.position.x = -2000;
					Ayuda.infocastillo.position.x = -2000;
					Ayuda.infodesierto.position.x = -2000;
					Ayuda.infooceano.position.x = -2000;
					Ayuda.infovolcan.position.x = -0;
				break;
			}
		},
}