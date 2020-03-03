    //HTML experiment code

    const boxes = document.querySelectorAll(".box")

    for (const box of boxes) {
        box.addEventListener('dragover',(e)=>{
            e.preventDefault()
            //console.log('passou por cima')
        })
        box.addEventListener('dragleave',()=>{
            console.log('leave')
        })
        box.addEventListener('drop',(evt)=>{
            console.log('largou aqui')
            console.log(evt.target.appendChild(item))
        })
    }


    let item = document.querySelector("#item")
    item.addEventListener('drag',()=>{
        item.style.visibility = 'hidden'
    })
    item.addEventListener('dragend',(evt)=>{
    item.style.visibility = 'visible'
    })
