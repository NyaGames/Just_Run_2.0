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
            case Castillo:
                id.width = 1068;
                id.height = 600;
                id.background = game.add.sprite(0,0,'castle');
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
            case Castillo:
                this.ground = game.add.group();
                var block;
                for(var i = 0; i <34; i++){
                    if(i < 13 || i > 16){
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
                        if(i < 18){
                            block = game.add.sprite(i*32, game.height - 128, 'grass');
                            game.physics.enable(block, Phaser.Physics.ARCADE);
                            block.body.immovable = true;
                            block.body.allowGravity = false;
                            this.ground.add(block);	
                        }else{
                            block = game.add.sprite(i*32, game.height - 128, 'carpet');
                            game.physics.enable(block, Phaser.Physics.ARCADE);
                            block.body.immovable = true;
                            block.body.allowGravity = false;
                            this.ground.add(block);	
                        }
                    }
                    if(i >= 13 && i <= 16){
                        block = game.add.sprite(32*i, game.height-32, 'water');
                        block = game.add.sprite(i*32, game.height-64, 'water');
                    }
                }
                block = game.add.sprite(448, game.height - 76, 'coco');

                block = game.add.sprite(120, game.height - 250, 'ledge');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(152, game.height - 250, 'ledge');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(184, game.height - 250, 'ledge');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(216, game.height - 250, 'ledge');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);

                block = game.add.sprite(332, game.height - 350, 'ledge');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(364, game.height - 350, 'ledge');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(396, game.height - 350, 'ledge');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);

                block = game.add.sprite(0, game.height - 450, 'ledge');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(32, game.height - 450, 'ledge');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(64, game.height - 450, 'ledge');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(96, game.height - 450, 'ledge');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);

                block = game.add.sprite(550, game.height - 250, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(550, game.height - 282, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(550, game.height - 314, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(550, game.height - 346, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(550, game.height - 378, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(550, game.height - 538, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(550, game.height - 570, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(550, game.height - 602, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);

                block = game.add.sprite(728, game.height - 250, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(632, game.height - 250, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(664, game.height - 250, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(696, game.height - 250, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);

                block = game.add.sprite(940, game.height - 400, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(972, game.height - 400, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(1004, game.height - 400, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(1036, game.height - 400, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);

                block = game.add.sprite(582, game.height - 378, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(614, game.height - 378, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);

                block = game.add.sprite(582, game.height - 538, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(614, game.height - 538, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);
                block = game.add.sprite(646, game.height - 538, 'pared');
                game.physics.enable(block, Phaser.Physics.ARCADE);
                block.body.immovable = true;
                block.body.allowGravity = false;
                this.ground.add(block);

                this.puerta = game.add.sprite(560, game.height - 330, 'puerta');
                game.physics.enable(this.puerta, Phaser.Physics.ARCADE);
                this.puerta.body.immovable = true;
                this.puerta.body.allowGravity = false;
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
    mover(objeto, x, y){
    	if(objeto.position.x < x){
    		objeto.scale.setTo(1,1);
    		objeto.animations.play("run");
    	}else if(objeto.position.x > x){
    		objeto.scale.setTo(-1,1);
    		objeto.animations.play("run");
    	}
    	objeto.position.x = x;
    	objeto.position.y = y;
    }
}