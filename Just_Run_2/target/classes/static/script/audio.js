class Audio{
    constructor(){
        this.song = "";
        this.sonidosalto ="";
        this.sonidorodante="";
        this.sonidocaida="";
        this.sonidoseguimiento="";
        this.sonidofueramapa="";
        this.captura="";
    }
    //musica de fondo
    loop(){
        this.song = game.add.audio('song');
        this.song.play();  
    }
    //efecto de saltar
    saltacionar(){
        
    }
    //efecto de la trampa rodante (I)
    rodacionar(){

    }
    //efecto de la trampa de caida (O)
    caidicionar(){

    }
    //efecto de la trampa lateral o de seguimiento (P)
    seguicionar(){

    }
    //efecto de salirse fuera del mapa
    salicionar(){

    }
    //sonido de capturar a otro jugador
    capturacionar(){

    }
}