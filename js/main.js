/*--------------------------------------------------------------
SCROLL TO TOP
--------------------------------------------------------------*/

var scrollToTopBtn = document.getElementById('scrollToTopBtn');

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
    });
}


/*--------------------------------------------------------------
ON SCROLL
--------------------------------------------------------------*/

window.onscroll = function windowOnScroll() {
    var currentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScrollTop < 20) {
        document.getElementById('scrollToTopBtn').classList.remove('show');
    } else {
        document.getElementById('scrollToTopBtn').classList.add('show');
    }
};