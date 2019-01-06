JustRun.menu = function(game){
	
}
let estado = 1;
let entrada;
let audio = new Audio();
let Menu = new Nivel("Menu");
JustRun.menu.prototype = {	
	create: function(){
		//muestra el menu hasta que se pulse espacio sobre jugar
		Menu.crear(Menu);
		Menu.crearmundo(Menu);
		entrada = new Entrada();
		audio.loop();

		//creacion animaciones menu
		perseguidor = game.add.sprite(360, game.height - 245, 'chaser');
		perseguidor.animations.add('run', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36], 33, true);
		perseguidor.animations.play('run');
		perseguidor.scale.setTo(1.5,1.5);
		escapador = game.add.sprite(680, game.height - 245, 'escapist');
		escapador.animations.add('run', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36], 33, true);	
		escapador.animations.play('run');
		escapador.scale.setTo(1.5,1.5);		
	},
	update: function(){
		this.moverMenu(estado, Menu, perseguidor, escapador);
		if(entrada.EnterInputIsActive(5)){
			this.seleccion(estado);			
		}
		if(entrada.WInputIsActive(5)){
			estado--;
			if(estado < 1){estado = 4;}
		}
		if(entrada.SInputIsActive(5)){
			estado++;
			if(estado > 4){estado = 1;}
		}
	},
	moverMenu: function(estado, Menu, chaser, escapist){
        switch(estado){
            case 1:
                chaser.position.y = game.height - 245;  
                escapist.position.y = game.height - 245;  
                chaser.position.x = 360;  
                escapist.position.x = 680;  
                Menu.jugar.destroy();
                Menu.salir.destroy();
                Menu.opciones.destroy();
                Menu.ayuda.destroy();			
                Menu.jugar = game.add.sprite(320, 300, 'jugarg');
                Menu.salir = game.add.sprite(320, 400, 'salirp');
                Menu.opciones = game.add.sprite(960, 500, 'opcionesp');
                Menu.ayuda = game.add.sprite(50, 520, 'ayudap');
            break;
            case 2:
                chaser.position.y = game.height - 140;  
                escapist.position.y = game.height - 140;  
                chaser.position.x = 375;  
                escapist.position.x = 665;
                Menu.jugar.destroy();
                Menu.salir.destroy();
                Menu.opciones.destroy();
                Menu.ayuda.destroy();
                Menu.jugar = game.add.sprite(320, 300, 'jugarp');
                Menu.salir = game.add.sprite(320, 400, 'salirg');
                Menu.opciones = game.add.sprite(960, 500, 'opcionesp');
                Menu.ayuda = game.add.sprite(50, 520, 'ayudap');	
            break;
            case 3:
                chaser.position.y = game.height +20;  
                escapist.position.y = game.height +20;  
                chaser.position.x = 375;  
                escapist.position.x = 665;  			
                Menu.jugar.destroy();
                Menu.salir.destroy();
                Menu.opciones.destroy();
                Menu.ayuda.destroy();
                Menu.jugar = game.add.sprite(320, 300, 'jugarp');
                Menu.salir = game.add.sprite(320, 400, 'salirp');
                Menu.opciones = game.add.sprite(960, 500, 'opcionesg');
                Menu.ayuda = game.add.sprite(50, 520, 'ayudap');
            break;
            case 4:
                chaser.position.y = game.height +20;  
                escapist.position.y = game.height +20; 			
                Menu.jugar.destroy();
                Menu.salir.destroy();
                Menu.opciones.destroy();
                Menu.ayuda.destroy();
                Menu.jugar = game.add.sprite(320, 300, 'jugarp');
                Menu.salir = game.add.sprite(320, 400, 'salirp');
                Menu.opciones = game.add.sprite(960, 500, 'opcionesp');
                Menu.ayuda = game.add.sprite(50, 520, 'ayudag');
            break;
		}
	},
	seleccion: function(estado){
		switch(estado){
			case 1:
				game.state.start("cargaNieve");
			break;
			case 2:
			break;
			case 3:
			break;
			case 4:
			break;
		}
	},
}
