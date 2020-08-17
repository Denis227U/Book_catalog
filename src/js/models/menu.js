export function menuScroll() {
    window.addEventListener('scroll', function () {
        let navHeight = window.pageYOffset;

        if (navHeight > 1) {
            document.querySelector('.header-scroll').classList.add('fixed-menu')
        } else {
            document.querySelector('.header-scroll').classList.remove('fixed-menu')
        }
    })
}

export function menuBurger() {
    const burgerBtn = document.getElementById("burger-button");
    const menuWrp = document.querySelectorAll('.header-scroll .row>div')[2];
    const menu = document.querySelector('.menu');
    let isAnimation = false;

    function showMenu() {
        menu.classList.toggle('showMenu');
    }

    burgerBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (isAnimation) return;

        isAnimation = true;

        burgerBtn.classList.toggle("open");

        if (menuWrp.classList.contains('d-none')) {
            menuWrp.classList.remove('d-none');
            menu.classList.add('collapseMenu');
        } else {
            setTimeout(() => {
                menu.classList.remove('collapseMenu');
                menuWrp.classList.add('d-none');
            }, 400);
        }
        setTimeout(showMenu, 0);

        setTimeout(() => {
            isAnimation = false;
        }, 400);
    });
}