JustRun.nivelVolcan = function(game){
	
}
var Volcan = new Nivel("Volcan");
var trampas = new Trampas();
var timer = new Timer();

JustRun.nivelVolcan.prototype = {	
    create: function(){
        Volcan.crear(Volcan);
        Volcan.crearmundo(Volcan);
        trampas.crearTrampas(Volcan);  
        Volcan.crearChaser(Volcan)
        Volcan.crearEscapist(Volcan)   
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
            Volcan.colisiones(Volcan,Volcan.chaser,Volcan.escapist);
            if(JustRun_userID == 1){
            	data = {
                    	type: 'LEVELCHASER'
                }
                ws.send(JSON.stringify(data));
                entrada.mover(Volcan.chaser, Volcan);
                data = {
                		type: 'CHASER',
                		x: Volcan.chaser.position.x,
                		y: Volcan.chaser.position.y,
                		score: 0,
                		cazado: false,
                }
                ws.send(JSON.stringify(data));
            }
            if(JustRun_userID == 2){
            	data = {
                    	type: 'VOLCANESCAPIST'
                    }
                ws.send(JSON.stringify(data));
                entrada.mover(Volcan.escapist, Volcan);
                data = {
                		type: 'ESCAPIST',
                		x: Volcan.escapist.position.x,
                		y: Volcan.escapist.position.y,
                }
                ws.send(JSON.stringify(data));
            }
            trampas.trapsHandler(entrada, Volcan);
            if(Volcan.catched){
            	 data = {
                 		type: 'CHASER',
                 		x: Volcan.chaser.position.x,
                 		y: Volcan.chaser.position.y,
                 		score: 1,
                 		cazado: true,
                 }
            	 ws.send(JSON.stringify(data));
                timer.endTimer();
                console.log(data.score);
            }
        }else{
            audio.cambio();
            data = {
            		type: 'FINALE',
            }
            ws.send(JSON.stringify(data));
        }
    },
}