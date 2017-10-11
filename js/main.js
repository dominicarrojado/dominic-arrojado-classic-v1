/*--------------------------------------------------------------
Dominic's function
--------------------------------------------------------------*/

var Dominic = {
    slideshowInterval: {},
    slideshow: function() {
        var self = this;
        var slideshows = document.getElementsByClassName('slideshow-dominic');

        if (slideshows.length === 0) return;

        for (var i = 0; i < slideshows.length; i++) {
            self.setSlideshowInterval(slideshows[i], i);
        }
    },
    setSlideshowInterval: function(slideshow, id) {
        var self = this;
        var current;

        setTimeout(function() {
            slideshow.firstElementChild.classList.add('active');

            self.slideshowInterval[id] = setInterval(function() {
                if (!slideshow || slideshow.childElementCount < 2) {
                    return clearInterval(self.slideshowInterval[id]);
                }

                current = slideshow.querySelector('.active');

                if (current && current.nextElementSibling) {
                    current.nextElementSibling.classList.add('active');
                } else {
                    slideshow.firstElementChild.classList.add('active');
                }

                current.classList.remove('active');
            }, 5000);
        }, 10);
    }
};

Dominic.slideshow();


/*--------------------------------------------------------------
Other functions
--------------------------------------------------------------*/

function showMobileSidebar() {
    document.getElementById('mobileSidebar').classList.add('show');
    document.body.classList.add('is-mobile-overlay-active');
}

function closeMobileSidebar() {
    document.getElementById('mobileSidebar').classList.remove('show');
    document.body.classList.remove('is-mobile-overlay-active');
}

function scrollToElement(elementId, hideSidebar) {
    if (hideSidebar) {
        closeMobileSidebar();
    }

    jQuery(window).scrollTo(document.getElementById(elementId), 1000);
}