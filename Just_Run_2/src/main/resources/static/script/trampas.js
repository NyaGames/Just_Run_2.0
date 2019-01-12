class Trampas{
     //creamos las trampas del nivel
    constructor(){
        this.I = false;
        this.O = false;
        this.P = false;
    }

    crearTrampas(id){
        switch(id){
            case Nieve:
                //crear bola de nieve
                id.bola = game.add.sprite(1100, 367, 'snowball');
                var rodar = id.bola.animations.add('rodar');
                game.physics.enable(id.bola, Phaser.Physics.ARCADE);
                id.bola.body.immovable = true;
                id.bola.body.allowGravity = false;
                //crear chuzo de punta
                id.chuzo1 = game.add.sprite(650, -90, 'chuzo');
                game.physics.enable(id.chuzo1, Phaser.Physics.ARCADE);
                id.chuzo1.body.immovable = true;
                id.chuzo1.body.allowGravity = false;
                id.chuzo2 = game.add.sprite(400, -90, 'chuzo');
                game.physics.enable(id.chuzo2, Phaser.Physics.ARCADE);
                id.chuzo2.body.immovable = true;
                id.chuzo2.body.allowGravity = false;
                //crear penguinos
                id.p1 = game.add.sprite(-50,70, 'pinguino');
                game.physics.enable(id.p1, Phaser.Physics.ARCADE);
                id.p1.body.immovable = true;
                id.p1.body.allowGravity = false;
                id.p2 = game.add.sprite(-50,315, 'pinguino');
                game.physics.enable(id.p2, Phaser.Physics.ARCADE);
                id.p2.body.immovable = true;
                id.p2.body.allowGravity = false;
                id.p3 = game.add.sprite(-50,170, 'pinguino');
                game.physics.enable(id.p3, Phaser.Physics.ARCADE);
                id.p3.body.immovable = true;
                id.p3.body.allowGravity = false;

                //crear botones
                id.botonpinguino = game.add.sprite(1040, 300, 'bepinguino');
                id.botonestalactita = game.add.sprite(1040, 330, 'bestalactita');
                id.botonbola = game.add.sprite(1040, 360, 'bebola');
            break;
            case Castillo:
                id.bola = game.add.sprite(1100, 395, 'horse');
                var rodar = id.bola.animations.add('rodar');
                game.physics.enable(id.bola, Phaser.Physics.ARCADE);
                id.bola.body.immovable = true;
                id.bola.body.allowGravity = false;
                //crear aceite de punta
                id.aceite1 = game.add.sprite(520,-90, 'aceite');
                game.physics.enable(id.aceite1, Phaser.Physics.ARCADE);
                id.aceite1.body.immovable = true;
                id.aceite1.body.allowGravity = false;
                //crear penguinos
                id.p1 = game.add.sprite(-50,130, 'flecha');
                game.physics.enable(id.p1, Phaser.Physics.ARCADE);
                id.p1.body.immovable = true;
                id.p1.body.allowGravity = false;
                id.p2 = game.add.sprite(-150,130, 'flecha');
                game.physics.enable(id.p2, Phaser.Physics.ARCADE);
                id.p2.body.immovable = true;
                id.p2.body.allowGravity = false;
                id.p3 = game.add.sprite(-250,130, 'flecha');
                game.physics.enable(id.p3, Phaser.Physics.ARCADE);
                id.p3.body.immovable = true;
                id.p3.body.allowGravity = false;
                //crear botones
                id.botonflecha = game.add.sprite(1040, 300, 'beelfo');
                id.botonestalactita = game.add.sprite(1040, 330, 'beaceite');
                id.botonbola = game.add.sprite(1040, 360, 'becaballero');
            break;
            case Desierto:
        	    //crear bola del oeste
        	    id.bola = game.add.sprite(1100, 380, 'tweed');
        	    var rodar = id.bola.animations.add('rodar');
        	    game.physics.enable(id.bola, Phaser.Physics.ARCADE);
        	    id.bola.body.immovable = true;
        	    id.bola.body.allowGravity = false;

        	    //crear bala
        	    id.bala = game.add.sprite(-50, game.height-220, 'bala');
        	    game.physics.enable(id.bala, Phaser.Physics.ARCADE);
        	    id.bala.body.immovable = true;
        	    id.bala.body.allowGravity = false;
        	   
        	    //crear buitres
        	    id.buitre1 = game.add.sprite(-200,48, 'buitre');
        	    var rodar = id.buitre1.animations.add('rodar');
        	    game.physics.enable(id.buitre1, Phaser.Physics.ARCADE);
        	    id.buitre1.body.immovable = true;
        	    id.buitre1.body.allowGravity = false;

        	    id.buitre2 = game.add.sprite(-200,300, 'buitre');
        	    var rodar = id.buitre2.animations.add('rodar');
        	    game.physics.enable(id.buitre2, Phaser.Physics.ARCADE);
        	    id.buitre2.body.immovable = true;
        	    id.buitre2.body.allowGravity = false;

        	    id.buitre3 = game.add.sprite(-200,200, 'buitre');
        	    var rodar = id.buitre3.animations.add('rodar');
        	    game.physics.enable(id.buitre3, Phaser.Physics.ARCADE);
        	    id.buitre3.body.immovable = true;
        	    id.buitre3.body.allowGravity = false;

        	    //crear botones
        	    id.botonbuitre = game.add.sprite(1040, 300, 'bebuitre');
        	    id.botonbala = game.add.sprite(1040, 330, 'bevaquero');
        	    id.botonbola = game.add.sprite(1040, 360, 'beTW');
            break;
            case Oceano:
            	//crear tiburon
        	    id.tiburon = game.add.sprite(1100, 367, 'shark');
        	    var rodar = id.tiburon.animations.add('rodar');
        	    game.physics.enable(id.tiburon, Phaser.Physics.ARCADE);
        	    id.tiburon.body.immovable = true;
        	    id.tiburon.body.allowGravity = false;
        	    //crear anclas
        	    id.ancla1 = game.add.sprite(0, -90, 'ancla');
        	    game.physics.enable(id.ancla1, Phaser.Physics.ARCADE);
        	    id.ancla1.body.immovable = true;
        	    id.ancla1.body.allowGravity = false;
        	    id.ancla2 = game.add.sprite(928, -90, 'ancla');
        	    game.physics.enable(id.ancla2, Phaser.Physics.ARCADE);
        	    id.ancla2.body.immovable = true;
        	    id.ancla2.body.allowGravity = false;

        	    id.erizos = game.add.group();
        	    //crear erizos
        	    id.p1 = game.add.sprite(284, 90, 'erizo');
        	    game.physics.enable(id.p1, Phaser.Physics.ARCADE);
        	    id.p1.body.immovable = true;
        	    id.p1.body.allowGravity = false;
        	    this.erizos.add(id.p1);
        	    id.p2 = game.add.sprite(256,335, 'erizo');
        	    game.physics.enable(id.p2, Phaser.Physics.ARCADE);
        	    id.p2.body.immovable = true;
        	    id.p2.body.allowGravity = false;
        	    this.erizos.add(id.p2);
        	    id.p3 = game.add.sprite(850,335, 'erizo');
        	    game.physics.enable(id.p3, Phaser.Physics.ARCADE);
        	    id.p3.body.immovable = true;
        	    id.p3.body.allowGravity = false;
        	    this.erizos.add(id.p3);
        	    id.p4 = game.add.sprite(818, 90, 'erizo');
        	    game.physics.enable(id.p4, Phaser.Physics.ARCADE);
        	    id.p4.body.immovable = true;
        	    id.p4.body.allowGravity = false;
        	    this.erizos.add(id.p4);
        	    //crea los botones
        	    id.botonerizo = game.add.sprite(1040, 300, 'beerizo');
        	    id.botonestalactita = game.add.sprite(1040, 330, 'beancla');
        	    id.botontiburon = game.add.sprite(1040, 360, 'betiburon');
            break;
            case Volcan:
            	id.ola = game.add.sprite(1100, 375, 'ola');
        	    game.physics.enable(id.ola, Phaser.Physics.ARCADE);
        	    id.ola.body.immovable = true;
        	    id.ola.body.allowGravity = false;
        	    //crear meteor de punta
        	    id.meteor1 = game.add.sprite(650, -90, 'meteor');
        	    game.physics.enable(id.meteor1, Phaser.Physics.ARCADE);
        	    id.meteor1.body.immovable = true;
        	    id.meteor1.body.allowGravity = false;
        	    id.meteor2 = game.add.sprite(400, -90, 'meteor');
        	    game.physics.enable(id.meteor2, Phaser.Physics.ARCADE);
        	    id.meteor2.body.immovable = true;
        	    id.meteor2.body.allowGravity = false;
        	    id.meteor3 = game.add.sprite(1000, -90, 'meteor');
        	    game.physics.enable(id.meteor3, Phaser.Physics.ARCADE);
        	    id.meteor3.body.immovable = true;
        	    id.meteor3.body.allowGravity = false;
        	    //crear penguinos
        	    id.p1 = game.add.sprite(-50,110, 'magma');
        	    game.physics.enable(id.p1, Phaser.Physics.ARCADE);
        	    id.p1.body.immovable = true;
        	    id.p1.body.allowGravity = false;
        	    id.p2 = game.add.sprite(-50,325, 'magma');
        	    game.physics.enable(id.p2, Phaser.Physics.ARCADE);
        	    id.p2.body.immovable = true;
        	    id.p2.body.allowGravity = false;
        	    
        	    //crear botones
        	    id.botonmagma = game.add.sprite(1040, 300, 'bemagma');
        	    id.botonmeteorito = game.add.sprite(1040, 330, 'bmeteorito');
        	    id.botonola = game.add.sprite(1040, 360, 'beola');	
            break;
        }
    }
    trapsHandler(entrada, id){
        if(entrada.IInputIsActive() && !this.I){
            this.Rodante(id);
        }
        if(entrada.OInputIsActive() && !this.O){
            this.Caida(id);
        }
        if(entrada.PInputIsActive() && !this.P){
            this.Seguimiento(id);
        }
    }
    fantasma(I, O, P, id){
    	if(I && !this.I){
            this.Rodante(id);
        }
        if(O && !this.O){
            this.Caida(id);
        }
        if(P && !this.P){
            this.Seguimiento(id);
        }
    }
    async Rodante(id){
    	audio.rodacionar();
        this.I = true;
        switch(id){
            case Nieve:
                id.bola.animations.play('rodar', 12, true);
                id.bola.body.velocity.x = -200;
                id.botonbola = game.add.sprite(1040, 360, 'babola');
                await this.sleep(7000);
                this.RodanteRelease(id);
            break;
            case Castillo:
        		id.bola.scale.setTo(-1, 1);	
            	id.bola.animations.play('rodar', 12, true);
                id.bola.body.velocity.x = -200;
                id.botonbola = game.add.sprite(1040, 360, 'bacaballero');
                await this.sleep(7000);
                this.RodanteRelease(id);
            break;
            case Desierto:
        		id.bola.scale.setTo(0.5,0.5);	
            	id.bola.animations.play('rodar', 12, true);
                id.bola.body.velocity.x = -200;
                id.botonbola = game.add.sprite(1040, 360, 'baTW');
                await this.sleep(7000);
                this.RodanteRelease(id);
            break;
            case Oceano:
            	id.tiburon.animations.play('rodar', 12, true);
            	id.tiburon.body.velocity.x = (-id.tiburon.body.position.x + id.chaser.body.position.x)/2;
            	id.tiburon.body.velocity.y = (-id.tiburon.body.position.y + id.chaser.body.position.y)/2;
            	id.botontiburon = game.add.sprite(1040, 360, 'batiburon');
            	await this.sleep(7000);
                this.RodanteRelease(id);
        	break;
            case Volcan:
            	id.ola.body.velocity.x = -200;
        		id.botonola = game.add.sprite(1040, 360, 'baola');
        		await this.sleep(7000);
                this.RodanteRelease(id);
            break;
        } 
    }
    async RodanteRelease(id){
        switch(id){
            case Nieve:
                id.bola.position.x = 1100;
                id.bola.body.velocity.x = 0;
                id.botonbola = game.add.sprite(1040, 360, 'bebola');
            break;
            case Castillo:
            	id.bola.position.x = 1100;
                id.bola.body.velocity.x = 0;
                id.botonbola = game.add.sprite(1040, 360, 'becaballero');
            break;
            case Desierto:
            	id.bola.position.x = 1100;
                id.bola.body.velocity.x = 0;
                id.botonbola = game.add.sprite(1040, 360, 'beTW');
            break;
            case Oceano:
            	id.tiburon.destroy();
        		id.tiburon = game.add.sprite(1100, 367, 'shark');
        	    var rodar = id.tiburon.animations.add('rodar');
        	    game.physics.enable(id.tiburon, Phaser.Physics.ARCADE);
        	    id.tiburon.body.immovable = true;
        	    id.tiburon.body.allowGravity = false;	
        	    id.botontiburon = game.add.sprite(1040, 360, 'betiburon');
            break;
            case Volcan:
            	id.ola.destroy();
        		id.ola = game.add.sprite(1100, 375, 'ola');
        		game.physics.enable(id.ola, Phaser.Physics.ARCADE);
        	    id.ola.body.immovable = true;
        	    id.ola.body.allowGravity = false;	
        	    this.botonola = game.add.sprite(1040, 360, 'beola');
            break;
        }
        this.I = false;
    }
    async Caida(id){
    	audio.caidicionar();
        this.O = true;
        switch(id){
            case Nieve:
                id.chuzo1.body.allowGravity = true;
                id.chuzo2.body.allowGravity = true;
                id.botonestalactita = game.add.sprite(1040, 330, 'baestalactita');
                await this.sleep(7000);
                this.CaidaRelease(id);
            break;
            case Castillo:
            	id.aceite1.allowGravity = true;
            	id.botonestalactita = game.add.sprite(1040,330, 'baaceite');
            	await this.sleep(7000);
                this.CaidaRelease(id);
            break;
            case Desierto:
            	id.buitre1.scale.setTo(0.5,0.5);	
            	id.buitre2.scale.setTo(0.5,0.5);	
            	id.buitre3.scale.setTo(0.5,0.5);	
            	id.buitre1.animations.play('rodar', 4, true);
            	id.buitre2.animations.play('rodar', 4, true);
            	id.buitre3.animations.play('rodar', 4, true);
            	id.buitre1.body.velocity.x = 300;
            	id.buitre2.body.velocity.x = 300;
            	id.buitre3.body.velocity.x = 300;
            	id.botonbuitre = game.add.sprite(1040, 300, 'babuitre');
            	await this.sleep(7000);
                this.CaidaRelease(id);
            break;
            case Oceano:
            	id.ancla1.body.allowGravity = true;
        	    id.ancla2.body.allowGravity = true;
        	    id.botonestalactita = game.add.sprite(1040, 330, 'baestalactita');
        	    await this.sleep(7000);
                this.CaidaRelease(id);
            break;
            case Volcan:
            	id.meteor1.body.allowGravity = true;
        		id.meteor1.body.velocity.x = -300;
        	    id.meteor2.body.allowGravity = true;
        	    id.meteor2.body.velocity.x = -300;
        	    id.meteor3.body.allowGravity = true;
        	    id.meteor3.body.velocity.x = -300;
        	    id.botonmeteorito = game.add.sprite(1040, 330, 'bameteorito');
        	    await this.sleep(7000);
                this.CaidaRelease(id);
            break;
        } 
    }
    async CaidaRelease(id){
        switch(id){
            case Nieve:            
	            id.chuzo1.destroy();
				id.chuzo2.destroy();
				id.chuzo1 = game.add.sprite(650, -90, 'chuzo');
			    game.physics.enable(id.chuzo1, Phaser.Physics.ARCADE);
			    id.chuzo1.body.immovable = true;
			    id.chuzo1.body.allowGravity = false;
			    id.chuzo2 = game.add.sprite(400, -90, 'chuzo');
			    game.physics.enable(id.chuzo2, Phaser.Physics.ARCADE);
			    id.chuzo2.body.immovable = true;
			    id.chuzo2.body.allowGravity = false;
			    id.botonestalactita = game.add.sprite(1040, 330, 'bestalactita');
            break;
            case Castillo:
            	id.aceite1.destroy();
            	id.aceite1 = game.add.sprite(520,-90, 'aceite');
                game.physics.enable(id.aceite1, Phaser.Physics.ARCADE);
                id.aceite1.body.immovable = true;
                id.aceite1.body.allowGravity = false;
                id.botonestalactita = game.add.sprite(1040, 330, 'beaceite');
            break;
            case Desierto:
            	id.buitre1.destroy();
        		id.buitre2.destroy();
        		id.buitre3.destroy();
        		id.buitre1 = game.add.sprite(-200,48, 'buitre');
        	    var rodar = id.buitre1.animations.add('rodar');
        	    game.physics.enable(id.buitre1, Phaser.Physics.ARCADE);
        	    id.buitre1.body.immovable = true;
        	    id.buitre1.body.allowGravity = false;
        	    id.buitre2 = game.add.sprite(-200,300, 'buitre');
        	    var rodar = id.buitre2.animations.add('rodar');
        	    game.physics.enable(id.buitre2, Phaser.Physics.ARCADE);
        	    id.buitre2.body.immovable = true;
        	    id.buitre2.body.allowGravity = false;
        	    id.buitre3 = game.add.sprite(-200,200, 'buitre');
        	    var rodar = id.buitre3.animations.add('rodar');
        	    game.physics.enable(id.buitre3, Phaser.Physics.ARCADE);
        	    id.buitre3.body.immovable = true;
        	    id.buitre3.body.allowGravity = false;	
        	    this.botonbuitre = game.add.sprite(1040, 300, 'bebuitre');
            break;
            case Oceano:
            	id.ancla1.destroy();
        		id.ancla2.destroy();
        		id.ancla1 = game.add.sprite(0, -90, 'ancla');
        	    game.physics.enable(id.ancla1, Phaser.Physics.ARCADE);
        	    id.ancla1.body.immovable = true;
        	    id.ancla1.body.allowGravity = false;
        	    id.ancla2 = game.add.sprite(928, -90, 'ancla');
        	    game.physics.enable(id.ancla2, Phaser.Physics.ARCADE);
        	    id.ancla2.body.immovable = true;
        	    id.ancla2.body.allowGravity = false;
        	    id.botonestalactita = game.add.sprite(1040, 330, 'beancla');
            break;
            case Volcan:
            	id.meteor1.destroy();
        		id.meteor2.destroy();
        		id.meteor3.destroy();
        		id.meteor1 = game.add.sprite(650, -90, 'meteor');
        	    game.physics.enable(id.meteor1, Phaser.Physics.ARCADE);
        	    id.meteor1.body.immovable = true;
        	    id.meteor1.body.allowGravity = false;
        	    id.meteor2 = game.add.sprite(400, -90, 'meteor');
        	    game.physics.enable(id.meteor2, Phaser.Physics.ARCADE);
        	    id.meteor2.body.immovable = true;
        	    id.meteor2.body.allowGravity = false;
        	    id.meteor3 = game.add.sprite(1000, -90, 'meteor');
        	    game.physics.enable(id.meteor3, Phaser.Physics.ARCADE);
        	    id.meteor3.body.immovable = true;
        	    id.meteor3.body.allowGravity = false;
        	    id.botonmeteorito = game.add.sprite(1040, 330, 'bmeteorito');
            break;
        }
        this.O = false;
    }
    async Seguimiento(id){
    	audio.seguicionar();
        this.P = true;
        switch(id){
            case Nieve:
                id.p1.body.velocity.x = 300;
                id.p2.body.velocity.x = 300;
                id.p3.body.velocity.x = 300;
                id.botonpinguino = game.add.sprite(1040, 300, 'bapinguino');
                await this.sleep(7000);
                this.SeguimientoRelease(id);
            break;
            case Castillo:
            	id.p1.body.velocity.x = 300;
                id.p2.body.velocity.x = 300;
                id.p3.body.velocity.x = 300;
                id.botonpinguino = game.add.sprite(1040, 300, 'baelfo');
                await this.sleep(7000);
                this.SeguimientoRelease(id);
            break;
            case Desierto:
            	id.bala.body.velocity.x = (-id.bala.body.position.x + id.chaser.body.position.x)*2;
        		id.bala.body.velocity.y = (-id.bala.body.position.y + id.chaser.body.position.y)*2;
        	    id.botonbala = game.add.sprite(1040, 330, 'bavaquero');
        	    await this.sleep(7000);
                this.SeguimientoRelease(id);
           	break;
            case Oceano:
            	id.p1.destroy();
        		id.p2.destroy();
        		id.p3.destroy();
        		id.p4.destroy();
        		id.p1 = game.add.sprite(264, 90, 'erizoa');
        	    game.physics.enable(id.p1, Phaser.Physics.ARCADE);
        	    id.p1.body.immovable = true;
        	    id.p1.body.allowGravity = false;
        	    id.erizos.add(id.p1);
        	    id.p2 = game.add.sprite(256,335, 'erizoa');
        	    game.physics.enable(id.p2, Phaser.Physics.ARCADE);
        	    id.p2.body.immovable = true;
        	    id.p2.body.allowGravity = false;
        	    id.erizos.add(id.p2);
        	    id.p3 = game.add.sprite(850,335, 'erizoa');
        	    game.physics.enable(id.p3, Phaser.Physics.ARCADE);
        	    id.p3.body.immovable = true;
        	    id.p3.body.allowGravity = false;
        	    id.erizos.add(id.p3);
        	    id.p4 = game.add.sprite(818, 90, 'erizoa');
        	    game.physics.enable(id.p4, Phaser.Physics.ARCADE);
        	    id.p4.body.immovable = true;
        	    id.p4.body.allowGravity = false;
        	    id.erizos.add(id.p4);
        		id.botonerizo = game.add.sprite(1040, 300, 'baerizo');
        	    await this.sleep(7000);
                this.SeguimientoRelease(id);
            break;
            case Volcan:
            	id.p1.body.velocity.x = 300;
        		id.p2.body.velocity.x = 300;
        		id.botonmagma = game.add.sprite(1040, 300, 'bamagma');
            break;
        }
    }
    async SeguimientoRelease(id){
        switch(id){
            case Nieve:
            id.p1.destroy();
			id.p2.destroy();
			id.p3.destroy();
			id.p1 = game.add.sprite(-50,70, 'pinguino');
		    game.physics.enable(id.p1, Phaser.Physics.ARCADE);
		    id.p1.body.immovable = true;
		    id.p1.body.allowGravity = false;
		    id.p2 = game.add.sprite(-50,315, 'pinguino');
		    game.physics.enable(id.p2, Phaser.Physics.ARCADE);
		    id.p2.body.immovable = true;
		    id.p2.body.allowGravity = false;
		    id.p3 = game.add.sprite(-50,170, 'pinguino');
		    game.physics.enable(id.p3, Phaser.Physics.ARCADE);
		    id.p3.body.immovable = true;
		    id.p3.body.allowGravity = false;	
		    id.botonpinguino = game.add.sprite(1040, 300, 'bepinguino');
            break;
            case Castillo:
                id.p1.destroy();
    			id.p2.destroy();
    			id.p3.destroy();
    			id.p1 = game.add.sprite(-50,130, 'flecha');
                game.physics.enable(id.p1, Phaser.Physics.ARCADE);
                id.p1.body.immovable = true;
                id.p1.body.allowGravity = false;
                id.p2 = game.add.sprite(-150,130, 'flecha');
                game.physics.enable(id.p2, Phaser.Physics.ARCADE);
                id.p2.body.immovable = true;
                id.p2.body.allowGravity = false;
                id.p3 = game.add.sprite(-250,130, 'flecha');
                game.physics.enable(id.p3, Phaser.Physics.ARCADE);
                id.p3.body.immovable = true;
                id.p3.body.allowGravity = false;
                id.botonflecha = game.add.sprite(1040, 300, 'beelfo');
    		break;
            case Desierto:
            	id.bala.destroy();
        		id.bala = game.add.sprite(-50, game.height-220, 'bala');
        	    game.physics.enable(id.bala, Phaser.Physics.ARCADE);
        	    id.bala.body.immovable = true;
        	    id.bala.body.allowGravity = false;        	   
        	    id.botonbala = game.add.sprite(1040, 330, 'bevaquero');
            break;
            case Oceano:
            	id.p1.destroy();
        		id.p2.destroy();
        		id.p3.destroy();
        		id.p4.destroy();
        		id.p1 = game.add.sprite(264, 90, 'erizo');
        	    game.physics.enable(id.p1, Phaser.Physics.ARCADE);
        	    id.p1.body.immovable = true;
        	    id.p1.body.allowGravity = false;
        	    id.erizos.add(id.p1);
        	    id.p2 = game.add.sprite(256,335, 'erizo');
        	    game.physics.enable(id.p2, Phaser.Physics.ARCADE);
        	    id.p2.body.immovable = true;
        	    id.p2.body.allowGravity = false;
        	    id.erizos.add(id.p2);
        	    id.p3 = game.add.sprite(850,335, 'erizo');
        	    game.physics.enable(id.p3, Phaser.Physics.ARCADE);
        	    id.p3.body.immovable = true;
        	    id.p3.body.allowGravity = false;
        	    id.erizos.add(id.p3);
        	    id.p4 = game.add.sprite(818, 90, 'erizo');
        	    game.physics.enable(id.p4, Phaser.Physics.ARCADE);
        	    id.p4.body.immovable = true;
        	    id.p4.body.allowGravity = false;
        	    id.erizos.add(id.p4);
        	    id.botonerizo = game.add.sprite(1040, 300, 'beerizo');
            break;    
            case Volcan:
            	id.p1.destroy();
        		id.p2.destroy();
        		id.p1 = game.add.sprite(-50,110, 'magma');
        	    game.physics.enable(id.p1, Phaser.Physics.ARCADE);
        	    id.p1.body.immovable = true;
        	    id.p1.body.allowGravity = false;
        	    id.p2 = game.add.sprite(-50,325, 'magma');
        	    game.physics.enable(id.p2, Phaser.Physics.ARCADE);
        	    id.p2.body.immovable = true;
        	    id.p2.body.allowGravity = false;
        	    id.botonmagma = game.add.sprite(1040, 300, 'bemagma');
            break;
        }
        this.P = false;
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
      
}