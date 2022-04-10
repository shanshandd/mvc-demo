import $ from 'jquery'
console.log(localStorage.getItem('app1.num'))
let num = parseFloat(localStorage.getItem('app1.num') || 100);
$('.number').text(num)
let add = $('.add').get(0)
let min = $('.min').get(0)
let mul = $('.mul').get(0)
let div = $('.div').get(0)
add.onclick = () => {
    num += 1;
    $('.number').text(num)
    localStorage.setItem('app1.num', num)
}
min.onclick = () => {
    num -= 1;
    $('.number').text(num)
    localStorage.setItem('app1.num', num)
}
mul.onclick = () => {
    num *= 2;
    $('.number').text(num)
    localStorage.setItem('app1.num', num)
}
div.onclick = () => {
    num /= 2;
    $('.number').text(num)
    localStorage.setItem('app1.num', num)
}