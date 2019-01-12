JustRun.nivelOceano = function(game){
	
}
var Oceano = new Nivel("Oceano");
var trampas = new Trampas();
var timer = new Timer();

JustRun.nivelOceano.prototype = {	
    create: function(){
        Oceano.crear(Oceano);
        Oceano.crearmundo(Oceano);
        trampas.crearTrampas(Oceano);  
        Oceano.crearChaser(Oceano)
        Oceano.crearEscapist(Oceano)   
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
            Oceano.colisiones(Oceano,Oceano.chaser,Oceano.escapist);
            if(JustRun_userID == 1){
            	data = {
                    	type: 'LEVELCHASER'
                }
                ws.send(JSON.stringify(data));
                entrada.mover(Oceano.chaser, Oceano);
                data = {
                		type: 'CHASER',
                		x: Oceano.chaser.position.x,
                		y: Oceano.chaser.position.y,
                		score: 0,
                		cazado: false,
                }
                ws.send(JSON.stringify(data));
            }
            if(JustRun_userID == 2){
            	data = {
                    	type: 'OCEANOESCAPIST'
                    }
                ws.send(JSON.stringify(data));
                entrada.mover(Oceano.escapist, Oceano);
                data = {
                		type: 'ESCAPIST',
                		x: Oceano.escapist.position.x,
                		y: Oceano.escapist.position.y,
                }
                ws.send(JSON.stringify(data));
            }
            trampas.trapsHandler(entrada, Oceano);
            if(Oceano.catched){
            	 data = {
                 		type: 'CHASER',
                 		x: Oceano.chaser.position.x,
                 		y: Oceano.chaser.position.y,
                 		score: 1,
                 		cazado: true,
                 }
            	 ws.send(JSON.stringify(data));
                timer.endTimer();
                console.log(data.score);
            }
        }else{
            audio.cambio();
            Oceano.chaser.destroy();
            Oceano.escapist.destroy();
            game.state.start("cargaVolcan")
        }
    },
}