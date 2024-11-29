
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});
let counter = 0;
nextBtn.addEventListener("click", function () {
    counter++;
    carousel();
});

prevBtn.addEventListener("click", function () {
    counter--;
    carousel();
});

function carousel() {

    if (counter < slides.length - 1) {
        nextBtn.style.display = "block";
    } else {
        nextBtn.style.display = "none";
    }
    if (counter > 0) {
        prevBtn.style.display = "block";
    } else {
        prevBtn.style.display = "none";
    }
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });

}
prevBtn.style.display = "none";


// let n = 0;

// function changeSlide() {
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = 'none';
//     }
//     slides[n].style.display = 'block';
// }
// changeSlide();

// prevBtn.addEventListener('click', (e) => {
//     if (n > 0) {
//         n--;
//     }else {
//         n = slides.length - 1;
//     }
//     changeSlide();
// })

// nextBtn.addEventListener('click', (e) => {
//     if (n < slides.length - 1) {
//         n++;
//     }else {
//         n = 0;
//     }
//     changeSlide();
// })

