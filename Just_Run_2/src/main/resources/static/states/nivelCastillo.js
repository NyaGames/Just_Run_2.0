JustRun.nivelCastillo = function(game){
	
}
var Castillo = new Nivel("Castillo");
var trampas = new Trampas();
var timer = new Timer();

JustRun.nivelCastillo.prototype = {	
    create: function(){
        Castillo.crear(Castillo);
        Castillo.crearmundo(Castillo);
        trampas.crearTrampas(Castillo);  
        Castillo.crearChaser(Castillo)
        Castillo.crearEscapist(Castillo)   
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
            Castillo.colisiones(Castillo,Castillo.chaser,Castillo.escapist);
            if(JustRun_userID == 1){
            	data = {
                    	type: 'LEVELCHASER'
                }
                ws.send(JSON.stringify(data));
                entrada.mover(Castillo.chaser, Castillo);
                data = {
                		type: 'CHASER',
                		x: Castillo.chaser.position.x,
                		y: Castillo.chaser.position.y,
                		score: 0,
                		cazado: false,
                }
                ws.send(JSON.stringify(data));
            }
            if(JustRun_userID == 2){
            	data = {
                    	type: 'CASTILLOESCAPIST'
                    }
                ws.send(JSON.stringify(data));
                entrada.mover(Castillo.escapist, Castillo);
                data = {
                		type: 'ESCAPIST',
                		x: Castillo.escapist.position.x,
                		y: Castillo.escapist.position.y,
                }
                ws.send(JSON.stringify(data));
            }
            trampas.trapsHandler(entrada, Castillo);
            if(Castillo.catched){
            	 data = {
                 		type: 'CHASER',
                 		x: Castillo.chaser.position.x,
                 		y: Castillo.chaser.position.y,
                 		score: 1,
                 		cazado: true,
                 }
            	 ws.send(JSON.stringify(data));
                timer.endTimer();
                console.log(data.score);
            }
        }else{
            audio.cambio();
            Castillo.chaser.destroy();
            Castillo.escapist.destroy();
            game.state.start("cargaDesierto")
        }
    },
}