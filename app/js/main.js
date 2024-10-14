function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}


$('.question__body-block-list-item').each(function(index){
    $(this).on('click', function(){
        let num = index
        console.log(num)
        $(this).addClass('active')
        $('.question__body-block-list-item').not(this).removeClass('active')
        $('.question__body-block-answer-item').each(function(event, index){
            if ($(this).index() == num){
                $(this).removeClass('ds')
            }else{
                $(this).addClass('ds')
            }
        })
    })
})

document.querySelectorAll(".doc__body-block-item").forEach((el) => {
    el.addEventListener('click', ()=> {
        let cont = el.querySelector('.doc__body-block-item-bot');
        let con = cont.parentNode;
        if (cont.style.maxHeight) {
            document.querySelectorAll('.doc__body-block-item-bot').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.doc__body-block-item').forEach((el)=> el.classList.remove('open'))
        } else {
            document.querySelectorAll('.doc__body-block-item-bot').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.doc__body-block-item').forEach((el)=> el.classList.remove('open'))
            con.classList.add('open')
            cont.style.maxHeight = cont.scrollHeight + 'px';
        }
    })
})
document.querySelectorAll(".status__body-block-items-item-element").forEach((el) => {
    el.addEventListener('click', ()=> {
        let cont = el.querySelector('.status__body-block-items-item-element-bot');
        let con = cont.parentNode;
        if (cont.style.maxHeight) {
            document.querySelectorAll('.status__body-block-items-item-element-bot').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.status__body-block-items-item-element').forEach((el)=> el.classList.remove('open'))
        } else {
            document.querySelectorAll('.status__body-block-items-item-element-bot').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.status__body-block-items-item-element').forEach((el)=> el.classList.remove('open'))
            con.classList.add('open')
            cont.style.maxHeight = cont.scrollHeight + 'px';
        }
    })
})
document.querySelectorAll(".status__body-block-item-element").forEach((el) => {
    el.addEventListener('click', ()=> {
        let cont = el.querySelector('.status__body-block-item-element-bot');
        let con = cont.parentNode;
        if (cont.style.maxHeight) {
            document.querySelectorAll('.status__body-block-item-element-bot').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.status__body-block-item-element').forEach((el)=> el.classList.remove('open'))
        } else {
            document.querySelectorAll('.status__body-block-item-element-bot').forEach((el)=> el.style.maxHeight = null)
            document.querySelectorAll('.status__body-block-item-element').forEach((el)=> el.classList.remove('open'))
            con.classList.add('open')
            cont.style.maxHeight = cont.scrollHeight + 'px';
        }
    })
})
let Tr = false
    if ($('.header').hasClass('tr')){
        Tr = true
    }else{
        Tr = false
    }
$('.header__body-choose').on('click', function(e){
    $('.header__menu').toggleClass('active')
    
    if ($('.header').hasClass('tr') || Tr){
        $('.header').removeClass('tr')
    }else{
        $('.header').addClass('tr')
    }
    $(this).toggleClass('active')
})
    
$(window).on('scroll', function(e){
    let scroll = $(window).scrollTop()
    if (Tr){
        if (scroll >= 100){
            $('.header').removeClass('tr')
        }else{
            $('.header').addClass('tr')
        }
    }
})

var splide = new Splide( '#rev', {
    perPage: 1,
    rewind : true,
    pagination: false,
    type: 'loop'
  } );
  
  splide.mount();

  splide.on( 'active', function () {
    $('.of').text(`${splide.index + 1}/${splide.length}`)
  } );