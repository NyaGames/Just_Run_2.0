class Entrada{
    constructor(){
        //control de las teclas, para evitar los usos por defecto, que pueden dar problemas
		    game.input.keyboard.addKeyCapture([
		        Phaser.Keyboard.A,
		        Phaser.Keyboard.D,
		        Phaser.Keyboard.W,
		        Phaser.Keyboard.S,
		        Phaser.Keyboard.I,
		        Phaser.Keyboard.O,
                Phaser.Keyboard.P,
                Phaser.Keyboard.SPACEBAR,
		    ]);
    }
    //controles con las flechas y devuelven un bool en caso de que este activo	
    //control con WASD
    AInputIsActive(){
	    var isActive = false;
        isActive = game.input.keyboard.isDown(Phaser.Keyboard.A);
        return isActive;
    }
    DInputIsActive(){
	    var isActive = false;
        isActive = game.input.keyboard.isDown(Phaser.Keyboard.D);
        return isActive;
    }
    //recibe un duración para evitar saltos infinitos
    WInputIsActive(duration){
	 var isActive = false;
	 isActive = game.input.keyboard.downDuration(Phaser.Keyboard.W, duration);
	 return isActive;
    }
    WInputReleased(){
	    var released = false;
        released = game.input.keyboard.upDuration(Phaser.Keyboard.W);
        return released;
    }
    SInputIsActive(duration){
        var isActive = false;
        isActive = game.input.keyboard.downDuration(Phaser.Keyboard.S, duration);
        return isActive;
       }
    //control de las trampas
    IInputIsActive(){
	var isActive = false;
    isActive = game.input.keyboard.isDown(Phaser.Keyboard.I);
    return isActive;
    }
    OInputIsActive(){
	    var isActive = false;
        isActive = game.input.keyboard.isDown(Phaser.Keyboard.O);
        return isActive;
    }
    PInputIsActive(){
	var isActive = false;
    isActive = game.input.keyboard.isDown(Phaser.Keyboard.P);
    return isActive;
    }
    SpaceInputIsActive(duration){
        var isActive = false;
        isActive = game.input.keyboard.isDown(Phaser.Keyboard.SCAPEBAR, duration);
        return isActive;
    }    
    mover(objeto, id){
        if(id.onTheGround){
            objeto.saltos = 2;
        }
        if(objeto.saltos > 0 && this.WInputIsActive(5)){
            objeto.animations.play('doblejump');
            objeto.body.velocity.y = -600;
            objeto.saltando = true;
        }
        if(objeto.saltando && this.WInputReleased()){
            objeto.saltos--;
            objeto.saltando = false;    
        }
        if(this.AInputIsActive()){
            objeto.animations.play('run');
            objeto.scale.setTo(-1,1);
            objeto.body.acceleration.x = -500;
        }else if(this.DInputIsActive()){
            objeto.animations.play('run');
            objeto.scale.setTo(1,1);
            objeto.body.acceleration.x = 500;
        }else{
            objeto.animations.play('idle');
            objeto.body.acceleration.x = 0;
        }
    }
    
}