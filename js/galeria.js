const images = document.querySelectorAll('img-galeria');
const slideShow = document.getElementById('slide-show');
const galleryContainer = document.getElementById('galeria');
const imgDisplayed = document.getElementById('img-display')
let currentSlide;




function openGallery(index) {
    slideShow.style.display='block';
    setTimeout(() => {
        galleryContainer.style.height='90vh';
    }, 500);
    gsap.to(slideShow, {opacity:1});
    currentSlide = index;
    display(currentSlide);
    galleryContainer.style.display = 'none';
}

function display(currentSlide) {
    let imgId = document.getElementById(currentSlide);
    let src = imgId.getAttribute('src');
    imgDisplayed.setAttribute('src', src);
}

function slider(i) {
    currentSlide += i;

    if (currentSlide == 10)
    {
        currentSlide = 1;
    } else if (currentSlide == 0)
    {
        currentSlide = 9;
    }

    display(currentSlide);
}


function closeGallery(e) {
    galleryContainer.style.height='auto';
    gsap.to(slideShow, {opacity:0});
    setTimeout(() => {
        slideShow.style.display='none';
    }, 500);
    galleryContainer.style.display = 'flex';
}

window.addEventListener('keydown', ()=> {
    if(event.keyCode == 27) {
        closeGallery();
    }
    if(event.keyCode == 37) {
        slider(-1);
    }
    if(event.keyCode == 39) {
        slider(1);
    }
})

document.getElementById('x').addEventListener('click', ()=> closeGallery())