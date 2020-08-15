import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
// import {
//     menuScroll
// } from 'menu';


document.addEventListener("DOMContentLoaded", init);


function init() {
    menuScroll();
}


function menuScroll() {
    window.addEventListener('scroll', function () {
        let navHeight = window.pageYOffset;

        if (navHeight > 1) {
            document.querySelector('.header-scroll').classList.add('fixed-menu')
        } else {
            document.querySelector('.header-scroll').classList.remove('fixed-menu')
        }
    })
}