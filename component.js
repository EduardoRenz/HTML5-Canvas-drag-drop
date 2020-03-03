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
        let isX =  (environment.mouseX >= this.x && environment.mouseX <= this.x + this.width)
        let isY = (environment.mouseY >= this.y && environment.mouseY <= this.y + this.height)

        if( isX && isY) {
            environment.canvas.style.cursor = 'pointer'
            environment.context.strokeStyle  = 'black'
            environment.context.stroke()
            environment.context.strokeRect(this.x , this.y , this.width, this.height)
        }
        return isX && isY
    }
    
    draw(){
        let ctx = environment.context;
        //myGameArea.clearRect(this.x, this.y, this.w, this.h);
        this.is_draggable && this._checkCanGrab()
        this.is_dragging && this.dragging()
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x , this.y , this.width, this.height);
    }

    _checkCanGrab(){
        if( this._mouseInside()){
            if(environment.isdragging && !components.some(x=>{return x.is_dragging}) ){
                this.is_dragging = true
            }
            if(!this.is_dragging){
                this.lastX = environment.mouseX
                this.lastY = environment.mouseY
            }
        }
       else {
        environment.canvas.style.cursor = ''
       }
    }

    dragging(){
        let offsetX = environment.mouseX - this.lastX
        let offsetY = environment.mouseY - this.lastY
        this.x += offsetX
        this.y += offsetY

        if(environment.canvas.width <= this.x+this.width){
            this.x = environment.canvas.width - this.width
        }
        if(0 >= this.x){
            this.x = 0
        }

        if(0 >= this.y){
            this.y =0
        }

        if(environment.canvas.height <= this.y + this.height){
            this.y = environment.canvas.height - this.height
        }

        this.lastX = environment.mouseX
        this.lastY = environment.mouseY
    }


}
