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
            case Opciones:
            	id.background = game.add.sprite(0,0, 'OFF');
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
            case Desierto:
            	id.width = 1068;
                id.height = 600;
                id.background = game.add.sprite(0,0,'fondo');
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
            case Desierto:
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

        		    block = game.add.sprite(i*32, game.height - 128, 'arena');
        		    game.physics.enable(block, Phaser.Physics.ARCADE);
        			block.body.immovable = true;
        			block.body.allowGravity = false;
        			this.ground.add(block);	
        		    
        	    }
        	    //crear cactus
        	    block= game.add.sprite(400, 381,'cactus');
        		game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    block.scale.setTo(0.40,0.40);
        	    this.ground.add(block);

        	    block= game.add.sprite(635, 381,'cactus');
        		game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    block.scale.setTo(0.40,0.40);
        	    this.ground.add(block);
        	    
        	    //plataformas
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
        	    block = game.add.sprite(248, game.height - 250, 'ledge');
        	    game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    this.ground.add(block);
        	    block = game.add.sprite(280, game.height - 250, 'ledge');
        	    game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    this.ground.add(block);

        	    block = game.add.sprite(700+64, game.height - 250, 'ledge');
        	    game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    this.ground.add(block);
        	    block = game.add.sprite(732+64, game.height - 250, 'ledge');
        	    game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    this.ground.add(block);
        	    block = game.add.sprite(764+64, game.height - 250, 'ledge');
        	    game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    this.ground.add(block);
        	    block = game.add.sprite(796+64, game.height - 250, 'ledge');
        	    game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    this.ground.add(block);
        	    block = game.add.sprite(828+64, game.height - 250, 'ledge');
        	    game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    this.ground.add(block);
        	    block = game.add.sprite(860+64, game.height - 250, 'ledge');
        	    game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    this.ground.add(block);

        	    block = game.add.sprite(760+64, game.height - 450, 'ledge');
        	    game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    this.ground.add(block);
        	    block = game.add.sprite(728+64, game.height - 450, 'ledge');
        	    game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    this.ground.add(block);
        	    block = game.add.sprite(792+64, game.height - 450, 'ledge');
        	    game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    this.ground.add(block);
        	    block = game.add.sprite(824+64, game.height - 450, 'ledge');
        	    game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    this.ground.add(block);
        	    block = game.add.sprite(856+64, game.height - 450, 'ledge');
        	    game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    this.ground.add(block);

        	    block = game.add.sprite(180, game.height - 450, 'ledge');
        	    game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    this.ground.add(block);
        	    block = game.add.sprite(212, game.height - 450, 'ledge');
        	    game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    this.ground.add(block);
        	    block = game.add.sprite(244, game.height - 450, 'ledge');
        	    game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    this.ground.add(block);
        	    block = game.add.sprite(148, game.height - 450, 'ledge');
        	    game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    this.ground.add(block);
        	    block = game.add.sprite(116, game.height - 450, 'ledge');
        	    game.physics.enable(block, Phaser.Physics.ARCADE);
        	    block.body.immovable = true;
        	    block.body.allowGravity = false;
        	    this.ground.add(block);
            break;
        }
    }
    colisiones(id){
        if(id.chaser.body.position.y > game.height - 64){
            id.chaser.body.position.x = 60;
            id.chaser.body.position.y = game.height - 300;
        }
        if(id.escapist.body.position.y > game.height - 64){
            id.escapist.body.position.x = 1000;
            id.escapist.body.position.y = game.height - 300;
        }	
        id.onTheGround = game.physics.arcade.collide(id.chaser, id.ground);
        id.onTheGround1 = game.physics.arcade.collide(id.escapist, id.ground);
        id.catched = game.physics.arcade.collide(id.chaser, id.escapist);
        switch(id){
            case Nieve:                
                game.physics.arcade.collide(id.chaser, id.bola);
                game.physics.arcade.collide(id.chaser, id.chuzo1);
                game.physics.arcade.collide(id.chaser, id.chuzo2);
                game.physics.arcade.collide(id.chaser, id.p1);
                game.physics.arcade.collide(id.chaser, id.p2);
                game.physics.arcade.collide(id.chaser, id.p3);
            break;
            case Castillo:
            	game.physics.arcade.collide(id.chaser, id.bola);
                game.physics.arcade.collide(id.chaser, id.aceite1);
                game.physics.arcade.collide(id.chaser, id.p1);
                game.physics.arcade.collide(id.chaser, id.p2);
                game.physics.arcade.collide(id.chaser, id.p3);
            break;
            case Desierto:
            	
            break;
        }
    }
    mover(objeto, x, y){
    	audio.andacionar();
    	if(objeto.position.x < x){
    		objeto.scale.setTo(1,1);
    		objeto.animations.play("run");
    	}else if(objeto.position.x > x){
    		objeto.scale.setTo(-1,1);
    		objeto.animations.play("run");
    	}
    	if(objeto.position.y > y){
    		audio.saltacionar();
    	}
    	objeto.position.x = x;
    	objeto.position.y = y;
    }
    crearChaser(id){
    	id.chaser = game.add.sprite(60, 300, 'chaser');
        game.physics.enable(id.chaser, Phaser.Physics.ARCADE);
        id.chaser.body.collideWorldBounds = true;
        id.chaser.body.maxVelocity.setTo(400, 400 * 10);
        id.chaser.body.drag.setTo(3600, 0);
        game.physics.arcade.gravity.y = 1500;

        //animaciones chaser
        id.chaser.animations.add('run', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36], 33, true);
        id.chaser.animations.add('dash', [37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58], 33, true);
        id.chaser.animations.add('doblejump', [59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113], 122, true);
        id.chaser.animations.add('jump', [114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135], 21, true);
        id.chaser.animations.add('idle', [136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178], 42, true);
    
        //por defecto la animacion idle
        id.chaser.animations.play('idle');
    
        //Cambio de Eje
        id.chaser.anchor.setTo(0.3,0.5);
    }
    crearEscapist(id){
    	id.escapist = game.add.sprite(1000, 300, 'escapist');
        game.physics.enable(id.escapist, Phaser.Physics.ARCADE);
        id.escapist.body.collideWorldBounds = true;
        id.escapist.body.maxVelocity.setTo(300, 300 * 10);
        id.escapist.body.drag.setTo(3600, 0);
        game.physics.arcade.gravity.y = 1500;

        //animaciones id.escapist
        id.escapist.animations.add('run', [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36], 33, true);
        id.escapist.animations.add('dash', [37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58], 33, true);
        id.escapist.animations.add('doblejump', [59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113], 122, true);
        id.escapist.animations.add('jump', [114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135], 21, true);
        id.escapist.animations.add('idle', [136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178], 42, true);
    
        //por defecto la animacion idle
        id.escapist.animations.play('idle');
    
        //Cambio de Eje
        id.escapist.anchor.setTo(0.3,0.5); 
    }
}