import './app2.css'
import $ from 'jquery'
function init() {
    let i = parseInt(localStorage.getItem('app2.index')) || 0
    console.log(i)
    console.log($('.tab-bar').eq(i).attr('data-index'))
    $('.tab-bar').eq(i).addClass('selected').siblings().removeClass('selected')
    $('.tab-con').eq(i).addClass('active').siblings().removeClass('active')
}
init()
$('ol').on('click', 'li', function (e) {
    let index = $(e.currentTarget).attr('data-index')
    $('.tab-bar').eq(index).addClass('selected').siblings().removeClass('selected')
    $('.tab-con').eq(index).addClass('active').siblings().removeClass('active')
    localStorage.setItem('app2.index', index)
})