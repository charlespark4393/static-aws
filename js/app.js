$(document).ready(function () {
    
    const $DOM = {
        gallery: $(".landing__gallery"),
        confirmation: $(".landing__confirmation"),
        error: $(".landing__error"),
        form: $(".landing__form"),
        input: $(".landing__form input")
    }

    const Airtable = require("airtable");
    const base = new Airtable({ apiKey: "keynfL4W6P8lERxVt" }).base("app9FIQVZR7ExSHPl");

    $DOM.form.on("submit", e => {
        e.preventDefault();
        $DOM.form.fadeOut("fast", () => {
            const email = $DOM.input.val();
            base("Table 1").create({
                "Email": email
            }, (err, records) => {
                if (err) {
                    console.error(err);
                    $DOM.error.fadeIn("fast");
                    return;
                } else {
                    $DOM.confirmation.fadeIn("fast");
                }
            });
        });
    });

    $DOM.gallery.slick({
        mobileFirst: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        dots: false,
        arrows: false,
        swipe: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
    
});