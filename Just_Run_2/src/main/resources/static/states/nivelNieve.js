JustRun.nivelNieve = function(game){
	
}
let Nieve = new Nivel("Nieve");
let trampas = new Trampas();
let chaser = new Chaser(60, 300, 0);
let escapist = new Escapist(1000, 300, 0);
let timer = new Timer();

JustRun.nivelNieve.prototype = {	
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
        	data = {
        			type: 'CAMBIO'
        	}
        	ws.send(JSON.stringify(data))
            timer.render();
            Nieve.colisiones(Nieve,chaser,escapist);
            if(JustRun_userID == 1){
            	data = {
                    	type: 'LEVELCHASER'
                }
                ws.send(JSON.stringify(data));
                entrada.mover(chaser, Nieve);
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
                entrada.mover(escapist, Nieve);
                data = {
                		type: 'ESCAPIST',
                		x: escapist.position.x,
                		y: escapist.position.y,
                }
                ws.send(JSON.stringify(data));
            }
            trampas.trapsHandler(entrada, Nieve);
            if(Nieve.catched){
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
            game.state.start("cargaCastillo")
        }
    },
}