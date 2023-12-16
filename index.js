let button1 = document.querySelector('#NaturalTitanium')
let button2 = document.querySelector('#BlueTitanium')
let button3 = document.querySelector('#WhiteTitanium')
let button4 = document.querySelector('#BlackTitanium')

let img1 = document.querySelector('.img2')
let img3 = document.querySelector('.bb')







let openBtn = document.querySelector('.open')
let closeBtn = document.querySelector('.close')
let modal_w = document.querySelector('.bg-modal')

openBtn.onclick = () => {
    modal_w.style.display = "flex"
}

closeBtn.onclick = () => {
    modal_w.style.display = "none"
}

let tex = document.querySelector(".texp")
let tex2 = document.querySelector(".texp2")

let vniz = document.querySelector(".accordion1")
let verx = document.querySelector(".accordion")


vniz.onclick = () => {
    if(tex.style.display === "none") {
        tex.style.display = "flex"
    } else {
        tex.style.display = "none"
    }
}


verx.onclick = () => {
    if(tex2.style.display === "none") {
        tex2.style.display = "flex"
    } else {
        tex2.style.display = "none"
    }
}



