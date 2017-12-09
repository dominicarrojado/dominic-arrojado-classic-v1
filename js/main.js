/*--------------------------------------------------------------
FUNCTIONS
--------------------------------------------------------------*/

function viewAllWork() {
    document.getElementById('homeWork').classList.remove('collapsed');
    document.getElementById('btnViewAllWork').classList.add('d-none');
}

function scrollToHref(event) {
    event.preventDefault();

    var target = jQuery(event.currentTarget.getAttribute('href'));

    jQuery('html, body').animate({ scrollTop: target.length > 0 ? target.offset().top : 0 }, 800);
}


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

jQuery(function () {
    jQuery('[data-toggle="tooltip"]').tooltip();
});