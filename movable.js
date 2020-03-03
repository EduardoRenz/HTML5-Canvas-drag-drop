let start = 0
let delta = 0


class Movable {
    constructor(selector){
        this.is_dragging = false
        this.mouseX = 0
        this.mouseY = 0
        this.dragStartX = null

        this.movable = document.querySelector(selector)

        document.onmousemove = (evt)=>{
            evt.preventDefault();
            evt.stopPropagation();
            this.mouseX = evt.clientX
            this.mouseY = evt.clientY
        }


        this.movable.onmousedown = evt=>{
            evt.preventDefault()
            evt.stopPropagation();
            console.log('drag start')
        }



        document.onmouseup = evt=>{
            //evt.preventDefault()
            //evt.stopPropagation();
            this.is_dragging = false
            this.dragStartX = null
            
            this.movable.style.left = this.mouseX + 'px'
            //this.movable.style.bottom = this.mouseY + 'px'

            console.log('drag finished at', this.mouseX)
        }

    }

    
}


