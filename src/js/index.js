import jQuery from 'jquery';
import popper from 'popper.js';
import bootstrap from 'bootstrap';
import {
    menuScroll,
    menuBurger
} from "./models/menu.js";


document.addEventListener("DOMContentLoaded", init);


function init() {
    menuScroll();
    menuBurger();
}