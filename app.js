const body = document.querySelector('body');


body.addEventListener('click', (e) => {
    console.log("clicked")
    console.log(e.clientX)
    console.log(e.clientY)
    createStar(e)
})


function createStar(e) {
    const div = document.createElement('div')
    console.log(div)
    div.className = "star"
    div.style.left = e.clientX + 'px'
    div.style.top = e.clientY + 'px'
    body.appendChild(div)


    function randomColor(){
        const hex = "0123456789ABCDEF";
        let color = "#";

        for(let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)]
        }
        console.log(color)
        div.style.backgroundColor = color
    }

    randomColor()

    /* ================ To cleare Div =================*/

//     setTimeout(() => {
//     div.remove()
// }, 1000)
}



/* ========When page load ========== */

window.addEventListener('load', () => {
    createRandomlyStar(50)
})


function createRandomlyStar(count){
    for(let i = 0; i <= count; i++) {
        const div = document.createElement('div')
        div.className  = 'star'

        div.style.left = Math.floor(Math.random() * window.innerWidth) + "px"
        div.style.top = Math.floor(Math.random() * window.innerHeight) + "px"
        body.appendChild(div)


        // ========== Random Color ========

         function randomColor(){
        const hex = "0123456789ABCDEF";
        let color = "#";

        for(let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * 16)]
        }
        console.log(color)
        div.style.backgroundColor = color
    }

    randomColor()
    }
}



