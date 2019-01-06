JustRun.nivelCastillo = function(game){
	
}
let Nieve = new Nivel("Nieve");
let trampas = new Trampas();
let chaser = new Chaser(60, 300, 0);
let escapist = new Escapist(1000, 300, 0);
let timer = new Timer();

JustRun.nivelCastillo.prototype = {	
    preload: function(){
        Nieve.crear(Nieve);
        Nieve.crearmundo(Nieve);
        trampas.crearTrampas(Nieve);
        chaser = chaser.crear(chaser);
        escapist = escapist.crear(escapist);      
        entrada = new Entrada();
        timer.initTimer();
        audio.loop();
    },
    update: function(){
        if(timer.running){
            timer.render();
            Nieve.colisiones(Nieve,chaser,escapist);
            entrada.mover(chaser, Nieve);
            entrada.mover(escapist, Nieve);
            trampas.trapsHandler(entrada, Nieve);
        }else{
            game.state.start("cargaCastillo")
        }
    },
}