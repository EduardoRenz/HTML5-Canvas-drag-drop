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

    _mouseInside(){
        let isX =  (game.mouseX >= this.x && game.mouseX <= this.x + this.width)
        let isY = (game.mouseY >= this.y && game.mouseY <= this.y + this.height)

        if( isX && isY) {
            game.canvas.style.cursor = 'pointer'
            game.context.strokeStyle  = 'black'
            game.context.stroke()
            game.context.strokeRect(this.x , this.y , this.width, this.height)
        }
        return isX && isY
    }
    
    draw(){
        let ctx = game.context;
        //myGameArea.clearRect(this.x, this.y, this.w, this.h);
        this.is_draggable && this._checkCanGrab()
        this.is_dragging && this.dragging()
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x , this.y , this.width, this.height);
    }

    _checkCanGrab(){
        if( this._mouseInside()){
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

        if(game.rect.right <= this.x+this.width){
            this.x = game.rect.right - this.width
        }
        if(game.rect.left >= this.x){
            this.x = game.rect.left
        }

        if(game.rect.top >= this.y){
            this.y = game.rect.top
        }

        if(game.rect.bottom <= this.y + this.height){
            this.y = game.rect.bottom - this.height
        }

        this.lastX = game.mouseX
        this.lastY = game.mouseY

    }


}
