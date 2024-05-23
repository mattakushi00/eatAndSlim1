import $ from 'jquery'
import 'slick-carousel'

const autoplay = {
    rows: 0,
    swipeToSlide: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    arrows: false,
    dots: false,
}

$('.result__list_1').slick(autoplay)
$('.result__list_2').slick(autoplay)

$('.lessons__list').slick({
    rows: 0,
    swipeToSlide: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 3,
    variableWidth: true,
    dots: true,
    arrows: true,
    responsive: [
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
            }
        }
    ]

})

$('.comments__list').slick({
    rows: 0,
    swipeToSlide: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 1,
    dots: true,
    prevArrow: $('.comments__arrow_prev'),
    nextArrow: $('.comments__arrow_next'),
})

$('.expert__list').slick({
    rows: 0,
    swipeToSlide: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 2,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
                dots: true,
                arrows: true,
            }
        }
    ]
})
