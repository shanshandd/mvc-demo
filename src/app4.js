import './app4.css'
let circle = document.querySelector('.circle');
circle.onmouseenter = () => {
    circle.classList.add('active')
}
circle.onmouseleave = () => {
    circle.classList.remove('active')
}
