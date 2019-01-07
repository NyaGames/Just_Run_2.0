class Nivel{
    //constructor del nivel
    constructor(id) {
        this.id = id;
    }
    //sentamos el tamaño y el fondo del nivel
    crear(id){
        switch(id){
            case Menu:
	            id.width = 1068;
	            id.height = 600;
	            id.background = game.add.sprite(0,0,'menu');
            break;
            case Ayuda:
            	id.background = game.add.sprite(0,0,'fondoayuda');
            break;
            case Tutorial:
            	id.background = game.add.sprite(0,0, 'tutorial');
            break;
            case Nieve:
	            id.width = 1068;
	            id.height = 600;
	            id.background = game.add.sprite(0,0,'snowfield');
            break;
        }
    }
    //creamos las plataformas del nivel
    crearmundo(id){
        switch(id){
            case Menu:
                id.jugar = game.add.sprite(320, 300, 'jugarg');
                id.salir = game.add.sprite(320, 400, 'salirp');
                id.opciones = game.add.sprite(960, 500, 'opcionesp');	
                id.ayuda = game.add.sprite(50, 520, 'ayudap');	
            break;
            case Ayuda:            
                id.infonieve = game.add.sprite(-2000,0,'infonieve');
                id.infocastillo = game.add.sprite(-2000,0,'infocastillo');
                id.infodesierto = game.add.sprite(-2000,0,'infodesierto');
                id.infooceano = game.add.sprite(-2000,0,'infooceano');
                id.infovolcan = game.add.sprite(-2000,0,'infovolcan');
            break;
            case Nieve:
                this.ground = game.add.group();
                var block;
                for(var i = 0; i <34; i++){
                    block = game.add.sprite(32*i, game.height - 32, 'ground');
                    game.physics.enable(block, Phaser.Physics.ARCADE);
                    block.body.immovable = true;
                    block.body.allowGravity = false;
                    this.ground.add(block);
                    block = game.add.sprite(i*32, game.height - 64, 'ground');
                    game.physics.enable(block, Phaser.Physics.ARCADE);
                    block.body.immovable = true;
                    block.body.allowGravity = false;
                    this.ground.add(block);
                    block = game.add.sprite(i*32, game.height - 96, 'ground');
                    game.physics.enable(block, Phaser.Physics.ARCADE);
                    block.body.immovable = true;
                    block.body.allowGravity = false;
                    this.ground.add(block);
                    if(i < 14 || i > 18){
                        block = game.add.sprite(i*32, game.height - 128, 'snow');
                        game.physics.enable(block, Phaser.Physics.ARCADE);
                        block.body.immovable = true;
                        block.body.allowGravity = false;
                        this.ground.add(block);	
                    }
                }
                
                block = game.add.sprite(448, game.height-128, 'water');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                id.ground.add(block);

                block = game.add.sprite(120, game.height - 250, 'ledge');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                id.ground.add(block);
                block = game.add.sprite(240, game.height - 250, 'ledge');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                id.ground.add(block);

                block = game.add.sprite(700, game.height - 250, 'ledge');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                id.ground.add(block);
                block = game.add.sprite(820, game.height - 250, 'ledge');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                id.ground.add(block);


                block = game.add.sprite(460, game.height - 400, 'ledge');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                id.ground.add(block);

                block = game.add.sprite(760, game.height - 500, 'ledge');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                id.ground.add(block);

                block = game.add.sprite(180, game.height - 500, 'ledge');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                id.ground.add(block);
            break;
        }
    }
    colisiones(id, chaser, escapist){
        if(chaser.body.position.y > game.height - 64){
            chaser.body.position.x = 60;
            chaser.body.position.y = game.height - 300;
        }
        if(escapist.body.position.y > game.height - 64){
            escapist.body.position.x = 1000;
            escapist.body.position.y = game.height - 300;
        }	
        id.onTheGround = game.physics.arcade.collide(chaser, id.ground);
        id.onTheGround1 = game.physics.arcade.collide(escapist, id.ground);
        id.catched = game.physics.arcade.collide(chaser, escapist);
        switch(id){
            case Nieve:                
                game.physics.arcade.collide(chaser, id.bola);
                game.physics.arcade.collide(chaser, id.chuzo1);
                game.physics.arcade.collide(chaser, id.chuzo2);
                game.physics.arcade.collide(chaser, id.p1);
                game.physics.arcade.collide(chaser, id.p2);
                game.physics.arcade.collide(chaser, id.p3);
            break;
        }
    }
}