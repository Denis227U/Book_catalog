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