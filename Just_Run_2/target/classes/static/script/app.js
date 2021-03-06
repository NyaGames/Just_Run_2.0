// API de WebSocket
// https://developer.mozilla.org/es/docs/Web/API/WebSocket

debug = {
    ws: 1
}

// La URL a la cual se conecta, debe ser la URL con la cual el servidor WebSocket debe responder.
var ws = new WebSocket('ws://'+window.location.host+'/JustRun')

//Un monitor de eventos que es llamado cuando el estado readyState de la conexión Websocket cambia a OPEN. Esto indica que la conexión está lista para enviar y recibir datos. El evento es uno simple con el nombre "open".
ws.onopen = function (event) {
    if (debug.ws) {
        console.log('[DEBUG-WS] Se ha establecido conexion con el servidor.')
    }
}

// Un monitor de eventos que es llamado cuando un error ocurre. Esto es un evento simple llamado "error"
ws.onerror = function (error) {
    console.log('[DEBUG-WS] Ha ocurrido un error: ' + error)
}

// Un monitor de eventos que atiende una llamada cuando la conexión del WebSocket cambia a un estado CERRADO (CLOSED). El monitor recibe un CloseEvent llamado "cerrado".
ws.onclose = function (event) {
    if (debug.ws) {
        console.log('[DEBUG-WS] Se ha cerrado la conexion.')
    }
}

// Un monitor de eventos que es llamado cuando un mensaje es recibido desde un servidor. El monitor recibe un objeto MessageEvent llamado "mensaje".
ws.onmessage = function (message) {
    if (debug.ws) {
        console.log('[DEBUG-WS] Se ha recibido un mensaje: ' + message.data)
    }

    var msg = JSON.parse(message.data)

    console.log('INFO RECIBIDA ' + msg.type)

    switch (msg.type) {
    	case 97:
    		if(msg.cazado){
    			timer.endTimer();
    		}
    		break;
        case 99:
            console.log('@@@@@@ Chaser CREATED @@@@@')
            console.log('id: ' + msg.id)
            console.log('pos: (' + msg.x + ',' + msg.y + ')')
            console.log('score: ' + msg.score)
            break
        case 101:
        	console.log('@@@@@@ Escapist CREATED @@@@@')
            console.log('id: ' + msg.id)
            console.log('pos: (' + msg.x + ',' + msg.y + ')')
            console.log('score: ' + msg.score)
            break
        case 103:
        	if(msg.size == 1){
        		JustRun_userID = 1;
        	}else if(msg.size == 2){
        		if(JustRun_userID == -1){
        			JustRun_userID = 2;
        		}
        		game.state.start("cargaVolcan");
        	}
        	break;
        case 102:
            Volcan.mover(Volcan.escapist, msg.x, msg.y);
            trampas.fantasma(msg.I, msg.O, msg.P, Volcan);
        	break;
        case 104:
            Oceano.mover(Oceano.escapist, msg.x, msg.y);
            trampas.fantasma(msg.I, msg.O, msg.P, Oceano);
        	break;
        case 105:
            Desierto.mover(Desierto.escapist, msg.x, msg.y);
            trampas.fantasma(msg.I, msg.O, msg.P, Desierto);
        	break;
        case 106:
            Castillo.mover(Castillo.escapist, msg.x, msg.y);
            trampas.fantasma(msg.I, msg.O, msg.P, Castillo);
        	break;
        case 107:
            Nieve.mover(Nieve.escapist, msg.x, msg.y);
            trampas.fantasma(msg.I, msg.O, msg.P, Nieve);
        	break;
        case 108:
        	Nieve.mover(Nieve.chaser, msg.x, msg.y);
        	break;
        case 109:
        	Castillo.mover(Castillo.chaser, msg.x, msg.y);
        	break;
        case 110:
        	Desierto.mover(Desierto.chaser, msg.x, msg.y);
        	break;
        case 111:
        	Oceano.mover(Oceano.chaser, msg.x, msg.y);
        	break;
        case 112:
        	Volcan.mover(Volcan.chaser, msg.x, msg.y);
        	break;
        case 121:
        	audio.stop();
        	game.state.start("VC");
        	break;
        case 122:
        	audio.stop();
        	game.state.start("VE");
    }
}