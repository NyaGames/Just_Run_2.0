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
    async Rodante(id){
        this.I = true;
        switch(id){
            case Nieve:
                id.bola.animations.play('rodar', 12, true);
                id.bola.body.velocity.x = -200;
                id.botonbola = game.add.sprite(1040, 360, 'babola');
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
        }
        this.I = false;
    }
    async Caida(id){
        this.O = true;
        switch(id){
            case Nieve:
                id.chuzo1.body.allowGravity = true;
                id.chuzo2.body.allowGravity = true;
                id.botonestalactita = game.add.sprite(1040, 330, 'baestalactita');
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
        }
        this.O = false;
    }
    async Seguimiento(id){
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
        }
        this.P = false;
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
      
}