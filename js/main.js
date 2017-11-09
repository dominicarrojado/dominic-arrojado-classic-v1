/*--------------------------------------------------------------
ON SCROLL
--------------------------------------------------------------*/

window.onscroll = function windowOnScroll() {
    var currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScrollTop < 100) {
        document.getElementById('scrollToTopBtn').classList.remove('show');
    } else {
        document.getElementById('scrollToTopBtn').classList.add('show');
    }
};


/*--------------------------------------------------------------
 JQUERY
--------------------------------------------------------------*/

$(function () {
    $('.scroll-to-href').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({ scrollTop: $(event.currentTarget.getAttribute('href')).offset().top }, 800);
    });

    $('[data-toggle="tooltip"]').tooltip();
});