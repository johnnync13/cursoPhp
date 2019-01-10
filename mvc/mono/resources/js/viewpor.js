(function() {
    //viewportSize();
    mobileDetecting();
})();

/**
 *    viewport Size
 *        viewportSize
 */
function viewportSize() {
    var ventanaAncho = $(window).width();
    var ventanaAlto = $(window).height();

    var altoViewpor = ventanaAlto + 'px';
    var anchoViewpor = ventanaAncho + 'px';

    if (ventanaAncho <= 480) {
        console.log('movil :', ventanaAncho);

    } else if (ventanaAncho > 480 && ventanaAncho <= 768) {
        console.log('tabla :', ventanaAncho);

    } else if (ventanaAncho > 768) {
        console.log('desktop :', ventanaAncho);
    }
}

/**
 *    Info browser
 *        Dispocitivos moviles
 */
function mobileDetecting() {
    let bodyTag = document.getElementsByTagName("body")[0];

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        iPhone: function() {
            return navigator.userAgent.match(/iPhone|iPod/i);
        },
        ipad: function() {
            return navigator.userAgent.match(/iPad/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    // Es movil
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        bodyTag.classList.add('mobile');
    }

    // Es ios
    if (isMobile.iOS()) {
        bodyTag.classList.add('iOS');
    }

    // tipo de movil
    if (isMobile.Android()) {
        bodyTag.classList.add('Android');
    } else if (isMobile.BlackBerry()) {
        bodyTag.classList.add('BlackBerry');
    } else if (isMobile.ipad()) {
        bodyTag.classList.add('ipad');
    } else if (isMobile.iPhone()) {
        bodyTag.classList.add('iPhone');
    } else if (isMobile.Opera()) {
        bodyTag.classList.add('Opera');
    } else if (isMobile.Windows()) {
        bodyTag.classList.add('Windows');
    }

}

/**
 *  Llamados
 *
 ==============================================================================*/

/**
 * Init
 */
(function() {
    setTimeout(function() {
        //detectBrowser();
        //mobileDetecting();
        //viewportSize();
    }, 3000);

    if ($('body').is('.mobile')) {

    }
})();

/**
 * Scroll
 */
window.onscroll = function() {
    //detectBrowser();
    //mobileDetecting();
    //viewportSize();
}

/**
 * Resize
 */
window.addEventListener("resize", function() {
    //detectBrowser();
    //mobileDetecting();
    //viewportSize();
});

/**
 * load
 */
window.onload = function() {
    // my function loader
};