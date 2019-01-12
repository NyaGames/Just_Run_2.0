JustRun.nivelDesierto = function(game){
	
}
var Desierto = new Nivel("Desierto");
var trampas = new Trampas();
var timer = new Timer();

JustRun.nivelDesierto.prototype = {	
    create: function(){
        Desierto.crear(Desierto);
        Desierto.crearmundo(Desierto);
        trampas.crearTrampas(Desierto);  
        Desierto.crearChaser(Desierto)
        Desierto.crearEscapist(Desierto)   
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
            Desierto.colisiones(Desierto,Desierto.chaser,Desierto.escapist);
            if(JustRun_userID == 1){
            	data = {
                    	type: 'DESIERTOCHASER'
                }
                ws.send(JSON.stringify(data));
                entrada.mover(Desierto.chaser, Desierto);
                data = {
                		type: 'CHASER',
                		x: Desierto.chaser.position.x,
                		y: Desierto.chaser.position.y,
                		score: 0,
                		cazado: false,
                }
                ws.send(JSON.stringify(data));
            }
            if(JustRun_userID == 2){
                trampas.trapsHandler(entrada, Desierto);
            	data = {
                    	type: 'DESIERTOESCAPIST'
                    }
                ws.send(JSON.stringify(data));
                entrada.mover(Desierto.escapist, Desierto);
                data = {
                		type: 'ESCAPIST',
                		x: Desierto.escapist.position.x,
                		y: Desierto.escapist.position.y,
                		I: trampas.I,
                		O: trampas.O,
                		P: trampas.P,
                }
                ws.send(JSON.stringify(data));
            }
            if(Desierto.catched){
            	 data = {
                 		type: 'CHASER',
                 		x: Desierto.chaser.position.x,
                 		y: Desierto.chaser.position.y,
                 		score: 1,
                 		cazado: true,
                 }
            	 ws.send(JSON.stringify(data));
                timer.endTimer();
                console.log(data.score);
            }
        }else{
            audio.cambio();
            Desierto.chaser.destroy();
            Desierto.escapist.destroy();
            game.state.start("cargaOceano")
        }
    },
}