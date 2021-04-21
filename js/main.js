const searchEl = document.querySelector('.search')
const searcInputhEl = document.querySelector('input')

searchEl.addEventListener('click', function(){
    searcInputhEl.focus();
});

searcInputhEl.addEventListener('focus', function(){
    searchEl.classList.add('focused');
    searcInputhEl.setAttribute('placeholder', '검색하시오')
});
searcInputhEl.addEventListener('blur', function(){
    searchEl.classList.remove('focused');
    searcInputhEl.setAttribute('placeholder', '')
});


const bedgeEl = document.querySelector('header .bedges');

window.addEventListener('scroll', _.throttle(function(){
    console.log(window.scrollY);
    if (window.scrollY > 500){
        // 배지숨기기
        // gsap(요소, 지속시간, 옵션)
        gsap.to(bedgeEl, .6, {
            opacity : 0,
            display : 'none'
        });
    } else {
        // 배지보이기
        gsap.to(bedgeEl, .6, {
            opacity : 1,
            display : 'block'
        });
    }
}, 300));



// * 순서대로 나타나는 기능
const fadeEls = document.querySelectorAll('.visual .fade-in')
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function(fadeEl, index){
    // 각 요소들을 순서대로(delay) 보여지게 함!
    gsap.to(fadeEl, 1, {
        delay : (index+1)*.7,
        opacity:1
    })
})

// * 슬라이드 요소 관리

new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
})
new Swiper('.promotion .swiper-container', {
    autoplay: {
        delay: 4000
    },
    loop: true,
    slidesPerView: 3,
    spaceBetween:10,
    centeredSlides: true,
    pagination:{
        el: '.promotion .swiper-pagination',
        clickable: true
    },
    navigation:{
        prevEl:'.promotion .swiper-prev',
        nextEl:'.promotion .swiper-next'
    }
    
})


const promotionEl = document.querySelector('.promotion')

const promotionToggleBtn = document.querySelector('.toggle-promotion')

let isHidePromotion = false

promotionToggleBtn.addEventListener('click', function(){
    isHidePromotion = !isHidePromotion
    if(isHidePromotion){
        promotionEl.classList.add('hide')
    } else{
        promotionEl.classList.remove('hide')
    }
})


function floatingObject(selector){
    gsap.to(selector, 1, {
        y: 20,
        repeat:-1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay:3
    });
}
floatingObject('.floating');