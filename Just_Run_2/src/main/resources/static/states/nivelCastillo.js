JustRun.nivelCastillo = function(game){
	
}
var Castillo = new Nivel("Castillo");
var trampas = new Trampas();
var chaser = new Chaser(60, 300, 0);
var escapist = new Escapist(1000, 300, 0);
var timer = new Timer();

JustRun.nivelCastillo.prototype = {	
    preload: function(){
        Castillo.crear(Castillo);
        Castillo.crearmundo(Castillo);
        trampas.crearTrampas(Castillo);
        chaser = chaser.crear(chaser);
        escapist = escapist.crear(escapist);    
        entrada = new Entrada();
        timer.initTimer();
        audio.loop();
    },
    update: function(){
        if(timer.running){
        	data = {
        			type: 'CAMBIO'
        	}
        	ws.send(JSON.stringify(data))
            timer.render();
            Castillo.colisiones(Castillo,chaser,escapist);
            if(JustRun_userID == 1){
            	data = {
                    	type: 'LEVELCHASER'
                }
                ws.send(JSON.stringify(data));
                entrada.mover(chaser, Castillo);
                data = {
                		type: 'CHASER',
                		x: chaser.position.x,
                		y: chaser.position.y,
                		score: 0,
                		cazado: false,
                }
                ws.send(JSON.stringify(data));
            }
            if(JustRun_userID == 2){
            	data = {
                    	type: 'LEVELESCAPIST'
                    }
                ws.send(JSON.stringify(data));
                entrada.mover(escapist, Castillo);
                data = {
                		type: 'ESCAPIST',
                		x: escapist.position.x,
                		y: escapist.position.y,
                }
                ws.send(JSON.stringify(data));
            }
            trampas.trapsHandler(entrada, Castillo);
            if(Castillo.catched){
            	 data = {
                 		type: 'CHASER',
                 		x: chaser.position.x,
                 		y: chaser.position.y,
                 		score: 1,
                 		cazado: true,
                 }
            	 ws.send(JSON.stringify(data));
                timer.endTimer();
                console.log(data.score);
            }
        }else{
            audio.cambio();
            game.state.start("cargaCastillo")
        }
    },
}