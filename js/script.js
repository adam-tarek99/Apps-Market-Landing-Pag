let btnMobile = document.getElementById('btnMobile')
let navbar = document.getElementById('navbar')
let viewMobile = document.getElementById('viewMobile')

btnMobile.addEventListener('click', () => {
    navbar.classList.toggle('active')
    viewMobile.classList.toggle('active')
})

viewMobile.addEventListener('click', () => {
    navbar.classList.remove('active')
    viewMobile.classList.remove('active')
})


window.addEventListener('load', function () {
    document.querySelector('.loading').classList.add('hide')
})

window.onscroll = scrollHeader;
let header = document.getElementById('header');
let x = 0;

function scrollHeader() {
    if (window.pageYOffset > x) {
        header.classList.add('fixed-header')
    } else {
        header.classList.remove('fixed-header')
    }
}


//go to section 
let links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {

    link.addEventListener('click', function (e) {
        e.preventDefault();
        let attr = document.querySelector(this.getAttribute('href'));
        attr.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    })
})

//wow
let wow = document.querySelectorAll('.wow');
let i = 0
window.addEventListener('scroll', function () {
    for (i = 0; i < wow.length; i++){
        if (wow[i].getBoundingClientRect().top < window.innerHeight - 200) {
            wow[i].classList.add('show')
        } else {
            wow[i].classList.remove('show')
            
        }
    } 
})
