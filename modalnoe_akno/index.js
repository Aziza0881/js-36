let openBtn = document.querySelector('.open')
let closeBtn = document.querySelector('.close')
let modal_w = document.querySelector('.bg-modal')

openBtn.onclick = () => {
    modal_w.style.display = "flex"
}

closeBtn.onclick = () => {
    modal_w.style.display = "none"
}





