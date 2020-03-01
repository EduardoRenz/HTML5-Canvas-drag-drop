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


        this.lastX = 0 //Last since not dragging
        this.lastY = 0 //Last since not dragging

        
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

            if(game.isdragging && !components.some(x=>{return x.is_dragging}) ){
                this.is_dragging = true
            }
            if(!this.is_dragging){
                this.lastX = game.mouseX
                this.lastY = game.mouseY
            }

        }
       else {
        game.canvas.style.cursor = ''
       }
    }

    dragging(){
        let offsetX = game.mouseX - this.lastX
        let offsetY = game.mouseY - this.lastY
        this.x += offsetX
        this.y += offsetY
        this.lastX = game.mouseX
        this.lastY = game.mouseY

    }


}
