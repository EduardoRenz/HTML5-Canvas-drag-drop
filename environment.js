class Environment {


    constructor(){
        this.canvas = document.querySelector("#canvas")
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(update, 60/1000);  
    }
    start () {
        this.canvas.width = 1100;
        this.canvas.height = 200;
        
         
        this.isdragging = false
        this.mouseX = 0
        this.mouseY =0

        this.lastMouseX = 0 //Last since not dragging
        this.lastMouseY = 0 //Last since not dragging

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

    log(){
        this.context.font = "30px Arial";
        this.context.fillStyle = "black";
        this.context.fillText(`x:${this.mouseX} y:${this.mouseY}`, this.canvas.width - 200, 50); 
        this.context.fillText(`dragging:${this.isdragging}`, this.canvas.width - 200, 100); 
    }


}