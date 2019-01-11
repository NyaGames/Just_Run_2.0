class Audio{
    constructor(){
        this.song = "";
        this.sonidosalto ="";
        this.sonidorodante="";
        this.sonidocaida="";
        this.sonidoseguimiento="";
        this.sonidofueramapa="";
        this.captura="";
        this.andar="";
    }
    //musica de fondo
    loop(){
        this.song = game.add.audio('song');
        this.song.play();  
    }
    //efecto de saltar
    saltacionar(){
        this.sonidosalto = game.add.audio('salto.mp3');
        this.sonidosalto.play();
    }
    //efecto de la trampa rodante (I)
    rodacionar(){
		this.sonidorodante = game.add.audio('BolaNieve.mp3');
		this.sonidorodante.play();
    }
    //efecto de la trampa de caida (O)
    caidicionar(){
    	this.sonidocaida = game.add.audio('FreeFall.mp3');
		this.sonidocaida.play();
    }
    //efecto de la trampa lateral o de seguimiento (P)
    seguicionar(){
    	this.sonidoseguimiento = game.add.audio('Deslizar.mp3');
		this.sonidoseguimiento.play();
    }
    //efecto de salirse fuera del mapa
    salicionar(){
    	this.sonidofueramapa = game.add.audio('salirse.mp3');
    	this.sonidofueramapa.play();
    }
    //sonido de capturar a otro jugador
    capturacionar(){
    	this.captura = game.add.audio('capturacionar.mp3');
    	this.captura.play();
    }

    andacionar(){
    	this.andar = game.add.audio('andar.mp3');
    	this.andar.play();
    }
    
    cambio(){
        this.song.stop();
    }

}