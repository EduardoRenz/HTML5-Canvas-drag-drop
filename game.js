class Game {


    constructor(){
        this.canvas = document.querySelector("#canvas")
    }
    start () {
        this.canvas.width = 1100;
        this.canvas.height = 800;
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(update, 30/1000);   
        this.isdragging = false
        this.mouseX = 0
        this.mouseY =0

        this.lastMouseX = 0
        this.lastMouseY = 0

        this.rect =  canvas.getBoundingClientRect();
        
        this.canvas.onmousedown = (evt) => {this.isdragging = true}
        this.canvas.onmouseup = (evt) => { 
            this.isdragging = false
            for (const component of components) {
                component.is_dragging = false
            }
        
        
        }
        this.canvas.onmousemove = (evt) =>{ 
            evt.preventDefault();
            evt.stopPropagation();
            this.mouseX= evt.clientX - this.rect.left; this.mouseY = evt.clientY - this.rect.top

            if(!this.isdragging){
                this.lastMouseX = this.mouseX
                this.lastMouseY = this.mouseY
            }

        }
    }
    stop () {
        clearInterval(this.interval);
    }  
    clear (){
        this.context.fillStyle  ="white"    
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }


}