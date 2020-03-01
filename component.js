class Component {

    constructor(x,y,width, height, color){
        this.x = x || 20
        this.y = y || 20
        this.width = width || 100
        this.height = height || 100
        this.color = color || 'black'
        this.originalColor = color
        this.is_draggable = true
        this.is_dragging = false

        
    }
    
    draw(){
        let ctx = game.context;

        //myGameArea.clearRect(this.x, this.y, this.w, this.h);
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x , this.y , this.width, this.height);

        game.context.font = "12px Arial";
        game.context.fillStyle = "black";
        game.context.fillText(`${this.x}`, this.x , this.y+this.height + 10); 
        game.context.fillText(`${this.x+this.width}`, this.x + this.width , this.y+this.height + 10);
        game.context.strokeStyle  = 'black'

        this.is_draggable && this.isGrab()
        this.is_dragging && this.dragging()
    }

    isGrab(){
        let isX =  (game.mouseX >= this.x && game.mouseX <= this.x + this.width)
        let isY = (game.mouseY >= this.y && game.mouseY <= this.y + this.height)
        if( isY && isX){
            game.canvas.style.cursor = 'pointer'
            game.context.strokeStyle  = 'black'
            game.context.stroke()
            game.context.strokeRect(this.x , this.y , this.width, this.height)

            if(game.isdragging){
                this.is_dragging = true
            }

        }
       else {
        game.canvas.style.cursor = ''
       }
    }

    dragging(){
        this.x =  game.mouseX 
        //this.y =  game.mouseY 
        console.log('depos',game.mouseX )
    }


}
