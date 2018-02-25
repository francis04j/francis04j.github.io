if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
        navigator.serviceWorker.register("/service-worker.js").then(function (registration) {
            console.log("ServiceWorker registration successful with scope: ", registration.scope);
        }, function (err) {
            console.log("ServiceWorker registration failed: ", err);
        });
    });
}

$(function () {
    $(".scrollto").on("click", function (e) {
        var target = this.hash;
        e.preventDefault();
        $("body").scrollTo(target, 800, { offset: -60, "axis": "y" });
    });

    $(window).on("scroll resize load", function () {
        $("nav").removeClass("navbar-fixed-top");
        $(".navbar-header, .navbar-right").addClass("hidden");

        var scrollTop = $(this).scrollTop();
        var topDistance = $("nav").offset().top;

        if (topDistance > scrollTop) {
            $("nav").removeClass("navbar-fixed-top");
            $(".navbar-header, .navbar-right").addClass("hidden");
        }
        else {
            $("nav").addClass("navbar-fixed-top");
            $(".navbar-header, .navbar-right").removeClass("hidden");
        }
    });

    $(".chart").easyPieChart({
        barColor: "#008CBA",
        trackColor: "#E8E8E8",
        scaleColor: false,
        lineWidth: 10
    });
});