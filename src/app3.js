import './app3.css'
import $ from 'jquery'
let $square = $('.square');
function init() {
    let flag = localStorage.getItem('app3.hasClass') === 'yes'
    console.log(flag)
    if (flag) {
        $square.addClass('run')
    }
}
init()
$square.on('click', () => {
    if ($square.hasClass('run')) {
        $square.removeClass('run')
        localStorage.setItem('app3.hasClass', 'no')
    } else {
        $square.addClass('run')
        localStorage.setItem('app3.hasClass', 'yes')
    }
})