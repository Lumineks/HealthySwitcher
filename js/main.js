var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 60,
    slidesPerView: 2,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        700: {

        },

        768: {
            spaceBetween: 34,
            slidesPerView: 2,
        }
    }
})

const order_btn = document.querySelector('.intro__link');
let burger = document.querySelector('.header__burger');

burger.onclick = function () {
    (this).classList.toggle('active');
    document.querySelector('.header__nav').classList.toggle('active');
    document.querySelector('html').classList.toggle('lock');

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};

let links = document.querySelectorAll('.header__link');
for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        document.querySelector('.header__nav').classList.toggle('active');
        document.querySelector('.header__burger').classList.toggle('active');
        document.querySelector('html').classList.toggle('lock');
    };
}


window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

document.addEventListener('scroll', function () {
    if (window.scrollY > document.documentElement.clientHeight) {
        document.getElementById('scroll').classList.remove('hidden');
        document.querySelector('.header').classList.add('scrolled');
    } else {
        document.getElementById('scroll').classList.add('hidden');
        document.querySelector('.header').classList.remove('scrolled');
    }
});

document.getElementById('scroll').onclick = function () {

    document.querySelector('.intro').scrollIntoView({
        behavior: 'smooth'
    });

    document.getElementById('scroll').classList.add('hidden');
}


order_btn.onclick = function () {
    document.querySelector('#dishes').scrollIntoView({
        behavior: 'smooth'
    });
}


let modal = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],

    beforeClose: function () {
        return true;
        return false;
    }
});

modal.setContent('<button class="modal__close-btn"></button><div class="modal__title">Заказать</div><p class="modal__text">Введите, пожалуйста, ваш номер телефона.<br>Наш менеджер свяжется с вами в течении 1 минуты!</p><form class="modal__form"><input class="modal__input" type="text" placeholder="Введите номер телефона" required><textarea class="modal__textarea" placeholder="Введите комментарий к заказу"></textarea><button class="modal__btn">Подтвердить</button></form>');

let order = document.querySelectorAll('.modal-open');

for (let i = 0; i < order.length; i++) {
    order[i].onclick = function () {
        modal.open();
    };
}


document.querySelector('.modal__btn, .modal__close-btn').onclick = function () {
    modal.close();
};



$(".header__nav").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        top = $(id).offset().top;

    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
        scrollTop: top
    }, 1500);
});













$(function () {

    $(".rateYo").rateYo({
        // rating: 4.5,
        starWidth: "20px",
        spacing: "8px",
        readOnly: true,
        starSvg: '<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="19"><path fill-rule="evenodd" clip-rule="evenodd" d="M10 15.27L16.18 19L14.54 11.97L20 7.24L12.81 6.63L10 0L7.19 6.63L0 7.24L5.46 11.97L3.82 19L10 15.27Z" fill="white"/></mask><g mask="url(#mask0)"><rect x="-3" y="-3" width="26" height="26" stroke="#F9AD3D"/></g></svg>'
    });

});