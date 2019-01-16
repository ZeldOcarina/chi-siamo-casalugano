//DOM Animations
// Counter up effects

$('.counter-header').counterUp({
    delay: 40,
    time: 1300
});

setTimeout(function () {
    $('.counter-immobili-venduti').counterUp({
        delay: 10,
        offset: 100,
        time: 1500
    });
}, 1000);


$('.counter-promozioni').counterUp({
    delay: 10,
    time: 1000
});

// Bounce Effects

var waypoint = new Waypoint({
    element: document.getElementById('team'),
    handler: function (direction) {
        $(".team-word").effect("bounce", { times: 6 }, "slow");
    },
    offset: "50%"
});

var waypoint2 = new Waypoint({
    element: document.getElementById('commerciale'),
    handler: function (direction) {
        $(".commerciale-word").effect("bounce", { times: 6 }, "slow")
    },
    offset: "30%"
});

//Highlight effect on CTA

var waypoint3 = new Waypoint({
    element: document.getElementById('CTA'),
    handler: function (direction) {
        $(".contattaci-subito").effect("highlight");
        $(".contattaci-subito").effect("highlight");
    },
    offset: 400
});

// navbar JS

$(function () {
    $(document).scroll(function () {
        var $nav = $("#mainNavbar");
        $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
    });
});



