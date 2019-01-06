class Timer{
    constructor(){
        this.timer;
        this.timerEvent;
        this.running = false;
    }

    initTimer(){
        this.timer = game.time.create();
        this.timerEvent = this.timer.add(Phaser.Timer.SECOND*30, this.endTimer, this);
        this.running = true;
        this.timer.start();
    }

    formatTime(s){
         var minutes = "0" + Math.floor(s/60);
         var seconds = "0" + (s- minutes * 60);
         return minutes.substr(-2) + ":" + seconds.substr(-2);
    }

    render(){
        game.debug.text(this.formatTime(Math.round((this.timerEvent.delay - this.timer.ms) / 1000)), game.world.centerX-50, 590, "#ffffff",'50px Arial'); 
    }

    endTimer(){
        this.running = false;
        this.timer.stop();
    }
}