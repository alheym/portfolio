const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      close = document.querySelector('.menu__close');

      hamburger.addEventListener('click', () => {
            menu.classList.add('active');
      });

      close.addEventListener('click', () => {
          menu.classList.remove('active');
      });

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});



$('.skills__item').each(function(i) {
    $(this).hover(function(e) {
        $('.skills__item__content').eq(i).toggleClass('skills__item__content_active');
        $('.skills__item__descr').eq(i).toggleClass('skills__item__descr_active');
    })
})


