
    $(function () {
        $(".nav-wrapper2").hide();
        $(window).scroll(function () {
            if ($(document).scrollTop() >= 200) {
                $(".nav-wrapper2").addClass("fixnav").slideDown();
            } else {
                $(".nav-wrapper2").hide();
            }
        })
    })
