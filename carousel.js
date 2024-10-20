

$(document).ready(function () {
    $('.carousel').slick({
        infinite: true, // 무한 루프
        slidesToShow: 1, // 한 번에 보여줄 슬라이드 수
        slidesToScroll: 1, // 한 번에 이동할 슬라이드 수
        autoplay: true, // 자동 재생
        autoplaySpeed: 3000, // 자동 재생 속도 (3초)
        arrows: true, // 좌우 화살표 표시
        dots: true, // 페이지네이션 표시
        prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
        nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
    });
});

