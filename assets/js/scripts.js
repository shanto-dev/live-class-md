(function ($) {



    //skeleton loader
    $(window).on("load", function(){
        setTimeout(function(){
            $(".loading").addClass("off");
            setTimeout(function(){
                $(".loading").addClass("hide_element");
            }, 1000); 
        
        }, 1500);
    });

    // slider component
    $(".lv_auto_slider").slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        arrows: false,
        fade: true,
    });

    //hub countdown timer
    $(".hub_countdown").each(function () {
        var $data_date = $(this).data('date');
        $(this).countdown({
          date: $data_date
        });
    });




   
    // Image Lazy Load 
    document.addEventListener("DOMContentLoaded", function () {
        let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

        if ("IntersectionObserver" in window) {
            let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        let lazyImage = entry.target;
                        lazyImage.src = lazyImage.dataset.src;
                        lazyImage.classList.remove("lazy");
                        lazyImageObserver.unobserve(lazyImage);
                    }
                });
            });

            lazyImages.forEach(function (lazyImage) {
                lazyImageObserver.observe(lazyImage);
            });
        }
    });

    
    document.querySelectorAll('.stopwElement').forEach(function (element) {
        const fontSize = element.getAttribute('data-progress');
        element.style.setProperty('--lapTime', fontSize);
    });


})(jQuery)