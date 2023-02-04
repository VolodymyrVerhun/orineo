
const caruselSlide = document.querySelector(".carusel-slide");
const caruselImage = document.querySelectorAll(".carusel-slide img");

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = caruselImage[0].clientWidth;

caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if (counter >= caruselImage.length - 1) return;
    caruselSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    caruselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

caruselSlide.addEventListener('transitionend', () => {
    if (caruselImage[counter].id === 'lastClone') {
        caruselSlide.style.transition = "none";
        counter = caruselImage.length - 2;
        caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    };
    if (caruselImage[counter].id === 'frstClone') {
        caruselSlide.style.transition = "none";
        counter = caruselImage.length - counter;
        caruselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

})