// (function() {
//     const burger = document.querySelector('.burger-btn');
//     burger.addEventListener('click', () => {
//         burger.classList.toggle('burger_active');
//     });
// }());

$(document).ready(function () {
    $('.header-burger').click(function (event) {
        $('.header-burger,.header-menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});