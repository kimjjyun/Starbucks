const searchEl = document.querySelector('.search');
const searchInput = document.querySelector('.search input');
const searchIcon = document.querySelector('.search .material-icons');

searchEl.addEventListener('click', function(){
    searchInput.focus()
})

searchInput.addEventListener('focus', function(){
    searchIcon.classList.add('hide')
    searchInput.setAttribute('placeholder', '검색하시오')
    
})

searchInput.addEventListener('blur', function(){
    searchIcon.classList.remove('hide')
    searchInput.setAttribute('placeholder', '')
})

/**
 * 페이지 스크롤에 따른 요소 제어
 */
const badgeEl = document.querySelector('header .bedges')

window.addEventListener('scroll', _.throttle(function(){
    if (window.scrollY > 300) {
        gsap.to(badgeEl, .6, {
            opacity : 0,
            display : 'none'
        })
    } else{
        gsap.to(badgeEl, .6, {
            opacity : 1,
            display : 'block' 
        })
    }
}))

/**
 * 순서대로 나타나는 기능
 */
const fadeEls = document.querySelectorAll('.visual .fade-in')

fadeEls.forEach(function(fadeEl, index){
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * .7,
        opacity: 1
    })
})

/**
 * 슬라이드 요소 관리
 */

new Swiper('.notice-line .swiper-container', {
    direction:'vertical',
    autoplay: true,
    loop:true
})
new Swiper('.promotion .swiper-container', {
    autoplay:{
        delay:5000
    },
    loop:true,
    slidesPerView:3,
    spaceBetween: 10,
    centeredSlides: true,
    pagination:{
        el: '.promotion .swiper-pagination',
        clickable:true
    },
    navigation:{
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
})


/**
 * 부유하는 요소 관리
 */

function random(min, max){
    return parseFloat((Math.random()*(max-min)+min).toFixed(2))
}
// 부유하는(떠 다니는) 요소를 만드는 함수
function floatingObject(selector, delay, size){
    gsap.to(
        selector,
        random(1.5, 2.5),
        {
            delay: random(0, delay),
            y: size,
            repeat:-1,
            yoyo: true,
            ease: Power1.easeInOut
        }
    )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)