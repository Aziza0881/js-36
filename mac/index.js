let img_style = document.querySelector('.img')
let head = document.querySelector('.Macbook')
let color = document.querySelector('.White')
let price = document.querySelector('.style_h1')
let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')


let arr = [
    {
        img: './img/mbp14-spacegray-select-202110 1.png',
        name: 'Mackbook Pro',
        color: 'White',
        price: 1999
    },
    {
        img: './img/77eca8b2420bb1d5e95728168d6e6c92.jpg',
        name: 'Mackbook Pro',
        color: 'Space Grey',
        price: 1999
    }
]


btn1.onclick = () => {
    arr.forEach(element => {
        if (element.color == 'White') {
            img_style.src = element.img
            head.innerHTML = element.name
            color.innerHTML = element.color
            price.innerHTML = '$' + element.price
        }
    });
}


btn2.onclick = () => {
    arr.forEach(element => {
        if (element.color == 'Space Grey') {
            img_style.src = element.img
            head.innerHTML = element.name
            color.innerHTML = element.color
            price.innerHTML = '$' + element.price
        }
    });
}