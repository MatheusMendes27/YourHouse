var icon = document.getElementById('id1')
var menu = document.getElementById('hidden-ul')
var menuli = document.querySelector('.hli')
var menuli1 = document.querySelector('.hli1')
var menuli2 = document.querySelector('.hli2')


icon.addEventListener('click', () => {

    if (menu.classList.contains('hide')) {
        menu.classList.add('show')
        menu.classList.remove('hide')

        menuli.classList.remove('hide-li')
        menuli1.classList.remove('hide-li')
        menuli2.classList.remove('hide-li')
    } else {
        menu.classList.add('hide')
        menu.classList.remove('show')

        menuli.classList.add('hide-li')
        menuli1.classList.add('hide-li')
        menuli2.classList.add('hide-li')
    }
})


var li = document.querySelector('.li')
var li1 = document.querySelector('.li1')

li.addEventListener('mouseover', hover)
li1.addEventListener('mouseover', hover1)


function hover() {
    li.classList.add('litop')
}

function hover1() {
    li1.classList.add('litop')
}


li.addEventListener('mouseout', out)
li1.addEventListener('mouseout', out1)


function out() {
    li.classList.remove('litop')
}

function out1() {
    li1.classList.remove('litop')
}




var burguer = document.querySelector('.hamburguer')
var list = document.querySelector('.main-ul ul')
var sublist = document.querySelector('.hidden-ul a')


burguer.addEventListener('click', () => {
    burguer.classList.toggle('active')
    list.classList.toggle('active')
    sublist.classList.toggle('active')

})


var burguer1 = document.querySelector('.hamburguer1')
var menulat = document.querySelector('.menu-lat')
burguer1.addEventListener('click', () => {
    burguer1.classList.toggle('active')
    menulat.classList.toggle('active')


})

var burguer2 = document.querySelector('.hamburguer2')
burguer2.addEventListener('click', () => {
    burguer2.classList.toggle('active')
    menulat.classList.remove('active')
    burguer2.classList.remove('active')

})