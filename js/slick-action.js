var screenSize =  window.innerWidth; // Tamanho da janela
var numSlides = 0;
switch (true) {
    case (screenSize < 500):
        numSlides = 3;
        break;
    case (screenSize < 800):
        numSlides = 4;
        break;
    case (screenSize < 1100):
        numSlides = 5;
        break;
    case (screenSize < 1400):
        numSlides = 6;
        break;
    case (screenSize < 1700):
        numSlides = 7;
        break;
    default:
        numSlides = 8;
}
$('.autoplay').slick({
    slidesToShow: numSlides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});