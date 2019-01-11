JustRun.nivelNieve = function(game){
	
}
var Nieve = new Nivel("Nieve");
var trampas = new Trampas();
var timer = new Timer();

JustRun.nivelNieve.prototype = {	
    preload: function(){
        Nieve.crear(Nieve);
        Nieve.crearmundo(Nieve);
        trampas.crearTrampas(Nieve);
        Nieve.crearChaser(Nieve)
        Nieve.crearEscapist(Nieve)   
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
            Nieve.colisiones(Nieve,Nieve.chaser,Nieve.escapist);
            if(JustRun_userID == 1){
            	data = {
                    	type: 'LEVELCHASER'
                }
                ws.send(JSON.stringify(data));
                entrada.mover(Nieve.chaser, Nieve);
                data = {
                		type: 'CHASER',
                		x: Nieve.chaser.position.x,
                		y: Nieve.chaser.position.y,
                		score: 0,
                		cazado: false,
                }
                ws.send(JSON.stringify(data));
            }
            if(JustRun_userID == 2){
            	data = {
                    	type: 'NIEVEESCAPIST'
                    }
                ws.send(JSON.stringify(data));
                entrada.mover(Nieve.escapist, Nieve);
                data = {
                		type: 'ESCAPIST',
                		x: Nieve.escapist.position.x,
                		y: Nieve.escapist.position.y,
                }
                ws.send(JSON.stringify(data));
            }
            trampas.trapsHandler(entrada, Nieve);
            if(Nieve.catched){
            	 data = {
                 		type: 'CHASER',
                 		x: Nieve.chaser.position.x,
                 		y: Nieve.chaser.position.y,
                 		score: 1,
                 		cazado: true,
                 }
            	 ws.send(JSON.stringify(data));
                timer.endTimer();
                console.log(data.score);
            }
        }else{
            audio.cambio();
            Nieve.chaser.destroy();
            Nieve.escapist.destroy();
            game.state.start("cargaCastillo")
        }
    },
}